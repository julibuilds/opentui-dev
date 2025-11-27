import type { TextRenderable } from "."
import { BaseRenderable, type BaseRenderableOptions } from "../Renderable"
import { RGBA, parseColor } from "../lib/RGBA"
import { isStyledText, StyledText } from "../lib/styled-text"
import { type TextChunk } from "../text-buffer"
import type { RenderContext } from "../types"

/**
 * Configuration options for {@link TextNodeRenderable}.
 *
 * @public
 */
export interface TextNodeOptions extends BaseRenderableOptions {
  /** Foreground (text) color. */
  fg?: string | RGBA
  /** Background color. */
  bg?: string | RGBA
  /** Text attributes bitfield (bold, italic, underline, etc.). */
  attributes?: number
}

/** Internal brand for runtime type checking. */
const BrandedTextNodeRenderable: unique symbol = Symbol.for("@opentui/core/TextNodeRenderable")

/**
 * Type guard to check if an object is a TextNodeRenderable.
 *
 * @param obj - The object to check
 * @returns `true` if obj is a TextNodeRenderable
 *
 * @public
 */
export function isTextNodeRenderable(obj: any): obj is TextNodeRenderable {
  return !!obj?.[BrandedTextNodeRenderable]
}

function styledTextToTextNodes(styledText: StyledText): TextNodeRenderable[] {
  return styledText.chunks.map((chunk) => {
    const node = new TextNodeRenderable({
      fg: chunk.fg,
      bg: chunk.bg,
      attributes: chunk.attributes,
    })
    node.add(chunk.text)
    return node
  })
}

/**
 * A lightweight node for building styled text hierarchies.
 *
 * @remarks
 * TextNodeRenderable is a tree structure for composing styled text. Unlike full {@link Renderable}s,
 * TextNodes don't participate in layout or rendering directly. Instead, they form a tree that
 * gets flattened into {@link TextChunk}s for rendering by {@link Text}.
 *
 * Key features:
 * - Hierarchical style inheritance (children inherit parent styles)
 * - Lightweight compared to full renderables
 * - Supports mixing plain strings and styled nodes
 * - Can convert to/from {@link StyledText}
 *
 * TextNodes are ideal for:
 * - Rich text with nested styling (bold within italic, colored within underlined, etc.)
 * - Building text programmatically with inherited styles
 * - Converting from markup or styled text formats
 *
 * @example
 * Building styled text:
 * ```typescript
 * const root = new TextNodeRenderable({ fg: "white" });
 * root.add("Hello ");
 *
 * const bold = new TextNodeRenderable({ attributes: BOLD });
 * bold.add("world");
 * root.add(bold);
 *
 * root.add("!");
 * // Renders as: "Hello world!" with "world" in bold
 * ```
 *
 * @example
 * Style inheritance:
 * ```typescript
 * const outer = new TextNodeRenderable({ fg: "red" });
 * const inner = new TextNodeRenderable({ attributes: BOLD });
 * inner.add("Bold Red");
 * outer.add(inner);
 * // "Bold Red" is both red (inherited) and bold
 * ```
 *
 * @public
 */
export class TextNodeRenderable extends BaseRenderable {
  /** @internal */
  [BrandedTextNodeRenderable] = true

  private _fg?: RGBA
  private _bg?: RGBA
  private _attributes: number
  /** Child nodes and strings. Strings are rendered with inherited styles. */
  private _children: (string | TextNodeRenderable)[] = []
  /** Parent node, if this is a child of another TextNodeRenderable. */
  public parent: TextNodeRenderable | null = null

  constructor(options: TextNodeOptions) {
    super(options)

    this._fg = options.fg ? parseColor(options.fg) : undefined
    this._bg = options.bg ? parseColor(options.bg) : undefined
    this._attributes = options.attributes ?? 0
  }

  public get children(): (string | TextNodeRenderable)[] {
    return this._children
  }

  public set children(children: (string | TextNodeRenderable)[]) {
    this._children = children
    this.requestRender()
  }

  public requestRender(): void {
    this.markDirty()
    this.parent?.requestRender()
  }

