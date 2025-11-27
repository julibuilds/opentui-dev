import { Renderable, type RenderableOptions } from "../Renderable"
import { convertGlobalToLocalSelection, Selection, type LocalSelectionBounds } from "../lib/selection"
import { TextBuffer, type TextChunk } from "../text-buffer"
import { TextBufferView } from "../text-buffer-view"
import { RGBA, parseColor } from "../lib/RGBA"
import { type RenderContext, type LineInfoProvider } from "../types"
import type { OptimizedBuffer } from "../buffer"
import { MeasureMode } from "yoga-layout"
import type { LineInfo } from "../zig"
import { SyntaxStyle } from "../syntax-style"

/**
 * Configuration options for {@link TextBufferRenderable}.
 *
 * @public
 */
export interface TextBufferOptions extends RenderableOptions<TextBufferRenderable> {
  /** Foreground (text) color. Accepts color string or RGBA instance. */
  fg?: string | RGBA
  /** Background color. Accepts color string or RGBA instance. */
  bg?: string | RGBA
  /** Background color for selected text. If undefined, uses default selection background. */
  selectionBg?: string | RGBA
  /** Foreground color for selected text. If undefined, uses default foreground. */
  selectionFg?: string | RGBA
  /** Whether this renderable can be selected with mouse or keyboard. @defaultValue true */
  selectable?: boolean
  /** Text attributes bitfield (bold, italic, underline, etc.). @defaultValue 0 */
  attributes?: number
  /** Text wrapping mode. @defaultValue "word" */
  wrapMode?: "none" | "char" | "word"
  /** Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab width. */
  tabIndicator?: string | number
  /** Color for tab indicator characters. */
  tabIndicatorColor?: string | RGBA
}

/**
 * Abstract base class for renderables that display read-only text using a TextBuffer.
 *
 * @remarks
 * TextBufferRenderable provides high-performance text rendering with support for:
 * - Text styling (colors, attributes like bold/italic/underline)
 * - Text selection
 * - Text wrapping (character, word, or none)
 * - Custom tab indicators
 * - Syntax highlighting through TextBuffer
 *
 * This is an abstract class that must be extended. Use {@link Text} for simple text display
 * or create custom text-based renderables by extending this class.
 *
 * @example
 * ```typescript
 * class MyTextDisplay extends TextBufferRenderable {
 *   constructor(ctx: RenderContext) {
 *     super(ctx, { fg: "white", bg: "black", wrapMode: "word" });
 *   }
 * }
 * ```
 *
 * @public
 */
export abstract class TextBufferRenderable extends Renderable implements LineInfoProvider {
  /** Whether this renderable can be selected. */
  public selectable: boolean = true

  /** Default foreground color for text. */
  protected _defaultFg: RGBA
  /** Default background color. */
  protected _defaultBg: RGBA
  /** Default text attributes bitfield. */
  protected _defaultAttributes: number
  /** Background color for selected text, or undefined for default. */
  protected _selectionBg: RGBA | undefined
  /** Foreground color for selected text, or undefined to inherit. */
  protected _selectionFg: RGBA | undefined
  /** Current text wrapping mode. */
  protected _wrapMode: "none" | "char" | "word" = "word"
  /** Cached local selection bounds from last selection change. */
  protected lastLocalSelection: LocalSelectionBounds | null = null
  /** Custom tab indicator (character or width). */
  protected _tabIndicator?: string | number
  /** Color for tab indicator. */
  protected _tabIndicatorColor?: RGBA

  /** The underlying text storage and styling system. */
  protected textBuffer: TextBuffer
  /** View layer that handles layout, wrapping, and viewport management. */
  protected textBufferView: TextBufferView
  /** Cached line layout information. */
  protected _lineInfo: LineInfo = {
    lineStarts: [],
    lineWidths: [],
    maxLineWidth: 0,
    lineSources: [],
    lineWraps: [],
  }

  protected _defaultOptions = {
    fg: RGBA.fromValues(1, 1, 1, 1),
    bg: RGBA.fromValues(0, 0, 0, 0),
    selectionBg: undefined,
    selectionFg: undefined,
    selectable: true,
    attributes: 0,
    wrapMode: "word" as "none" | "char" | "word",
    tabIndicator: undefined,
    tabIndicatorColor: undefined,
  } satisfies Partial<TextBufferOptions>

