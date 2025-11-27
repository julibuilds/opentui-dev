import type { TextBuffer } from "./text-buffer"
import { RGBA } from "./lib"
import { resolveRenderLib, type RenderLib } from "./zig"
import { type Pointer, toArrayBuffer } from "bun:ffi"
import { type BorderStyle, type BorderSides, BorderCharArrays } from "./lib"
import { type WidthMethod } from "./types"
import type { TextBufferView } from "./text-buffer-view"
import type { EditorView } from "./editor-view"

// Pack drawing options into a single u32
// bits 0-3: borderSides, bit 4: shouldFill, bits 5-6: titleAlignment
function packDrawOptions(
  border: boolean | BorderSides[],
  shouldFill: boolean,
  titleAlignment: "left" | "center" | "right",
): number {
  let packed = 0

  if (border === true) {
    packed |= 0b1111 // All sides
  } else if (Array.isArray(border)) {
    if (border.includes("top")) packed |= 0b1000
    if (border.includes("right")) packed |= 0b0100
    if (border.includes("bottom")) packed |= 0b0010
    if (border.includes("left")) packed |= 0b0001
  }

  if (shouldFill) {
    packed |= 1 << 4
  }

  const alignmentMap: Record<string, number> = {
    left: 0,
    center: 1,
    right: 2,
  }
  const alignment = alignmentMap[titleAlignment]
  packed |= alignment << 5

  return packed
}

/**
 * High-performance cell-based drawing buffer for terminal rendering.
 * This is the primary API for drawing text, colors, and UI elements to the terminal.
 *
 * @remarks
 * OptimizedBuffer is the low-level drawing API used by all renderables. It provides:
 * - **Cell-Based Rendering**: Each cell contains a character, foreground/background color, and text attributes
 * - **Native Performance**: Backed by a native Zig implementation for speed
 * - **Scissor Rects**: Clipping regions for efficient partial updates
 * - **Alpha Blending**: Optional transparency support
 * - **Text Rendering**: Unicode text with selection highlighting
 * - **Box Drawing**: Borders with various styles
 * - **Frame Buffers**: Offscreen rendering support
 *
 * @example
 * ```ts
 * // Drawing text
 * buffer.drawText(
 *   5, 10,  // x, y position
 *   "Hello, World!",
 *   RGBA.white(),  // foreground color
 *   RGBA.black()   // background color
 * )
 *
 * // Drawing a box with border
 * buffer.drawBox({
 *   x: 0, y: 0,
 *   width: 40, height: 10,
 *   border: ["top", "bottom", "left", "right"],
 *   borderStyle: "rounded",
 *   borderColor: RGBA.blue(),
 *   backgroundColor: RGBA.black(),
 *   title: "My Box"
 * })
 *
 * // Fill a region
 * buffer.fillRect(10, 5, 20, 3, RGBA.red())
 * ```
 *
 * @public
 */
export class OptimizedBuffer {
  private static fbIdCounter = 0
  /** Unique identifier for this buffer */
  public id: string
  /** Reference to the native rendering library */
  public lib: RenderLib
  private bufferPtr: Pointer
  private _width: number
  private _height: number
  private _widthMethod: WidthMethod
  /** Whether to respect alpha channel for transparency */
  public respectAlpha: boolean = false
  private _rawBuffers: {
    char: Uint32Array
    fg: Float32Array
    bg: Float32Array
    attributes: Uint8Array
  } | null = null
  private _destroyed: boolean = false

  get ptr(): Pointer {
    return this.bufferPtr
  }

  // Fail loud and clear
  // Instead of trying to return values that could work or not,
  // this at least will show a stack trace to know where the call to a destroyed Buffer was made
  private guard(): void {
    if (this._destroyed) throw new Error(`Buffer ${this.id} is destroyed`)
  }

