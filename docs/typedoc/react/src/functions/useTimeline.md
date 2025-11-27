[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / useTimeline

# Function: useTimeline()

> **useTimeline**(`options`): [`Timeline`](../../../core/src/classes/Timeline.md)

Hook for creating and managing animation timelines.

Creates a Timeline instance that is automatically registered with the animation engine
and cleaned up when the component unmounts. Timelines are used to orchestrate animations
and can control the timing of multiple animated properties.

## Parameters

### options

[`TimelineOptions`](../../../core/src/interfaces/TimelineOptions.md) = `{}`

Configuration options for the timeline (duration, easing, autoplay, etc.)

## Returns

[`Timeline`](../../../core/src/classes/Timeline.md)

A Timeline instance for controlling animations

## Example

```tsx
function AnimatedComponent() {
  const timeline = useTimeline({ duration: 1000 })
  const boxRef = useRef<BoxRenderable>(null)

  useEffect(() => {
    if (boxRef.current) {
      timeline.animate(boxRef.current, { x: 10 }, { x: 50 })
    }
  }, [])

  return <box ref={boxRef}>Animating...</box>
}
```