  constructor(ctx: RenderContext, options: TextBufferOptions) {
    super(ctx, options)

    this._defaultFg = parseColor(options.fg ?? this._defaultOptions.fg)
    this._defaultBg = parseColor(options.bg ?? this._defaultOptions.bg)
    this._defaultAttributes = options.attributes ?? this._defaultOptions.attributes
    this._selectionBg = options.selectionBg ? parseColor(options.selectionBg) : this._defaultOptions.selectionBg
    this._selectionFg = options.selectionFg ? parseColor(options.selectionFg) : this._defaultOptions.selectionFg
    this.selectable = options.selectable ?? this._defaultOptions.selectable
    this._wrapMode = options.wrapMode ?? this._defaultOptions.wrapMode
    this._tabIndicator = options.tabIndicator ?? this._defaultOptions.tabIndicator
    this._tabIndicatorColor = options.tabIndicatorColor
      ? parseColor(options.tabIndicatorColor)
      : this._defaultOptions.tabIndicatorColor

    this.textBuffer = TextBuffer.create(this._ctx.widthMethod)
    this.textBufferView = TextBufferView.create(this.textBuffer)

    const style = SyntaxStyle.create()
    this.textBuffer.setSyntaxStyle(style)

    this.textBufferView.setWrapMode(this._wrapMode)
    this.setupMeasureFunc()

    this.textBuffer.setDefaultFg(this._defaultFg)
    this.textBuffer.setDefaultBg(this._defaultBg)
    this.textBuffer.setDefaultAttributes(this._defaultAttributes)

    if (this._tabIndicator !== undefined) {
      this.textBufferView.setTabIndicator(this._tabIndicator)
    }
    if (this._tabIndicatorColor !== undefined) {
      this.textBufferView.setTabIndicatorColor(this._tabIndicatorColor)
    }

    if (this._wrapMode !== "none" && this.width > 0) {
      this.updateWrapWidth(this.width)
    }

    this.updateTextInfo()
  }

  /**
   * Line layout information for this text buffer.
   *
   * @remarks
   * Provides data about line starts, widths, and wrapping used by components like {@link LineNumberRenderable}.
   */
  public get lineInfo(): LineInfo {
    return this.textBufferView.logicalLineInfo
  }

  /**
   * Total number of logical lines in the buffer.
   *
   * @remarks
   * This is the count of newline-delimited lines, not visual lines after wrapping.
   */
  public get lineCount(): number {
    return this.textBuffer.getLineCount()
  }

  /**
   * Current vertical scroll offset.
   *
   * @remarks
   * TextBufferRenderable doesn't scroll by default (always returns 0).
   * Override in subclasses that support scrolling.
   */
  public get scrollY(): number {
    return 0
  }

  /**
   * The complete text content as a plain string without styling.
   */
  get plainText(): string {
    return this.textBuffer.getPlainText()
  }

  /**
   * Total character length of the text buffer.
   */
  get textLength(): number {
    return this.textBuffer.length
  }

  /**
   * Default foreground (text) color.
   */
  get fg(): RGBA {
    return this._defaultFg
  }

  set fg(value: RGBA | string | undefined) {
    const newColor = parseColor(value ?? this._defaultOptions.fg)
    if (this._defaultFg !== newColor) {
      this._defaultFg = newColor
      this.textBuffer.setDefaultFg(this._defaultFg)
      this.onFgChanged(newColor)
      this.requestRender()
    }
  }

  get selectionBg(): RGBA | undefined {
    return this._selectionBg
  }

  set selectionBg(value: RGBA | string | undefined) {
    const newColor = value ? parseColor(value) : this._defaultOptions.selectionBg
    if (this._selectionBg !== newColor) {
      this._selectionBg = newColor
      if (this.lastLocalSelection) {
        this.updateLocalSelection(this.lastLocalSelection)
      }
      this.requestRender()
    }
  }

  get selectionFg(): RGBA | undefined {
    return this._selectionFg
  }

