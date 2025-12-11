[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / MacOSScrollAccel

# Class: MacOSScrollAccel

macOS-inspired scroll acceleration.

The class measures the time between consecutive scroll events and keeps a short
moving window of the latest intervals. The average interval determines which
multiplier to apply so that quick bursts accelerate and slower gestures stay precise.

For intuition, treat the streak as a continuous timeline and compare it with the
exponential distance curve from the pointer-acceleration research post:
  d(t) = v₀ * ( t + A * (exp(t/τ) - 1 - t/τ) ).
Small t stays near the base multiplier, medium streaks settle on multiplier1, and
sustained bursts reach multiplier2, mirroring how the exponential curve bends up.

Options:
- threshold1: upper bound (ms) of the "medium" band. Raise to delay the ramp.
- threshold2: upper bound (ms) of the "fast" band. Lower to demand tighter bursts.
- multiplier1: scale for medium speed streaks.
- multiplier2: scale for sustained fast streaks.
- baseMultiplier: scale for relaxed scrolling; set to 1 for linear behaviour.

## Implements

- [`ScrollAcceleration`](../interfaces/ScrollAcceleration.md)

## Constructors

### Constructor

> **new MacOSScrollAccel**(`opts`): `MacOSScrollAccel`

#### Parameters

##### opts

###### A?

`number`

###### maxMultiplier?

`number`

###### tau?

`number`

#### Returns

`MacOSScrollAccel`

## Methods

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Implementation of

[`ScrollAcceleration`](../interfaces/ScrollAcceleration.md).[`reset`](../interfaces/ScrollAcceleration.md#reset)

***

### tick()

> **tick**(`now`): `number`

#### Parameters

##### now

`number` = `...`

#### Returns

`number`

#### Implementation of

[`ScrollAcceleration`](../interfaces/ScrollAcceleration.md).[`tick`](../interfaces/ScrollAcceleration.md#tick)
