[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / Selection

# Class: Selection

## Constructors

### Constructor

> **new Selection**(`anchorRenderable`, `anchor`, `focus`): `Selection`

#### Parameters

##### anchorRenderable

[`Renderable`](Renderable.md)

##### anchor

###### x

`number`

###### y

`number`

##### focus

###### x

`number`

###### y

`number`

#### Returns

`Selection`

## Accessors

### anchor

#### Get Signature

> **get** **anchor**(): `object`

##### Returns

`object`

###### x

> **x**: `number`

###### y

> **y**: `number`

***

### bounds

#### Get Signature

> **get** **bounds**(): [`ViewportBounds`](../interfaces/ViewportBounds.md)

##### Returns

[`ViewportBounds`](../interfaces/ViewportBounds.md)

***

### focus

#### Get Signature

> **get** **focus**(): `object`

##### Returns

`object`

###### x

> **x**: `number`

###### y

> **y**: `number`

#### Set Signature

> **set** **focus**(`value`): `void`

##### Parameters

###### value

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### isActive

#### Get Signature

> **get** **isActive**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **isActive**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isSelecting

#### Get Signature

> **get** **isSelecting**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **isSelecting**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### selectedRenderables

#### Get Signature

> **get** **selectedRenderables**(): [`Renderable`](Renderable.md)[]

##### Returns

[`Renderable`](Renderable.md)[]

***

### touchedRenderables

#### Get Signature

> **get** **touchedRenderables**(): [`Renderable`](Renderable.md)[]

##### Returns

[`Renderable`](Renderable.md)[]

## Methods

### getSelectedText()

> **getSelectedText**(): `string`

#### Returns

`string`

***

### updateSelectedRenderables()

> **updateSelectedRenderables**(`selectedRenderables`): `void`

#### Parameters

##### selectedRenderables

[`Renderable`](Renderable.md)[]

#### Returns

`void`

***

### updateTouchedRenderables()

> **updateTouchedRenderables**(`touchedRenderables`): `void`

#### Parameters

##### touchedRenderables

[`Renderable`](Renderable.md)[]

#### Returns

`void`
