[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / StyledText

# Class: StyledText

Container for styled text content composed of multiple text chunks.
Each chunk can have its own colors and text attributes.

## Remarks

StyledText is the primary way to create colorful and formatted text in OpenTUI.
Use the template literal syntax with the `t` function or compose chunks using
the color/style helper functions.

## Example

```ts
import { t, red, bold, blue, bgWhite } from "@opentui/core"

// Using template literals
const text1 = t`Hello ${red("World")}!`
const text2 = t`${bold("Important")}: ${blue("Information")}`

// Composing styles
const text3 = t`${bold(red("Error"))}: Something went wrong`
const text4 = t`${bgWhite(blue("Highlighted"))} text`

// Using in TextRenderable
const textComponent = new TextRenderable(ctx, {
  content: t`Status: ${green("Online")}`
})
```

## Constructors

### Constructor

> **new StyledText**(`chunks`): `StyledText`

#### Parameters

##### chunks

[`TextChunk`](../interfaces/TextChunk.md)[]

#### Returns

`StyledText`

## Properties

### \[BrandedStyledText\]

> **\[BrandedStyledText\]**: `boolean` = `true`

***

### chunks

> **chunks**: [`TextChunk`](../interfaces/TextChunk.md)[]

Array of text chunks, each with optional styling
