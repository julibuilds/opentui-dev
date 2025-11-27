[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / parseColor

# Function: parseColor()

> **parseColor**(`color`): [`RGBA`](../classes/RGBA.md)

Parses a color input string or returns an existing RGBA instance.
Supports CSS color names, hex strings, and "transparent".

## Parameters

### color

[`ColorInput`](../type-aliases/ColorInput.md)

Color string (CSS name, hex, or "transparent") or RGBA instance

## Returns

[`RGBA`](../classes/RGBA.md)

An RGBA color instance

## Remarks

Supports standard CSS color names (black, white, red, blue, etc.) and
"bright" variants (brightred, brightblue, etc.). This is the recommended
way to parse user-provided color strings.

## Example

```ts
// CSS color names
const red = parseColor("red")
const brightBlue = parseColor("brightblue")

// Hex strings
const custom = parseColor("#ff6600")

// Transparent
const transparent = parseColor("transparent")

// Pass-through RGBA
const existing = RGBA.fromValues(1, 0, 0, 1)
const same = parseColor(existing)  // Returns the same instance
```
