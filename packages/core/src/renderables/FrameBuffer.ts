import { type RenderableOptions, Renderable } from "../Renderable"
import { OptimizedBuffer } from "../buffer"
import type { RenderContext } from "../types"

/**
 * Configuration options for {@link FrameBufferRenderable}.
 *
 * @public
 */
export interface FrameBufferOptions extends RenderableOptions<FrameBufferRenderable> {
  /** Width of the frame buffer in characters. */
  width: number
  /** Height of the frame buffer in characters. */
  height: number
  /**
   * Whether to respect alpha transparency when compositing.
   * @defaultValue false
   * @remarks
   * When true, transparent cells in the framebuffer won't overwrite content beneath them.
   */
  respectAlpha?: boolean
}

/**
 * A renderable that owns an off-screen rendering buffer (framebuffer).
 *
 * @remarks
 * FrameBufferRenderable provides an {@link OptimizedBuffer} that can be drawn to independently
 * and then composited onto the main screen buffer. This is useful for:
 *
 * - Pre-rendering complex content that doesn't change every frame
 * - Creating reusable visual components
 * - Layering effects with alpha blending
 * - Implementing custom rendering logic
 *
 * The framebuffer is automatically resized when the renderable's dimensions change.
 *
 * @example
 * ```typescript
 * class CustomGraphic extends FrameBufferRenderable {
 *   constructor(ctx: RenderContext) {
 *     super(ctx, { width: 40, height: 20, respectAlpha: true });
 *     this.drawCustomContent();
 *   }
 *
 *   private drawCustomContent() {
 *     // Draw directly to this.frameBuffer
 *     this.frameBuffer.drawText("Hello", 0, 0, RGBA.white(), RGBA.black());
 *     this.frameBuffer.fillRect(0, 1, 10, 5, RGBA.fromHex("#ff0000"));
 *   }
 * }
 * ```
 *
 * @public
 */
export class FrameBufferRenderable extends Renderable {
  /** The off-screen buffer owned by this renderable. */
  public frameBuffer: OptimizedBuffer
  /** Whether alpha blending is enabled for compositing. */
  protected respectAlpha: boolean

  constructor(ctx: RenderContext, options: FrameBufferOptions) {
    super(ctx, options)
    this.respectAlpha = options.respectAlpha || false
    this.frameBuffer = OptimizedBuffer.create(options.width, options.height, this._ctx.widthMethod, {
      respectAlpha: this.respectAlpha,
      id: options.id || `framebufferrenderable-${this.id}`,
    })
  }

  /**
   * Called when the renderable is resized. Automatically resizes the framebuffer.
   *
   * @param width - New width in characters
   * @param height - New height in characters
   *
   * @throws Error if width or height is zero or negative
   */
  protected onResize(width: number, height: number): void {
    if (width <= 0 || height <= 0) {
      throw new Error(`Invalid resize dimensions for FrameBufferRenderable ${this.id}: ${width}x${height}`)
    }

    this.frameBuffer.resize(width, height)
    super.onResize(width, height)
    this.requestRender()
  }

  /**
   * Renders the framebuffer to the main screen buffer.
   *
   * @param buffer - The main screen buffer to draw to
   *
   * @internal
   */
  protected renderSelf(buffer: OptimizedBuffer): void {
    if (!this.visible || this.isDestroyed) return
    buffer.drawFrameBuffer(this.x, this.y, this.frameBuffer)
  }

  /**
   * Destroys the framebuffer and cleans up resources.
   *
   * @internal
   */
  protected destroySelf(): void {
    // TODO: framebuffer collides with buffered Renderable, which holds a framebuffer
    // and destroys it if it exists already. Maybe instead of extending FrameBufferRenderable,
    // subclasses can use the buffered option on the base renderable instead,
    // then this would become something that takes in an external framebuffer to bring it into layout.
    this.frameBuffer?.destroy()
    super.destroySelf()
  }
}
