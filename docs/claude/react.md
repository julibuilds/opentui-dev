# @opentui/react Reference

API documentation for @opentui/react.

## Contents

- [Components](#components)
- [Hooks](#hooks)
- [Styling](#styling)
- [Input](#input)
- [Types](#types)
- [Functions](#functions)

---

## Components

Renderable components for building terminal UIs

### Root

Root object for managing a React render tree in the terminal.

```typescript
type Root = unknown
```

---

## Hooks

React hooks for terminal interactions

### useKeyboard

Hook for handling keyboard input events in the terminal.

Registers a handler for keypress events that is automatically cleaned up when the component unmounts.
The handler receives a KeyEvent object containing information about the pressed key.

By default, only receives press events (including key repeats with `repeated: true`).
Use `options.release` to also receive release events.

```typescript
useKeyboard(handler: (key: KeyEvent) => void, options: UseKeyboardOptions): void
```

**Parameters**

- `handler` - Callback function invoked on each keypress event
- `options` - Configuration options for keyboard handling
  - `release` - Include release events.

**Example**
```tsx
// Basic press handling (includes repeats)
function MyComponent() {
  useKeyboard((key) => {
    if (key.key === 'q') {
      process.exit(0)
    }
    console.log('Key pressed:', key.key, key.repeated ? "(repeat)" : "")
  })

  return <text>Press any key...</text>
}

// With release events
function KeyTracker() {
  const [keys, setKeys] = useState(new Set<string>())

  useKeyboard((e) => {
    if (e.eventType === "release") keys.delete(e.name)
    else keys.add(e.name)
    setKeys(new Set(keys))
  }, { release: true })

  return <text>Active keys: {[...keys].join(', ')}</text>
}
```

---

### useOnResize

Hook for responding to terminal resize events.

Registers a callback that is invoked whenever the terminal window is resized.
The callback receives the new width and height dimensions. The handler is automatically
cleaned up when the component unmounts.

```typescript
useOnResize(callback: (width: number, height: number) => void): any
```

**Parameters**

- `callback` - Function called with new dimensions when terminal is resized

**Example**
```tsx
function MyComponent() {
  useOnResize((width, height) => {
    console.log('Terminal resized to:', width, 'x', height)
  })

  return <text>Resize the terminal to see updates</text>
}
```

---

### useRenderer

Hook for accessing the CLI renderer instance.

Returns the active CLI renderer that is responsible for drawing the terminal UI.
This hook must be used within a component rendered by createRoot.

```typescript
useRenderer(): any
```

**Example**
```tsx
function MyComponent() {
  const renderer = useRenderer()

  // Access renderer properties
  console.log('Terminal size:', renderer.width, renderer.height)

  return <text>Renderer ready</text>
}
```

---

### useTerminalDimensions

Hook for tracking terminal dimensions with automatic updates on resize.

Returns an object containing the current width and height of the terminal.
The dimensions are automatically updated when the terminal is resized, triggering
a re-render of the component.

```typescript
useTerminalDimensions(): { height: number; width: number }
```

**Example**
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

---

### useTimeline

Hook for creating and managing animation timelines.

Creates a Timeline instance that is automatically registered with the animation engine
and cleaned up when the component unmounts. Timelines are used to orchestrate animations
and can control the timing of multiple animated properties.

```typescript
useTimeline(options: TimelineOptions): Timeline
```

**Parameters**

- `options` - Configuration options for the timeline (duration, easing, autoplay, etc.)
  - `autoplay` - Whether to start playing immediately upon creation
  - `duration` - Total duration of the timeline in milliseconds
  - `loop` - Whether the timeline should loop indefinitely
  - `onComplete` - Callback invoked when the timeline completes
  - `onPause` - Callback invoked when the timeline is paused

**Example**
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

---

## Styling

Colors, text styling, and visual utilities

### NonStyledProps

Properties that should not be included in the style prop.

These properties affect behavior or rendering logic and should be passed
directly to components rather than nested in the `style` prop.

```typescript
type NonStyledProps = "id" \| "buffered" \| "live" \| "enableLayout" \| "selectable" \| "renderAfter" \| "renderBefore" \| `on${string}`
```

---

## Input

Keyboard, mouse, and input handling

### InputProps

```typescript
type InputProps = ComponentProps<InputRenderableOptions, InputRenderable> & { focused?: boolean; onChange?: (value: string) => void; onInput?: (value: string) => void; onSubmit?: (value: string) => void }
```

---

### UseKeyboardOptions

Options for the useKeyboard hook.

```typescript
interface UseKeyboardOptions {
  release?: boolean
}
```

**Options** (UseKeyboardOptions)

| Property | Type | Description |
|----------|------|-------------|
| `release?` | `boolean` | Include release events. |

---

## Types

Type aliases and utility types

### AsciiFontProps

```typescript
type AsciiFontProps = ComponentProps<ASCIIFontOptions, ASCIIFontRenderable>
```

---

### BoxProps

```typescript
type BoxProps = ComponentProps<ContainerProps<BoxOptions>, BoxRenderable>
```

---

### CodeProps

```typescript
type CodeProps = ComponentProps<CodeOptions, CodeRenderable>
```

---

### DiffProps

```typescript
type DiffProps = ComponentProps<DiffRenderableOptions, DiffRenderable>
```

---

### ExtendedComponentProps

Converts a renderable constructor to React component props with proper style exclusions.

This type is used when extending OpenTUI with custom components to ensure proper
typing for the `style` prop and other React-specific features.

```typescript
type ExtendedComponentProps = TOptions & { children?: React.ReactNode; style?: Partial<Omit<TOptions, GetNonStyledProperties<TConstructor>>> } & ReactProps<ExtractRenderable<TConstructor>>
```

---

### ExtendedIntrinsicElements

Helper type to create JSX element properties from a component catalogue.

Transforms a mapping of component names to renderable constructors into
a type suitable for JSX.IntrinsicElements declaration.

```typescript
type ExtendedIntrinsicElements = unknown
```

---

### LineBreakProps

```typescript
type LineBreakProps = Pick<SpanProps, "id">
```

---

### LineNumberProps

```typescript
type LineNumberProps = ComponentProps<ContainerProps<LineNumberOptions>, LineNumberRenderable> & { focused?: boolean }
```

---

### OpenTUIComponents

Global augmentation interface for extended components.

Use TypeScript module augmentation to add custom components to this interface,
which will automatically add them to JSX.IntrinsicElements for proper type checking.

---

### ReactProps

React-specific props available on all OpenTUI components.

```typescript
type ReactProps = unknown
```

---

### RenderableConstructor

Base type for any renderable constructor.

All OpenTUI renderable classes match this signature, taking a render context
and options object to construct a renderable instance.

```typescript
type RenderableConstructor = (ctx: RenderContext, options: any) => TRenderable
```

---

### ScrollBoxProps

```typescript
type ScrollBoxProps = ComponentProps<ContainerProps<ScrollBoxOptions>, ScrollBoxRenderable> & { focused?: boolean }
```

---

### SelectProps

```typescript
type SelectProps = ComponentProps<SelectRenderableOptions, SelectRenderable> & { focused?: boolean; onChange?: (index: number, option: SelectOption \| null) => void; onSelect?: (index: number, option: SelectOption \| null) => void }
```

---

### SpanProps

```typescript
type SpanProps = ComponentProps<TextNodeOptions, TextNodeRenderable> & { children?: TextChildren }
```

---

### TabSelectProps

```typescript
type TabSelectProps = ComponentProps<TabSelectRenderableOptions, TabSelectRenderable> & { focused?: boolean; onChange?: (index: number, option: TabSelectOption \| null) => void; onSelect?: (index: number, option: TabSelectOption \| null) => void }
```

---

### TextareaProps

```typescript
type TextareaProps = ComponentProps<TextareaOptions, TextareaRenderable> & { focused?: boolean }
```

---

### TextProps

```typescript
type TextProps = ComponentProps<TextOptions, TextRenderable> & { children?: TextChildren }
```

---

## Functions

Utility functions

### createRoot

Creates a root for rendering a React tree in the terminal.

This is the main entry point for rendering OpenTUI React applications. It creates a root
that manages the React component tree and connects it to the CLI renderer for terminal output.
The root provides methods to render components and clean up when done.

```typescript
function createRoot(renderer: CliRenderer): Root
```

**Parameters**

- `renderer` - The CLI renderer instance to use for drawing to the terminal

**Returns:** A root object with `render` and `unmount` methods

**Example**
```tsx
import { createCliRenderer } from '@opentui/core'
import { createRoot } from '@opentui/react'

const renderer = await createCliRenderer()
const root = createRoot(renderer)

root.render(<App />)

// Later, to clean up
root.unmount()
```

---

### extend

Extends the component catalogue with custom renderable components.

This function allows you to register custom renderable classes so they can be used
as JSX elements in your React components. After extending, you should also use
TypeScript module augmentation to add type definitions for the new components.

```typescript
function extend(objects: T): void
```

**Parameters**

- `objects` - Object mapping component names to their renderable constructors

**Example**
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

---

### getComponentCatalogue

Returns the current component catalogue.

Provides access to the internal mapping of component names to their renderable constructors.
This includes both built-in components and any custom components added via `extend()`.

```typescript
function getComponentCatalogue(): ComponentCatalogue
```

**Returns:** Object containing all registered component constructors

**Example**
```tsx
const catalogue = getComponentCatalogue()
console.log(Object.keys(catalogue)) // ['box', 'text', 'input', ...]
```

---
