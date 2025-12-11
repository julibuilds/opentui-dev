[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / DistortionEffect

# Class: DistortionEffect

## Constructors

### Constructor

> **new DistortionEffect**(`options?`): `DistortionEffect`

#### Parameters

##### options?

`Partial`\<`DistortionEffect`\>

#### Returns

`DistortionEffect`

## Properties

### colorGlitchChance

> **colorGlitchChance**: `number` = `0.2`

***

### glitchChancePerSecond

> **glitchChancePerSecond**: `number` = `0.5`

***

### maxGlitchDuration

> **maxGlitchDuration**: `number` = `0.2`

***

### maxGlitchLines

> **maxGlitchLines**: `number` = `3`

***

### maxShiftAmount

> **maxShiftAmount**: `number` = `10`

***

### minGlitchDuration

> **minGlitchDuration**: `number` = `0.05`

***

### shiftFlipRatio

> **shiftFlipRatio**: `number` = `0.6`

## Methods

### apply()

> **apply**(`buffer`, `deltaTime`): `void`

Applies the animated distortion/glitch effect to the buffer.

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`
