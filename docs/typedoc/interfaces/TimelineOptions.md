[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / TimelineOptions

# Interface: TimelineOptions

Configuration options for [Timeline](../classes/Timeline.md).

## Properties

### autoplay?

> `optional` **autoplay**: `boolean`

Whether to start playing immediately upon creation

***

### duration?

> `optional` **duration**: `number`

Total duration of the timeline in milliseconds

***

### loop?

> `optional` **loop**: `boolean`

Whether the timeline should loop indefinitely

***

### onComplete()?

> `optional` **onComplete**: () => `void`

Callback invoked when the timeline completes

#### Returns

`void`

***

### onPause()?

> `optional` **onPause**: () => `void`

Callback invoked when the timeline is paused

#### Returns

`void`
