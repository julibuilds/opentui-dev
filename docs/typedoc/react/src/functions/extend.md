[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / extend

# Function: extend()

> **extend**\<`T`\>(`objects`): `void`

Extends the component catalogue with custom renderable components.

This function allows you to register custom renderable classes so they can be used
as JSX elements in your React components. After extending, you should also use
TypeScript module augmentation to add type definitions for the new components.

## Type Parameters

### T

`T` *extends* `ComponentCatalogue`

## Parameters

### objects

`T`

Object mapping component names to their renderable constructors

## Returns

`void`

## Example

```tsx
// Define a custom renderable
class CustomButtonRenderable extends BaseRenderable {
  // ... implementation
}

// Extend the catalogue
extend({
  'custom-button': CustomButtonRenderable,
  'special-box': SpecialBoxRenderable
})

// Add TypeScript types (in a .d.ts file)
declare module '@opentui/react' {
  interface OpenTUIComponents {
    'custom-button': typeof CustomButtonRenderable
  }
}

// Now use in JSX
function App() {
  return <custom-button>Click me</custom-button>
}
```
