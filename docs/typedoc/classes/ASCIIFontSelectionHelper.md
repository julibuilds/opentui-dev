[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / ASCIIFontSelectionHelper

# Class: ASCIIFontSelectionHelper

## Constructors

### Constructor

> **new ASCIIFontSelectionHelper**(`getText`, `getFont`): `ASCIIFontSelectionHelper`

#### Parameters

##### getText

() => `string`

##### getFont

() => `"block"` \| `"tiny"` \| `"shade"` \| `"slick"` \| `"huge"` \| `"grid"` \| `"pallet"`

#### Returns

`ASCIIFontSelectionHelper`

## Methods

### getSelection()

> **getSelection**(): `object`

#### Returns

`object`

##### end

> **end**: `number`

##### start

> **start**: `number`

***

### hasSelection()

> **hasSelection**(): `boolean`

#### Returns

`boolean`

***

### onLocalSelectionChanged()

> **onLocalSelectionChanged**(`localSelection`, `width`, `height`): `boolean`

#### Parameters

##### localSelection

[`LocalSelectionBounds`](../interfaces/LocalSelectionBounds.md)

##### width

`number`

##### height

`number`

#### Returns

`boolean`

***

### shouldStartSelection()

> **shouldStartSelection**(`localX`, `localY`, `width`, `height`): `boolean`

#### Parameters

##### localX

`number`

##### localY

`number`

##### width

`number`

##### height

`number`

#### Returns

`boolean`