  get buffers(): {
    char: Uint32Array
    fg: Float32Array
    bg: Float32Array
    attributes: Uint8Array
  } {
    this.guard()
    if (this._rawBuffers === null) {
      const size = this._width * this._height
      const charPtr = this.lib.bufferGetCharPtr(this.bufferPtr)
      const fgPtr = this.lib.bufferGetFgPtr(this.bufferPtr)
      const bgPtr = this.lib.bufferGetBgPtr(this.bufferPtr)
      const attributesPtr = this.lib.bufferGetAttributesPtr(this.bufferPtr)

      this._rawBuffers = {
        char: new Uint32Array(toArrayBuffer(charPtr, 0, size * 4)),
        fg: new Float32Array(toArrayBuffer(fgPtr, 0, size * 4 * 4)),
        bg: new Float32Array(toArrayBuffer(bgPtr, 0, size * 4 * 4)),
        attributes: new Uint8Array(toArrayBuffer(attributesPtr, 0, size)),
      }
    }

    return this._rawBuffers
  }

  constructor(
    lib: RenderLib,
    ptr: Pointer,
    width: number,
    height: number,
    options: { respectAlpha?: boolean; id?: string; widthMethod?: WidthMethod },
  ) {
    this.id = options.id || `fb_${OptimizedBuffer.fbIdCounter++}`
    this.lib = lib
    this.respectAlpha = options.respectAlpha || false
    this._width = width
    this._height = height
    this._widthMethod = options.widthMethod || "unicode"
    this.bufferPtr = ptr
  }

  /**
   * Creates a new OptimizedBuffer with the specified dimensions.
   *
   * @param width - Width of the buffer in cells
   * @param height - Height of the buffer in cells
   * @param widthMethod - Character width calculation method ("unicode" or "terminal")
   * @param options - Optional configuration
   * @param options.respectAlpha - Whether to enable alpha blending (default: false)
   * @param options.id - Optional identifier for debugging
   * @returns A new OptimizedBuffer instance
   *
   * @example
   * ```ts
   * // Create a standard buffer
   * const buffer = OptimizedBuffer.create(80, 24, "unicode")
   *
   * // Create a buffer with alpha blending
   * const overlay = OptimizedBuffer.create(40, 10, "unicode", {
   *   respectAlpha: true,
   *   id: "overlay-buffer"
   * })
   * ```
   *
   * @public
   */
  static create(
    width: number,
    height: number,
    widthMethod: WidthMethod,
    options: { respectAlpha?: boolean; id?: string } = {},
  ): OptimizedBuffer {
    const lib = resolveRenderLib()
    const respectAlpha = options.respectAlpha || false
    const id = options.id && options.id.trim() !== "" ? options.id : "unnamed buffer"
    const buffer = lib.createOptimizedBuffer(width, height, widthMethod, respectAlpha, id)
    return buffer
  }

  public get widthMethod(): WidthMethod {
    return this._widthMethod
  }

  public get width(): number {
    return this._width
  }

  public get height(): number {
    return this._height
  }

  public setRespectAlpha(respectAlpha: boolean): void {
    this.guard()
    this.lib.bufferSetRespectAlpha(this.bufferPtr, respectAlpha)
    this.respectAlpha = respectAlpha
  }

  public getNativeId(): string {
    this.guard()
    return this.lib.bufferGetId(this.bufferPtr)
  }

  public getRealCharBytes(addLineBreaks: boolean = false): Uint8Array {
    this.guard()
    const realSize = this.lib.bufferGetRealCharSize(this.bufferPtr)
    const outputBuffer = new Uint8Array(realSize)
    const bytesWritten = this.lib.bufferWriteResolvedChars(this.bufferPtr, outputBuffer, addLineBreaks)
    return outputBuffer.slice(0, bytesWritten)
  }

  /**
   * Clears the entire buffer, filling it with the specified background color.
   *
   * @param bg - Background color to fill (default: opaque black)
   *
   * @example
   * ```ts
   * // Clear to black
   * buffer.clear()
   *
   * // Clear to blue
   * buffer.clear(RGBA.blue())
   * ```
   *
   * @public
   */
  public clear(bg: RGBA = RGBA.fromValues(0, 0, 0, 1)): void {
    this.guard()
    this.lib.bufferClear(this.bufferPtr, bg)
  }

