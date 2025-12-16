[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / KeyEvent

# Class: KeyEvent

## Implements

- [`ParsedKey`](../interfaces/ParsedKey.md)

## Constructors

### Constructor

> **new KeyEvent**(`key`): `KeyEvent`

#### Parameters

##### key

[`ParsedKey`](../interfaces/ParsedKey.md)

#### Returns

`KeyEvent`

## Properties

### baseCode?

> `optional` **baseCode**: `number`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`baseCode`](../interfaces/ParsedKey.md#basecode)

***

### capsLock?

> `optional` **capsLock**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`capsLock`](../interfaces/ParsedKey.md#capslock)

***

### code?

> `optional` **code**: `string`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`code`](../interfaces/ParsedKey.md#code)

***

### ctrl

> **ctrl**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`ctrl`](../interfaces/ParsedKey.md#ctrl)

***

### eventType

> **eventType**: [`KeyEventType`](../type-aliases/KeyEventType.md)

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`eventType`](../interfaces/ParsedKey.md#eventtype)

***

### hyper?

> `optional` **hyper**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`hyper`](../interfaces/ParsedKey.md#hyper)

***

### meta

> **meta**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`meta`](../interfaces/ParsedKey.md#meta)

***

### name

> **name**: `string`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`name`](../interfaces/ParsedKey.md#name)

***

### number

> **number**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`number`](../interfaces/ParsedKey.md#number)

***

### numLock?

> `optional` **numLock**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`numLock`](../interfaces/ParsedKey.md#numlock)

***

### option

> **option**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`option`](../interfaces/ParsedKey.md#option)

***

### raw

> **raw**: `string`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`raw`](../interfaces/ParsedKey.md#raw)

***

### repeated?

> `optional` **repeated**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`repeated`](../interfaces/ParsedKey.md#repeated)

***

### sequence

> **sequence**: `string`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`sequence`](../interfaces/ParsedKey.md#sequence)

***

### shift

> **shift**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`shift`](../interfaces/ParsedKey.md#shift)

***

### source

> **source**: `"raw"` \| `"kitty"`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`source`](../interfaces/ParsedKey.md#source)

***

### super?

> `optional` **super**: `boolean`

#### Implementation of

[`ParsedKey`](../interfaces/ParsedKey.md).[`super`](../interfaces/ParsedKey.md#super)

## Accessors

### defaultPrevented

#### Get Signature

> **get** **defaultPrevented**(): `boolean`

##### Returns

`boolean`

## Methods

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`
