[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / ExtendedIntrinsicElements

# Type Alias: ExtendedIntrinsicElements\<TComponentCatalogue\>

> **ExtendedIntrinsicElements**\<`TComponentCatalogue`\> = `{ [TComponentName in keyof TComponentCatalogue]: ExtendedComponentProps<TComponentCatalogue[TComponentName]> }`

Helper type to create JSX element properties from a component catalogue.

Transforms a mapping of component names to renderable constructors into
a type suitable for JSX.IntrinsicElements declaration.

## Type Parameters

### TComponentCatalogue

`TComponentCatalogue` *extends* `Record`\<`string`, [`RenderableConstructor`](RenderableConstructor.md)\>

Object mapping component names to constructors
