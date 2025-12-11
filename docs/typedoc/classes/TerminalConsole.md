[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / TerminalConsole

# Class: TerminalConsole

## Extends

- `EventEmitter`

## Constructors

### Constructor

> **new TerminalConsole**(`renderer`, `options`): `TerminalConsole`

#### Parameters

##### renderer

[`CliRenderer`](CliRenderer.md)

##### options

[`ConsoleOptions`](../interfaces/ConsoleOptions.md) = `{}`

#### Returns

`TerminalConsole`

#### Overrides

`EventEmitter.constructor`

## Methods

### activate()

> **activate**(): `void`

#### Returns

`void`

***

### blur()

> **blur**(): `void`

#### Returns

`void`

***

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### deactivate()

> **deactivate**(): `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### focus()

> **focus**(): `void`

#### Returns

`void`

***

### getCachedLogs()

> **getCachedLogs**(): `string`

#### Returns

`string`

***

### hide()

> **hide**(): `void`

#### Returns

`void`

***

### renderToBuffer()

> **renderToBuffer**(`buffer`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`

***

### resize()

> **resize**(`width`, `height`): `void`

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### setDebugMode()

> **setDebugMode**(`enabled`): `void`

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### show()

> **show**(): `void`

#### Returns

`void`

***

### toggle()

> **toggle**(): `void`

#### Returns

`void`

***

### toggleDebugMode()

> **toggleDebugMode**(): `void`

#### Returns

`void`