  set selectionFg(value: RGBA | string | undefined) {
    const newColor = value ? parseColor(value) : this._defaultOptions.selectionFg
    if (this._selectionFg !== newColor) {
      this._selectionFg = newColor
      if (this.lastLocalSelection) {
        this.updateLocalSelection(this.lastLocalSelection)
      }
      this.requestRender()
    }
  }

  get bg(): RGBA {
    return this._defaultBg
  }

  set bg(value: RGBA | string | undefined) {
    const newColor = parseColor(value ?? this._defaultOptions.bg)
    if (this._defaultBg !== newColor) {
      this._defaultBg = newColor
      this.textBuffer.setDefaultBg(this._defaultBg)
      this.onBgChanged(newColor)
      this.requestRender()
    }
  }

  get attributes(): number {
    return this._defaultAttributes
  }

  set attributes(value: number) {
    if (this._defaultAttributes !== value) {
      this._defaultAttributes = value
      this.textBuffer.setDefaultAttributes(this._defaultAttributes)
      this.onAttributesChanged(value)
      this.requestRender()
    }
  }

  get wrapMode(): "none" | "char" | "word" {
    return this._wrapMode
  }

  set wrapMode(value: "none" | "char" | "word") {
    if (this._wrapMode !== value) {
      this._wrapMode = value
      this.textBufferView.setWrapMode(this._wrapMode)
      if (value !== "none" && this.width > 0) {
        this.updateWrapWidth(this.width)
      }
      // Changing wrap mode can change dimensions, so mark yoga node dirty to trigger re-measurement
      this.yogaNode.markDirty()
      this.requestRender()
    }
  }

  get tabIndicator(): string | number | undefined {
    return this._tabIndicator
  }

  set tabIndicator(value: string | number | undefined) {
    if (this._tabIndicator !== value) {
      this._tabIndicator = value
      if (value !== undefined) {
        this.textBufferView.setTabIndicator(value)
      }
      this.requestRender()
    }
  }

  get tabIndicatorColor(): RGBA | undefined {
    return this._tabIndicatorColor
  }

  set tabIndicatorColor(value: RGBA | string | undefined) {
    const newColor = value ? parseColor(value) : undefined
    if (this._tabIndicatorColor !== newColor) {
      this._tabIndicatorColor = newColor
      if (newColor !== undefined) {
        this.textBufferView.setTabIndicatorColor(newColor)
      }
      this.requestRender()
    }
  }

  protected onResize(width: number, height: number): void {
    // Update viewport size to match renderable dimensions
    this.textBufferView.setViewportSize(width, height)

    // Update wrap width if wrapping is enabled
    if (this._wrapMode !== "none" && width > 0) {
      this.updateWrapWidth(width)
    }

    if (this.lastLocalSelection) {
      const changed = this.updateLocalSelection(this.lastLocalSelection)
      if (changed) {
        this.requestRender()
      }
    }
  }

  protected refreshLocalSelection(): boolean {
    if (this.lastLocalSelection) {
      return this.updateLocalSelection(this.lastLocalSelection)
    }
    return false
  }

  private updateLocalSelection(localSelection: LocalSelectionBounds | null): boolean {
    if (!localSelection?.isActive) {
      this.textBufferView.resetLocalSelection()
      return true
    }

    return this.textBufferView.setLocalSelection(
      localSelection.anchorX,
      localSelection.anchorY,
      localSelection.focusX,
      localSelection.focusY,
      this._selectionBg,
      this._selectionFg,
    )
  }

  protected updateTextInfo(): void {
    if (this.lastLocalSelection) {
      this.updateLocalSelection(this.lastLocalSelection)
    }

    this.yogaNode.markDirty()
    this.requestRender()
  }

  private updateLineInfo(): void {
    const lineInfo = this.textBufferView.logicalLineInfo
    this._lineInfo.lineStarts = lineInfo.lineStarts
    this._lineInfo.lineWidths = lineInfo.lineWidths
    this._lineInfo.maxLineWidth = lineInfo.maxLineWidth
    this._lineInfo.lineSources = lineInfo.lineSources
    this._lineInfo.lineWraps = lineInfo.lineWraps
  }

