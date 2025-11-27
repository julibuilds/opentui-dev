[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / RGBA

# Class: RGBA

Represents an RGBA color with values stored as floats (0.0 to 1.0).
This is the primary color type used throughout OpenTUI.

## Remarks

RGBA stores colors using normalized float values (0.0-1.0) for better performance
in the native rendering backend. The class provides multiple construction methods
and utilities for color manipulation.

## Example

```ts
// Create colors using various methods
const red = RGBA.fromValues(1, 0, 0, 1)
const blue = RGBA.fromInts(0, 0, 255)
const green = RGBA.fromHex("#00ff00")
const semi = RGBA.fromValues(1, 1, 1, 0.5)  // Semi-transparent white

// Modify color components
const color = RGBA.fromValues(1, 0, 0, 1)
color.a = 0.5  // Make it semi-transparent

// Convert to different formats
const [r, g, b, a] = color.toInts()  // Get as 0-255 integers
```

## Constructors

### Constructor

> **new RGBA**(`buffer`): `RGBA`

#### Parameters

##### buffer

`Float32Array`

#### Returns

`RGBA`

## Properties

### buffer

> **buffer**: `Float32Array`

Internal buffer storing [r, g, b, a] as floats

## Accessors

### a

#### Get Signature

> **get** **a**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **a**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### b

#### Get Signature

> **get** **b**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **b**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### g

#### Get Signature

> **get** **g**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **g**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### r

#### Get Signature

> **get** **r**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **r**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### map()

> **map**\<`R`\>(`fn`): `R`[]

#### Type Parameters

##### R

`R`

#### Parameters

##### fn

(`value`) => `R`

#### Returns

`R`[]

***

### toInts()

> **toInts**(): \[`number`, `number`, `number`, `number`\]

#### Returns

\[`number`, `number`, `number`, `number`\]

***

### toString()

> **toString**(): `string`

#### Returns

`string`

***

### fromArray()

> `static` **fromArray**(`array`): `RGBA`

Creates an RGBA color from a Float32Array buffer.

#### Parameters

##### array

`Float32Array`

Float32Array containing [r, g, b, a] values (0.0-1.0)

#### Returns

`RGBA`

A new RGBA instance

***

### fromHex()

> `static` **fromHex**(`hex`): `RGBA`

Creates an RGBA color from a hexadecimal string.

#### Parameters

##### hex

`string`

Hex color string (with or without #, supports 3, 4, 6, or 8 digit formats)

#### Returns

`RGBA`

A new RGBA instance

#### Example

```ts
const red = RGBA.fromHex("#ff0000")
const shortRed = RGBA.fromHex("#f00")
const withAlpha = RGBA.fromHex("#ff0000cc")
```

***

### fromInts()

> `static` **fromInts**(`r`, `g`, `b`, `a`): `RGBA`

Creates an RGBA color from integer values (0 to 255).

#### Parameters

##### r

`number`

Red component (0 to 255)

##### g

`number`

Green component (0 to 255)

##### b

`number`

Blue component (0 to 255)

##### a

`number` = `255`

Alpha component (0 to 255, default: 255 = opaque)

#### Returns

`RGBA`

A new RGBA instance

#### Example

```ts
const red = RGBA.fromInts(255, 0, 0)
const semiTransparent = RGBA.fromInts(128, 128, 128, 128)
```

***

### fromValues()

> `static` **fromValues**(`r`, `g`, `b`, `a`): `RGBA`

Creates an RGBA color from normalized float values (0.0 to 1.0).

#### Parameters

##### r

`number`

Red component (0.0 to 1.0)

##### g

`number`

Green component (0.0 to 1.0)

##### b

`number`

Blue component (0.0 to 1.0)

##### a

`number` = `1.0`

Alpha component (0.0 to 1.0, default: 1.0 = opaque)

#### Returns

`RGBA`

A new RGBA instance

#### Example

```ts
const red = RGBA.fromValues(1, 0, 0, 1)
const semiTransparentBlue = RGBA.fromValues(0, 0, 1, 0.5)
```
