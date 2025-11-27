[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / GetNonStyledProperties

# Type Alias: GetNonStyledProperties\<TConstructor\>

> **GetNonStyledProperties**\<`TConstructor`\> = `TConstructor` *extends* [`RenderableConstructor`](RenderableConstructor.md)\<[`TextRenderable`](../../../core/src/classes/TextRenderable.md)\> ? [`NonStyledProps`](NonStyledProps.md) \| `"content"` : `TConstructor` *extends* [`RenderableConstructor`](RenderableConstructor.md)\<[`BoxRenderable`](../../../core/src/classes/BoxRenderable.md)\> ? [`NonStyledProps`](NonStyledProps.md) \| `"title"` : `TConstructor` *extends* [`RenderableConstructor`](RenderableConstructor.md)\<[`ASCIIFontRenderable`](../../../core/src/classes/ASCIIFontRenderable.md)\> ? [`NonStyledProps`](NonStyledProps.md) \| `"text"` \| `"selectable"` : `TConstructor` *extends* [`RenderableConstructor`](RenderableConstructor.md)\<[`InputRenderable`](../../../core/src/classes/InputRenderable.md)\> ? [`NonStyledProps`](NonStyledProps.md) \| `"placeholder"` \| `"value"` : `TConstructor` *extends* [`RenderableConstructor`](RenderableConstructor.md)\<[`TextareaRenderable`](../../../core/src/classes/TextareaRenderable.md)\> ? [`NonStyledProps`](NonStyledProps.md) \| `"placeholder"` \| `"initialValue"` : `TConstructor` *extends* [`RenderableConstructor`](RenderableConstructor.md)\<[`CodeRenderable`](../../../core/src/classes/CodeRenderable.md)\> ? [`NonStyledProps`](NonStyledProps.md) \| `"content"` \| `"filetype"` \| `"syntaxStyle"` \| `"treeSitterClient"` \| `"conceal"` \| `"drawUnstyledText"` : [`NonStyledProps`](NonStyledProps.md)

**`Internal`**

Determines which properties should be excluded from styling for different renderable types.

Different components have specific properties that should not be passed via the `style` prop.
This type helper ensures proper separation between direct props and style props.

## Type Parameters

### TConstructor

`TConstructor`
