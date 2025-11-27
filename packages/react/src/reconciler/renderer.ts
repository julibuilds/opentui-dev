import { CliRenderer, engine } from "@opentui/core"
import React, { type ReactNode } from "react"
import type { OpaqueRoot } from "react-reconciler"
import { AppContext } from "../components/app"
import { ErrorBoundary } from "../components/error-boundary"
import { _render, reconciler } from "./reconciler"

/**
 * Root object for managing a React render tree in the terminal.
 */
export type Root = {
  /** Renders a React component tree to the terminal */
  render: (node: ReactNode) => void
  /** Unmounts the React tree and cleans up resources */
  unmount: () => void
}

/**
 * Creates a root for rendering a React tree in the terminal.
 *
 * This is the main entry point for rendering OpenTUI React applications. It creates a root
 * that manages the React component tree and connects it to the CLI renderer for terminal output.
 * The root provides methods to render components and clean up when done.
 *
 * @param renderer - The CLI renderer instance to use for drawing to the terminal
 * @returns A root object with `render` and `unmount` methods
 *
 * @example
 * ```tsx
 * import { createCliRenderer } from '@opentui/core'
 * import { createRoot } from '@opentui/react'
 *
 * const renderer = await createCliRenderer()
 * const root = createRoot(renderer)
 *
 * root.render(<App />)
 *
 * // Later, to clean up
 * root.unmount()
 * ```
 *
 * @example
 * ```tsx
 * // Typical usage in an application entry point
 * async function main() {
 *   const renderer = await createCliRenderer()
 *   const root = createRoot(renderer)
 *
 *   root.render(
 *     <box>
 *       <text>Hello OpenTUI!</text>
 *     </box>
 *   )
 * }
 *
 * main()
 * ```
 */
export function createRoot(renderer: CliRenderer): Root {
  let container: OpaqueRoot | null = null

  return {
    render: (node: ReactNode) => {
      engine.attach(renderer)

      container = _render(
        React.createElement(
          AppContext.Provider,
          { value: { keyHandler: renderer.keyInput, renderer } },
          React.createElement(ErrorBoundary, null, node),
        ),
        renderer.root,
      )
    },

    unmount: (): void => {
      if (!container) {
        return
      }

      reconciler.updateContainer(null, container, null, () => {})
      // @ts-expect-error the types for `react-reconciler` are not up to date with the library.
      reconciler.flushSyncWork()
      container = null
    },
  }
}
