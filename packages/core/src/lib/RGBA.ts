/**
 * Represents an RGBA color with values stored as floats (0.0 to 1.0).
 * This is the primary color type used throughout OpenTUI.
 *
 * @remarks
 * RGBA stores colors using normalized float values (0.0-1.0) for better performance
 * in the native rendering backend. The class provides multiple construction methods
 * and utilities for color manipulation.
 *
 * @example
 * ```ts
 * // Create colors using various methods
 * const red = RGBA.fromValues(1, 0, 0, 1)
 * const blue = RGBA.fromInts(0, 0, 255)
 * const green = RGBA.fromHex("#00ff00")
 * const semi = RGBA.fromValues(1, 1, 1, 0.5)  // Semi-transparent white
 *
 * // Modify color components
 * const color = RGBA.fromValues(1, 0, 0, 1)
 * color.a = 0.5  // Make it semi-transparent
 *
 * // Convert to different formats
 * const [r, g, b, a] = color.toInts()  // Get as 0-255 integers
 * ```
 *
 * @public
 */
export class RGBA {
  /** Internal buffer storing [r, g, b, a] as floats */
  buffer: Float32Array

  constructor(buffer: Float32Array) {
    this.buffer = buffer
  }

  /**
   * Creates an RGBA color from a Float32Array buffer.
   *
   * @param array - Float32Array containing [r, g, b, a] values (0.0-1.0)
   * @returns A new RGBA instance
   *
   * @public
   */
  static fromArray(array: Float32Array) {
    return new RGBA(array)
  }

  /**
   * Creates an RGBA color from normalized float values (0.0 to 1.0).
   *
   * @param r - Red component (0.0 to 1.0)
   * @param g - Green component (0.0 to 1.0)
   * @param b - Blue component (0.0 to 1.0)
   * @param a - Alpha component (0.0 to 1.0, default: 1.0 = opaque)
   * @returns A new RGBA instance
   *
   * @example
   * ```ts
   * const red = RGBA.fromValues(1, 0, 0, 1)
   * const semiTransparentBlue = RGBA.fromValues(0, 0, 1, 0.5)
   * ```
   *
   * @public
   */
  static fromValues(r: number, g: number, b: number, a: number = 1.0) {
    return new RGBA(new Float32Array([r, g, b, a]))
  }

  /**
   * Creates an RGBA color from integer values (0 to 255).
   *
   * @param r - Red component (0 to 255)
   * @param g - Green component (0 to 255)
   * @param b - Blue component (0 to 255)
   * @param a - Alpha component (0 to 255, default: 255 = opaque)
   * @returns A new RGBA instance
   *
   * @example
   * ```ts
   * const red = RGBA.fromInts(255, 0, 0)
   * const semiTransparent = RGBA.fromInts(128, 128, 128, 128)
   * ```
   *
   * @public
   */
  static fromInts(r: number, g: number, b: number, a: number = 255) {
    return new RGBA(new Float32Array([r / 255, g / 255, b / 255, a / 255]))
  }

  /**
   * Creates an RGBA color from a hexadecimal string.
   *
   * @param hex - Hex color string (with or without #, supports 3, 4, 6, or 8 digit formats)
   * @returns A new RGBA instance
   *
   * @example
   * ```ts
   * const red = RGBA.fromHex("#ff0000")
   * const shortRed = RGBA.fromHex("#f00")
   * const withAlpha = RGBA.fromHex("#ff0000cc")
   * ```
   *
   * @public
   */
  static fromHex(hex: string): RGBA {
    return hexToRgb(hex)
  }

  toInts(): [number, number, number, number] {
    return [Math.round(this.r * 255), Math.round(this.g * 255), Math.round(this.b * 255), Math.round(this.a * 255)]
  }

  get r(): number {
    return this.buffer[0]
  }

  set r(value: number) {
    this.buffer[0] = value
  }

  get g(): number {
    return this.buffer[1]
  }

  set g(value: number) {
    this.buffer[1] = value
  }

  get b(): number {
    return this.buffer[2]
  }

  set b(value: number) {
    this.buffer[2] = value
  }

  get a(): number {
    return this.buffer[3]
  }

  set a(value: number) {
    this.buffer[3] = value
  }

  map<R>(fn: (value: number) => R) {
    return [fn(this.r), fn(this.g), fn(this.b), fn(this.a)]
  }

