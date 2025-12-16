[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / SyntaxStyle

# Class: SyntaxStyle

## Constructors

### Constructor

> **new SyntaxStyle**(`lib`, `ptr`): `SyntaxStyle`

#### Parameters

##### lib

[`RenderLib`](../interfaces/RenderLib.md)

##### ptr

`Pointer`

#### Returns

`SyntaxStyle`

## Accessors

### ptr

#### Get Signature

> **get** **ptr**(): `Pointer`

##### Returns

`Pointer`

## Methods

### clearCache()

> **clearCache**(): `void`

#### Returns

`void`

***

### clearNameCache()

> **clearNameCache**(): `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getAllStyles()

> **getAllStyles**(): `Map`\<`string`, [`StyleDefinition`](../interfaces/StyleDefinition.md)\>

#### Returns

`Map`\<`string`, [`StyleDefinition`](../interfaces/StyleDefinition.md)\>

***

### getCacheSize()

> **getCacheSize**(): `number`

#### Returns

`number`

***

### getRegisteredNames()

> **getRegisteredNames**(): `string`[]

#### Returns

`string`[]

***

### getStyle()

> **getStyle**(`name`): [`StyleDefinition`](../interfaces/StyleDefinition.md)

#### Parameters

##### name

`string`

#### Returns

[`StyleDefinition`](../interfaces/StyleDefinition.md)

***

### getStyleCount()

> **getStyleCount**(): `number`

#### Returns

`number`

***

### getStyleId()

> **getStyleId**(`name`): `number`

#### Parameters

##### name

`string`

#### Returns

`number`

***

### mergeStyles()

> **mergeStyles**(...`styleNames`): [`MergedStyle`](../interfaces/MergedStyle.md)

#### Parameters

##### styleNames

...`string`[]

#### Returns

[`MergedStyle`](../interfaces/MergedStyle.md)

***

### registerStyle()

> **registerStyle**(`name`, `style`): `number`

#### Parameters

##### name

`string`

##### style

[`StyleDefinition`](../interfaces/StyleDefinition.md)

#### Returns

`number`

***

### resolveStyleId()

> **resolveStyleId**(`name`): `number`

#### Parameters

##### name

`string`

#### Returns

`number`

***

### create()

> `static` **create**(): `SyntaxStyle`

#### Returns

`SyntaxStyle`

***

### fromStyles()

> `static` **fromStyles**(`styles`): `SyntaxStyle`

#### Parameters

##### styles

`Record`\<`string`, [`StyleDefinition`](../interfaces/StyleDefinition.md)\>

#### Returns

`SyntaxStyle`

***

### fromTheme()

> `static` **fromTheme**(`theme`): `SyntaxStyle`

#### Parameters

##### theme

[`ThemeTokenStyle`](../interfaces/ThemeTokenStyle.md)[]

#### Returns

`SyntaxStyle`
