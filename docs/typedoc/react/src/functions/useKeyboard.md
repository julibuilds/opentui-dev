[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / useKeyboard

# Function: useKeyboard()

> **useKeyboard**(`handler`): `void`

Hook for handling keyboard input events in the terminal.

Registers a handler for keypress events that is automatically cleaned up when the component unmounts.
The handler receives a KeyEvent object containing information about the pressed key.

## Parameters

### handler

(`key`) => `void`

Callback function invoked on each keypress event

## Returns

`void`

## Example

```tsx
function MyComponent() {
  useKeyboard((key) => {
    if (key.key === 'q') {
      process.exit(0)
    }
    console.log('Key pressed:', key.key)
  })

  return <text>Press any key...</text>
}
```
