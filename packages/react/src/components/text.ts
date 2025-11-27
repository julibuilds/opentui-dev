import { TextAttributes, TextNodeRenderable, type RenderContext, type TextNodeOptions } from "@opentui/core"

/**
 * Array of supported text node element types.
 */
export const textNodeKeys = ["span", "b", "strong", "i", "em", "u", "br"] as const

/**
 * Union type of all text node element types.
 */
export type TextNodeKey = (typeof textNodeKeys)[number]

/**
 * Renderable class for the `<span>` element.
 *
 * Represents an inline text node that can be nested within text elements
 * to apply custom styling or attributes to portions of text.
 *
 * @example
 * ```tsx
 * <text>
 *   Regular text <span fg="red">colored text</span> more text
 * </text>
 * ```
 */
export class SpanRenderable extends TextNodeRenderable {
  constructor(
    private readonly ctx: RenderContext | null,
    options: TextNodeOptions,
  ) {
    super(options)
  }
}

/**
 * Base class for text modifier renderables.
 *
 * Extends SpanRenderable to automatically apply text attributes like bold, italic,
 * or underline based on the modifier type.
 *
 * @internal
 */
class TextModifierRenderable extends SpanRenderable {
  constructor(options: TextNodeOptions, modifier?: TextNodeKey) {
    super(null, options)

    // Set appropriate attributes based on modifier type
    if (modifier === "b" || modifier === "strong") {
      this.attributes = (this.attributes || 0) | TextAttributes.BOLD
    } else if (modifier === "i" || modifier === "em") {
      this.attributes = (this.attributes || 0) | TextAttributes.ITALIC
    } else if (modifier === "u") {
      this.attributes = (this.attributes || 0) | TextAttributes.UNDERLINE
    }
  }
}

/**
 * Renderable class for `<b>` and `<strong>` elements.
 *
 * Renders text with bold formatting. Both HTML-style tags are supported
 * and produce identical results.
 *
 * @example
 * ```tsx
 * <text>
 *   This is <b>bold text</b> and <strong>also bold</strong>
 * </text>
 * ```
 */
export class BoldSpanRenderable extends TextModifierRenderable {
  constructor(_ctx: RenderContext | null, options: TextNodeOptions) {
    super(options, "b")
  }
}

/**
 * Renderable class for `<i>` and `<em>` elements.
 *
 * Renders text with italic formatting. Both HTML-style tags are supported
 * and produce identical results.
 *
 * @example
 * ```tsx
 * <text>
 *   This is <i>italic text</i> and <em>also italic</em>
 * </text>
 * ```
 */
export class ItalicSpanRenderable extends TextModifierRenderable {
  constructor(_ctx: RenderContext | null, options: TextNodeOptions) {
    super(options, "i")
  }
}

/**
 * Renderable class for the `<u>` element.
 *
 * Renders text with underline formatting.
 *
 * @example
 * ```tsx
 * <text>
 *   This is <u>underlined text</u>
 * </text>
 * ```
 */
export class UnderlineSpanRenderable extends TextModifierRenderable {
  constructor(_ctx: RenderContext | null, options: TextNodeOptions) {
    super(options, "u")
  }
}

/**
 * Renderable class for the `<br>` element.
 *
 * Inserts a line break in text content. This is particularly useful for
 * creating multi-line text within a single text element.
 *
 * @example
 * ```tsx
 * <text>
 *   First line<br />
 *   Second line<br />
 *   Third line
 * </text>
 * ```
 */
export class LineBreakRenderable extends SpanRenderable {
  constructor(_ctx: RenderContext | null, options: TextNodeOptions) {
    super(null, options)
    this.add() // Add a newline
  }

  public override add(): number {
    return super.add("\n")
  }
}
