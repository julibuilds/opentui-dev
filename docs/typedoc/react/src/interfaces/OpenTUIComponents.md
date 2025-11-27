[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / OpenTUIComponents

# Interface: OpenTUIComponents

Global augmentation interface for extended components.

Use TypeScript module augmentation to add custom components to this interface,
which will automatically add them to JSX.IntrinsicElements for proper type checking.

## Example

```tsx
// In your .d.ts file
declare module '@opentui/react' {
  interface OpenTUIComponents {
    'custom-button': typeof CustomButtonRenderable
    'special-box': typeof SpecialBoxRenderable
  }
}
```

## Indexable

\[`componentName`: `string`\]: [`RenderableConstructor`](../type-aliases/RenderableConstructor.md)\<[`BaseRenderable`](../../../core/src/classes/BaseRenderable.md)\>
