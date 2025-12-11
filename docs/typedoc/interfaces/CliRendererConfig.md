[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / CliRendererConfig

# Interface: CliRendererConfig

Configuration options for [createCliRenderer](../functions/createCliRenderer.md).

## Properties

### backgroundColor?

> `optional` **backgroundColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Background color for the renderer

***

### consoleOptions?

> `optional` **consoleOptions**: [`ConsoleOptions`](ConsoleOptions.md)

Console configuration options

***

### debounceDelay?

> `optional` **debounceDelay**: `number`

Debounce delay for input events in milliseconds

***

### enableMouseMovement?

> `optional` **enableMouseMovement**: `boolean`

Whether to enable mouse movement tracking (default: false)

***

### exitOnCtrlC?

> `optional` **exitOnCtrlC**: `boolean`

Whether to automatically exit the process when Ctrl+C is pressed (default: false)

***

### exitSignals?

> `optional` **exitSignals**: `Signals`[]

Additional signals to listen for to trigger process exit

***

### experimental\_splitHeight?

> `optional` **experimental\_splitHeight**: `number`

Experimental: Split screen height for console/renderer

***

### gatherStats?

> `optional` **gatherStats**: `boolean`

Whether to gather rendering statistics (default: false)

***

### maxFps?

> `optional` **maxFps**: `number`

Maximum frames per second cap

***

### maxStatSamples?

> `optional` **maxStatSamples**: `number`

Maximum number of stat samples to keep

***

### memorySnapshotInterval?

> `optional` **memorySnapshotInterval**: `number`

Interval for memory snapshots in milliseconds

***

### onDestroy()?

> `optional` **onDestroy**: () => `void`

Callback invoked when the renderer is destroyed

#### Returns

`void`

***

### openConsoleOnError?

> `optional` **openConsoleOnError**: `boolean`

Whether to open console automatically on errors (default: true)

***

### postProcessFns?

> `optional` **postProcessFns**: (`buffer`, `deltaTime`) => `void`[]

Post-processing functions to apply to the buffer each frame

#### Parameters

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

***

### prependInputHandlers?

> `optional` **prependInputHandlers**: (`sequence`) => `boolean`[]

Input handlers that will be prepended to the handler chain

#### Parameters

##### sequence

`string`

#### Returns

`boolean`

***

### stdin?

> `optional` **stdin**: `ReadStream`

Input stream for reading terminal input (defaults to process.stdin)

***

### stdout?

> `optional` **stdout**: `WriteStream`

Output stream for writing terminal output (defaults to process.stdout)

***

### targetFps?

> `optional` **targetFps**: `number`

Target frames per second for the render loop (default: 30)

***

### useAlternateScreen?

> `optional` **useAlternateScreen**: `boolean`

Whether to use the terminal's alternate screen buffer (default: true)

***

### useConsole?

> `optional` **useConsole**: `boolean`

Whether to enable the debug console (default: true)

***

### useKittyKeyboard?

> `optional` **useKittyKeyboard**: `object`

Kitty keyboard protocol configuration.

#### events?

> `optional` **events**: `boolean`

Enable event types (press/repeat/release)

#### Remarks

Set to null to disable, or provide configuration object to enable.
When enabled, provides enhanced key handling with event types.

***

### useMouse?

> `optional` **useMouse**: `boolean`

Whether to enable mouse input (default: true)

***

### useThread?

> `optional` **useThread**: `boolean`

Whether to use threading for rendering (default: true, auto-disabled on Linux)
