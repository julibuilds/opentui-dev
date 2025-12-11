import type { KeyEvent } from "@opentui/core"
import { useEffect } from "react"
import { useAppContext } from "../components/app"
import { useEffectEvent } from "./use-event"

/**
 * Options for the {@link useKeyboard} hook.
 *
 * @public
 */
export interface UseKeyboardOptions {
  /**
   * Include release events.
   *
   * @remarks
   * When enabled, the callback receives events with `eventType: "release"`.
   *
   * @defaultValue false
   */
  release?: boolean
}

/**
 * Hook for handling keyboard input events in the terminal.
 *
 * @remarks
 * Registers a handler for keypress events that is automatically cleaned up when the component unmounts.
 * The handler receives a KeyEvent object containing information about the pressed key.
 *
 * By default, only receives press events (including key repeats with `repeated: true`).
 * Use `options.release` to also receive release events.
 *
 * @param handler - Callback function invoked on each keypress event
 * @param options - Configuration options for keyboard handling
 *
 * @example
 * ```tsx
 * // Basic press handling (includes repeats)
 * function MyComponent() {
 *   useKeyboard((key) => {
 *     if (key.key === 'q') {
 *       process.exit(0)
 *     }
 *     console.log('Key pressed:', key.key, key.repeated ? "(repeat)" : "")
 *   })
 *
 *   return <text>Press any key...</text>
 * }
 *
 * // With release events
 * function KeyTracker() {
 *   const [keys, setKeys] = useState(new Set<string>())
 *
 *   useKeyboard((e) => {
 *     if (e.eventType === "release") keys.delete(e.name)
 *     else keys.add(e.name)
 *     setKeys(new Set(keys))
 *   }, { release: true })
 *
 *   return <text>Active keys: {[...keys].join(', ')}</text>
 * }
 * ```
 *
 * @public
 */
export const useKeyboard = (handler: (key: KeyEvent) => void, options: UseKeyboardOptions = { release: false }) => {
  const { keyHandler } = useAppContext()
  const stableHandler = useEffectEvent(handler)

  useEffect(() => {
    keyHandler?.on("keypress", stableHandler)
    if (options?.release) {
      keyHandler?.on("keyrelease", stableHandler)
    }
    return () => {
      keyHandler?.off("keypress", stableHandler)
      if (options?.release) {
        keyHandler?.off("keyrelease", stableHandler)
      }
    }
  }, [keyHandler, options.release])
}