  toString() {
    return `rgba(${this.r.toFixed(2)}, ${this.g.toFixed(2)}, ${this.b.toFixed(2)}, ${this.a.toFixed(2)})`
  }
}

/**
 * Type representing color input - either a CSS color string or an RGBA instance.
 *
 * @public
 */
export type ColorInput = string | RGBA

/**
 * Converts a hexadecimal color string to an RGBA instance.
 *
 * @param hex - Hex color string (supports #RGB, #RGBA, #RRGGBB, #RRGGBBAA formats)
 * @returns An RGBA color instance
 *
 * @remarks
 * Automatically handles short and long formats, with or without the # prefix.
 * Invalid hex strings default to magenta (#FF00FF) with a console warning.
 *
 * @example
 * ```ts
 * const red = hexToRgb("#ff0000")
 * const shortGreen = hexToRgb("#0f0")
 * const withAlpha = hexToRgb("#ff0000cc")
 * ```
 *
 * @public
 */
export function hexToRgb(hex: string): RGBA {
  hex = hex.replace(/^#/, "")

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }

  if (!/^[0-9A-Fa-f]{6}$/.test(hex) && !/^[0-9A-Fa-f]{8}$/.test(hex)) {
    console.warn(`Invalid hex color: ${hex}, defaulting to magenta`)
    return RGBA.fromValues(1, 0, 1, 1)
  }

  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255
  const a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1

  return RGBA.fromValues(r, g, b, a)
}

export function rgbToHex(rgb: RGBA): string {
  const components = rgb.a === 1 ? [rgb.r, rgb.g, rgb.b] : [rgb.r, rgb.g, rgb.b, rgb.a]
  return (
    "#" +
    components
      .map((x) => {
        const hex = Math.floor(Math.max(0, Math.min(1, x) * 255)).toString(16)
        return hex.length === 1 ? "0" + hex : hex
      })
      .join("")
  )
}

export function hsvToRgb(h: number, s: number, v: number): RGBA {
  let r = 0,
    g = 0,
    b = 0

  const i = Math.floor(h / 60) % 6
  const f = h / 60 - Math.floor(h / 60)
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  switch (i) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }

  return RGBA.fromValues(r, g, b, 1)
}

const CSS_COLOR_NAMES: Record<string, string> = {
  black: "#000000",
  white: "#FFFFFF",
  red: "#FF0000",
  green: "#008000",
  blue: "#0000FF",
  yellow: "#FFFF00",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  silver: "#C0C0C0",
  gray: "#808080",
  grey: "#808080",
  maroon: "#800000",
  olive: "#808000",
  lime: "#00FF00",
  aqua: "#00FFFF",
  teal: "#008080",
  navy: "#000080",
  fuchsia: "#FF00FF",
  purple: "#800080",
  orange: "#FFA500",
  brightblack: "#666666",
  brightred: "#FF6666",
  brightgreen: "#66FF66",
  brightblue: "#6666FF",
  brightyellow: "#FFFF66",
  brightcyan: "#66FFFF",
  brightmagenta: "#FF66FF",
  brightwhite: "#FFFFFF",
}

/**
 * Parses a color input string or returns an existing RGBA instance.
 * Supports CSS color names, hex strings, and "transparent".
 *
 * @param color - Color string (CSS name, hex, or "transparent") or RGBA instance
 * @returns An RGBA color instance
 *
 * @remarks
 * Supports standard CSS color names (black, white, red, blue, etc.) and
 * "bright" variants (brightred, brightblue, etc.). This is the recommended
 * way to parse user-provided color strings.
 *
 * @example
 * ```ts
 * // CSS color names
 * const red = parseColor("red")
 * const brightBlue = parseColor("brightblue")
 *
 * // Hex strings
 * const custom = parseColor("#ff6600")
 *
 * // Transparent
 * const transparent = parseColor("transparent")
 *
 * // Pass-through RGBA
 * const existing = RGBA.fromValues(1, 0, 0, 1)
 * const same = parseColor(existing)  // Returns the same instance
 * ```
 *
 * @public
 */
export function parseColor(color: ColorInput): RGBA {
  if (typeof color === "string") {
    const lowerColor = color.toLowerCase()

    if (lowerColor === "transparent") {
      return RGBA.fromValues(0, 0, 0, 0)
    }

    if (CSS_COLOR_NAMES[lowerColor]) {
      return hexToRgb(CSS_COLOR_NAMES[lowerColor])
    }

    return hexToRgb(color)
  }
  return color
}
