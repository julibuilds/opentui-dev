import { Renderable, type RenderableOptions } from "../Renderable"
import { OptimizedBuffer } from "../buffer"
import type { RenderContext, LineInfoProvider } from "../types"
import { RGBA, parseColor } from "../lib/RGBA"

/**
 * Configuration for decorative signs displayed next to line numbers.
 *
 * @remarks
 * Line signs can display custom indicators (like git status, breakpoints, diagnostics)
 * before or after the line number.
 *
 * @example
 * ```typescript
 * const errorSign: LineSign = {
 *   after: "●",
 *   afterColor: "#ff0000"
 * };
 * lineNumbers.setLineSign(42, errorSign);
 * ```
 *
 * @public
 */
export interface LineSign {
  /** Text to display before the line number (e.g., git status indicator). */
  before?: string
  /** Color for the 'before' text. */
  beforeColor?: string | RGBA
  /** Text to display after the line number (e.g., breakpoint, error marker). */
  after?: string
  /** Color for the 'after' text. */
  afterColor?: string | RGBA
}

/**
 * Configuration options for {@link LineNumberRenderable}.
 *
 * @public
 */
export interface LineNumberOptions extends RenderableOptions<LineNumberRenderable> {
  /** The target renderable to display line numbers for. Must implement LineInfoProvider. */
  target?: Renderable & LineInfoProvider
  /** Foreground color for line numbers. @defaultValue "#888888" */
  fg?: string | RGBA
  /** Background color for the gutter. @defaultValue "transparent" */
  bg?: string | RGBA
  /** Minimum width of the line number column in characters. @defaultValue 3 */
  minWidth?: number
  /** Right padding after line numbers. @defaultValue 1 */
  paddingRight?: number
  /** Map of line numbers to custom background colors for highlighting specific lines. */
  lineColors?: Map<number, string | RGBA>
  /** Map of line numbers to decorative signs (markers, icons). */
  lineSigns?: Map<number, LineSign>
}

class GutterRenderable extends Renderable {
  private target: Renderable & LineInfoProvider
  private _fg: RGBA
  private _bg: RGBA
  private _minWidth: number
  private _paddingRight: number
  private _lineColors: Map<number, RGBA>
  private _lineSigns: Map<number, LineSign>
  private _maxBeforeWidth: number = 0
  private _maxAfterWidth: number = 0

  constructor(
    ctx: RenderContext,
    target: Renderable & LineInfoProvider,
    options: {
      fg: RGBA
      bg: RGBA
      minWidth: number
      paddingRight: number
      lineColors: Map<number, RGBA>
      lineSigns: Map<number, LineSign>
      id?: string
      buffered?: boolean
    },
  ) {
    super(ctx, {
      id: options.id,
      width: "auto",
      height: "auto",
      flexGrow: 0,
      flexShrink: 0,
      buffered: options.buffered,
    })
    this.target = target
    this._fg = options.fg
    this._bg = options.bg
    this._minWidth = options.minWidth
    this._paddingRight = options.paddingRight
    this._lineColors = options.lineColors
    this._lineSigns = options.lineSigns
    this.calculateSignWidths()
    this.width = this.calculateWidth()
  }

  private calculateSignWidths(): void {
    this._maxBeforeWidth = 0
    this._maxAfterWidth = 0

    for (const sign of this._lineSigns.values()) {
      if (sign.before) {
        const width = Bun.stringWidth(sign.before)
        this._maxBeforeWidth = Math.max(this._maxBeforeWidth, width)
      }
      if (sign.after) {
        const width = Bun.stringWidth(sign.after)
        this._maxAfterWidth = Math.max(this._maxAfterWidth, width)
      }
    }
  }

  private calculateWidth(): number {
    const totalLines = this.target.lineCount
    const digits = totalLines > 0 ? Math.floor(Math.log10(totalLines)) + 1 : 1
    const baseWidth = Math.max(this._minWidth, digits + this._paddingRight + 1) // +1 for left padding
    return baseWidth + this._maxBeforeWidth + this._maxAfterWidth
  }

  public setLineColors(lineColors: Map<number, RGBA>): void {
    this._lineColors = lineColors
  }

  public getLineColors(): Map<number, RGBA> {
    return this._lineColors
  }

