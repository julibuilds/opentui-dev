[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / AnimationOptions

# Interface: AnimationOptions

Configuration options for individual animations within a [Timeline](../classes/Timeline.md).

## Remarks

This interface allows you to specify animation properties along with
custom numeric properties to animate. Any numeric property can be animated
by including it in the options object.

## Indexable

\[`key`: `string`\]: `any`

Additional numeric properties to animate

## Properties

### alternate?

> `optional` **alternate**: `boolean`

Whether to alternate direction on each loop

***

### duration

> **duration**: `number`

Duration of the animation in milliseconds

***

### ease?

> `optional` **ease**: `"linear"` \| `"inQuad"` \| `"outQuad"` \| `"inOutQuad"` \| `"inExpo"` \| `"outExpo"` \| `"inOutSine"` \| `"outBounce"` \| `"outElastic"` \| `"inBounce"` \| `"inCirc"` \| `"outCirc"` \| `"inOutCirc"` \| `"inBack"` \| `"outBack"` \| `"inOutBack"`

Easing function to apply

***

### loop?

> `optional` **loop**: `number` \| `boolean`

Number of times to loop (true = infinite, number = specific count)

***

### loopDelay?

> `optional` **loopDelay**: `number`

Delay between loop iterations in milliseconds

***

### once?

> `optional` **once**: `boolean`

If true, animation is removed from timeline after completion

***

### onComplete()?

> `optional` **onComplete**: () => `void`

Callback invoked when animation completes

#### Returns

`void`

***

### onLoop()?

> `optional` **onLoop**: () => `void`

Callback invoked on each loop iteration

#### Returns

`void`

***

### onStart()?

> `optional` **onStart**: () => `void`

Callback invoked when animation starts

#### Returns

`void`

***

### onUpdate()?

> `optional` **onUpdate**: (`animation`) => `void`

Callback invoked on each animation frame

#### Parameters

##### animation

[`JSAnimation`](JSAnimation.md)

#### Returns

`void`
