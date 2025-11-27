[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / t

# Function: t()

> **t**(`strings`, ...`values`): [`StyledText`](../classes/StyledText.md)

Template literal tag function for creating styled text.
Allows composing text with inline color and style formatting.

## Parameters

### strings

`TemplateStringsArray`

Template string parts

### values

...[`StylableInput`](../type-aliases/StylableInput.md)[]

Interpolated values (strings, numbers, or styled chunks)

## Returns

[`StyledText`](../classes/StyledText.md)

A StyledText object containing all text chunks

## Example

```ts
import { t, red, bold, green, bgBlue } from "@opentui/core"

// Simple colored text
const text1 = t`Hello ${red("World")}!`

// Combining styles
const text2 = t`${bold(red("Error"))}: File not found`

// Multiple styles in one line
const text3 = t`${green("✓")} Success ${red("✗")} Failed`

// Background colors
const text4 = t`${bgBlue(white("Highlighted"))} normal text`

// Using with components
const label = new TextRenderable(ctx, {
  content: t`Status: ${green("Online")}`
})
```
