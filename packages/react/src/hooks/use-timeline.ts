import { engine, Timeline, type TimelineOptions } from "@opentui/core"
import { useEffect } from "react"

/**
 * Hook for creating and managing animation timelines.
 *
 * Creates a Timeline instance that is automatically registered with the animation engine
 * and cleaned up when the component unmounts. Timelines are used to orchestrate animations
 * and can control the timing of multiple animated properties.
 *
 * @param options - Configuration options for the timeline (duration, easing, autoplay, etc.)
 * @returns A Timeline instance for controlling animations
 *
 * @example
 * ```tsx
 * function AnimatedComponent() {
 *   const timeline = useTimeline({ duration: 1000 })
 *   const boxRef = useRef<BoxRenderable>(null)
 *
 *   useEffect(() => {
 *     if (boxRef.current) {
 *       timeline.animate(boxRef.current, { x: 10 }, { x: 50 })
 *     }
 *   }, [])
 *
 *   return <box ref={boxRef}>Animating...</box>
 * }
 * ```
 */
export const useTimeline = (options: TimelineOptions = {}) => {
  const timeline = new Timeline(options)

  useEffect(() => {
    if (!options.autoplay) {
      timeline.play()
    }

    engine.register(timeline)

    return () => {
      timeline.pause()
      engine.unregister(timeline)
    }
  }, [])

  return timeline
}
