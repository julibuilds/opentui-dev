import type { CliRenderer, KeyHandler } from "@opentui/core"
import { createContext, useContext } from "react"

/**
 * Context value containing the CLI renderer and keyboard handler.
 *
 * @internal
 */
interface AppContext {
  keyHandler: KeyHandler | null
  renderer: CliRenderer | null
}

/**
 * React context providing access to the CLI renderer and keyboard handler.
 *
 * This context is automatically set up by `createRoot` and provides the infrastructure
 * needed by OpenTUI hooks like `useRenderer` and `useKeyboard`.
 *
 * @internal
 */
export const AppContext = createContext<AppContext>({
  keyHandler: null,
  renderer: null,
})

/**
 * Hook for accessing the OpenTUI application context.
 *
 * Returns the context containing the CLI renderer and keyboard handler instances.
 * This is a low-level hook - most users should use `useRenderer()` or `useKeyboard()` instead.
 *
 * @returns The application context with renderer and keyHandler
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { renderer, keyHandler } = useAppContext()
 *
 *   // Direct access to renderer and keyboard handler
 *   console.log('Has renderer:', !!renderer)
 *
 *   return <text>Context available</text>
 * }
 * ```
 */
export const useAppContext = () => {
  return useContext(AppContext)
}