  /**
   * Sets a single cell at the specified position.
   *
   * @param x - X coordinate (column)
   * @param y - Y coordinate (row)
   * @param char - Character to draw (single character or emoji)
   * @param fg - Foreground (text) color
   * @param bg - Background color
   * @param attributes - Text attributes (bold, italic, etc.) - see {@link TextAttributes}
   *
   * @example
   * ```ts
   * // Draw a red 'X' on white background
   * buffer.setCell(10, 5, 'X', RGBA.red(), RGBA.white())
   *
   * // Draw bold text
   * buffer.setCell(10, 5, 'B', RGBA.white(), RGBA.black(), TextAttributes.BOLD)
   * ```
   *
   * @public
   */
  public setCell(x: number, y: number, char: string, fg: RGBA, bg: RGBA, attributes: number = 0): void {
    this.guard()
    this.lib.bufferSetCell(this.bufferPtr, x, y, char, fg, bg, attributes)
  }

  /**
   * Sets a single cell with alpha blending enabled.
   * Use this when you need transparency effects.
   *
   * @param x - X coordinate (column)
   * @param y - Y coordinate (row)
   * @param char - Character to draw
   * @param fg - Foreground color (with alpha)
   * @param bg - Background color (with alpha)
   * @param attributes - Text attributes
   *
   * @public
   */
  public setCellWithAlphaBlending(
    x: number,
    y: number,
    char: string,
    fg: RGBA,
    bg: RGBA,
    attributes: number = 0,
  ): void {
    this.guard()
    this.lib.bufferSetCellWithAlphaBlending(this.bufferPtr, x, y, char, fg, bg, attributes)
  }

  /**
   * Draws a string of text at the specified position.
   * Supports Unicode, emojis, and optional text selection highlighting.
   *
   * @param text - Text string to draw
   * @param x - Starting X coordinate (column)
   * @param y - Y coordinate (row)
   * @param fg - Foreground (text) color
   * @param bg - Background color (optional)
   * @param attributes - Text attributes (bold, italic, etc.)
   * @param selection - Optional selection range with highlighting colors
   *
   * @example
   * ```ts
   * // Draw simple text
   * buffer.drawText("Hello, World!", 5, 10, RGBA.white(), RGBA.black())
   *
   * // Draw text with selection (characters 0-5 highlighted)
   * buffer.drawText("Selected text", 5, 10, RGBA.white(), RGBA.black(), 0, {
   *   start: 0,
   *   end: 5,
   *   bgColor: RGBA.blue(),
   *   fgColor: RGBA.white()
   * })
   * ```
   *
   * @public
   */
  public drawText(
    text: string,
    x: number,
    y: number,
    fg: RGBA,
    bg?: RGBA,
    attributes: number = 0,
    selection?: { start: number; end: number; bgColor?: RGBA; fgColor?: RGBA } | null,
  ): void {
    this.guard()
    if (!selection) {
      this.lib.bufferDrawText(this.bufferPtr, text, x, y, fg, bg, attributes)
      return
    }

    const { start, end } = selection

    let selectionBg: RGBA
    let selectionFg: RGBA

    if (selection.bgColor) {
      selectionBg = selection.bgColor
      selectionFg = selection.fgColor || fg
    } else {
      const defaultBg = bg || RGBA.fromValues(0, 0, 0, 0)
      selectionFg = defaultBg.a > 0 ? defaultBg : RGBA.fromValues(0, 0, 0, 1)
      selectionBg = fg
    }

    if (start > 0) {
      const beforeText = text.slice(0, start)
      this.lib.bufferDrawText(this.bufferPtr, beforeText, x, y, fg, bg, attributes)
    }

    if (end > start) {
      const selectedText = text.slice(start, end)
      this.lib.bufferDrawText(this.bufferPtr, selectedText, x + start, y, selectionFg, selectionBg, attributes)
    }

    if (end < text.length) {
      const afterText = text.slice(end)
      this.lib.bufferDrawText(this.bufferPtr, afterText, x + end, y, fg, bg, attributes)
    }
  }

