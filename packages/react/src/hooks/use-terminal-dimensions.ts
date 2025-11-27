import { useState } from "react"
import { useRenderer } from "./use-renderer"
import { useOnResize } from "./use-resize"

/**
 * Hook for tracking terminal dimensions with automatic updates on resize.
 *
 * Returns an object containing the current width and height of the terminal.
 * The dimensions are automatically updated when the terminal is resized, triggering
 * a re-render of the component.
 *
 * @returns Object containing current terminal width and height
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { width, height } = useTerminalDimensions()
 *
 *   return (
 *     <box>
 *       <text>Terminal size: {width} x {height}</text>
 *     </box>
 *   )
 * }
 * ```
 */
export const useTerminalDimensions = () => {
  const renderer = useRenderer()

  const [dimensions, setDimensions] = useState<{
    width: number
    height: number
  }>({
    width: renderer.width,
    height: renderer.height,
  })

  const cb = (width: number, height: number) => {
    setDimensions({ width, height })
  }

  useOnResize(cb)

  return dimensions
}
