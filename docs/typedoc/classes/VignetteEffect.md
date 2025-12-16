[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / VignetteEffect

# Class: VignetteEffect

Applies a vignette effect by darkening the corners, optimized with precomputation.

## Constructors

### Constructor

> **new VignetteEffect**(`strength`): `VignetteEffect`

#### Parameters

##### strength

`number` = `0.5`

#### Returns

`VignetteEffect`

## Accessors

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

## Methods

### apply()

> **apply**(`buffer`): `void`

Applies the vignette effect using precomputed base attenuation and current strength.

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`