  /**
   * Fills a rectangular region with a solid background color.
   *
   * @param x - Starting X coordinate
   * @param y - Starting Y coordinate
   * @param width - Width of the rectangle
   * @param height - Height of the rectangle
   * @param bg - Background color to fill
   *
   * @example
   * ```ts
   * // Fill a 20x5 rectangle with red
   * buffer.fillRect(10, 5, 20, 5, RGBA.red())
   * ```
   *
   * @public
   */
  public fillRect(x: number, y: number, width: number, height: number, bg: RGBA): void {
    this.lib.bufferFillRect(this.bufferPtr, x, y, width, height, bg)
  }

  /**
   * Draws another buffer onto this buffer at the specified position.
   * Useful for compositing offscreen buffers or implementing layers.
   *
   * @param destX - Destination X coordinate
   * @param destY - Destination Y coordinate
   * @param frameBuffer - Source buffer to draw
   * @param sourceX - Source X coordinate (optional)
   * @param sourceY - Source Y coordinate (optional)
   * @param sourceWidth - Source width (optional)
   * @param sourceHeight - Source height (optional)
   *
   * @example
   * ```ts
   * // Draw entire offscreen buffer onto main buffer
   * mainBuffer.drawFrameBuffer(10, 5, offscreenBuffer)
   *
   * // Draw partial region from source buffer
   * mainBuffer.drawFrameBuffer(10, 5, sourceBuffer, 0, 0, 40, 20)
   * ```
   *
   * @public
   */
  public drawFrameBuffer(
    destX: number,
    destY: number,
    frameBuffer: OptimizedBuffer,
    sourceX?: number,
    sourceY?: number,
    sourceWidth?: number,
    sourceHeight?: number,
  ): void {
    this.guard()
    this.lib.drawFrameBuffer(this.bufferPtr, destX, destY, frameBuffer.ptr, sourceX, sourceY, sourceWidth, sourceHeight)
  }

  /**
   * Destroys the buffer and frees its native resources.
   * The buffer should not be used after calling this method.
   *
   * @public
   */
  public destroy(): void {
    if (this._destroyed) return
    this._destroyed = true
    this.lib.destroyOptimizedBuffer(this.bufferPtr)
  }

  public drawTextBuffer(textBufferView: TextBufferView, x: number, y: number): void {
    this.guard()
    this.lib.bufferDrawTextBufferView(this.bufferPtr, textBufferView.ptr, x, y)
  }

  public drawEditorView(editorView: EditorView, x: number, y: number): void {
    this.guard()
    this.lib.bufferDrawEditorView(this.bufferPtr, editorView.ptr, x, y)
  }

  public drawSuperSampleBuffer(
    x: number,
    y: number,
    pixelDataPtr: Pointer,
    pixelDataLength: number,
    format: "bgra8unorm" | "rgba8unorm",
    alignedBytesPerRow: number,
  ): void {
    this.guard()
    this.lib.bufferDrawSuperSampleBuffer(
      this.bufferPtr,
      x,
      y,
      pixelDataPtr,
      pixelDataLength,
      format,
      alignedBytesPerRow,
    )
  }

  public drawPackedBuffer(
    dataPtr: Pointer,
    dataLen: number,
    posX: number,
    posY: number,
    terminalWidthCells: number,
    terminalHeightCells: number,
  ): void {
    this.guard()
    this.lib.bufferDrawPackedBuffer(
      this.bufferPtr,
      dataPtr,
      dataLen,
      posX,
      posY,
      terminalWidthCells,
      terminalHeightCells,
    )
  }

  public resize(width: number, height: number): void {
    this.guard()
    if (this._width === width && this._height === height) return

    this._width = width
    this._height = height
    this._rawBuffers = null

    this.lib.bufferResize(this.bufferPtr, width, height)
  }

