[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / TreeSitterClient

# Class: TreeSitterClient

## Extends

- `EventEmitter`\<[`TreeSitterClientEvents`](../interfaces/TreeSitterClientEvents.md)\>

## Constructors

### Constructor

> **new TreeSitterClient**(`options`): `TreeSitterClient`

#### Parameters

##### options

[`TreeSitterClientOptions`](../interfaces/TreeSitterClientOptions.md)

#### Returns

`TreeSitterClient`

#### Overrides

`EventEmitter<TreeSitterClientEvents>.constructor`

## Methods

### addFiletypeParser()

> **addFiletypeParser**(`filetypeParser`): `void`

#### Parameters

##### filetypeParser

[`FiletypeParserOptions`](../interfaces/FiletypeParserOptions.md)

#### Returns

`void`

***

### clearCache()

> **clearCache**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### createBuffer()

> **createBuffer**(`id`, `content`, `filetype`, `version`, `autoInitialize`): `Promise`\<`boolean`\>

#### Parameters

##### id

`number`

##### content

`string`

##### filetype

`string`

##### version

`number` = `1`

##### autoInitialize

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### getAllBuffers()

> **getAllBuffers**(): [`BufferState`](../interfaces/BufferState.md)[]

#### Returns

[`BufferState`](../interfaces/BufferState.md)[]

***

### getBuffer()

> **getBuffer**(`bufferId`): [`BufferState`](../interfaces/BufferState.md)

#### Parameters

##### bufferId

`number`

#### Returns

[`BufferState`](../interfaces/BufferState.md)

***

### getPerformance()

> **getPerformance**(): `Promise`\<[`PerformanceStats`](../interfaces/PerformanceStats.md)\>

#### Returns

`Promise`\<[`PerformanceStats`](../interfaces/PerformanceStats.md)\>

***

### highlightOnce()

> **highlightOnce**(`content`, `filetype`): `Promise`\<\{ `error?`: `string`; `highlights?`: [`SimpleHighlight`](../type-aliases/SimpleHighlight.md)[]; `warning?`: `string`; \}\>

#### Parameters

##### content

`string`

##### filetype

`string`

#### Returns

`Promise`\<\{ `error?`: `string`; `highlights?`: [`SimpleHighlight`](../type-aliases/SimpleHighlight.md)[]; `warning?`: `string`; \}\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### isInitialized()

> **isInitialized**(): `boolean`

#### Returns

`boolean`

***

### preloadParser()

> **preloadParser**(`filetype`): `Promise`\<`boolean`\>

#### Parameters

##### filetype

`string`

#### Returns

`Promise`\<`boolean`\>

***

### removeBuffer()

> **removeBuffer**(`bufferId`): `Promise`\<`void`\>

#### Parameters

##### bufferId

`number`

#### Returns

`Promise`\<`void`\>

***

### resetBuffer()

> **resetBuffer**(`bufferId`, `version`, `content`): `Promise`\<`void`\>

#### Parameters

##### bufferId

`number`

##### version

`number`

##### content

`string`

#### Returns

`Promise`\<`void`\>

***

### setDataPath()

> **setDataPath**(`dataPath`): `Promise`\<`void`\>

#### Parameters

##### dataPath

`string`

#### Returns

`Promise`\<`void`\>

***

### updateBuffer()

> **updateBuffer**(`id`, `edits`, `newContent`, `version`): `Promise`\<`void`\>

#### Parameters

##### id

`number`

##### edits

[`Edit`](../interfaces/Edit.md)[]

##### newContent

`string`

##### version

`number`

#### Returns

`Promise`\<`void`\>
