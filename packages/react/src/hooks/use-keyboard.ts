import type { KeyEvent } from "@opentui/core"
import { useEffect } from "react"
import { useAppContext } from "../components/app"
import { useEffectEvent } from "./use-event"

/**
 * Hook for handling keyboard input events in the terminal.
 *
 * Registers a handler for keypress events that is automatically cleaned up when the component unmounts.
 * The handler receives a KeyEvent object containing information about the pressed key.
 *
 * @param handler - Callback function invoked on each keypress event
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   useKeyboard((key) => {
 *     if (key.key === 'q') {
 *       process.exit(0)
 *     }
 *     console.log('Key pressed:', key.key)
 *   })
 *
 *   return <text>Press any key...</text>
 * }
 * ```
 */
export const useKeyboard = (handler: (key: KeyEvent) => void) => {
  const { keyHandler } = useAppContext()
  const stableHandler = useEffectEvent(handler)

  useEffect(() => {
    keyHandler?.on("keypress", stableHandler)

    return () => {
      keyHandler?.off("keypress", stableHandler)
    }
  }, [keyHandler])
}
