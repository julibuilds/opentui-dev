import type { TextRenderable } from "../renderables/Text"
import type { TextBuffer, TextChunk } from "../text-buffer"
import { createTextAttributes } from "../utils"
import { parseColor, type ColorInput } from "./RGBA"

const BrandedStyledText: unique symbol = Symbol.for("@opentui/core/StyledText")

/**
 * Type alias for color input values.
 *
 * @public
 */
export type Color = ColorInput

/**
 * Style attributes that can be applied to text.
 * Used to configure foreground/background colors and text styling.
 *
 * @public
 */
export interface StyleAttrs {
  /** Foreground (text) color */
  fg?: Color
  /** Background color */
  bg?: Color
  /** Bold text */
  bold?: boolean
  /** Italic text */
  italic?: boolean
  /** Underlined text */
  underline?: boolean
  /** Strikethrough text */
  strikethrough?: boolean
  /** Dimmed/faint text */
  dim?: boolean
  /** Reverse video (swap fg/bg colors) */
  reverse?: boolean
  /** Blinking text */
  blink?: boolean
}

/**
 * Type guard to check if an object is a StyledText instance.
 *
 * @param obj - Object to check
 * @returns True if the object is StyledText
 *
 * @public
 */
export function isStyledText(obj: any): obj is StyledText {
  return obj && obj[BrandedStyledText]
}

/**
 * Container for styled text content composed of multiple text chunks.
 * Each chunk can have its own colors and text attributes.
 *
 * @remarks
 * StyledText is the primary way to create colorful and formatted text in OpenTUI.
 * Use the template literal syntax with the `t` function or compose chunks using
 * the color/style helper functions.
 *
 * @example
 * ```ts
 * import { t, red, bold, blue, bgWhite } from "@opentui/core"
 *
 * // Using template literals
 * const text1 = t`Hello ${red("World")}!`
 * const text2 = t`${bold("Important")}: ${blue("Information")}`
 *
 * // Composing styles
 * const text3 = t`${bold(red("Error"))}: Something went wrong`
 * const text4 = t`${bgWhite(blue("Highlighted"))} text`
 *
 * // Using in TextRenderable
 * const textComponent = new TextRenderable(ctx, {
 *   content: t`Status: ${green("Online")}`
 * })
 * ```
 *
 * @public
 */
export class StyledText {
  [BrandedStyledText] = true

  /** Array of text chunks, each with optional styling */
  public chunks: TextChunk[]

  constructor(chunks: TextChunk[]) {
    this.chunks = chunks
  }
}

export function stringToStyledText(content: string): StyledText {
  const chunk = {
    __isChunk: true as const,
    text: content,
  }
  return new StyledText([chunk])
}

export type StylableInput = string | number | boolean | TextChunk

function applyStyle(input: StylableInput, style: StyleAttrs): TextChunk {
  if (typeof input === "object" && "__isChunk" in input) {
    const existingChunk = input as TextChunk

    const fg = style.fg ? parseColor(style.fg) : existingChunk.fg
    const bg = style.bg ? parseColor(style.bg) : existingChunk.bg

    const newAttrs = createTextAttributes(style)
    const mergedAttrs = existingChunk.attributes ? existingChunk.attributes | newAttrs : newAttrs

    return {
      __isChunk: true,
      text: existingChunk.text,
      fg,
      bg,
      attributes: mergedAttrs,
    }
  } else {
    const plainTextStr = String(input)
    const fg = style.fg ? parseColor(style.fg) : undefined
    const bg = style.bg ? parseColor(style.bg) : undefined
    const attributes = createTextAttributes(style)

    return {
      __isChunk: true,
      text: plainTextStr,
      fg,
      bg,
      attributes,
    }
  }
}

/**
 * Foreground color functions - apply standard colors to text.
 * @public
 */
export const black = (input: StylableInput): TextChunk => applyStyle(input, { fg: "black" })
/** @public */
export const red = (input: StylableInput): TextChunk => applyStyle(input, { fg: "red" })
/** @public */
export const green = (input: StylableInput): TextChunk => applyStyle(input, { fg: "green" })
/** @public */
export const yellow = (input: StylableInput): TextChunk => applyStyle(input, { fg: "yellow" })
/** @public */
export const blue = (input: StylableInput): TextChunk => applyStyle(input, { fg: "blue" })
/** @public */
export const magenta = (input: StylableInput): TextChunk => applyStyle(input, { fg: "magenta" })
/** @public */
export const cyan = (input: StylableInput): TextChunk => applyStyle(input, { fg: "cyan" })
/** @public */
export const white = (input: StylableInput): TextChunk => applyStyle(input, { fg: "white" })

