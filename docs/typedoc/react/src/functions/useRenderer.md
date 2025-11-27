[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / useRenderer

# Function: useRenderer()

> **useRenderer**(): `any`

Hook for accessing the CLI renderer instance.

Returns the active CLI renderer that is responsible for drawing the terminal UI.
This hook must be used within a component rendered by createRoot.

## Returns

`any`

The CLI renderer instance

## Throws

If called outside of a renderer context

## Example

```tsx
function MyComponent() {
  const renderer = useRenderer()

  // Access renderer properties
  console.log('Terminal size:', renderer.width, renderer.height)

  return <text>Renderer ready</text>
}
```