  public setLineSigns(lineSigns: Map<number, LineSign>): void {
    const oldMaxBefore = this._maxBeforeWidth
    const oldMaxAfter = this._maxAfterWidth

    this._lineSigns = lineSigns
    this.calculateSignWidths()

    // Only recalculate width if sign widths changed
    if (this._maxBeforeWidth !== oldMaxBefore || this._maxAfterWidth !== oldMaxAfter) {
      const newWidth = this.calculateWidth()
      if (this.width !== newWidth) {
        this.width = newWidth
      }
    }
  }

  public getLineSigns(): Map<number, LineSign> {
    return this._lineSigns
  }

  protected onUpdate(deltaTime: number): void {
    const newWidth = this.calculateWidth()

    if (this.width !== newWidth) {
      this.width = newWidth
    }
  }

  protected renderSelf(buffer: OptimizedBuffer): void {
    const startX = this.buffered ? 0 : this.x
    const startY = this.buffered ? 0 : this.y

    if (this.buffered) {
      buffer.clear(this._bg)
    } else if (this._bg.a > 0) {
      // Fill background if not buffered and opaque (if buffered, clear handles it)
      // Note: this.height might be determined by parent (flex stretch)
      buffer.fillRect(startX, startY, this.width, this.height, this._bg)
    }

    const lineInfo = this.target.lineInfo
    if (!lineInfo || !lineInfo.lineSources) return

    const sources = lineInfo.lineSources
    let lastSource = -1

    // lineSources contains the logical line index for each visual line
    // We start iterating from the scroll offset (first visible line)
    const startLine = this.target.scrollY

    // If scrolled past content (shouldn't happen normally but good to be safe)
    if (startLine >= sources.length) return

    // Get the logical line index of the line *before* the first visible line
    // This helps determine if the first visible line is a wrapped continuation
    lastSource = startLine > 0 ? sources[startLine - 1] : -1

    for (let i = 0; i < this.height; i++) {
      const visualLineIndex = startLine + i
      if (visualLineIndex >= sources.length) break

      const logicalLine = sources[visualLineIndex]
      const lineBg = this._lineColors.get(logicalLine) ?? this._bg

      // Fill background for this line if it has a custom color
      if (lineBg !== this._bg) {
        buffer.fillRect(startX, startY + i, this.width, 1, lineBg)
      }

      // Draw line number only for the first visual line of a logical line (wrapping)
      if (logicalLine === lastSource) {
        // Continuation line, maybe draw a dot or nothing
      } else {
        let currentX = startX

        // Draw 'before' sign if present
        const sign = this._lineSigns.get(logicalLine)
        if (sign?.before) {
          const beforeWidth = Bun.stringWidth(sign.before)
          // Pad to max before width for alignment
          const padding = this._maxBeforeWidth - beforeWidth
          currentX += padding
          const beforeColor = sign.beforeColor ? parseColor(sign.beforeColor) : this._fg
          buffer.drawText(sign.before, currentX, startY + i, beforeColor, lineBg)
          currentX += beforeWidth
        } else if (this._maxBeforeWidth > 0) {
          currentX += this._maxBeforeWidth
        }

        // Draw line number (right-aligned in its space)
        const lineNumStr = (logicalLine + 1).toString()
        const lineNumWidth = lineNumStr.length
        const availableSpace = this.width - this._maxBeforeWidth - this._maxAfterWidth - this._paddingRight
        const lineNumX = startX + this._maxBeforeWidth + availableSpace - lineNumWidth

        if (lineNumX >= startX) {
          buffer.drawText(lineNumStr, lineNumX, startY + i, this._fg, lineBg)
        }

        // Draw 'after' sign if present
        if (sign?.after) {
          const afterX = startX + this.width - this._paddingRight - this._maxAfterWidth
          const afterColor = sign.afterColor ? parseColor(sign.afterColor) : this._fg
          buffer.drawText(sign.after, afterX, startY + i, afterColor, lineBg)
        }
      }

      lastSource = logicalLine
    }
  }
}

