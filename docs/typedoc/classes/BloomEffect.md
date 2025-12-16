[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / BloomEffect

# Class: BloomEffect

Applies a bloom effect based on bright areas (Simplified).

## Constructors

### Constructor

> **new BloomEffect**(`threshold`, `strength`, `radius`): `BloomEffect`

#### Parameters

##### threshold

`number` = `0.8`

##### strength

`number` = `0.2`

##### radius

`number` = `2`

#### Returns

`BloomEffect`

## Accessors

### radius

#### Get Signature

> **get** **radius**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **radius**(`newRadius`): `void`

##### Parameters

###### newRadius

`number`

##### Returns

`void`

***

### strength

#### Get Signature

> **get** **strength**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **strength**(`newStrength`): `void`

##### Parameters

###### newStrength

`number`

##### Returns

`void`

***

### threshold

#### Get Signature

> **get** **threshold**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **threshold**(`newThreshold`): `void`

##### Parameters

###### newThreshold

`number`

##### Returns

`void`

## Methods

### apply()

> **apply**(`buffer`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`
