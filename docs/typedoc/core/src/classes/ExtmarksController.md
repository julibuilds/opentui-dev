[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / ExtmarksController

# Class: ExtmarksController

WARNING: This is simulating extmarks in the edit buffer
and will move to a real native implementation in the future.
Use with caution.

## Constructors

### Constructor

> **new ExtmarksController**(`editBuffer`, `editorView`): `ExtmarksController`

#### Parameters

##### editBuffer

[`EditBuffer`](EditBuffer.md)

##### editorView

[`EditorView`](EditorView.md)

#### Returns

`ExtmarksController`

## Methods

### adjustExtmarksAfterDeletion()

> **adjustExtmarksAfterDeletion**(`deleteOffset`, `length`): `void`

#### Parameters

##### deleteOffset

`number`

##### length

`number`

#### Returns

`void`

***

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### create()

> **create**(`options`): `number`

#### Parameters

##### options

[`ExtmarkOptions`](../interfaces/ExtmarkOptions.md)

#### Returns

`number`

***

### delete()

> **delete**(`id`): `boolean`

#### Parameters

##### id

`number`

#### Returns

`boolean`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### get()

> **get**(`id`): [`Extmark`](../interfaces/Extmark.md)

#### Parameters

##### id

`number`

#### Returns

[`Extmark`](../interfaces/Extmark.md)

***

### getAll()

> **getAll**(): [`Extmark`](../interfaces/Extmark.md)[]

#### Returns

[`Extmark`](../interfaces/Extmark.md)[]

***

### getAllForTypeId()

> **getAllForTypeId**(`typeId`): [`Extmark`](../interfaces/Extmark.md)[]

#### Parameters

##### typeId

`number`

#### Returns

[`Extmark`](../interfaces/Extmark.md)[]

***

### getAtOffset()

> **getAtOffset**(`offset`): [`Extmark`](../interfaces/Extmark.md)[]

#### Parameters

##### offset

`number`

#### Returns

[`Extmark`](../interfaces/Extmark.md)[]

***

### getMetadataFor()

> **getMetadataFor**(`extmarkId`): `any`

#### Parameters

##### extmarkId

`number`

#### Returns

`any`

***

### getTypeId()

> **getTypeId**(`typeName`): `number`

#### Parameters

##### typeName

`string`

#### Returns

`number`

***

### getTypeName()

> **getTypeName**(`typeId`): `string`

#### Parameters

##### typeId

`number`

#### Returns

`string`

***

### getVirtual()

> **getVirtual**(): [`Extmark`](../interfaces/Extmark.md)[]

#### Returns

[`Extmark`](../interfaces/Extmark.md)[]

***

### registerType()

> **registerType**(`typeName`): `number`

#### Parameters

##### typeName

`string`

#### Returns

`number`