/**
 * A renderable that displays line numbers in a gutter next to text content.
 *
 * @remarks
 * LineNumberRenderable wraps a target renderable (typically a {@link Code} or {@link EditBufferRenderable})
 * and displays line numbers alongside it. Features include:
 *
 * - Automatic width adjustment based on line count
 * - Custom line background colors for highlighting
 * - Line signs (decorative markers before/after line numbers)
 * - Full-width line background colors that extend into content area
 * - Automatic handling of wrapped lines (continuation lines don't show numbers)
 *
 * @example
 * ```typescript
 * const lineNumbers = new LineNumberRenderable(ctx, {
 *   fg: "#888888",
 *   bg: "#1e1e1e",
 *   minWidth: 4
 * });
 *
 * const code = new Code(ctx, {
 *   content: "function main() {\n  return 42;\n}",
 *   filetype: "typescript"
 * });
 *
 * lineNumbers.add(code); // Add code as target
 *
 * // Highlight line 2
 * lineNumbers.setLineColor(1, "#264f78");
 *
 * // Add error marker on line 2
 * lineNumbers.setLineSign(1, {
 *   after: "●",
 *   afterColor: "#ff0000"
 * });
 * ```
 *
 * @public
 */
export class LineNumberRenderable extends Renderable {
  /** Internal gutter component that renders the line numbers. */
  private gutter: GutterRenderable | null = null
  /** The target renderable being decorated with line numbers. */
  private target: (Renderable & LineInfoProvider) | null = null
  /** Map of line indices to background colors. */
  private _lineColors: Map<number, RGBA>
  /** Map of line indices to decorative signs. */
  private _lineSigns: Map<number, LineSign>
  /** Foreground color for line numbers. */
  private _fg: RGBA
  /** Background color for gutter. */
  private _bg: RGBA
  /** Minimum width in characters. */
  private _minWidth: number
  /** Right padding in characters. */
  private _paddingRight: number
  private _isDestroying: boolean = false

  constructor(ctx: RenderContext, options: LineNumberOptions) {
    super(ctx, {
      ...options,
      flexDirection: "row",
      alignItems: "stretch",
    })

    this._fg = parseColor(options.fg ?? "#888888")
    this._bg = parseColor(options.bg ?? "transparent")
    this._minWidth = options.minWidth ?? 3
    this._paddingRight = options.paddingRight ?? 1

    this._lineColors = new Map<number, RGBA>()
    if (options.lineColors) {
      for (const [line, color] of options.lineColors) {
        this._lineColors.set(line, parseColor(color))
      }
    }

    this._lineSigns = new Map<number, LineSign>()
    if (options.lineSigns) {
      for (const [line, sign] of options.lineSigns) {
        this._lineSigns.set(line, sign)
      }
    }

    // If target is provided in constructor, set it up immediately
    if (options.target) {
      this.setTarget(options.target)
    }
  }

  private setTarget(target: Renderable & LineInfoProvider): void {
    if (this.target === target) return

    if (this.target) {
      super.remove(this.target.id)
    }

    if (this.gutter) {
      super.remove(this.gutter.id)
      this.gutter = null
    }

    this.target = target

    this.gutter = new GutterRenderable(this.ctx, this.target, {
      fg: this._fg,
      bg: this._bg,
      minWidth: this._minWidth,
      paddingRight: this._paddingRight,
      lineColors: this._lineColors,
      lineSigns: this._lineSigns,
      id: this.id ? `${this.id}-gutter` : undefined,
      buffered: true,
    })

    super.add(this.gutter)
    super.add(this.target)
  }

  // Override add to intercept and set as target if it's a LineInfoProvider
  public override add(child: Renderable): number {
    // If this is a LineInfoProvider and we don't have a target yet, set it
    if (!this.target && "lineInfo" in child && "lineCount" in child && "scrollY" in child) {
      this.setTarget(child as Renderable & LineInfoProvider)
      return this.getChildrenCount() - 1
    }
    // Otherwise ignore - SolidJS may try to add layout slots or other helpers
    return -1
  }

  // Override remove to prevent removing gutter/target directly
  public override remove(id: string): void {
    if (this._isDestroying) {
      super.remove(id)
      return
    }

    if (this.gutter && id === this.gutter.id) {
      throw new Error("LineNumberRenderable: Cannot remove gutter directly.")
    }
    if (this.target && id === this.target.id) {
      throw new Error("LineNumberRenderable: Cannot remove target directly. Use clearTarget() instead.")
    }
    super.remove(id)
  }

  // Override destroyRecursively to properly clean up internal components
  public override destroyRecursively(): void {
    this._isDestroying = true

    super.destroyRecursively()

    this.gutter = null
    this.target = null
  }

  public clearTarget(): void {
    if (this.target) {
      super.remove(this.target.id)
      this.target = null
    }
    if (this.gutter) {
      super.remove(this.gutter.id)
      this.gutter = null
    }
  }

