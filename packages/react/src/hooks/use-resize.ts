import { useEffect } from "react"
import { useEffectEvent } from "./use-event"
import { useRenderer } from "./use-renderer"

/**
 * Hook for responding to terminal resize events.
 *
 * Registers a callback that is invoked whenever the terminal window is resized.
 * The callback receives the new width and height dimensions. The handler is automatically
 * cleaned up when the component unmounts.
 *
 * @param callback - Function called with new dimensions when terminal is resized
 * @returns The CLI renderer instance
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   useOnResize((width, height) => {
 *     console.log('Terminal resized to:', width, 'x', height)
 *   })
 *
 *   return <text>Resize the terminal to see updates</text>
 * }
 * ```
 */
export const useOnResize = (callback: (width: number, height: number) => void) => {
  const renderer = useRenderer()
  const stableCallback = useEffectEvent(callback)

  useEffect(() => {
    renderer.on("resize", stableCallback)

    return () => {
      renderer.off("resize", stableCallback)
    }
  }, [renderer])

  return renderer
}
