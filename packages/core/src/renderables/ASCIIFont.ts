import {
  getCharacterPositions,
  measureText,
  renderFontToFrameBuffer,
  type ASCIIFontName,
  type fonts,
} from "../lib/ascii.font"
import { parseColor, type ColorInput } from "../lib/RGBA"
import {
  ASCIIFontSelectionHelper,
  convertGlobalToLocalSelection,
  Selection,
  type LocalSelectionBounds,
} from "../lib/selection"
import type { RenderableOptions } from "../Renderable"
import type { RenderContext } from "../types"
import { FrameBufferRenderable, type FrameBufferOptions } from "./FrameBuffer"

/**
 * Configuration options for {@link ASCIIFontRenderable}.
 *
 * @public
 */
export interface ASCIIFontOptions extends Omit<RenderableOptions<ASCIIFontRenderable>, "width" | "height"> {
  /** The text to display. @defaultValue "" */
  text?: string
  /** The ASCII art font to use. @defaultValue "tiny" */
  font?: ASCIIFontName
  /**
   * Color(s) for the text.
   * @remarks
   * Can be a single color or an array of colors for gradient effects.
   */
  color?: ColorInput | ColorInput[]
  /** Background color. @defaultValue "transparent" */
  backgroundColor?: ColorInput
  /** Selection background color. */
  selectionBg?: ColorInput
  /** Selection foreground color. */
  selectionFg?: ColorInput
  /** Whether the text can be selected. @defaultValue true */
  selectable?: boolean
}

/**
 * A renderable that displays text using large ASCII art fonts.
 *
 * @remarks
 * ASCIIFontRenderable renders text in decorative ASCII art styles, perfect for:
 *
 * - Eye-catching titles and headers
 * - Logos and branding
 * - Visual emphasis in terminal UIs
 * - Retro/artistic text effects
 *
 * The renderable automatically sizes itself to fit the text, supports text selection,
 * and can use single colors or color gradients.
 *
 * Available fonts include: "tiny", "banner", "block", "doom", and many more.
 *
 * @example
 * Basic usage:
 * ```typescript
 * const title = new ASCIIFontRenderable(ctx, {
 *   text: "OpenTUI",
 *   font: "banner",
 *   color: "#00ff00"
 * });
 * ```
 *
 * @example
 * Gradient colors:
 * ```typescript
 * const rainbow = new ASCIIFontRenderable(ctx, {
 *   text: "Rainbow",
 *   font: "block",
 *   color: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]
 * });
 * ```
 *
 * @public
 */
export class ASCIIFontRenderable extends FrameBufferRenderable {
  /** Whether text can be selected. */
  public selectable: boolean = true

  /** Default configuration values. */
  protected static readonly _defaultOptions = {
    text: "",
    font: "tiny",
    color: "#FFFFFF",
    backgroundColor: "transparent",
    selectionBg: undefined,
    selectionFg: undefined,
    selectable: true,
  } satisfies Partial<ASCIIFontOptions>

  protected _text: string
  protected _font: keyof typeof fonts
  protected _color: ColorInput | ColorInput[]
  protected _backgroundColor: ColorInput
  protected _selectionBg: ColorInput | undefined
  protected _selectionFg: ColorInput | undefined
  /** Cached local selection bounds. */
  protected lastLocalSelection: LocalSelectionBounds | null = null

  /** Helper for managing character-based selection. */
  private selectionHelper: ASCIIFontSelectionHelper

  constructor(ctx: RenderContext, options: ASCIIFontOptions) {
    const defaultOptions = ASCIIFontRenderable._defaultOptions
    const font = options.font || defaultOptions.font
    const text = options.text || defaultOptions.text
    const measurements = measureText({ text: text, font })

    super(ctx, {
      flexShrink: 0,
      ...options,
      width: measurements.width || 1,
      height: measurements.height || 1,
      respectAlpha: true,
    } as FrameBufferOptions)

    this._text = text
    this._font = font
    this._color = options.color || defaultOptions.color
    this._backgroundColor = options.backgroundColor || defaultOptions.backgroundColor
    this._selectionBg = options.selectionBg ? parseColor(options.selectionBg) : undefined
    this._selectionFg = options.selectionFg ? parseColor(options.selectionFg) : undefined
    this.selectable = options.selectable ?? true

    this.selectionHelper = new ASCIIFontSelectionHelper(
      () => this._text,
      () => this._font,
    )

    this.renderFontToBuffer()
  }