  protected renderSelf(buffer: OptimizedBuffer): void {
    // Draw full-width line backgrounds before children render
    if (!this.target || !this.gutter) return

    const lineInfo = this.target.lineInfo
    if (!lineInfo || !lineInfo.lineSources) return

    const sources = lineInfo.lineSources
    const startLine = this.target.scrollY

    if (startLine >= sources.length) return

    // Calculate the area to fill: from after the gutter (if visible) to the end of our width
    const gutterWidth = this.gutter.visible ? this.gutter.width : 0
    const contentWidth = this.width - gutterWidth

    // Draw full-width background colors for lines with custom colors
    for (let i = 0; i < this.height; i++) {
      const visualLineIndex = startLine + i
      if (visualLineIndex >= sources.length) break

      const logicalLine = sources[visualLineIndex]
      const lineBg = this._lineColors.get(logicalLine)

      if (lineBg) {
        // Fill from after gutter to the end of the LineNumberRenderable
        buffer.fillRect(this.x + gutterWidth, this.y + i, contentWidth, 1, lineBg)
      }
    }
  }

  /**
   * Controls visibility of line numbers.
   *
   * @remarks
   * When set to false, only the target content is shown.
   */
  public set showLineNumbers(value: boolean) {
    if (this.gutter) {
      this.gutter.visible = value
    }
  }

  /** Gets whether line numbers are currently visible. */
  public get showLineNumbers(): boolean {
    return this.gutter?.visible ?? false
  }

  /**
   * Sets a background color for a specific line (0-indexed).
   *
   * @param line - The line index (0-based)
   * @param color - The background color to apply
   *
   * @remarks
   * The background color extends across the full width of the LineNumberRenderable,
   * including both the gutter and content areas.
   */
  public setLineColor(line: number, color: string | RGBA): void {
    const parsedColor = parseColor(color)
    this._lineColors.set(line, parsedColor)
  }

  /**
   * Removes the background color from a specific line.
   *
   * @param line - The line index (0-based)
   */
  public clearLineColor(line: number): void {
    this._lineColors.delete(line)
  }

  /** Clears all custom line background colors. */
  public clearAllLineColors(): void {
    this._lineColors.clear()
  }

  /**
   * Sets multiple line colors at once, replacing existing ones.
   *
   * @param lineColors - Map of line indices to colors
   */
  public setLineColors(lineColors: Map<number, string | RGBA>): void {
    this._lineColors.clear()
    for (const [line, color] of lineColors) {
      this._lineColors.set(line, parseColor(color))
    }
  }

  /** Gets the current map of line colors. */
  public getLineColors(): Map<number, RGBA> {
    return this._lineColors
  }

  /**
   * Sets a decorative sign for a specific line.
   *
   * @param line - The line index (0-based)
   * @param sign - The sign configuration
   *
   * @example
   * ```typescript
   * // Add a breakpoint indicator
   * lineNumbers.setLineSign(10, {
   *   before: "●",
   *   beforeColor: "#ff0000"
   * });
   * ```
   */
  public setLineSign(line: number, sign: LineSign): void {
    this._lineSigns.set(line, sign)
    if (this.gutter) {
      this.gutter.setLineSigns(this._lineSigns)
    }
  }

  /**
   * Removes the sign from a specific line.
   *
   * @param line - The line index (0-based)
   */
  public clearLineSign(line: number): void {
    this._lineSigns.delete(line)
    if (this.gutter) {
      this.gutter.setLineSigns(this._lineSigns)
    }
  }

  /** Clears all line signs. */
  public clearAllLineSigns(): void {
    this._lineSigns.clear()
    if (this.gutter) {
      this.gutter.setLineSigns(this._lineSigns)
    }
  }

  /**
   * Sets multiple line signs at once, replacing existing ones.
   *
   * @param lineSigns - Map of line indices to signs
   */
  public setLineSigns(lineSigns: Map<number, LineSign>): void {
    this._lineSigns.clear()
    for (const [line, sign] of lineSigns) {
      this._lineSigns.set(line, sign)
    }
    if (this.gutter) {
      this.gutter.setLineSigns(this._lineSigns)
    }
  }

  /** Gets the current map of line signs. */
  public getLineSigns(): Map<number, LineSign> {
    return this._lineSigns
  }
}