  /**
   * Draws a box with optional borders, fill, and title.
   * This is a high-level method used by BoxRenderable.
   *
   * @param options - Box drawing configuration
   * @param options.x - X coordinate
   * @param options.y - Y coordinate
   * @param options.width - Width of the box
   * @param options.height - Height of the box
   * @param options.border - Which borders to draw (true for all, or array of sides)
   * @param options.borderStyle - Border style: "single", "double", "rounded", "bold", "ascii"
   * @param options.borderColor - Color of the border
   * @param options.backgroundColor - Background color
   * @param options.shouldFill - Whether to fill the interior (default: false)
   * @param options.title - Optional title text
   * @param options.titleAlignment - Title alignment: "left", "center", "right"
   *
   * @example
   * ```ts
   * // Draw a rounded box with title
   * buffer.drawBox({
   *   x: 5, y: 5,
   *   width: 40, height: 10,
   *   border: ["top", "bottom", "left", "right"],
   *   borderStyle: "rounded",
   *   borderColor: RGBA.cyan(),
   *   backgroundColor: RGBA.black(),
   *   shouldFill: true,
   *   title: "My Window",
   *   titleAlignment: "center"
   * })
   * ```
   *
   * @public
   */
  public drawBox(options: {
    x: number
    y: number
    width: number
    height: number
    borderStyle?: BorderStyle
    customBorderChars?: Uint32Array
    border: boolean | BorderSides[]
    borderColor: RGBA
    backgroundColor: RGBA
    shouldFill?: boolean
    title?: string
    titleAlignment?: "left" | "center" | "right"
  }): void {
    this.guard()
    const style = options.borderStyle || "single"
    const borderChars: Uint32Array = options.customBorderChars ?? BorderCharArrays[style]

    const packedOptions = packDrawOptions(options.border, options.shouldFill ?? false, options.titleAlignment || "left")

    this.lib.bufferDrawBox(
      this.bufferPtr,
      options.x,
      options.y,
      options.width,
      options.height,
      borderChars,
      packedOptions,
      options.borderColor,
      options.backgroundColor,
      options.title ?? null,
    )
  }

  /**
   * Pushes a scissor rectangle onto the stack, restricting rendering to the specified region.
   * Useful for implementing scrollable viewports and clipping.
   *
   * @param x - X coordinate of the clip region
   * @param y - Y coordinate of the clip region
   * @param width - Width of the clip region
   * @param height - Height of the clip region
   *
   * @remarks
   * Scissor rects are stacked - call {@link popScissorRect} to remove.
   *
   * @example
   * ```ts
   * // Only draw within a 40x20 region
   * buffer.pushScissorRect(10, 5, 40, 20)
   * buffer.drawText("This text will be clipped", 0, 0, RGBA.white())
   * buffer.popScissorRect()
   * ```
   *
   * @public
   */
  public pushScissorRect(x: number, y: number, width: number, height: number): void {
    this.guard()
    this.lib.bufferPushScissorRect(this.bufferPtr, x, y, width, height)
  }

  /**
   * Removes the most recently pushed scissor rectangle from the stack.
   *
   * @public
   */
  public popScissorRect(): void {
    this.guard()
    this.lib.bufferPopScissorRect(this.bufferPtr)
  }

  /**
   * Clears all scissor rectangles from the stack.
   *
   * @public
   */
  public clearScissorRects(): void {
    this.guard()
    this.lib.bufferClearScissorRects(this.bufferPtr)
  }

  public encodeUnicode(text: string): { ptr: Pointer; data: Array<{ width: number; char: number }> } | null {
    this.guard()
    return this.lib.encodeUnicode(text, this._widthMethod)
  }

  public freeUnicode(encoded: { ptr: Pointer; data: Array<{ width: number; char: number }> }): void {
    this.guard()
    this.lib.freeUnicode(encoded)
  }

  public drawChar(char: number, x: number, y: number, fg: RGBA, bg: RGBA, attributes: number = 0): void {
    this.guard()
    this.lib.bufferDrawChar(this.bufferPtr, char, x, y, fg, bg, attributes)
  }
}
