import type {
  ASCIIFontOptions,
  ASCIIFontRenderable,
  BaseRenderable,
  BoxOptions,
  BoxRenderable,
  CodeOptions,
  CodeRenderable,
  DiffRenderable,
  DiffRenderableOptions,
  InputRenderable,
  InputRenderableOptions,
  LineNumberOptions,
  LineNumberRenderable,
  RenderableOptions,
  RenderContext,
  ScrollBoxOptions,
  ScrollBoxRenderable,
  SelectOption,
  SelectRenderable,
  SelectRenderableOptions,
  TabSelectOption,
  TabSelectRenderable,
  TabSelectRenderableOptions,
  TextareaOptions,
  TextareaRenderable,
  TextNodeOptions,
  TextNodeRenderable,
  TextOptions,
  TextRenderable,
} from "@opentui/core"
import type React from "react"

// ============================================================================
// Core Type System
// ============================================================================

/**
 * Properties that should not be included in the style prop.
 *
 * These properties affect behavior or rendering logic and should be passed
 * directly to components rather than nested in the `style` prop.
 */
export type NonStyledProps =
  | "id"
  | "buffered"
  | "live"
  | "enableLayout"
  | "selectable"
  | "renderAfter"
  | "renderBefore"
  | `on${string}`

/**
 * React-specific props available on all OpenTUI components.
 *
 * @template TRenderable - The underlying renderable type for proper ref typing
 */
export type ReactProps<TRenderable = unknown> = {
  /** React key for list reconciliation */
  key?: React.Key
  /** React ref to access the underlying renderable instance */
  ref?: React.Ref<TRenderable>
}

/**
 * Base type for any renderable constructor.
 *
 * All OpenTUI renderable classes match this signature, taking a render context
 * and options object to construct a renderable instance.
 *
 * @template TRenderable - The specific renderable class type
 */
export type RenderableConstructor<TRenderable extends BaseRenderable = BaseRenderable> = new (
  ctx: RenderContext,
  options: any,
) => TRenderable

/**
 * Extracts the options type from a renderable constructor.
 *
 * @internal
 */
type ExtractRenderableOptions<TConstructor> = TConstructor extends new (
  ctx: RenderContext,
  options: infer TOptions,
) => any
  ? TOptions
  : never

/**
 * Extracts the renderable instance type from a constructor.
 *
 * @internal
 */
type ExtractRenderable<TConstructor> = TConstructor extends new (ctx: RenderContext, options: any) => infer TRenderable
  ? TRenderable
  : never

/**
 * Determines which properties should be excluded from styling for different renderable types.
 *
 * Different components have specific properties that should not be passed via the `style` prop.
 * This type helper ensures proper separation between direct props and style props.
 *
 * @internal
 */
export type GetNonStyledProperties<TConstructor> =
  TConstructor extends RenderableConstructor<TextRenderable>
    ? NonStyledProps | "content"
    : TConstructor extends RenderableConstructor<BoxRenderable>
      ? NonStyledProps | "title"
      : TConstructor extends RenderableConstructor<ASCIIFontRenderable>
        ? NonStyledProps | "text" | "selectable"
        : TConstructor extends RenderableConstructor<InputRenderable>
          ? NonStyledProps | "placeholder" | "value"
          : TConstructor extends RenderableConstructor<TextareaRenderable>
            ? NonStyledProps | "placeholder" | "initialValue"
            : TConstructor extends RenderableConstructor<CodeRenderable>
              ?
                  | NonStyledProps
                  | "content"
                  | "filetype"
                  | "syntaxStyle"
                  | "treeSitterClient"
                  | "conceal"
                  | "drawUnstyledText"
              : NonStyledProps

// ============================================================================
// Component Props System
// ============================================================================

/**
 * Base props for container components that accept children.
 *
 * @internal
 */
type ContainerProps<TOptions> = TOptions & { children?: React.ReactNode }

/**
 * Smart component props that automatically determine excluded properties.
 *
 * Combines the component's options with React props and a `style` prop for styling.
 * The `style` prop automatically excludes properties that should be passed directly.
 *
 * @internal
 */
