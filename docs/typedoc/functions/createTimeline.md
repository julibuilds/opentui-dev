[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / createTimeline

# Function: createTimeline()

> **createTimeline**(`options`): [`Timeline`](../classes/Timeline.md)

Creates a new timeline for orchestrating animations.

## Parameters

### options

[`TimelineOptions`](../interfaces/TimelineOptions.md) = `{}`

Configuration options for the timeline

## Returns

[`Timeline`](../classes/Timeline.md)

A Timeline instance ready for adding animations

## Remarks

Timeline is the main animation system in OpenTUI. It provides:
- **Sequential Animations**: Chain multiple animations with precise timing
- **Parallel Animations**: Run multiple animations simultaneously
- **Nested Timelines**: Compose complex animations from sub-timelines
- **Looping**: Repeat animations infinitely or a specific number of times
- **Easing Functions**: Smooth transitions with various easing curves
- **Callbacks**: Trigger events at specific points in the animation

Timelines use an object-based animation system where you specify target
property values and the timeline animates from current to target values.

## Example

```ts
// Simple timeline with one animation
const timeline = createTimeline({ duration: 2000 })
timeline.add(box, { x: 100, y: 50, duration: 2000 })

// Timeline with multiple sequential animations
const sequence = createTimeline({ duration: 5000 })
sequence.add(box, { x: 100, duration: 1000 }, 0)     // Start at 0ms
sequence.add(box, { y: 50, duration: 1000 }, 1000)   // Start at 1000ms
sequence.add(box, { x: 0, y: 0, duration: 1000 }, 2000) // Start at 2000ms

// Looping timeline
const loop = createTimeline({
  duration: 3000,
  loop: true,
  onComplete: () => console.log("Loop iteration complete")
})
loop.add(box, {
  rotation: Math.PI * 2,
  duration: 3000,
  ease: "linear"
})

// Update timeline in render loop
renderer.setFrameCallback(async (deltaTime) => {
  timeline.update(deltaTime)
})
```