  /**
   * Adds a child to this text node.
   *
   * @param obj - The child to add: a string, TextNodeRenderable, or StyledText
   * @param index - Optional position to insert at. If omitted, appends to end.
   * @returns The index where the child was inserted
   *
   * @remarks
   * - Strings are rendered with this node's inherited styles
   * - TextNodeRenderables become children with style inheritance
   * - StyledText is converted to TextNodeRenderables and inserted
   *
   * @example
   * ```typescript
   * const node = new TextNodeRenderable({ fg: "blue" });
   * node.add("Hello ");
   * node.add(new TextNodeRenderable({ attributes: BOLD }).add("world"));
   * ```
   */
  public add(obj: TextNodeRenderable | StyledText | string, index?: number): number {
    if (typeof obj === "string") {
      if (index !== undefined) {
        this._children.splice(index, 0, obj)
        this.requestRender()
        return index
      }

      const insertIndex = this._children.length
      this._children.push(obj)
      this.requestRender()
      return insertIndex
    }

    if (isTextNodeRenderable(obj)) {
      if (index !== undefined) {
        this._children.splice(index, 0, obj)
        obj.parent = this
        this.requestRender()
        return index
      }

      const insertIndex = this._children.length
      this._children.push(obj)
      obj.parent = this
      this.requestRender()
      return insertIndex
    }

    if (isStyledText(obj)) {
      const textNodes = styledTextToTextNodes(obj)
      if (index !== undefined) {
        this._children.splice(index, 0, ...textNodes)
        textNodes.forEach((node) => (node.parent = this))
        this.requestRender()
        return index
      }

      const insertIndex = this._children.length
      this._children.push(...textNodes)
      textNodes.forEach((node) => (node.parent = this))
      this.requestRender()
      return insertIndex
    }

    throw new Error("TextNodeRenderable only accepts strings, TextNodeRenderable instances, or StyledText instances")
  }

  public replace(obj: TextNodeRenderable | string, index: number) {
    this._children[index] = obj
    if (typeof obj !== "string") {
      obj.parent = this
    }
    this.requestRender()
  }

  public insertBefore(
    child: string | TextNodeRenderable | StyledText,
    anchorNode: TextNodeRenderable | string | unknown,
  ): this {
    if (!anchorNode || !isTextNodeRenderable(anchorNode)) {
      throw new Error("Anchor must be a TextNodeRenderable")
    }

    const anchorIndex = this._children.indexOf(anchorNode)
    if (anchorIndex === -1) {
      throw new Error("Anchor node not found in children")
    }

    if (typeof child === "string") {
      this._children.splice(anchorIndex, 0, child)
    } else if (isTextNodeRenderable(child)) {
      this._children.splice(anchorIndex, 0, child)
      child.parent = this
    } else if (child instanceof StyledText) {
      const textNodes = styledTextToTextNodes(child)
      this._children.splice(anchorIndex, 0, ...textNodes)
      textNodes.forEach((node) => (node.parent = this))
    } else {
      throw new Error("Child must be a string, TextNodeRenderable, or StyledText instance")
    }

    this.requestRender()
    return this
  }

  public remove(id: string): this {
    const childIndex = this.getRenderableIndex(id)
    if (childIndex === -1) {
      throw new Error("Child not found in children")
    }

    const child = this._children[childIndex] as TextNodeRenderable

    this._children.splice(childIndex, 1)
    child.parent = null
    this.requestRender()
    return this
  }

  public clear(): void {
    this._children = []
    this.requestRender()
  }

  /**
   * Merges this node's styles with parent styles.
   *
   * @param parentStyle - The parent's effective style
   * @returns The merged style (own properties override parent's)
   *
   * @remarks
   * Attributes are OR'd together (accumulative), while colors use this node's if defined.
   */
  public mergeStyles(parentStyle: { fg?: RGBA; bg?: RGBA; attributes: number }): {
    fg?: RGBA
    bg?: RGBA
    attributes: number
  } {
    return {
      fg: this._fg ?? parentStyle.fg,
      bg: this._bg ?? parentStyle.bg,
      attributes: this._attributes | parentStyle.attributes,
    }
  }

