import {
  ASCIIFontRenderable,
  BoxRenderable,
  CodeRenderable,
  InputRenderable,
  ScrollBoxRenderable,
  SelectRenderable,
  TabSelectRenderable,
  TextareaRenderable,
  TextRenderable,
} from "@opentui/core"
import type { RenderableConstructor } from "../types/components"
import {
  BoldSpanRenderable,
  ItalicSpanRenderable,
  LineBreakRenderable,
  SpanRenderable,
  UnderlineSpanRenderable,
} from "./text"

export const baseComponents = {
  box: BoxRenderable,
  text: TextRenderable,
  code: CodeRenderable,
  input: InputRenderable,
  select: SelectRenderable,
  textarea: TextareaRenderable,
  scrollbox: ScrollBoxRenderable,
  "ascii-font": ASCIIFontRenderable,
  "tab-select": TabSelectRenderable,

  // Text modifiers
  span: SpanRenderable,
  br: LineBreakRenderable,
  b: BoldSpanRenderable,
  strong: BoldSpanRenderable,
  i: ItalicSpanRenderable,
  em: ItalicSpanRenderable,
  u: UnderlineSpanRenderable,
}

type ComponentCatalogue = Record<string, RenderableConstructor>

export const componentCatalogue: ComponentCatalogue = { ...baseComponents }

/**
 * Extends the component catalogue with custom renderable components.
 *
 * This function allows you to register custom renderable classes so they can be used
 * as JSX elements in your React components. After extending, you should also use
 * TypeScript module augmentation to add type definitions for the new components.
 *
 * @param objects - Object mapping component names to their renderable constructors
 *
 * @example
 * ```tsx
 * // Define a custom renderable
 * class CustomButtonRenderable extends BaseRenderable {
 *   // ... implementation
 * }
 *
 * // Extend the catalogue
 * extend({
 *   'custom-button': CustomButtonRenderable,
 *   'special-box': SpecialBoxRenderable
 * })
 *
 * // Add TypeScript types (in a .d.ts file)
 * declare module '@opentui/react' {
 *   interface OpenTUIComponents {
 *     'custom-button': typeof CustomButtonRenderable
 *   }
 * }
 *
 * // Now use in JSX
 * function App() {
 *   return <custom-button>Click me</custom-button>
 * }
 * ```
 */
export function extend<T extends ComponentCatalogue>(objects: T): void {
  Object.assign(componentCatalogue, objects)
}

/**
 * Returns the current component catalogue.
 *
 * Provides access to the internal mapping of component names to their renderable constructors.
 * This includes both built-in components and any custom components added via `extend()`.
 *
 * @returns Object containing all registered component constructors
 *
 * @example
 * ```tsx
 * const catalogue = getComponentCatalogue()
 * console.log(Object.keys(catalogue)) // ['box', 'text', 'input', ...]
 * ```
 */
export function getComponentCatalogue(): ComponentCatalogue {
  return componentCatalogue
}

export type { ExtendedComponentProps, ExtendedIntrinsicElements, RenderableConstructor } from "../types/components"