  private updateWrapWidth(width: number): void {
    this.textBufferView.setWrapWidth(width)
    this.updateLineInfo()
  }

  // Undefined = 0,
  // Exactly = 1,
  // AtMost = 2
  private setupMeasureFunc(): void {
    const measureFunc = (
      width: number,
      widthMode: MeasureMode,
      height: number,
      heightMode: MeasureMode,
    ): { width: number; height: number } => {
      // Use a reasonable default for NaN/undefined height to allow measuring content
      // This happens when Yoga calls measure with height/widthMode="Undefined" (0)
      const effectiveWidth = isNaN(width) ? 1 : width
      const effectiveHeight = isNaN(height) ? 1 : height

      const measureResult = this.textBufferView.measureForDimensions(
        Math.floor(effectiveWidth),
        Math.floor(effectiveHeight),
      )

      const measuredWidth = measureResult ? Math.max(1, measureResult.maxWidth) : 1
      const measuredHeight = measureResult ? Math.max(1, measureResult.lineCount) : 1

      // TODO: still needed??
      this.updateLineInfo()

      if (widthMode === MeasureMode.AtMost && this._positionType !== "absolute") {
        return {
          width: Math.min(effectiveWidth, measuredWidth),
          height: Math.min(effectiveHeight, measuredHeight),
        }
      }

      // NOTE: Yoga may use these measurements or not.
      // If the yoga node settings and the parent allow this node to grow, it will.
      return {
        width: measuredWidth,
        height: measuredHeight,
      }
    }

    this.yogaNode.setMeasureFunc(measureFunc)
  }

  /**
   * Determines if a selection gesture should start at the given coordinates.
   *
   * @param x - Global X coordinate
   * @param y - Global Y coordinate
   * @returns `true` if the coordinates are within this renderable's bounds and it's selectable
   *
   * @internal
   */
  shouldStartSelection(x: number, y: number): boolean {
    if (!this.selectable) return false

    const localX = x - this.x
    const localY = y - this.y

    return localX >= 0 && localX < this.width && localY >= 0 && localY < this.height
  }

  /**
   * Handles selection changes from the global selection system.
   *
   * @param selection - The new global selection state, or null to clear
   * @returns `true` if this renderable has an active selection after the change
   *
   * @internal
   */
  onSelectionChanged(selection: Selection | null): boolean {
    const localSelection = convertGlobalToLocalSelection(selection, this.x, this.y)
    this.lastLocalSelection = localSelection

    const changed = this.updateLocalSelection(localSelection)

    if (changed) {
      this.requestRender()
    }

    return this.hasSelection()
  }

  /**
   * Gets the currently selected text as a plain string.
   *
   * @returns The selected text, or empty string if no selection
   */
  getSelectedText(): string {
    return this.textBufferView.getSelectedText()
  }

  /**
   * Checks if any text is currently selected.
   *
   * @returns `true` if there is an active selection
   */
  hasSelection(): boolean {
    return this.textBufferView.hasSelection()
  }

  /**
   * Gets the current selection range as character offsets.
   *
   * @returns Object with `start` and `end` offsets, or null if no selection
   */
  getSelection(): { start: number; end: number } | null {
    return this.textBufferView.getSelection()
  }

  render(buffer: OptimizedBuffer, deltaTime: number): void {
    if (!this.visible) return

    this.markClean()
    this._ctx.addToHitGrid(this.x, this.y, this.width, this.height, this.num)

    this.renderSelf(buffer)

    if (this.buffered && this.frameBuffer) {
      buffer.drawFrameBuffer(this.x, this.y, this.frameBuffer)
    }
  }

  protected renderSelf(buffer: OptimizedBuffer): void {
    if (this.textBuffer.ptr) {
      buffer.drawTextBuffer(this.textBufferView, this.x, this.y)
    }
  }

  destroy(): void {
    this.textBufferView.destroy()
    this.textBuffer.destroy()
    super.destroy()
  }

  protected onFgChanged(newColor: RGBA): void {
    // Override in subclasses if needed
  }

  protected onBgChanged(newColor: RGBA): void {
    // Override in subclasses if needed
  }

  protected onAttributesChanged(newAttributes: number): void {
    // Override in subclasses if needed
  }
}
