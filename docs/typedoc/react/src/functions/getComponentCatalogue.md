[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / getComponentCatalogue

# Function: getComponentCatalogue()

> **getComponentCatalogue**(): `ComponentCatalogue`

Returns the current component catalogue.

Provides access to the internal mapping of component names to their renderable constructors.
This includes both built-in components and any custom components added via `extend()`.

## Returns

`ComponentCatalogue`

Object containing all registered component constructors

## Example

```tsx
const catalogue = getComponentCatalogue()
console.log(Object.keys(catalogue)) // ['box', 'text', 'input', ...]
```
