[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / useTerminalDimensions

# Function: useTerminalDimensions()

> **useTerminalDimensions**(): `object`

Hook for tracking terminal dimensions with automatic updates on resize.

Returns an object containing the current width and height of the terminal.
The dimensions are automatically updated when the terminal is resized, triggering
a re-render of the component.

## Returns

`object`

Object containing current terminal width and height

### height

> **height**: `number`

### width

> **width**: `number`

## Example

```tsx
function MyComponent() {
  const { width, height } = useTerminalDimensions()

  return (
    <box>
      <text>Terminal size: {width} x {height}</text>
    </box>
  )
}
```
