[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / BlurEffect

# Class: BlurEffect

Applies a simple box blur. (Expensive and may look bad with text).

## Constructors

### Constructor

> **new BlurEffect**(`radius`): `BlurEffect`

#### Parameters

##### radius

`number` = `1`

#### Returns

`BlurEffect`

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

## Methods

### apply()

> **apply**(`buffer`): `void`

Applies an optimized separable box blur using a moving average (sliding window).

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`
