import { useAppContext } from "../components/app"

/**
 * Hook for accessing the CLI renderer instance.
 *
 * Returns the active CLI renderer that is responsible for drawing the terminal UI.
 * This hook must be used within a component rendered by createRoot.
 *
 * @returns The CLI renderer instance
 * @throws {Error} If called outside of a renderer context
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const renderer = useRenderer()
 *
 *   // Access renderer properties
 *   console.log('Terminal size:', renderer.width, renderer.height)
 *
 *   return <text>Renderer ready</text>
 * }
 * ```
 */
export const useRenderer = () => {
  const { renderer } = useAppContext()

  if (!renderer) {
    throw new Error("Renderer not found.")
  }

  return renderer
}
