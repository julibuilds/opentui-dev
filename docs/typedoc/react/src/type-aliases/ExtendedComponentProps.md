[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / ExtendedComponentProps

# Type Alias: ExtendedComponentProps\<TConstructor, TOptions\>

> **ExtendedComponentProps**\<`TConstructor`, `TOptions`\> = `TOptions` & `object` & [`ReactProps`](ReactProps.md)\<`ExtractRenderable`\<`TConstructor`\>\>

Converts a renderable constructor to React component props with proper style exclusions.

This type is used when extending OpenTUI with custom components to ensure proper
typing for the `style` prop and other React-specific features.

## Type Declaration

### children?

> `optional` **children**: `React.ReactNode`

### style?

> `optional` **style**: `Partial`\<`Omit`\<`TOptions`, [`GetNonStyledProperties`](GetNonStyledProperties.md)\<`TConstructor`\>\>\>

## Type Parameters

### TConstructor

`TConstructor` *extends* [`RenderableConstructor`](RenderableConstructor.md)

The renderable constructor type

### TOptions

`TOptions` = `ExtractRenderableOptions`\<`TConstructor`\>

The options type extracted from the constructor
