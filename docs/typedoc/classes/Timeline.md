[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / Timeline

# Class: Timeline

## Constructors

### Constructor

> **new Timeline**(`options`): `Timeline`

#### Parameters

##### options

[`TimelineOptions`](../interfaces/TimelineOptions.md) = `{}`

#### Returns

`Timeline`

## Properties

### currentTime

> **currentTime**: `number` = `0`

***

### duration

> **duration**: `number`

***

### isComplete

> **isComplete**: `boolean` = `false`

***

### isPlaying

> **isPlaying**: `boolean` = `false`

***

### items

> **items**: (`TimelineAnimationItem` \| `TimelineCallbackItem`)[] = `[]`

***

### loop

> **loop**: `boolean`

***

### subTimelines

> **subTimelines**: `TimelineTimelineItem`[] = `[]`

***

### synced

> **synced**: `boolean` = `false`

## Methods

### add()

> **add**(`target`, `properties`, `startTime`): `this`

Adds an animation to the timeline.

#### Parameters

##### target

`any`

Object or array of objects to animate

##### properties

[`AnimationOptions`](../interfaces/AnimationOptions.md)

Animation configuration and target property values

##### startTime

Time offset in milliseconds when animation should start (default: 0)

`string` | `number`

#### Returns

`this`

The timeline instance for method chaining

#### Remarks

The `add` method is the primary way to create animations. Any numeric property
in the `properties` object will be animated from its current value to the
specified target value. Special properties control animation behavior:
- `duration`: Animation length in milliseconds
- `ease`: Easing function name (e.g., "linear", "inOutQuad", "outBounce")
- `loop`: Number of times to loop (true for infinite, number for count)
- `loopDelay`: Delay between loop iterations in milliseconds
- `alternate`: Reverse direction on each loop iteration
- `onUpdate`: Callback invoked each frame with animation state
- `onComplete`: Callback invoked when animation completes
- `onStart`: Callback invoked when animation starts
- `onLoop`: Callback invoked on each loop iteration

#### Example

```ts
const box = { x: 0, y: 0, opacity: 1 }
const timeline = createTimeline({ duration: 5000 })

// Animate position from current values to x=100, y=50
timeline.add(box, {
  x: 100,
  y: 50,
  duration: 2000,
  ease: "inOutQuad"
})

// Chain another animation starting at 1 second
timeline.add(box, {
  opacity: 0,
  duration: 1000,
  ease: "linear",
  onUpdate: (anim) => {
    console.log("Opacity:", box.opacity)
  }
}, 1000)

// Animate with looping
timeline.add(box, {
  x: 200,
  duration: 500,
  loop: 3,
  alternate: true
}, 3000)
```

***

### addStateChangeListener()

> **addStateChangeListener**(`listener`): `void`

#### Parameters

##### listener

(`timeline`) => `void`

#### Returns

`void`

***

### call()

> **call**(`callback`, `startTime`): `this`

Schedules a callback to execute at a specific time in the timeline.

#### Parameters

##### callback

() => `void`

Function to invoke

##### startTime

Time offset in milliseconds when callback should execute (default: 0)

`string` | `number`

#### Returns

`this`

The timeline instance for method chaining

#### Remarks

Use `call` to trigger side effects at specific points in your animation sequence,
such as playing sounds, updating UI, or triggering other events.

#### Example

```ts
const timeline = createTimeline({ duration: 5000 })

timeline.call(() => {
  console.log("Animation starting!")
}, 0)

timeline.add(box, { x: 100, duration: 2000 })

timeline.call(() => {
  console.log("Halfway through!")
}, 2500)

timeline.call(() => {
  console.log("Animation complete!")
}, 5000)
```

***

### once()

> **once**(`target`, `properties`): `this`

#### Parameters

##### target

`any`

##### properties

[`AnimationOptions`](../interfaces/AnimationOptions.md)

#### Returns

`this`

***

### pause()

> **pause**(): `this`

Pauses timeline playback at the current position.

#### Returns

`this`

The timeline instance for method chaining

#### Remarks

- Timeline state is preserved and can be resumed with [play](#play)
- Also pauses all synced child timelines
- Triggers `onPause` callback if configured

#### Example

```ts
timeline.play()

// Pause after 2 seconds
setTimeout(() => {
  timeline.pause()
}, 2000)

// Resume later
setTimeout(() => {
  timeline.play()
}, 5000)
```

***

### play()

> **play**(): `this`

Starts or resumes timeline playback.

#### Returns

`this`

The timeline instance for method chaining

#### Remarks

- If timeline is complete, automatically restarts from beginning
- If timeline is paused, resumes from current position
- Also resumes any synced child timelines that have started
- Call [update](#update) on each frame to advance the timeline

#### Example

```ts
const timeline = createTimeline({
  duration: 5000,
  autoplay: false
})

timeline.add(box, { x: 100, duration: 2000 })

// Start playback
timeline.play()

// In your render loop
renderer.setFrameCallback(async (deltaTime) => {
  timeline.update(deltaTime)
})
```

***

### removeStateChangeListener()

> **removeStateChangeListener**(`listener`): `void`

#### Parameters

##### listener

(`timeline`) => `void`

#### Returns

`void`

***

### resetItems()

> **resetItems**(): `void`

#### Returns

`void`

***

### restart()

> **restart**(): `this`

#### Returns

`this`

***

### sync()

> **sync**(`timeline`, `startTime`): `this`

Synchronizes a child timeline to start at a specific time in this timeline.

#### Parameters

##### timeline

`Timeline`

Child timeline to synchronize

##### startTime

`number` = `0`

Time offset in milliseconds when child timeline should start (default: 0)

#### Returns

`this`

The timeline instance for method chaining

#### Remarks

Timeline synchronization allows you to compose complex animations by combining
multiple timelines. The child timeline's playback is controlled by the parent:
- Child timeline starts when parent reaches `startTime`
- Child timeline pauses/plays/restarts with parent
- Each timeline can have different durations and loop settings
- A timeline can only be synced to one parent

#### Example

```ts
// Create main timeline
const mainTimeline = createTimeline({
  duration: 10000,
  loop: true
})

// Create sub-timeline for box animations
const boxTimeline = createTimeline({
  duration: 3000,
  autoplay: false
})
boxTimeline.add(box, { x: 100, duration: 3000 })

// Create sub-timeline for color animations
const colorTimeline = createTimeline({
  duration: 2000,
  autoplay: false
})
colorTimeline.add(colors, { red: 255, duration: 2000 })

// Sync both to main timeline at different times
mainTimeline.sync(boxTimeline, 0)      // Start immediately
mainTimeline.sync(colorTimeline, 5000) // Start at 5 seconds

mainTimeline.play()
```

***

### update()

> **update**(`deltaTime`): `void`

#### Parameters

##### deltaTime

`number`

#### Returns

`void`