// Bright color functions
export const brightBlack = (input: StylableInput): TextChunk => applyStyle(input, { fg: "brightBlack" })
export const brightRed = (input: StylableInput): TextChunk => applyStyle(input, { fg: "brightRed" })
export const brightGreen = (input: StylableInput): TextChunk => applyStyle(input, { fg: "brightGreen" })
export const brightYellow = (input: StylableInput): TextChunk => applyStyle(input, { fg: "brightYellow" })
export const brightBlue = (input: StylableInput): TextChunk => applyStyle(input, { fg: "brightBlue" })
export const brightMagenta = (input: StylableInput): TextChunk => applyStyle(input, { fg: "brightMagenta" })
export const brightCyan = (input: StylableInput): TextChunk => applyStyle(input, { fg: "brightCyan" })
export const brightWhite = (input: StylableInput): TextChunk => applyStyle(input, { fg: "brightWhite" })

// Background color functions
export const bgBlack = (input: StylableInput): TextChunk => applyStyle(input, { bg: "black" })
export const bgRed = (input: StylableInput): TextChunk => applyStyle(input, { bg: "red" })
export const bgGreen = (input: StylableInput): TextChunk => applyStyle(input, { bg: "green" })
export const bgYellow = (input: StylableInput): TextChunk => applyStyle(input, { bg: "yellow" })
export const bgBlue = (input: StylableInput): TextChunk => applyStyle(input, { bg: "blue" })
export const bgMagenta = (input: StylableInput): TextChunk => applyStyle(input, { bg: "magenta" })
export const bgCyan = (input: StylableInput): TextChunk => applyStyle(input, { bg: "cyan" })
export const bgWhite = (input: StylableInput): TextChunk => applyStyle(input, { bg: "white" })

/**
 * Text style functions - apply formatting attributes to text.
 *
 * @example
 * ```ts
 * const text = t`${bold("Important")} ${italic("note")}`
 * ```
 *
 * @public
 */
export const bold = (input: StylableInput): TextChunk => applyStyle(input, { bold: true })
/** @public */
export const italic = (input: StylableInput): TextChunk => applyStyle(input, { italic: true })
/** @public */
export const underline = (input: StylableInput): TextChunk => applyStyle(input, { underline: true })
/** @public */
export const strikethrough = (input: StylableInput): TextChunk => applyStyle(input, { strikethrough: true })
/** @public */
export const dim = (input: StylableInput): TextChunk => applyStyle(input, { dim: true })
/** @public */
export const reverse = (input: StylableInput): TextChunk => applyStyle(input, { reverse: true })
/** @public */
export const blink = (input: StylableInput): TextChunk => applyStyle(input, { blink: true })

/**
 * Creates a foreground color function with a custom color.
 *
 * @param color - The color to apply (CSS name, hex, or RGBA instance)
 * @returns A function that applies the foreground color to text
 *
 * @example
 * ```ts
 * const orange = fg("#ff6600")
 * const text = t`${orange("Custom color")} text`
 * ```
 *
 * @public
 */
export const fg =
  (color: Color) =>
  (input: StylableInput): TextChunk =>
    applyStyle(input, { fg: color })

/**
 * Creates a background color function with a custom color.
 *
 * @param color - The color to apply (CSS name, hex, or RGBA instance)
 * @returns A function that applies the background color to text
 *
 * @example
 * ```ts
 * const highlight = bg("#ffff00")
 * const text = t`${highlight("Highlighted")} text`
 * ```
 *
 * @public
 */
export const bg =
  (color: Color) =>
  (input: StylableInput): TextChunk =>
    applyStyle(input, { bg: color })

/**
 * Template literal tag function for creating styled text.
 * Allows composing text with inline color and style formatting.
 *
 * @param strings - Template string parts
 * @param values - Interpolated values (strings, numbers, or styled chunks)
 * @returns A StyledText object containing all text chunks
 *
 * @example
 * ```ts
 * import { t, red, bold, green, bgBlue } from "@opentui/core"
 *
 * // Simple colored text
 * const text1 = t`Hello ${red("World")}!`
 *
 * // Combining styles
 * const text2 = t`${bold(red("Error"))}: File not found`
 *
 * // Multiple styles in one line
 * const text3 = t`${green("✓")} Success ${red("✗")} Failed`
 *
 * // Background colors
 * const text4 = t`${bgBlue(white("Highlighted"))} normal text`
 *
 * // Using with components
 * const label = new TextRenderable(ctx, {
 *   content: t`Status: ${green("Online")}`
 * })
 * ```
 *
 * @public
 */
export function t(strings: TemplateStringsArray, ...values: StylableInput[]): StyledText {
  const chunks: TextChunk[] = []

  for (let i = 0; i < strings.length; i++) {
    const raw = strings[i]

    if (raw) {
      chunks.push({
        __isChunk: true,
        text: raw,
        attributes: 0,
      })
    }

    const val = values[i]
    if (typeof val === "object" && "__isChunk" in val) {
      chunks.push(val as TextChunk)
    } else if (val !== undefined) {
      const plainTextStr = String(val)
      chunks.push({
        __isChunk: true,
        text: plainTextStr,
        attributes: 0,
      })
    }
  }

  return new StyledText(chunks)
}
