[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / useOnResize

# Function: useOnResize()

> **useOnResize**(`callback`): `any`

Hook for responding to terminal resize events.

Registers a callback that is invoked whenever the terminal window is resized.
The callback receives the new width and height dimensions. The handler is automatically
cleaned up when the component unmounts.

## Parameters

### callback

(`width`, `height`) => `void`

Function called with new dimensions when terminal is resized

## Returns

`any`

The CLI renderer instance

## Example

```tsx
function MyComponent() {
  useOnResize((width, height) => {
    console.log('Terminal resized to:', width, 'x', height)
  })

  return <text>Resize the terminal to see updates</text>
}
```
