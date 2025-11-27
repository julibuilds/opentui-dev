[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / StdinBuffer

# Class: StdinBuffer

Buffers stdin input and emits complete sequences via the 'data' event.
Handles partial escape sequences that arrive across multiple chunks.

## Extends

- `EventEmitter`\<[`StdinBufferEventMap`](../type-aliases/StdinBufferEventMap.md)\>

## Constructors

### Constructor

> **new StdinBuffer**(`options`): `StdinBuffer`

#### Parameters

##### options

[`StdinBufferOptions`](../type-aliases/StdinBufferOptions.md) = `{}`

#### Returns

`StdinBuffer`

#### Overrides

`EventEmitter<StdinBufferEventMap>.constructor`

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### flush()

> **flush**(): `string`[]

#### Returns

`string`[]

***

### getBuffer()

> **getBuffer**(): `string`

#### Returns

`string`

***

### process()

> **process**(`data`): `void`

#### Parameters

##### data

`string` | `Buffer`\<`ArrayBufferLike`\>

#### Returns

`void`
