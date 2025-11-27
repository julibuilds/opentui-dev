## :toolbox: Functions

- [extend](#gear-extend)
- [getComponentCatalogue](#gear-getcomponentcatalogue)
- [setInitialProperties](#gear-setinitialproperties)
- [updateProperties](#gear-updateproperties)
- [getNextId](#gear-getnextid)
- [_render](#gear-_render)
- [createRoot](#gear-createroot)
- [testRender](#gear-testrender)
- [useAppContext](#gear-useappcontext)
- [useEffectEvent](#gear-useeffectevent)
- [useKeyboard](#gear-usekeyboard)
- [useRenderer](#gear-userenderer)
- [useOnResize](#gear-useonresize)
- [useTerminalDimensions](#gear-useterminaldimensions)
- [useTimeline](#gear-usetimeline)

### :gear: extend

Extends the component catalogue with custom renderable components.

This function allows you to register custom renderable classes so they can be used
as JSX elements in your React components. After extending, you should also use
TypeScript module augmentation to add type definitions for the new components.

| Function | Type |
| ---------- | ---------- |
| `extend` | `<T extends ComponentCatalogue>(objects: T) => void` |

Parameters:

* `objects`: - Object mapping component names to their renderable constructors


Examples:

```tsx
// Define a custom renderable
class CustomButtonRenderable extends BaseRenderable {
  // ... implementation
}

// Extend the catalogue
extend({
  'custom-button': CustomButtonRenderable,
  'special-box': SpecialBoxRenderable
})

// Add TypeScript types (in a .d.ts file)
declare module '@opentui/react' {
  interface OpenTUIComponents {
    'custom-button': typeof CustomButtonRenderable
  }
}

// Now use in JSX
function App() {
  return <custom-button>Click me</custom-button>
}
```


### :gear: getComponentCatalogue

Returns the current component catalogue.

Provides access to the internal mapping of component names to their renderable constructors.
This includes both built-in components and any custom components added via `extend()`.

| Function | Type |
| ---------- | ---------- |
| `getComponentCatalogue` | `() => ComponentCatalogue` |

Returns:

Object containing all registered component constructors

Examples:

```tsx
const catalogue = getComponentCatalogue()
console.log(Object.keys(catalogue)) // ['box', 'text', 'input', ...]
```


### :gear: setInitialProperties

| Function | Type |
| ---------- | ---------- |
| `setInitialProperties` | `(instance: BaseRenderable, type: "span" or "b" or "strong" or "i" or "em" or "u" or "br" or "box" or "text" or "code" or "input" or "select" or "textarea" or "scrollbox" or "ascii-font" or "tab-select", props: Props) => void` |

### :gear: updateProperties

| Function | Type |
| ---------- | ---------- |
| `updateProperties` | `(instance: BaseRenderable, type: "span" or "b" or "strong" or "i" or "em" or "u" or "br" or "box" or "text" or "code" or "input" or "select" or "textarea" or "scrollbox" or "ascii-font" or "tab-select", oldProps: Props, newProps: Props) => void` |

### :gear: getNextId

| Function | Type |
| ---------- | ---------- |
| `getNextId` | `(type: "span" or "b" or "strong" or "i" or "em" or "u" or "br" or "box" or "text" or "code" or "input" or "select" or "textarea" or "scrollbox" or "ascii-font" or "tab-select") => string` |

### :gear: _render

| Function | Type |
| ---------- | ---------- |
| `_render` | `(element: React.ReactNode, root: RootRenderable) => any` |

### :gear: createRoot

Creates a root for rendering a React tree in the terminal.

This is the main entry point for rendering OpenTUI React applications. It creates a root
that manages the React component tree and connects it to the CLI renderer for terminal output.
The root provides methods to render components and clean up when done.

| Function | Type |
| ---------- | ---------- |
| `createRoot` | `(renderer: CliRenderer) => Root` |

Parameters:

* `renderer`: - The CLI renderer instance to use for drawing to the terminal


Returns:

A root object with `render` and `unmount` methods

Examples:

```tsx
import { createCliRenderer } from '@opentui/core'
import { createRoot } from '@opentui/react'

const renderer = await createCliRenderer()
const root = createRoot(renderer)

root.render(<App />)

// Later, to clean up
root.unmount()
```
```tsx
// Typical usage in an application entry point
async function main() {
  const renderer = await createCliRenderer()
  const root = createRoot(renderer)

  root.render(
    <box>
      <text>Hello OpenTUI!</text>
    </box>
  )
}

main()
```


### :gear: testRender

| Function | Type |
| ---------- | ---------- |
| `testRender` | `(node: ReactNode, testRendererOptions: TestRendererOptions) => Promise<any>` |

### :gear: useAppContext

Hook for accessing the OpenTUI application context.

Returns the context containing the CLI renderer and keyboard handler instances.
This is a low-level hook - most users should use `useRenderer()` or `useKeyboard()` instead.

| Function | Type |
| ---------- | ---------- |
| `useAppContext` | `() => AppContext` |

Returns:

The application context with renderer and keyHandler

Examples:

```tsx
function MyComponent() {
  const { renderer, keyHandler } = useAppContext()

  // Direct access to renderer and keyboard handler
  console.log('Has renderer:', !!renderer)

  return <text>Context available</text>
}
```


### :gear: useEffectEvent

Returns a stable callback that always calls the latest version of the provided handler.
This prevents unnecessary re-renders and effect re-runs while ensuring the callback
always has access to the latest props and state.

Useful for event handlers that need to be passed to effects with empty dependency arrays
or memoized child components.

| Function | Type |
| ---------- | ---------- |
| `useEffectEvent` | `<T extends (...args: any[]) => any>(handler: T) => T` |

### :gear: useKeyboard

Hook for handling keyboard input events in the terminal.

Registers a handler for keypress events that is automatically cleaned up when the component unmounts.
The handler receives a KeyEvent object containing information about the pressed key.

| Function | Type |
| ---------- | ---------- |
| `useKeyboard` | `(handler: (key: KeyEvent) => void) => void` |

Parameters:

* `handler`: - Callback function invoked on each keypress event


Examples:

```tsx
function MyComponent() {
  useKeyboard((key) => {
    if (key.key === 'q') {
      process.exit(0)
    }
    console.log('Key pressed:', key.key)
  })

  return <text>Press any key...</text>
}
```


### :gear: useRenderer

Hook for accessing the CLI renderer instance.

Returns the active CLI renderer that is responsible for drawing the terminal UI.
This hook must be used within a component rendered by createRoot.

| Function | Type |
| ---------- | ---------- |
| `useRenderer` | `() => CliRenderer` |

Returns:

The CLI renderer instance

Examples:

```tsx
function MyComponent() {
  const renderer = useRenderer()

  // Access renderer properties
  console.log('Terminal size:', renderer.width, renderer.height)

  return <text>Renderer ready</text>
}
```


### :gear: useOnResize

Hook for responding to terminal resize events.

Registers a callback that is invoked whenever the terminal window is resized.
The callback receives the new width and height dimensions. The handler is automatically
cleaned up when the component unmounts.

| Function | Type |
| ---------- | ---------- |
| `useOnResize` | `(callback: (width: number, height: number) => void) => CliRenderer` |

Parameters:

* `callback`: - Function called with new dimensions when terminal is resized


Returns:

The CLI renderer instance

Examples:

```tsx
function MyComponent() {
  useOnResize((width, height) => {
    console.log('Terminal resized to:', width, 'x', height)
  })

  return <text>Resize the terminal to see updates</text>
}
```


### :gear: useTerminalDimensions

Hook for tracking terminal dimensions with automatic updates on resize.

Returns an object containing the current width and height of the terminal.
The dimensions are automatically updated when the terminal is resized, triggering
a re-render of the component.

| Function | Type |
| ---------- | ---------- |
| `useTerminalDimensions` | `() => { width: number; height: number; }` |

Returns:

Object containing current terminal width and height

Examples:

```tsx
function MyComponent() {
  const { width, height } = useTerminalDimensions()

  return (
    <box>
      <text>Terminal size: {width} x {height}</text>
    </box>
  )
}
```


### :gear: useTimeline

Hook for creating and managing animation timelines.

Creates a Timeline instance that is automatically registered with the animation engine
and cleaned up when the component unmounts. Timelines are used to orchestrate animations
and can control the timing of multiple animated properties.

| Function | Type |
| ---------- | ---------- |
| `useTimeline` | `(options?: TimelineOptions) => Timeline` |

Parameters:

* `options`: - Configuration options for the timeline (duration, easing, autoplay, etc.)


Returns:

A Timeline instance for controlling animations

Examples:

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



## :wrench: Constants

- [textNodeKeys](#gear-textnodekeys)
- [baseComponents](#gear-basecomponents)
- [componentCatalogue](#gear-componentcatalogue)
- [hostConfig](#gear-hostconfig)
- [reconciler](#gear-reconciler)
- [AppContext](#gear-appcontext)

### :gear: textNodeKeys

Array of supported text node element types.

| Constant | Type |
| ---------- | ---------- |
| `textNodeKeys` | `readonly ["span", "b", "strong", "i", "em", "u", "br"]` |

### :gear: baseComponents

| Constant | Type |
| ---------- | ---------- |
| `baseComponents` | `{ box: typeof BoxRenderable; text: typeof TextRenderable; code: typeof CodeRenderable; input: typeof InputRenderable; select: typeof SelectRenderable; ... 10 more ...; u: typeof UnderlineSpanRenderable; }` |

### :gear: componentCatalogue

| Constant | Type |
| ---------- | ---------- |
| `componentCatalogue` | `ComponentCatalogue` |

### :gear: hostConfig

| Constant | Type |
| ---------- | ---------- |
| `hostConfig` | `HostConfig<"span" or "b" or "strong" or "i" or "em" or "u" or "br" or "box" or "text" or "code" or "input" or "select" or "textarea" or "scrollbox" or "ascii-font" or "tab-select", Props, RootRenderable, ... 10 more ..., unknown>` |

### :gear: reconciler

| Constant | Type |
| ---------- | ---------- |
| `reconciler` | `any` |

### :gear: AppContext

React context providing access to the CLI renderer and keyboard handler.

This context is automatically set up by `createRoot` and provides the infrastructure
needed by OpenTUI hooks like `useRenderer` and `useKeyboard`.

| Constant | Type |
| ---------- | ---------- |
| `AppContext` | `Context<AppContext>` |


## :factory: SpanRenderable

Renderable class for the `<span>` element.

Represents an inline text node that can be nested within text elements
to apply custom styling or attributes to portions of text.

Examples:

```tsx
<text>
  Regular text <span fg="red">colored text</span> more text
</text>
```


## :factory: BoldSpanRenderable

Renderable class for `<b>` and `<strong>` elements.

Renders text with bold formatting. Both HTML-style tags are supported
and produce identical results.

Examples:

```tsx
<text>
  This is <b>bold text</b> and <strong>also bold</strong>
</text>
```


## :factory: ItalicSpanRenderable

Renderable class for `<i>` and `<em>` elements.

Renders text with italic formatting. Both HTML-style tags are supported
and produce identical results.

Examples:

```tsx
<text>
  This is <i>italic text</i> and <em>also italic</em>
</text>
```


## :factory: UnderlineSpanRenderable

Renderable class for the `<u>` element.

Renders text with underline formatting.

Examples:

```tsx
<text>
  This is <u>underlined text</u>
</text>
```


## :factory: LineBreakRenderable

Renderable class for the `<br>` element.

Inserts a line break in text content. This is particularly useful for
creating multi-line text within a single text element.

Examples:

```tsx
<text>
  First line<br />
  Second line<br />
  Third line
</text>
```


### Methods

- [add](#gear-add)

#### :gear: add

Adds a child to this text node.

| Method | Type |
| ---------- | ---------- |
| `add` | `() => number` |

## :factory: ErrorBoundary

### Static Methods

- [getDerivedStateFromError](#gear-getderivedstatefromerror)

#### :gear: getDerivedStateFromError

| Method | Type |
| ---------- | ---------- |
| `getDerivedStateFromError` | `(error: Error) => { hasError: boolean; error: Error; }` |