type ComponentProps<TOptions extends RenderableOptions<TRenderable>, TRenderable extends BaseRenderable> = TOptions & {
  style?: Partial<Omit<TOptions, GetNonStyledProperties<RenderableConstructor<TRenderable>>>>
} & ReactProps<TRenderable>

/**
 * Valid text content types for Text component children.
 *
 * @internal
 */
type TextChildren = string | number | boolean | null | undefined | React.ReactNode

// ============================================================================
// Built-in Component Props
// ============================================================================

export type TextProps = ComponentProps<TextOptions, TextRenderable> & {
  children?: TextChildren
}

export type SpanProps = ComponentProps<TextNodeOptions, TextNodeRenderable> & {
  children?: TextChildren
}

export type LineBreakProps = Pick<SpanProps, "id">

export type BoxProps = ComponentProps<ContainerProps<BoxOptions>, BoxRenderable>

export type InputProps = ComponentProps<InputRenderableOptions, InputRenderable> & {
  focused?: boolean
  onInput?: (value: string) => void
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
}

export type TextareaProps = ComponentProps<TextareaOptions, TextareaRenderable> & {
  focused?: boolean
}

export type CodeProps = ComponentProps<CodeOptions, CodeRenderable>

export type DiffProps = ComponentProps<DiffRenderableOptions, DiffRenderable>

export type SelectProps = ComponentProps<SelectRenderableOptions, SelectRenderable> & {
  focused?: boolean
  onChange?: (index: number, option: SelectOption | null) => void
  onSelect?: (index: number, option: SelectOption | null) => void
}

export type ScrollBoxProps = ComponentProps<ContainerProps<ScrollBoxOptions>, ScrollBoxRenderable> & {
  focused?: boolean
}

export type AsciiFontProps = ComponentProps<ASCIIFontOptions, ASCIIFontRenderable>

export type TabSelectProps = ComponentProps<TabSelectRenderableOptions, TabSelectRenderable> & {
  focused?: boolean
  onChange?: (index: number, option: TabSelectOption | null) => void
  onSelect?: (index: number, option: TabSelectOption | null) => void
}

export type LineNumberProps = ComponentProps<ContainerProps<LineNumberOptions>, LineNumberRenderable> & {
  focused?: boolean
}

// ============================================================================
// Extended/Dynamic Component System
// ============================================================================

/**
 * Converts a renderable constructor to React component props with proper style exclusions.
 *
 * This type is used when extending OpenTUI with custom components to ensure proper
 * typing for the `style` prop and other React-specific features.
 *
 * @template TConstructor - The renderable constructor type
 * @template TOptions - The options type extracted from the constructor
 */
export type ExtendedComponentProps<
  TConstructor extends RenderableConstructor,
  TOptions = ExtractRenderableOptions<TConstructor>,
> = TOptions & {
  children?: React.ReactNode
  style?: Partial<Omit<TOptions, GetNonStyledProperties<TConstructor>>>
} & ReactProps<ExtractRenderable<TConstructor>>

/**
 * Helper type to create JSX element properties from a component catalogue.
 *
 * Transforms a mapping of component names to renderable constructors into
 * a type suitable for JSX.IntrinsicElements declaration.
 *
 * @template TComponentCatalogue - Object mapping component names to constructors
 */
export type ExtendedIntrinsicElements<TComponentCatalogue extends Record<string, RenderableConstructor>> = {
  [TComponentName in keyof TComponentCatalogue]: ExtendedComponentProps<TComponentCatalogue[TComponentName]>
}

/**
 * Global augmentation interface for extended components.
 *
 * Use TypeScript module augmentation to add custom components to this interface,
 * which will automatically add them to JSX.IntrinsicElements for proper type checking.
 *
 * @example
 * ```tsx
 * // In your .d.ts file
 * declare module '@opentui/react' {
 *   interface OpenTUIComponents {
 *     'custom-button': typeof CustomButtonRenderable
 *     'special-box': typeof SpecialBoxRenderable
 *   }
 * }
 * ```
 */
export interface OpenTUIComponents {
  [componentName: string]: RenderableConstructor
}

// Note: JSX.IntrinsicElements extension is handled in jsx-namespace.d.ts
