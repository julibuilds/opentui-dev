[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / createRoot

# Function: createRoot()

> **createRoot**(`renderer`): [`Root`](../type-aliases/Root.md)

Creates a root for rendering a React tree in the terminal.

This is the main entry point for rendering OpenTUI React applications. It creates a root
that manages the React component tree and connects it to the CLI renderer for terminal output.
The root provides methods to render components and clean up when done.

## Parameters

### renderer

[`CliRenderer`](../../../core/src/classes/CliRenderer.md)

The CLI renderer instance to use for drawing to the terminal

## Returns

[`Root`](../type-aliases/Root.md)

A root object with `render` and `unmount` methods

## Examples

```tsx
import { createCliRenderer } from '@opentui/core'
import { createRoot } from '@opentui/react'

const renderer = await createCliRenderer()
const root = createRoot(renderer)

root.render(<App />)

// Later, to clean up
root.unmount()
```

```tsx
// Typical usage in an application entry point
async function main() {
  const renderer = await createCliRenderer()
  const root = createRoot(renderer)

  root.render(
    <box>
      <text>Hello OpenTUI!</text>
    </box>
  )
}

main()
```
