[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / createCliRenderer

# Function: createCliRenderer()

> **createCliRenderer**(`config`): `Promise`\<[`CliRenderer`](../classes/CliRenderer.md)\>

Creates and initializes a CLI renderer instance.

## Parameters

### config

[`CliRendererConfig`](../interfaces/CliRendererConfig.md) = `{}`

Configuration options for the renderer

## Returns

`Promise`\<[`CliRenderer`](../classes/CliRenderer.md)\>

A promise that resolves to an initialized CliRenderer instance

## Remarks

This is the primary entry point for creating a terminal UI application with OpenTUI.
The renderer manages the terminal state, handles input/output, and coordinates
rendering of all UI components.

## Example

```ts
import { createCliRenderer, BoxRenderable } from "@opentui/core"

// Create a basic renderer
const renderer = await createCliRenderer({
  exitOnCtrlC: true,
  targetFps: 60
})

// Add UI components
const box = new BoxRenderable(renderer, {
  width: 20,
  height: 10,
  backgroundColor: "#FF6B6B"
})
renderer.root.add(box)

// Start the render loop
renderer.start()
```
