[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / hexToRgb

# Function: hexToRgb()

> **hexToRgb**(`hex`): [`RGBA`](../classes/RGBA.md)

Converts a hexadecimal color string to an RGBA instance.

## Parameters

### hex

`string`

Hex color string (supports #RGB, #RGBA, #RRGGBB, #RRGGBBAA formats)

## Returns

[`RGBA`](../classes/RGBA.md)

An RGBA color instance

## Remarks

Automatically handles short and long formats, with or without the # prefix.
Invalid hex strings default to magenta (#FF00FF) with a console warning.

## Example

```ts
const red = hexToRgb("#ff0000")
const shortGreen = hexToRgb("#0f0")
const withAlpha = hexToRgb("#ff0000cc")
```