  /**
   * The text to display.
   *
   * @remarks
   * Changing this updates the dimensions and re-renders the font.
   */
  get text(): string {
    return this._text
  }

  set text(value: string) {
    this._text = value
    this.updateDimensions()

    if (this.lastLocalSelection) {
      this.selectionHelper.onLocalSelectionChanged(this.lastLocalSelection, this.width, this.height)
    }

    this.renderFontToBuffer()
    this.requestRender()
  }

  /**
   * The ASCII art font name.
   *
   * @remarks
   * See {@link ASCIIFontName} for available fonts. Changing this updates dimensions and re-renders.
   */
  get font(): keyof typeof fonts {
    return this._font
  }

  set font(value: keyof typeof fonts) {
    this._font = value
    this.updateDimensions()

    if (this.lastLocalSelection) {
      this.selectionHelper.onLocalSelectionChanged(this.lastLocalSelection, this.width, this.height)
    }

    this.renderFontToBuffer()
    this.requestRender()
  }

  /**
   * Text color, either a single color or an array for gradients.
   */
  get color(): ColorInput | ColorInput[] {
    return this._color
  }

  set color(value: ColorInput | ColorInput[]) {
    this._color = value
    this.renderFontToBuffer()
    this.requestRender()
  }

  /** Background color for the renderable. */
  get backgroundColor(): ColorInput {
    return this._backgroundColor
  }

  set backgroundColor(value: ColorInput) {
    this._backgroundColor = value
    this.renderFontToBuffer()
    this.requestRender()
  }

  private updateDimensions(): void {
    const measurements = measureText({ text: this._text, font: this._font })
    this.width = measurements.width
    this.height = measurements.height
  }

  shouldStartSelection(x: number, y: number): boolean {
    const localX = x - this.x
    const localY = y - this.y
    return this.selectionHelper.shouldStartSelection(localX, localY, this.width, this.height)
  }

  onSelectionChanged(selection: Selection | null): boolean {
    const localSelection = convertGlobalToLocalSelection(selection, this.x, this.y)
    this.lastLocalSelection = localSelection
    const changed = this.selectionHelper.onLocalSelectionChanged(localSelection, this.width, this.height)
    if (changed) {
      this.renderFontToBuffer()
      this.requestRender()
    }
    return changed
  }

  getSelectedText(): string {
    const selection = this.selectionHelper.getSelection()
    if (!selection) return ""
    return this._text.slice(selection.start, selection.end)
  }

  hasSelection(): boolean {
    return this.selectionHelper.hasSelection()
  }

  protected onResize(width: number, height: number): void {
    super.onResize(width, height)
    this.renderFontToBuffer()
  }

  private renderFontToBuffer(): void {
    if (this.isDestroyed) return
    this.frameBuffer.clear(parseColor(this._backgroundColor))

    renderFontToFrameBuffer(this.frameBuffer, {
      text: this._text,
      x: 0,
      y: 0,
      color: this.color,
      backgroundColor: this._backgroundColor,
      font: this._font,
    })

    const selection = this.selectionHelper.getSelection()
    if (selection && (this._selectionBg || this._selectionFg)) {
      this.renderSelectionHighlight(selection)
    }
  }

  private renderSelectionHighlight(selection: { start: number; end: number }): void {
    if (!this._selectionBg && !this._selectionFg) return

    const selectedText = this._text.slice(selection.start, selection.end)
    if (!selectedText) return

    const positions = getCharacterPositions(this._text, this._font)
    const startX = positions[selection.start] || 0
    const endX =
      selection.end < positions.length
        ? positions[selection.end]
        : measureText({ text: this._text, font: this._font }).width

    if (this._selectionBg) {
      this.frameBuffer.fillRect(startX, 0, endX - startX, this.height, parseColor(this._selectionBg))
    }

    if (this._selectionFg || this._selectionBg) {
      renderFontToFrameBuffer(this.frameBuffer, {
        text: selectedText,
        x: startX,
        y: 0,
        color: this._selectionFg ? this._selectionFg : this._color,
        backgroundColor: this._selectionBg ? this._selectionBg : this._backgroundColor,
        font: this._font,
      })
    }
  }
}
