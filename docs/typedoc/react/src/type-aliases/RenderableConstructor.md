[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / RenderableConstructor

# Type Alias: RenderableConstructor()\<TRenderable\>

> **RenderableConstructor**\<`TRenderable`\> = (`ctx`, `options`) => `TRenderable`

Base type for any renderable constructor.

All OpenTUI renderable classes match this signature, taking a render context
and options object to construct a renderable instance.

## Type Parameters

### TRenderable

`TRenderable` *extends* [`BaseRenderable`](../../../core/src/classes/BaseRenderable.md) = [`BaseRenderable`](../../../core/src/classes/BaseRenderable.md)

The specific renderable class type

## Parameters

### ctx

[`RenderContext`](../../../core/src/interfaces/RenderContext.md)

### options

`any`

## Returns

`TRenderable`
