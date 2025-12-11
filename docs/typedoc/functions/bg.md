[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / bg

# Function: bg()

> **bg**(`color`): (`input`) => [`TextChunk`](../interfaces/TextChunk.md)

Creates a background color function with a custom color.

## Parameters

### color

[`ColorInput`](../type-aliases/ColorInput.md)

The color to apply (CSS name, hex, or RGBA instance)

## Returns

A function that applies the background color to text

> (`input`): [`TextChunk`](../interfaces/TextChunk.md)

### Parameters

#### input

[`StylableInput`](../type-aliases/StylableInput.md)

### Returns

[`TextChunk`](../interfaces/TextChunk.md)

## Example

```ts
const highlight = bg("#ffff00")
const text = t`${highlight("Highlighted")} text`
```
