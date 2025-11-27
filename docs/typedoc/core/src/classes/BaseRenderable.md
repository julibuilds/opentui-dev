[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / BaseRenderable

# Abstract Class: BaseRenderable

Abstract base class for all renderables in OpenTUI.
Provides the minimal interface for objects that can be part of the render tree.

## Remarks

This class is typically not used directly. Use [Renderable](Renderable.md) instead,
which provides full layout and rendering capabilities.

## Extends

- `EventEmitter`

## Extended by

- [`Renderable`](Renderable.md)
- [`TextNodeRenderable`](TextNodeRenderable.md)

## Constructors

### Constructor

> **new BaseRenderable**(`options`): `BaseRenderable`

#### Parameters

##### options

[`BaseRenderableOptions`](../interfaces/BaseRenderableOptions.md)

#### Returns

`BaseRenderable`

#### Overrides

`EventEmitter.constructor`

## Properties

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

***

### \_id

> `protected` **\_id**: `string`

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

***

### num

> `readonly` **num**: `number`

***

### parent

> **parent**: `BaseRenderable` = `null`

## Accessors

### id

#### Get Signature

> **get** **id**(): `string`

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

##### Parameters

###### value

`string`

##### Returns

`void`

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### add()

> `abstract` **add**(`obj`, `index?`): `number`

#### Parameters

##### obj

`unknown`

##### index?

`number`

#### Returns

`number`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

***

### findDescendantById()

> `abstract` **findDescendantById**(`id`): `BaseRenderable`

#### Parameters

##### id

`string`

#### Returns

`BaseRenderable`

***

### getChildren()

> `abstract` **getChildren**(): `BaseRenderable`[]

#### Returns

`BaseRenderable`[]

***

### getChildrenCount()

> `abstract` **getChildrenCount**(): `number`

#### Returns

`number`

***

### getRenderable()

> `abstract` **getRenderable**(`id`): `BaseRenderable`

#### Parameters

##### id

`string`

#### Returns

`BaseRenderable`

***

### insertBefore()

> `abstract` **insertBefore**(`obj`, `anchor`): `void`

#### Parameters

##### obj

`unknown`

##### anchor

`unknown`

#### Returns

`void`

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

***

### remove()

> `abstract` **remove**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

***

### requestRender()

> `abstract` **requestRender**(): `void`

#### Returns

`void`
