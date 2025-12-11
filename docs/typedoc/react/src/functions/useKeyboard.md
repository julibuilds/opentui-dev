[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / useKeyboard

# Function: useKeyboard()

> **useKeyboard**(`handler`, `options`): `void`

Hook for handling keyboard input events in the terminal.

## Parameters

### handler

(`key`) => `void`

Callback function invoked on each keypress event

### options

[`UseKeyboardOptions`](../interfaces/UseKeyboardOptions.md) = `...`

Configuration options for keyboard handling

## Returns

`void`

## Remarks

Registers a handler for keypress events that is automatically cleaned up when the component unmounts.
The handler receives a KeyEvent object containing information about the pressed key.

By default, only receives press events (including key repeats with `repeated: true`).
Use `options.release` to also receive release events.

## Example

```tsx
// Basic press handling (includes repeats)
function MyComponent() {
  useKeyboard((key) => {
    if (key.key === 'q') {
      process.exit(0)
    }
    console.log('Key pressed:', key.key, key.repeated ? "(repeat)" : "")
  })

  return <text>Press any key...</text>
}

// With release events
function KeyTracker() {
  const [keys, setKeys] = useState(new Set<string>())

  useKeyboard((e) => {
    if (e.eventType === "release") keys.delete(e.name)
    else keys.add(e.name)
    setKeys(new Set(keys))
  }, { release: true })

  return <text>Active keys: {[...keys].join(', ')}</text>
}
```