  /**
   * Recursively flattens this node tree into styled text chunks.
   *
   * @param parentStyle - Style inherited from parent
   * @returns Array of styled text chunks ready for rendering
   *
   * @internal
   */
  public gatherWithInheritedStyle(
    parentStyle: { fg?: RGBA; bg?: RGBA; attributes: number } = { fg: undefined, bg: undefined, attributes: 0 },
  ): TextChunk[] {
    const currentStyle = this.mergeStyles(parentStyle)

    const chunks: TextChunk[] = []

    for (const child of this._children) {
      if (typeof child === "string") {
        chunks.push({
          __isChunk: true,
          text: child,
          fg: currentStyle.fg,
          bg: currentStyle.bg,
          attributes: currentStyle.attributes,
        })
      } else {
        const childChunks = child.gatherWithInheritedStyle(currentStyle)
        chunks.push(...childChunks)
      }
    }

    this.markClean()

    return chunks
  }

  /**
   * Creates a TextNodeRenderable from a plain string.
   *
   * @param text - The text content
   * @param options - Optional style configuration
   * @returns A new TextNodeRenderable containing the text
   *
   * @example
   * ```typescript
   * const node = TextNodeRenderable.fromString("Hello", { fg: "red" });
   * ```
   */
  public static fromString(text: string, options: Partial<TextNodeOptions> = {}): TextNodeRenderable {
    const node = new TextNodeRenderable(options)
    node.add(text)
    return node
  }

  /**
   * Creates a TextNodeRenderable containing multiple child nodes.
   *
   * @param nodes - Child nodes to add
   * @param options - Optional style configuration for the parent
   * @returns A new TextNodeRenderable wrapping the children
   */
  public static fromNodes(nodes: TextNodeRenderable[], options: Partial<TextNodeOptions> = {}): TextNodeRenderable {
    const node = new TextNodeRenderable(options)
    for (const childNode of nodes) {
      node.add(childNode)
    }
    return node
  }

  /**
   * Converts this text node tree to an array of styled chunks.
   *
   * @param parentStyle - Optional parent style to inherit from
   * @returns Flattened array of styled text chunks
   */
  public toChunks(
    parentStyle: { fg?: RGBA; bg?: RGBA; attributes: number } = { fg: undefined, bg: undefined, attributes: 0 },
  ): TextChunk[] {
    return this.gatherWithInheritedStyle(parentStyle)
  }

  public getChildren(): BaseRenderable[] {
    return this._children.filter((child): child is TextNodeRenderable => typeof child !== "string")
  }

  public getChildrenCount(): number {
    return this._children.length
  }

  public getRenderable(id: string): BaseRenderable | undefined {
    return this._children.find((child): child is TextNodeRenderable => typeof child !== "string" && child.id === id)
  }

  public getRenderableIndex(id: string): number {
    return this._children.findIndex((child) => isTextNodeRenderable(child) && child.id === id)
  }

  public get fg(): RGBA | undefined {
    return this._fg
  }

  public set fg(fg: RGBA | string | undefined) {
    if (!fg) {
      this._fg = undefined
      this.requestRender()
      return
    }
    this._fg = parseColor(fg)
    this.requestRender()
  }

  public set bg(bg: RGBA | string | undefined) {
    if (!bg) {
      this._bg = undefined
      this.requestRender()
      return
    }
    this._bg = parseColor(bg)
    this.requestRender()
  }

  public get bg(): RGBA | undefined {
    return this._bg
  }

  public set attributes(attributes: number) {
    this._attributes = attributes
    this.requestRender()
  }

  public get attributes(): number {
    return this._attributes
  }

  public findDescendantById(id: string): BaseRenderable | undefined {
    return undefined
  }
}

/**
 * Root text node that connects to the rendering system.
 *
 * @remarks
 * RootTextNodeRenderable extends TextNodeRenderable with a connection to the render context
 * and its parent {@link TextRenderable}. It's used internally by the Text component as the
 * root of the text node tree.
 *
 * @internal
 */
export class RootTextNodeRenderable extends TextNodeRenderable {
  /** The TextRenderable that owns this root node. */
  textParent: TextRenderable

  constructor(
    private readonly ctx: RenderContext,
    options: TextNodeOptions,
    textParent: TextRenderable,
  ) {
    super(options)
    this.textParent = textParent
  }

  /**
   * Requests a render of the parent Text component.
   */
  public requestRender(): void {
    this.markDirty()
    this.ctx.requestRender()
  }
}
