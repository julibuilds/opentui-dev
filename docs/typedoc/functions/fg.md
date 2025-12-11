[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / fg

# Function: fg()

> **fg**(`color`): (`input`) => [`TextChunk`](../interfaces/TextChunk.md)

Creates a foreground color function with a custom color.

## Parameters

### color

[`ColorInput`](../type-aliases/ColorInput.md)

The color to apply (CSS name, hex, or RGBA instance)

## Returns

A function that applies the foreground color to text

> (`input`): [`TextChunk`](../interfaces/TextChunk.md)

### Parameters

#### input

[`StylableInput`](../type-aliases/StylableInput.md)

### Returns

[`TextChunk`](../interfaces/TextChunk.md)

## Example

```ts
const orange = fg("#ff6600")
const text = t`${orange("Custom color")} text`
```
