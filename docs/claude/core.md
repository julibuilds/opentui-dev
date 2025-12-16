# @opentui/core Reference

API documentation for @opentui/core.

## Contents

- [Components](#components)
- [Styling](#styling)
- [Animation](#animation)
- [Input](#input)
- [Layout](#layout)
- [Rendering](#rendering)
- [Types](#types)
- [Enums](#enums)
- [Functions](#functions)

---

## Components

Renderable components for building terminal UIs

### ArrowRenderable

Base class for all renderable components in OpenTUI.
Provides layout (via Yoga/Flexbox), rendering, event handling, and focus management.

Renderable is the core building block for creating terminal UIs. It provides:
- **Flexbox Layout**: Full flexbox layout system via Yoga layout engine
- **Event Handling**: Mouse, keyboard, and paste events
- **Focus Management**: Focus and blur for keyboard input
- **Z-Index Ordering**: Control rendering order with zIndex
- **Buffering**: Offscreen rendering for performance optimization
- **Parent-Child Hierarchy**: Tree-based composition

All UI components (BoxRenderable, TextRenderable, etc.) extend this class.

**Extends:** Renderable

**Constructor**
```typescript
new ArrowRenderable(ctx: RenderContext, options: ArrowOptions)
```

**Options** (ArrowOptions)

| Property | Type | Description |
|----------|------|-------------|
| `arrowChars?` | `{ down?: string; left?: string; right?: string; up?: string }` |  |
| `attributes?` | `number` |  |
| `backgroundColor?` | `ColorInput` |  |
| `direction` | `"right" \\| "left" \\| "down" \\| "up"` |  |
| `foregroundColor?` | `ColorInput` |  |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: ArrowRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: ArrowRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: ArrowRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: ArrowRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```ts
// Create a custom renderable
class MyComponent extends Renderable {
  constructor(ctx: RenderContext, options: RenderableOptions) {
    super(ctx, options)
  }

  render(buffer: OptimizedBuffer, deltaTime: number): void {
    // Custom rendering logic
    buffer.drawText(this.x, this.y, "Hello!", RGBA.white())
  }
}

// Use built-in renderables
const root = new RootRenderable(ctx)
const box = new BoxRenderable(ctx, {
  width: 40,
  height: 10,
  flexDirection: "column",
  padding: 2
})
root.add(box)
```

---

### ASCIIFontRenderable

A renderable that displays text using large ASCII art fonts.

ASCIIFontRenderable renders text in decorative ASCII art styles, perfect for:

- Eye-catching titles and headers
- Logos and branding
- Visual emphasis in terminal UIs
- Retro/artistic text effects

The renderable automatically sizes itself to fit the text, supports text selection,
and can use single colors or color gradients.

Available fonts include: "tiny", "banner", "block", "doom", and many more.

**Extends:** FrameBufferRenderable

**Constructor**
```typescript
new ASCIIFontRenderable(ctx: RenderContext, options: ASCIIFontOptions)
```

**Options** (ASCIIFontOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color. |
| `color?` | `ColorInput \\| ColorInput[]` | Color(s) for the text. |
| `font?` | `ASCIIFontName` | The ASCII art font to use. |
| `selectable?` | `boolean` | Whether the text can be selected. |
| `selectionBg?` | `ColorInput` | Selection background color. |
| `selectionFg?` | `ColorInput` | Selection foreground color. |
| `text?` | `string` | The text to display. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: ASCIIFontRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: ASCIIFontRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: ASCIIFontRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: ASCIIFontRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
Basic usage:
```typescript
const title = new ASCIIFontRenderable(ctx, {
  text: "OpenTUI",
  font: "banner",
  color: "#00ff00"
});
```

---

### ASCIIFontSelectionHelper

**Constructor**
```typescript
new ASCIIFontSelectionHelper(getText: () => string, getFont: () => "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet")
```

---

### BaseRenderable

Abstract base class for all renderables in OpenTUI.
Provides the minimal interface for objects that can be part of the render tree.

This class is typically not used directly. Use Renderable instead,
which provides full layout and rendering capabilities.

**Extends:** EventEmitter

**Extended by:** Renderable, TextNodeRenderable

**Constructor**
```typescript
new BaseRenderable(options: BaseRenderableOptions)
```

**Options** (BaseRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `id?` | `string` | Optional unique identifier for the renderable |

---

### BloomEffect

Applies a bloom effect based on bright areas (Simplified).

**Constructor**
```typescript
new BloomEffect(threshold: number, strength: number, radius: number)
```

---

### BlurEffect

Applies a simple box blur. (Expensive and may look bad with text).

**Constructor**
```typescript
new BlurEffect(radius: number)
```

---

### BoxRenderable

A container renderable that displays a box with optional borders, background, and title.
This is the most commonly used layout component in OpenTUI.

BoxRenderable is a versatile container that provides:
- **Borders**: Multiple styles (single, double, rounded, bold, ascii)
- **Background**: Solid color fill
- **Title**: Optional title text in the top border
- **Flexbox Layout**: Full flexbox support for child positioning
- **Gaps**: Row and column gaps between children
- **Focus Styling**: Different border color when focused

**Extends:** Renderable

**Extended by:** ScrollBoxRenderable

**Constructor**
```typescript
new BoxRenderable(ctx: RenderContext, options: BoxOptions)
```

**Options** (BoxOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `string \\| RGBA` | Background color for the box interior |
| `border?` | `boolean \\| "top" \\| "right" \\| "bottom" \\| "left"[]` | Which borders to draw (true for all, false for none, or array of sides) |
| `borderColor?` | `string \\| RGBA` | Border color |
| `borderStyle?` | `"single" \\| "double" \\| "rounded" \\| "heavy"` | Border style: "single", "double", "rounded", "bold", "ascii" |
| `columnGap?` | `number \\| `${number}%`` | Gap between columns of children |
| `customBorderChars?` | `BorderCharacters` | Custom border characters (for custom border styles) |
| `focusedBorderColor?` | `ColorInput` | Border color when the box is focused |
| `gap?` | `number \\| `${number}%`` | Gap between child elements (applies to both row and column gaps) |
| `rowGap?` | `number \\| `${number}%`` | Gap between rows of children |
| `shouldFill?` | `boolean` | Whether to fill the box interior with background color (default: true) |
| `title?` | `string` | Optional title text displayed in the top border |
| `titleAlignment?` | `"center" \\| "right" \\| "left"` | Title alignment: "left", "center", or "right" (default: "left") |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```ts
// Simple box with border
const box = new BoxRenderable(ctx, {
  width: 40,
  height: 10,
  border: true,
  borderStyle: "rounded",
  borderColor: "cyan",
  backgroundColor: "black"
})

// Box with title and children
const panel = new BoxRenderable(ctx, {
  width: "50%",
  height: "100%",
  border: ["top", "bottom", "left", "right"],
  title: "My Panel",
  titleAlignment: "center",
  flexDirection: "column",
  padding: 2,
  gap: 1
})

// Add child components
panel.add(new TextRenderable(ctx, { content: "Hello!" }))
```

---

### BrightnessEffect

Adjusts the overall brightness of the buffer.

**Constructor**
```typescript
new BrightnessEffect(brightness: number)
```

---

### CodeRenderable

A renderable for displaying syntax-highlighted source code.

CodeRenderable extends TextBufferRenderable with Tree-sitter powered syntax highlighting.
Key features:

- Automatic syntax highlighting using Tree-sitter parsers
- Support for 40+ programming languages
- Customizable syntax themes via SyntaxStyle
- Streaming mode for incremental content updates
- Optional concealment of syntax elements
- Fallback to plain text if filetype is unknown or highlighting fails

The highlighting process is asynchronous and non-blocking. Use `drawUnstyledText` to control
whether plain text is shown while highlighting is in progress.

**Extends:** TextBufferRenderable

**Constructor**
```typescript
new CodeRenderable(ctx: RenderContext, options: CodeOptions)
```

**Options** (CodeOptions)

| Property | Type | Description |
|----------|------|-------------|
| `conceal?` | `boolean` | Whether to enable concealing (hiding or transforming) certain syntax elements. |
| `content?` | `string` | The source code content to display. |
| `drawUnstyledText?` | `boolean` | Whether to show plain unstyled text before syntax highlighting completes. |
| `filetype?` | `string` | Programming language for syntax highlighting (e.g., "typescript", "python", "rust"). |
| `streaming?` | `boolean` | Whether the code is being streamed incrementally. |
| `syntaxStyle` | `SyntaxStyle` | Syntax style theme defining colors for different token types. |
| `treeSitterClient?` | `TreeSitterClient` | Custom Tree-sitter client for syntax highlighting. If not provided, uses global singleton. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. Accepts color string or RGBA instance. |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `fg?` | `string \\| RGBA` | Foreground (text) color. Accepts color string or RGBA instance. |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TextBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TextBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `selectable?` | `boolean` | Whether this renderable can be selected with mouse or keyboard. |
| `selectionBg?` | `string \\| RGBA` | Background color for selected text. If undefined, uses default selection background. |
| `selectionFg?` | `string \\| RGBA` | Foreground color for selected text. If undefined, uses default foreground. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab |
| `tabIndicatorColor?` | `string \\| RGBA` | Color for tab indicator characters. |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
Basic usage:
```typescript
const code = new CodeRenderable(ctx, {
  content: 'function hello() { return "world"; }',
  filetype: "typescript",
  syntaxStyle: myTheme,
  fg: "#d4d4d4",
  bg: "#1e1e1e"
});
```

---

### DataPathsManager

**Extends:** EventEmitter<DataPathsEvents>

**Constructor**
```typescript
new DataPathsManager()
```

---

### DiffRenderable

A renderable that displays unified or split diff views with syntax highlighting.

DiffRenderable parses unified diff format and displays changes with:
- Unified view: Single column showing all changes with +/- indicators
- Split view: Side-by-side comparison of old and new content
- Syntax highlighting via Tree-sitter
- Customizable colors for added, removed, and context lines
- Line numbers with appropriate styling

**Extends:** Renderable

**Constructor**
```typescript
new DiffRenderable(ctx: RenderContext, options: DiffRenderableOptions)
```

**Options** (DiffRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `addedBg?` | `string \\| RGBA` | Background color for added lines in gutter |
| `addedContentBg?` | `string \\| RGBA` | Background color for added lines in content area |
| `addedLineNumberBg?` | `string \\| RGBA` | Line number background color for added lines |
| `addedSignColor?` | `string \\| RGBA` | Color for the "+" sign on added lines |
| `conceal?` | `boolean` | Whether to conceal special characters |
| `contextBg?` | `string \\| RGBA` | Background color for context lines in gutter |
| `contextContentBg?` | `string \\| RGBA` | Background color for context lines in content area |
| `diff?` | `string` | The unified diff string to display |
| `fg?` | `string \\| RGBA` | Foreground text color |
| `filetype?` | `string` | File type for syntax highlighting |
| `lineNumberBg?` | `string \\| RGBA` | Line number gutter background color |
| `lineNumberFg?` | `string \\| RGBA` | Line number foreground color |
| `removedBg?` | `string \\| RGBA` | Background color for removed lines in gutter |
| `removedContentBg?` | `string \\| RGBA` | Background color for removed lines in content area |
| `removedLineNumberBg?` | `string \\| RGBA` | Line number background color for removed lines |
| `removedSignColor?` | `string \\| RGBA` | Color for the "-" sign on removed lines |
| `selectionBg?` | `string \\| RGBA` | Selection background color |
| `selectionFg?` | `string \\| RGBA` | Selection foreground color |
| `showLineNumbers?` | `boolean` | Whether to show line numbers |
| `syntaxStyle?` | `SyntaxStyle` | Syntax highlighting style configuration |
| `treeSitterClient?` | `TreeSitterClient` | Tree-sitter client for syntax highlighting |
| `view?` | `"unified" \\| "split"` | View mode: "unified" shows all changes in one column, "split" shows side-by-side |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: DiffRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: DiffRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: DiffRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: DiffRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: DiffRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
const diff = new DiffRenderable(ctx, {
  diff: unifiedDiffString,
  view: "split",
  filetype: "typescript",
  addedBg: "#22442244",
  removedBg: "#44222244"
});
```

---

### DistortionEffect

**Constructor**
```typescript
new DistortionEffect(options?: Partial<DistortionEffect>)
```

---

### EditorView

**Constructor**
```typescript
new EditorView(lib: RenderLib, ptr: Pointer, editBuffer: EditBuffer)
```

---

### ExtmarksController

WARNING: This is simulating extmarks in the edit buffer
and will move to a real native implementation in the future.
Use with caution.

**Constructor**
```typescript
new ExtmarksController(editBuffer: EditBuffer, editorView: EditorView)
```

---

### FrameBufferRenderable

A renderable that owns an off-screen rendering buffer (framebuffer).

FrameBufferRenderable provides an OptimizedBuffer that can be drawn to independently
and then composited onto the main screen buffer. This is useful for:

- Pre-rendering complex content that doesn't change every frame
- Creating reusable visual components
- Layering effects with alpha blending
- Implementing custom rendering logic

The framebuffer is automatically resized when the renderable's dimensions change.

**Extends:** Renderable

**Extended by:** ASCIIFontRenderable

**Constructor**
```typescript
new FrameBufferRenderable(ctx: RenderContext, options: FrameBufferOptions)
```

**Options** (FrameBufferOptions)

| Property | Type | Description |
|----------|------|-------------|
| `height` | `number` | Height of the frame buffer in characters. |
| `respectAlpha?` | `boolean` | Whether to respect alpha transparency when compositing. |
| `width` | `number` | Width of the frame buffer in characters. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: FrameBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: FrameBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: FrameBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: FrameBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
class CustomGraphic extends FrameBufferRenderable {
  constructor(ctx: RenderContext) {
    super(ctx, { width: 40, height: 20, respectAlpha: true });
    this.drawCustomContent();
  }

  private drawCustomContent() {
    // Draw directly to this.frameBuffer
    this.frameBuffer.drawText("Hello", 0, 0, RGBA.white(), RGBA.black());
    this.frameBuffer.fillRect(0, 1, 10, 5, RGBA.fromHex("#ff0000"));
  }
}
```

---

### InputRenderable

A single-line text input component with cursor and keyboard support.

InputRenderable is the standard component for single-line text input. It provides:
- **Keyboard Input**: Full keyboard support with cursor navigation
- **Placeholder Text**: Shows placeholder when empty
- **Focus Styling**: Different colors for focused/unfocused states
- **Cursor**: Customizable cursor style and color
- **Max Length**: Optional character limit
- **Events**: input, change, and enter events

**Extends:** Renderable

**Constructor**
```typescript
new InputRenderable(ctx: RenderContext, options: InputRenderableOptions)
```

**Options** (InputRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color when not focused |
| `cursorColor?` | `ColorInput` | Color of the cursor |
| `cursorStyle?` | `CursorStyleOptions` | Cursor style configuration |
| `focusedBackgroundColor?` | `ColorInput` | Background color when focused |
| `focusedTextColor?` | `ColorInput` | Text color when focused |
| `keyAliasMap?` | `KeyAliasMap` |  |
| `keyBindings?` | `InputKeyBinding[]` |  |
| `maxLength?` | `number` | Maximum number of characters allowed |
| `placeholder?` | `string` | Placeholder text shown when input is empty |
| `placeholderColor?` | `ColorInput` | Color of placeholder text |
| `textColor?` | `ColorInput` | Text color when not focused |
| `value?` | `string` | Initial value of the input |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: InputRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: InputRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: InputRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: InputRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: InputRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```ts
// Basic input
const input = new InputRenderable(ctx, {
  width: 40,
  height: 1,
  placeholder: "Enter your name...",
  value: ""
})

// Styled input with event handling
const emailInput = new InputRenderable(ctx, {
  width: 50,
  placeholder: "email@example.com",
  backgroundColor: "#1a1a1a",
  textColor: "white",
  focusedBackgroundColor: "#2a2a2a",
  maxLength: 100
})

emailInput.on(InputRenderableEvents.ENTER, () => {
  console.log("Submitted:", emailInput.value)
})

emailInput.on(InputRenderableEvents.INPUT, () => {
  console.log("Value changed:", emailInput.value)
})
```

---

### LinearScrollAccel

**Constructor**
```typescript
new LinearScrollAccel()
```

---

### LineNumberRenderable

A renderable that displays line numbers in a gutter next to text content.

LineNumberRenderable wraps a target renderable (typically a `Code` or `EditBufferRenderable`)
and displays line numbers alongside it. Features include:

- Automatic width adjustment based on line count
- Custom line background colors for highlighting (with separate gutter/content colors)
- Line signs (decorative markers before/after line numbers)
- Full-width line background colors that extend into content area
- Automatic handling of wrapped lines (continuation lines don't show numbers)

**Extends:** Renderable

**Constructor**
```typescript
new LineNumberRenderable(ctx: RenderContext, options: LineNumberOptions)
```

**Options** (LineNumberOptions)

| Property | Type | Description |
|----------|------|-------------|
| `bg?` | `string \\| RGBA` | Background color for the gutter. |
| `fg?` | `string \\| RGBA` | Foreground color for line numbers. |
| `hideLineNumbers?` | `Set<number>` |  |
| `lineColors?` | `Map<number, string \\| RGBA \\| LineColorConfig>` | Map of line numbers to custom background colors for highlighting specific lines. |
| `lineNumberOffset?` | `number` |  |
| `lineNumbers?` | `Map<number, number>` |  |
| `lineSigns?` | `Map<number, LineSign>` | Map of line numbers to decorative signs (markers, icons). |
| `minWidth?` | `number` | Minimum width of the line number column in characters. |
| `paddingRight?` | `number` | Right padding after line numbers. |
| `showLineNumbers?` | `boolean` |  |
| `target?` | `Renderable & LineInfoProvider` | The target renderable to display line numbers for. Must implement LineInfoProvider. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: LineNumberRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: LineNumberRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: LineNumberRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: LineNumberRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
const lineNumbers = new LineNumberRenderable(ctx, {
  fg: "#888888",
  bg: "#1e1e1e",
  minWidth: 4
});

const code = new Code(ctx, {
  content: "function main() {\n  return 42;\n}",
  filetype: "typescript"
});

lineNumbers.add(code); // Add code as target

// Highlight line 2 with same color for gutter and content
lineNumbers.setLineColor(1, "#264f78");

// Or use different colors for gutter and content
lineNumbers.setLineColor(1, { gutter: "#264f78", content: "#1e3a5f" });

// Add error marker on line 2
lineNumbers.setLineSign(1, {
  after: "●",
  afterColor: "#ff0000"
});
```

---

### MacOSScrollAccel

macOS-inspired scroll acceleration.

The class measures the time between consecutive scroll events and keeps a short
moving window of the latest intervals. The average interval determines which
multiplier to apply so that quick bursts accelerate and slower gestures stay precise.

For intuition, treat the streak as a continuous timeline and compare it with the
exponential distance curve from the pointer-acceleration research post:
  d(t) = v₀ * ( t + A * (exp(t/τ) - 1 - t/τ) ).
Small t stays near the base multiplier, medium streaks settle on multiplier1, and
sustained bursts reach multiplier2, mirroring how the exponential curve bends up.

Options:
- threshold1: upper bound (ms) of the "medium" band. Raise to delay the ramp.
- threshold2: upper bound (ms) of the "fast" band. Lower to demand tighter bursts.
- multiplier1: scale for medium speed streaks.
- multiplier2: scale for sustained fast streaks.
- baseMultiplier: scale for relaxed scrolling; set to 1 for linear behaviour.

**Constructor**
```typescript
new MacOSScrollAccel(opts: { A?: number; maxMultiplier?: number; tau?: number })
```

---

### Renderable

Base class for all renderable components in OpenTUI.
Provides layout (via Yoga/Flexbox), rendering, event handling, and focus management.

Renderable is the core building block for creating terminal UIs. It provides:
- **Flexbox Layout**: Full flexbox layout system via Yoga layout engine
- **Event Handling**: Mouse, keyboard, and paste events
- **Focus Management**: Focus and blur for keyboard input
- **Z-Index Ordering**: Control rendering order with zIndex
- **Buffering**: Offscreen rendering for performance optimization
- **Parent-Child Hierarchy**: Tree-based composition

All UI components (BoxRenderable, TextRenderable, etc.) extend this class.

**Extends:** BaseRenderable

**Extended by:** RootRenderable, BoxRenderable, VRenderable, DiffRenderable, FrameBufferRenderable, InputRenderable, LineNumberRenderable, ScrollBarRenderable, ArrowRenderable, SelectRenderable, SliderRenderable, TabSelectRenderable, TextBufferRenderable

**Constructor**
```typescript
new Renderable(ctx: RenderContext, options: RenderableOptions<any>)
```

**Options** (RenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: T, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: T, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: T, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: T, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: T, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: T, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: T, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: T, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: T, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: T, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: T, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: T) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `renderAfter?` | `(this: T, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: T, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |

**Example**
```ts
// Create a custom renderable
class MyComponent extends Renderable {
  constructor(ctx: RenderContext, options: RenderableOptions) {
    super(ctx, options)
  }

  render(buffer: OptimizedBuffer, deltaTime: number): void {
    // Custom rendering logic
    buffer.drawText(this.x, this.y, "Hello!", RGBA.white())
  }
}

// Use built-in renderables
const root = new RootRenderable(ctx)
const box = new BoxRenderable(ctx, {
  width: 40,
  height: 10,
  flexDirection: "column",
  padding: 2
})
root.add(box)
```

---

### RootRenderable

Root renderable that serves as the entry point for the render tree.
Manages the top-level layout calculation and rendering process.

RootRenderable is a special renderable that:
- Acts as the root of the component tree
- Manages the three-pass rendering process (layout, update, render)
- Coordinates live rendering requests
- Automatically resizes to match the terminal size

Typically created once per application and passed to CliRenderer.

**Extends:** Renderable

**Constructor**
```typescript
new RootRenderable(ctx: RenderContext)
```

**Example**
```ts
const renderer = new CliRenderer({ fps: 60 })
const ctx = renderer.getContext()
const root = new RootRenderable(ctx)

// Add your UI components to the root
const app = new BoxRenderable(ctx, {
  flexDirection: "column",
  width: "100%",
  height: "100%"
})
root.add(app)

renderer.start(root)
```

---

### ScrollBarRenderable

A scrollbar component with integrated slider and optional arrow buttons.

ScrollBarRenderable provides a complete scrollbar solution with the following features:
- Vertical or horizontal orientation
- Integrated SliderRenderable for thumb dragging
- Optional arrow buttons for incremental scrolling
- Keyboard navigation support (arrow keys, page up/down, home/end)
- Multiple scroll units (absolute, viewport, content, step)
- Auto-hide when content fits in viewport
- Repeating arrow button clicks (hold to scroll continuously)

The scrollbar manages three key values:
- **scrollSize**: Total size of scrollable content
- **viewportSize**: Size of the visible viewport
- **scrollPosition**: Current scroll position

**Extends:** Renderable

**Constructor**
```typescript
new ScrollBarRenderable(ctx: RenderContext, __namedParameters: ScrollBarOptions)
```

**Options** (ScrollBarOptions)

| Property | Type | Description |
|----------|------|-------------|
| `arrowOptions?` | `Omit<ArrowOptions, "direction">` | Options for the arrow buttons |
| `onChange?` | `(position: number) => void` | Callback invoked when scroll position changes |
| `orientation` | `"vertical" \\| "horizontal"` | Orientation of the scrollbar |
| `showArrows?` | `boolean` | Show arrow buttons at each end |
| `trackOptions?` | `Partial<SliderOptions>` | Options for the slider track |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: ScrollBarRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: ScrollBarRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: ScrollBarRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: ScrollBarRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
const scrollbar = new ScrollBarRenderable(ctx, {
  orientation: "vertical",
  showArrows: true,
  onChange: (position) => {
    console.log("Scrolled to:", position);
  }
});

// Configure scrollbar for content
scrollbar.scrollSize = 1000;
scrollbar.viewportSize = 100;
scrollbar.scrollPosition = 0;

// Scroll programmatically
scrollbar.scrollBy(10); // Scroll by 10 pixels
scrollbar.scrollBy(0.5, "viewport"); // Scroll by half viewport
```

---

### ScrollBoxRenderable

A scrollable container component with vertical and horizontal scrollbars.

ScrollBoxRenderable provides a flexible scrolling container with the following features:
- Vertical and horizontal scrolling with customizable scrollbars
- Sticky scroll behavior (auto-scroll to top/bottom/left/right as content changes)
- Auto-scroll during drag selection near edges
- Viewport culling to improve performance by skipping off-screen children
- Configurable scroll acceleration for mouse wheel events
- Nested structure: root → wrapper → viewport → content

The component consists of four main parts:
- **wrapper**: Contains the viewport and horizontal scrollbar
- **viewport**: Clips the content to the visible area
- **content**: Container that holds all child elements
- **scrollbars**: Vertical and horizontal scrollbars (auto-hide when not needed)

**Extends:** BoxRenderable

**Constructor**
```typescript
new ScrollBoxRenderable(ctx: RenderContext, __namedParameters: ScrollBoxOptions)
```

**Options** (ScrollBoxOptions)

| Property | Type | Description |
|----------|------|-------------|
| `contentOptions?` | `BoxOptions` | Options for the content container that holds child elements |
| `horizontalScrollbarOptions?` | `Omit<ScrollBarOptions, "orientation">` | Options specific to the horizontal scrollbar |
| `rootOptions?` | `BoxOptions` | Options for the root container element |
| `scrollAcceleration?` | `ScrollAcceleration` | Custom scroll acceleration for mouse wheel events |
| `scrollbarOptions?` | `Omit<ScrollBarOptions, "orientation">` | Common scrollbar options applied to both vertical and horizontal scrollbars |
| `scrollX?` | `boolean` | Enable horizontal scrolling |
| `scrollY?` | `boolean` | Enable vertical scrolling |
| `stickyScroll?` | `boolean` | Enable sticky scroll behavior (auto-scroll when content changes) |
| `stickyStart?` | `"top" \\| "right" \\| "bottom" \\| "left"` | Initial sticky position when stickyScroll is enabled |
| `verticalScrollbarOptions?` | `Omit<ScrollBarOptions, "orientation">` | Options specific to the vertical scrollbar |
| `viewportCulling?` | `boolean` | Enable viewport culling to skip rendering off-screen children |
| `viewportOptions?` | `BoxOptions` | Options for the viewport element that clips the content |
| `wrapperOptions?` | `BoxOptions` | Options for the wrapper element that contains viewport and horizontal scrollbar |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `backgroundColor?` | `string \\| RGBA` | Background color for the box interior |
| `border?` | `boolean \\| "top" \\| "right" \\| "bottom" \\| "left"[]` | Which borders to draw (true for all, false for none, or array of sides) |
| `borderColor?` | `string \\| RGBA` | Border color |
| `borderStyle?` | `"single" \\| "double" \\| "rounded" \\| "heavy"` | Border style: "single", "double", "rounded", "bold", "ascii" |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `columnGap?` | `number \\| `${number}%`` | Gap between columns of children |
| `customBorderChars?` | `BorderCharacters` | Custom border characters (for custom border styles) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `focusedBorderColor?` | `ColorInput` | Border color when the box is focused |
| `gap?` | `number \\| `${number}%`` | Gap between child elements (applies to both row and column gaps) |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: ScrollBoxRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: ScrollBoxRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: ScrollBoxRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: ScrollBoxRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `rowGap?` | `number \\| `${number}%`` | Gap between rows of children |
| `shouldFill?` | `boolean` | Whether to fill the box interior with background color (default: true) |
| `title?` | `string` | Optional title text displayed in the top border |
| `titleAlignment?` | `"center" \\| "right" \\| "left"` | Title alignment: "left", "center", or "right" (default: "left") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
const scrollBox = new ScrollBoxRenderable(ctx, {
  width: 40,
  height: 20,
  scrollY: true,
  scrollX: true,
  stickyScroll: true,
  stickyStart: "bottom",
  viewportCulling: true
});

// Add content
for (let i = 0; i < 100; i++) {
  scrollBox.add(new TextRenderable(ctx, {
    content: `Line ${i}`
  }));
}

// Programmatic scrolling
scrollBox.scrollTo(100); // Scroll to position 100
scrollBox.scrollBy(10); // Scroll down by 10 pixels
```

---

### Selection

**Constructor**
```typescript
new Selection(anchorRenderable: Renderable, anchor: { x: number; y: number }, focus: { x: number; y: number })
```

---

### SelectRenderable

A vertical list selector component with keyboard navigation and scrolling.

SelectRenderable provides a scrollable list of options with the following features:
- Keyboard navigation (up/down arrows, j/k vim keys)
- Fast scrolling with Shift modifier
- Optional ASCII font rendering for option names
- Customizable colors for focused/unfocused and selected states
- Optional scroll indicator
- Optional wrapping from last to first item
- Auto-centering of selected item in viewport
- Two events: selection changed and item selected

**Extends:** Renderable

**Constructor**
```typescript
new SelectRenderable(ctx: RenderContext, options: SelectRenderableOptions)
```

**Options** (SelectRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color when unfocused |
| `descriptionColor?` | `ColorInput` | Color for description text |
| `fastScrollStep?` | `number` | Number of items to skip when Shift is held |
| `focusedBackgroundColor?` | `ColorInput` | Background color when focused |
| `focusedTextColor?` | `ColorInput` | Text color when focused |
| `font?` | `"block" \\| "tiny" \\| "shade" \\| "slick" \\| "huge" \\| "grid" \\| "pallet"` | ASCII font to use for option names |
| `itemSpacing?` | `number` | Vertical spacing between items |
| `keyAliasMap?` | `KeyAliasMap` |  |
| `keyBindings?` | `SelectKeyBinding[]` |  |
| `options?` | `SelectOption[]` | List of selectable options |
| `selectedBackgroundColor?` | `ColorInput` | Background color for the selected item |
| `selectedDescriptionColor?` | `ColorInput` | Color for selected item's description |
| `selectedIndex?` | `number` | Initially selected option index |
| `selectedTextColor?` | `ColorInput` | Text color for the selected item |
| `showDescription?` | `boolean` | Show description text below option names |
| `showScrollIndicator?` | `boolean` | Show a scroll indicator on the right edge |
| `textColor?` | `ColorInput` | Text color when unfocused |
| `wrapSelection?` | `boolean` | Allow wrapping from last to first item |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: SelectRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: SelectRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: SelectRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: SelectRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: SelectRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
const select = new SelectRenderable(ctx, {
  width: 40,
  height: 15,
  options: [
    { name: "Option 1", description: "First choice" },
    { name: "Option 2", description: "Second choice" },
    { name: "Option 3", description: "Third choice" }
  ],
  selectedBackgroundColor: "#3344ff",
  showScrollIndicator: true,
  wrapSelection: true
});

select.on(SelectRenderableEvents.ITEM_SELECTED, (index, option) => {
  console.log("Selected:", option.name);
});
```

---

### SliderRenderable

A draggable slider component with sub-pixel precision rendering.

SliderRenderable provides a visual slider control with the following features:
- Vertical or horizontal orientation
- Sub-pixel precision using half-block characters (▀▄▌▐)
- Mouse drag interaction
- Configurable value range (min/max)
- Viewport size affects thumb size (larger viewport = larger thumb)
- Smooth dragging with offset tracking
- Click-to-position support

The slider uses a virtual coordinate system (2x resolution) for smooth rendering
and then renders using Unicode half-block characters for sub-character precision.

**Extends:** Renderable

**Constructor**
```typescript
new SliderRenderable(ctx: RenderContext, options: SliderOptions)
```

**Options** (SliderOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color for the track |
| `foregroundColor?` | `ColorInput` | Foreground color for the thumb |
| `max?` | `number` | Maximum value |
| `min?` | `number` | Minimum value |
| `onChange?` | `(value: number) => void` | Callback invoked when value changes |
| `orientation` | `"vertical" \\| "horizontal"` | Orientation of the slider |
| `value?` | `number` | Current value (between min and max) |
| `viewPortSize?` | `number` | Size of the viewport (affects thumb size) |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: SliderRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: SliderRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: SliderRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: SliderRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: SliderRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
const slider = new SliderRenderable(ctx, {
  orientation: "horizontal",
  width: 20,
  height: 1,
  min: 0,
  max: 100,
  value: 50,
  onChange: (value) => {
    console.log("Slider value:", value);
  }
});
```

---

### TabSelectRenderable

A horizontal tab selector component with keyboard navigation.

TabSelectRenderable provides a horizontal row of tabs with the following features:
- Horizontal keyboard navigation (left/right arrows, [ ] keys)
- Optional underline decoration for selected tab
- Optional description text below tabs
- Auto-scrolling when tabs overflow the container
- Scroll arrows for visual indication of overflow
- Dynamic height based on enabled features
- Customizable tab width and colors

The component automatically calculates its height based on whether underline
and description are enabled.

**Extends:** Renderable

**Constructor**
```typescript
new TabSelectRenderable(ctx: RenderContext, options: TabSelectRenderableOptions)
```

**Options** (TabSelectRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color when unfocused |
| `focusedBackgroundColor?` | `ColorInput` | Background color when focused |
| `focusedTextColor?` | `ColorInput` | Text color when focused |
| `height?` | `number` | Height is auto-calculated based on showUnderline and showDescription |
| `keyAliasMap?` | `KeyAliasMap` |  |
| `keyBindings?` | `TabSelectKeyBinding[]` |  |
| `options?` | `TabSelectOption[]` | List of tabs |
| `selectedBackgroundColor?` | `ColorInput` | Background color for selected tab |
| `selectedDescriptionColor?` | `ColorInput` | Color for description text |
| `selectedTextColor?` | `ColorInput` | Text color for selected tab |
| `showDescription?` | `boolean` | Show description below tabs |
| `showScrollArrows?` | `boolean` | Show scroll arrows when tabs overflow |
| `showUnderline?` | `boolean` | Show underline below selected tab |
| `tabWidth?` | `number` | Fixed width for each tab |
| `textColor?` | `ColorInput` | Text color when unfocused |
| `wrapSelection?` | `boolean` | Allow wrapping from last to first tab |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TabSelectRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TabSelectRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TabSelectRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TabSelectRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
const tabs = new TabSelectRenderable(ctx, {
  width: 60,
  tabWidth: 15,
  options: [
    { name: "Home", description: "Home screen" },
    { name: "Settings", description: "Application settings" },
    { name: "About", description: "About this app" }
  ],
  showUnderline: true,
  showDescription: true,
  selectedBackgroundColor: "#3344ff"
});

tabs.on(TabSelectRenderableEvents.ITEM_SELECTED, (index, option) => {
  console.log("Tab selected:", option.name);
});
```

---

### TerminalConsole

**Extends:** EventEmitter

**Constructor**
```typescript
new TerminalConsole(renderer: CliRenderer, options: ConsoleOptions)
```

---

### TerminalPalette

**Constructor**
```typescript
new TerminalPalette(stdin: ReadStream, stdout: WriteStream, writeFn?: WriteFunction, isLegacyTmux?: boolean)
```

---

### TextareaRenderable

A multi-line text input component with comprehensive editing capabilities.

TextareaRenderable extends `EditBufferRenderable` to provide a fully-featured
multi-line text editor with the following features:
- Multi-line text editing with word wrapping
- Comprehensive keyboard navigation (arrows, home/end, word jumping)
- Text selection and clipboard operations
- Undo/redo support
- Customizable key bindings
- Placeholder text support
- Focus-aware styling (different colors for focused/unfocused states)
- Submit event (triggered via Meta+Enter)
- Extmarks support for custom decorations

The component provides vim-like keybindings by default (Ctrl+A/E for line home/end,
Ctrl+F/B for character movement, etc.) alongside standard keybindings.

**Extends:** EditBufferRenderable

**Constructor**
```typescript
new TextareaRenderable(ctx: RenderContext, options: TextareaOptions)
```

**Options** (TextareaOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color when unfocused |
| `focusedBackgroundColor?` | `ColorInput` | Background color when focused |
| `focusedTextColor?` | `ColorInput` | Text color when focused |
| `initialValue?` | `string` | Initial text content |
| `keyAliasMap?` | `KeyAliasMap` | Custom key alias mappings for remapping keys |
| `keyBindings?` | `KeyBinding[]` | Custom key bindings to override defaults |
| `onSubmit?` | `(event: SubmitEvent) => void` | Callback invoked when textarea is submitted |
| `placeholder?` | `string \\| StyledText` | Placeholder text shown when empty |
| `textColor?` | `ColorInput` | Text color when unfocused |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline). |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `cursorColor?` | `string \\| RGBA` | Cursor color. |
| `cursorStyle?` | `CursorStyleOptions` | Cursor style configuration. |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onContentChange?` | `(event: ContentChangeEvent) => void` | Callback invoked when content changes. |
| `onCursorChange?` | `(event: CursorChangeEvent) => void` | Callback invoked when cursor position changes. |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: EditBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: EditBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: EditBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: EditBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `scrollMargin?` | `number` | Scroll margin as fraction of viewport height. |
| `selectable?` | `boolean` | Whether text can be selected. |
| `selectionBg?` | `string \\| RGBA` | Selection background color. |
| `selectionFg?` | `string \\| RGBA` | Selection foreground color. |
| `showCursor?` | `boolean` | Whether to show the cursor. |
| `syntaxStyle?` | `SyntaxStyle` | Syntax highlighting theme. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. |
| `tabIndicatorColor?` | `string \\| RGBA` | Tab indicator color. |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
const textarea = new TextareaRenderable(ctx, {
  width: "100%",
  height: 10,
  placeholder: "Enter your message...",
  backgroundColor: "#1e1e1e",
  textColor: "#d4d4d4",
  focusedBackgroundColor: "#252526",
  onSubmit: (event) => {
    console.log("Submitted:", textarea.getText());
  }
});

// Listen for text changes
textarea.on("change", () => {
  console.log("Text changed:", textarea.getText());
});
```

---

### TextBufferRenderable

Abstract base class for renderables that display read-only text using a TextBuffer.

TextBufferRenderable provides high-performance text rendering with support for:
- Text styling (colors, attributes like bold/italic/underline)
- Text selection
- Text wrapping (character, word, or none)
- Custom tab indicators
- Syntax highlighting through TextBuffer

This is an abstract class that must be extended. Use Text for simple text display
or create custom text-based renderables by extending this class.

**Extends:** Renderable

**Extended by:** CodeRenderable, TextRenderable

**Constructor**
```typescript
new TextBufferRenderable(ctx: RenderContext, options: TextBufferOptions)
```

**Options** (TextBufferOptions)

| Property | Type | Description |
|----------|------|-------------|
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. Accepts color string or RGBA instance. |
| `fg?` | `string \\| RGBA` | Foreground (text) color. Accepts color string or RGBA instance. |
| `selectable?` | `boolean` | Whether this renderable can be selected with mouse or keyboard. |
| `selectionBg?` | `string \\| RGBA` | Background color for selected text. If undefined, uses default selection background. |
| `selectionFg?` | `string \\| RGBA` | Foreground color for selected text. If undefined, uses default foreground. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab |
| `tabIndicatorColor?` | `string \\| RGBA` | Color for tab indicator characters. |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TextBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TextBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```typescript
class MyTextDisplay extends TextBufferRenderable {
  constructor(ctx: RenderContext) {
    super(ctx, { fg: "white", bg: "black", wrapMode: "word" });
  }
}
```

---

### TextNodeRenderable

A lightweight node for building styled text hierarchies.

TextNodeRenderable is a tree structure for composing styled text. Unlike full Renderables,
TextNodes don't participate in layout or rendering directly. Instead, they form a tree that
gets flattened into TextChunks for rendering by Text.

Key features:
- Hierarchical style inheritance (children inherit parent styles)
- Lightweight compared to full renderables
- Supports mixing plain strings and styled nodes
- Can convert to/from StyledText

TextNodes are ideal for:
- Rich text with nested styling (bold within italic, colored within underlined, etc.)
- Building text programmatically with inherited styles
- Converting from markup or styled text formats

**Extends:** BaseRenderable

**Constructor**
```typescript
new TextNodeRenderable(options: TextNodeOptions)
```

**Options** (TextNodeOptions)

| Property | Type | Description |
|----------|------|-------------|
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. |
| `fg?` | `string \\| RGBA` | Foreground (text) color. |
| `id?` | `string` | Optional unique identifier for the renderable |

**Example**
Building styled text:
```typescript
const root = new TextNodeRenderable({ fg: "white" });
root.add("Hello ");

const bold = new TextNodeRenderable({ attributes: BOLD });
bold.add("world");
root.add(bold);

root.add("!");
// Renders as: "Hello world!" with "world" in bold
```

---

### TextRenderable

A renderable component for displaying styled text.
Supports colors, text attributes, and automatic text wrapping.

TextRenderable is the primary component for displaying text in OpenTUI. It provides:
- **Styled Text**: Full support for colors and text attributes via StyledText
- **Text Wrapping**: Automatic wrapping based on available width
- **Default Styling**: Default foreground/background colors and attributes
- **Dynamic Updates**: Content can be changed after creation

For multi-line text editing with user input, use TextareaRenderable instead.
For plain text without styling, you can pass a regular string.

**Extends:** TextBufferRenderable

**Constructor**
```typescript
new TextRenderable(ctx: RenderContext, options: TextOptions)
```

**Options** (TextOptions)

| Property | Type | Description |
|----------|------|-------------|
| `content?` | `string \\| StyledText` | Text content to display (plain string or StyledText) |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. Accepts color string or RGBA instance. |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `fg?` | `string \\| RGBA` | Foreground (text) color. Accepts color string or RGBA instance. |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TextBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TextBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `selectable?` | `boolean` | Whether this renderable can be selected with mouse or keyboard. |
| `selectionBg?` | `string \\| RGBA` | Background color for selected text. If undefined, uses default selection background. |
| `selectionFg?` | `string \\| RGBA` | Foreground color for selected text. If undefined, uses default foreground. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab |
| `tabIndicatorColor?` | `string \\| RGBA` | Color for tab indicator characters. |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

**Example**
```ts
import { TextRenderable, t, red, bold } from "@opentui/core"

// Simple text
const text1 = new TextRenderable(ctx, {
  content: "Hello, World!",
  width: 40
})

// Styled text with colors
const text2 = new TextRenderable(ctx, {
  content: t`Status: ${green("Online")}`,
  width: "auto"
})

// Text with multiple styles
const text3 = new TextRenderable(ctx, {
  content: t`${bold(red("Error"))}: ${yellow("Connection failed")}`,
  defaultFg: RGBA.white(),
  defaultBg: RGBA.black()
})

// Update content dynamically
text1.content = "Updated text!"
text2.content = t`Status: ${red("Offline")}`
```

---

### TreeSitterClient

**Extends:** EventEmitter<TreeSitterClientEvents>

**Constructor**
```typescript
new TreeSitterClient(options: TreeSitterClientOptions)
```

**Options** (TreeSitterClientOptions)

| Property | Type | Description |
|----------|------|-------------|
| `dataPath` | `string` |  |
| `initTimeout?` | `number` |  |
| `workerPath?` | `string \\| URL` |  |

---

### VignetteEffect

Applies a vignette effect by darkening the corners, optimized with precomputation.

**Constructor**
```typescript
new VignetteEffect(strength: number)
```

---

### VRenderable

A generic renderable that accepts a custom render function as a prop.
This allows functional constructs to specify custom rendering behavior
without needing to subclass Renderable.

**Extends:** Renderable

**Constructor**
```typescript
new VRenderable(ctx: RenderContext, options: VRenderableOptions)
```

**Options** (VRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `render?` | `(this: VRenderableOptions \\| VRenderable, buffer: OptimizedBuffer, deltaTime: number, renderable: VRenderable) => void` |  |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: VRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: VRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: VRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: VRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: VRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

## Styling

Colors, text styling, and visual utilities

### BorderStyle

```typescript
type BorderStyle = "single" \| "double" \| "rounded" \| "heavy"
```

| Value | Description |
|-------|-------------|
| `"single"` | - |
| `"double"` | - |
| `"rounded"` | - |
| `"heavy"` | - |

---

### Color

Type alias for color input values.

```typescript
type Color = ColorInput
```

---

### ColorInput

Type representing color input - either a CSS color string or an RGBA instance.

```typescript
type ColorInput = string \| RGBA
```

---

### CursorStyle

```typescript
type CursorStyle = "block" \| "line" \| "underline"
```

| Value | Description |
|-------|-------------|
| `"block"` | - |
| `"line"` | - |
| `"underline"` | - |

---

### CursorStyleOptions

```typescript
interface CursorStyleOptions {
  blinking: boolean
  style: "block" \| "line" \| "underline"
}
```

**Options** (CursorStyleOptions)

| Property | Type | Description |
|----------|------|-------------|
| `blinking` | `boolean` |  |
| `style` | `"block" \\| "line" \\| "underline"` |  |

---

### LineColorConfig

Configuration for separate gutter and content background colors.

```typescript
interface LineColorConfig {
  content?: string \| RGBA
  gutter?: string \| RGBA
}
```

**Options** (LineColorConfig)

| Property | Type | Description |
|----------|------|-------------|
| `content?` | `string \\| RGBA` | Background color for the content area. |
| `gutter?` | `string \\| RGBA` | Background color for the gutter area. |

---

### MergedStyle

```typescript
interface MergedStyle {
  attributes: number
  bg?: RGBA
  fg?: RGBA
}
```

**Options** (MergedStyle)

| Property | Type | Description |
|----------|------|-------------|
| `attributes` | `number` |  |
| `bg?` | `RGBA` |  |
| `fg?` | `RGBA` |  |

---

### RGBA

Represents an RGBA color with values stored as floats (0.0 to 1.0).
This is the primary color type used throughout OpenTUI.

RGBA stores colors using normalized float values (0.0-1.0) for better performance
in the native rendering backend. The class provides multiple construction methods
and utilities for color manipulation.

**Constructor**
```typescript
new RGBA(buffer: Float32Array)
```

**Example**
```ts
// Create colors using various methods
const red = RGBA.fromValues(1, 0, 0, 1)
const blue = RGBA.fromInts(0, 0, 255)
const green = RGBA.fromHex("#00ff00")
const semi = RGBA.fromValues(1, 1, 1, 0.5)  // Semi-transparent white

// Modify color components
const color = RGBA.fromValues(1, 0, 0, 1)
color.a = 0.5  // Make it semi-transparent

// Convert to different formats
const [r, g, b, a] = color.toInts()  // Get as 0-255 integers
```

---

### StyleAttrs

Style attributes that can be applied to text.
Used to configure foreground/background colors and text styling.

```typescript
interface StyleAttrs {
  bg?: ColorInput
  blink?: boolean
  bold?: boolean
  dim?: boolean
  fg?: ColorInput
  italic?: boolean
  reverse?: boolean
  strikethrough?: boolean
  underline?: boolean
}
```

**Options** (StyleAttrs)

| Property | Type | Description |
|----------|------|-------------|
| `bg?` | `ColorInput` | Background color |
| `blink?` | `boolean` | Blinking text |
| `bold?` | `boolean` | Bold text |
| `dim?` | `boolean` | Dimmed/faint text |
| `fg?` | `ColorInput` | Foreground (text) color |
| `italic?` | `boolean` | Italic text |
| `reverse?` | `boolean` | Reverse video (swap fg/bg colors) |
| `strikethrough?` | `boolean` | Strikethrough text |
| `underline?` | `boolean` | Underlined text |

---

### StyleDefinition

```typescript
interface StyleDefinition {
  bg?: RGBA
  bold?: boolean
  dim?: boolean
  fg?: RGBA
  italic?: boolean
  underline?: boolean
}
```

**Options** (StyleDefinition)

| Property | Type | Description |
|----------|------|-------------|
| `bg?` | `RGBA` |  |
| `bold?` | `boolean` |  |
| `dim?` | `boolean` |  |
| `fg?` | `RGBA` |  |
| `italic?` | `boolean` |  |
| `underline?` | `boolean` |  |

---

### StyledText

Container for styled text content composed of multiple text chunks.
Each chunk can have its own colors and text attributes.

StyledText is the primary way to create colorful and formatted text in OpenTUI.
Use the template literal syntax with the `t` function or compose chunks using
the color/style helper functions.

**Constructor**
```typescript
new StyledText(chunks: TextChunk[])
```

**Example**
```ts
import { t, red, bold, blue, bgWhite } from "@opentui/core"

// Using template literals
const text1 = t`Hello ${red("World")}!`
const text2 = t`${bold("Important")}: ${blue("Information")}`

// Composing styles
const text3 = t`${bold(red("Error"))}: Something went wrong`
const text4 = t`${bgWhite(blue("Highlighted"))} text`

// Using in TextRenderable
const textComponent = new TextRenderable(ctx, {
  content: t`Status: ${green("Online")}`
})
```

---

### SyntaxStyle

**Constructor**
```typescript
new SyntaxStyle(lib: RenderLib, ptr: Pointer)
```

---

### TerminalColors

```typescript
interface TerminalColors {
  cursorColor: string
  defaultBackground: string
  defaultForeground: string
  highlightBackground: string
  highlightForeground: string
  mouseBackground: string
  mouseForeground: string
  palette: string[]
  tekBackground: string
  tekForeground: string
}
```

**Options** (TerminalColors)

| Property | Type | Description |
|----------|------|-------------|
| `cursorColor` | `string` |  |
| `defaultBackground` | `string` |  |
| `defaultForeground` | `string` |  |
| `highlightBackground` | `string` |  |
| `highlightForeground` | `string` |  |
| `mouseBackground` | `string` |  |
| `mouseForeground` | `string` |  |
| `palette` | `string[]` |  |
| `tekBackground` | `string` |  |
| `tekForeground` | `string` |  |

---

### ThemeTokenStyle

```typescript
interface ThemeTokenStyle {
  scope: string[]
  style: { background?: ColorInput; bold?: boolean; dim?: boolean; foreground?: ColorInput; italic?: boolean; underline?: boolean }
}
```

**Options** (ThemeTokenStyle)

| Property | Type | Description |
|----------|------|-------------|
| `scope` | `string[]` |  |
| `style` | `{ background?: ColorInput; bold?: boolean; dim?: boolean; foreground?: ColorInput; italic?: boolean; underline?: boolean }` |  |

---

### TreeSitterToStyledTextOptions

```typescript
interface TreeSitterToStyledTextOptions {
  conceal?: ConcealOptions
}
```

**Options** (TreeSitterToStyledTextOptions)

| Property | Type | Description |
|----------|------|-------------|
| `conceal?` | `ConcealOptions` |  |

---

## Animation

Timeline and animation utilities

### AnimationOptions

Configuration options for individual animations within a Timeline.

```typescript
interface AnimationOptions {
  alternate?: boolean
  duration: number
  ease?: "linear" \| "inQuad" \| "outQuad" \| "inOutQuad" \| "inExpo" \| "outExpo" \| "inOutSine" \| "outBounce" \| "outElastic" \| "inBounce" \| "inCirc" \| "outCirc" \| "inOutCirc" \| "inBack" \| "outBack" \| "inOutBack"
  loop?: number \| boolean
  loopDelay?: number
  once?: boolean
  onComplete?: () => void
  onLoop?: () => void
  onStart?: () => void
  onUpdate?: (animation: JSAnimation) => void
}
```

**Options** (AnimationOptions)

| Property | Type | Description |
|----------|------|-------------|
| `alternate?` | `boolean` | Whether to alternate direction on each loop |
| `duration` | `number` | Duration of the animation in milliseconds |
| `ease?` | `"linear" \\| "inQuad" \\| "outQuad" \\| "inOutQuad" \\| "inExpo" \\| "outExpo" \\| "inOutSine" \\| "outBounce" \\| "outElastic" \\| "inBounce" \\| "inCirc" \\| "outCirc" \\| "inOutCirc" \\| "inBack" \\| "outBack" \\| "inOutBack"` | Easing function to apply |
| `loop?` | `number \\| boolean` | Number of times to loop (true = infinite, number = specific count) |
| `loopDelay?` | `number` | Delay between loop iterations in milliseconds |
| `once?` | `boolean` | If true, animation is removed from timeline after completion |
| `onComplete?` | `() => void` | Callback invoked when animation completes |
| `onLoop?` | `() => void` | Callback invoked on each loop iteration |
| `onStart?` | `() => void` | Callback invoked when animation starts |
| `onUpdate?` | `(animation: JSAnimation) => void` | Callback invoked on each animation frame |

---

### JSAnimation

Animation state object passed to update callbacks.

```typescript
interface JSAnimation {
  currentTime: number
  deltaTime: number
  progress: number
  targets: any[]
}
```

**Options** (JSAnimation)

| Property | Type | Description |
|----------|------|-------------|
| `currentTime` | `number` | Current timeline time in milliseconds |
| `deltaTime` | `number` | Time elapsed since last frame in milliseconds |
| `progress` | `number` | Current progress (0-1) after easing |
| `targets` | `any[]` | Array of targets being animated |

---

### Timeline

**Constructor**
```typescript
new Timeline(options: TimelineOptions)
```

**Options** (TimelineOptions)

| Property | Type | Description |
|----------|------|-------------|
| `autoplay?` | `boolean` | Whether to start playing immediately upon creation |
| `duration?` | `number` | Total duration of the timeline in milliseconds |
| `loop?` | `boolean` | Whether the timeline should loop indefinitely |
| `onComplete?` | `() => void` | Callback invoked when the timeline completes |
| `onPause?` | `() => void` | Callback invoked when the timeline is paused |

---

### TimelineOptions

Configuration options for Timeline.

```typescript
interface TimelineOptions {
  autoplay?: boolean
  duration?: number
  loop?: boolean
  onComplete?: () => void
  onPause?: () => void
}
```

**Options** (TimelineOptions)

| Property | Type | Description |
|----------|------|-------------|
| `autoplay?` | `boolean` | Whether to start playing immediately upon creation |
| `duration?` | `number` | Total duration of the timeline in milliseconds |
| `loop?` | `boolean` | Whether the timeline should loop indefinitely |
| `onComplete?` | `() => void` | Callback invoked when the timeline completes |
| `onPause?` | `() => void` | Callback invoked when the timeline is paused |

---

## Input

Keyboard, mouse, and input handling

### ConsoleKeyBinding

Key binding configuration for console actions.

```typescript
type ConsoleKeyBinding = BaseKeyBinding<ConsoleAction>
```

---

### InputAction

```typescript
type InputAction = "move-left" \| "move-right" \| "move-home" \| "move-end" \| "delete-backward" \| "delete-forward" \| "submit"
```

| Value | Description |
|-------|-------------|
| `"move-left"` | - |
| `"move-right"` | - |
| `"move-home"` | - |
| `"move-end"` | - |
| `"delete-backward"` | - |
| `"delete-forward"` | - |
| `"submit"` | - |

---

### InputKeyBinding

```typescript
type InputKeyBinding = BaseKeyBinding<InputAction>
```

---

### InputRenderableOptions

Configuration options for InputRenderable.

**Options** (InputRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color when not focused |
| `cursorColor?` | `ColorInput` | Color of the cursor |
| `cursorStyle?` | `CursorStyleOptions` | Cursor style configuration |
| `focusedBackgroundColor?` | `ColorInput` | Background color when focused |
| `focusedTextColor?` | `ColorInput` | Text color when focused |
| `keyAliasMap?` | `KeyAliasMap` |  |
| `keyBindings?` | `InputKeyBinding[]` |  |
| `maxLength?` | `number` | Maximum number of characters allowed |
| `placeholder?` | `string` | Placeholder text shown when input is empty |
| `placeholderColor?` | `ColorInput` | Color of placeholder text |
| `textColor?` | `ColorInput` | Text color when not focused |
| `value?` | `string` | Initial value of the input |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: InputRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: InputRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: InputRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: InputRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: InputRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: InputRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### InternalKeyHandler

This class is used internally by the renderer to ensure global handlers
can preventDefault before renderable handlers process events.

**Extends:** KeyHandler

**Constructor**
```typescript
new InternalKeyHandler(useKittyKeyboard: boolean)
```

---

### KeyBinding

Key binding configuration for TextareaRenderable actions.

```typescript
type KeyBinding = BaseKeyBinding<TextareaAction>
```

---

### KeyEvent

**Constructor**
```typescript
new KeyEvent(key: ParsedKey)
```

---

### KeyEventType

```typescript
type KeyEventType = "press" \| "repeat" \| "release"
```

| Value | Description |
|-------|-------------|
| `"press"` | - |
| `"repeat"` | - |
| `"release"` | - |

---

### KeyHandler

**Extends:** EventEmitter<KeyHandlerEventMap>

**Extended by:** InternalKeyHandler

**Constructor**
```typescript
new KeyHandler(useKittyKeyboard: boolean)
```

---

### KeyHandlerEventMap

```typescript
type KeyHandlerEventMap = unknown
```

---

### MouseEvent

Represents a mouse event in the terminal.

Mouse events are triggered by user interactions such as clicks, drags, scrolls,
and mouse movements. Events are dispatched to the renderable at the mouse position.

**Constructor**
```typescript
new MouseEvent(target: Renderable, attributes: RawMouseEvent & { isSelecting?: boolean; source?: Renderable })
```

---

### MouseEventType

```typescript
type MouseEventType = "down" \| "up" \| "move" \| "drag" \| "drag-end" \| "drop" \| "over" \| "out" \| "scroll"
```

| Value | Description |
|-------|-------------|
| `"down"` | - |
| `"up"` | - |
| `"move"` | - |
| `"drag"` | - |
| `"drag-end"` | - |
| `"drop"` | - |
| `"over"` | - |
| `"out"` | - |
| `"scroll"` | - |

---

### MouseParser

**Constructor**
```typescript
new MouseParser()
```

---

### ParsedKey

**Options** (ParsedKey)

| Property | Type | Description |
|----------|------|-------------|
| `baseCode?` | `number` |  |
| `capsLock?` | `boolean` |  |
| `code?` | `string` |  |
| `ctrl` | `boolean` |  |
| `eventType` | `"press" \\| "repeat" \\| "release"` |  |
| `hyper?` | `boolean` |  |
| `meta` | `boolean` |  |
| `name` | `string` |  |
| `number` | `boolean` |  |
| `numLock?` | `boolean` |  |
| `option` | `boolean` |  |
| `raw` | `string` |  |
| `repeated?` | `boolean` |  |
| `sequence` | `string` |  |
| `shift` | `boolean` |  |
| `source` | `"raw" \\| "kitty"` |  |
| `super?` | `boolean` |  |

---

### ParseKeypressOptions

```typescript
type ParseKeypressOptions = unknown
```

---

### PasteEvent

**Constructor**
```typescript
new PasteEvent(text: string)
```

---

### RawMouseEvent

```typescript
type RawMouseEvent = unknown
```

---

### SelectKeyBinding

Key binding configuration for Select navigation.

```typescript
type SelectKeyBinding = BaseKeyBinding<"move-up" \| "move-down" \| "move-up-fast" \| "move-down-fast" \| "select-current">
```

---

### StylableInput

```typescript
type StylableInput = string \| number \| boolean \| TextChunk
```

---

### TabSelectKeyBinding

Key binding configuration for TabSelect navigation.

```typescript
type TabSelectKeyBinding = BaseKeyBinding<"move-left" \| "move-right" \| "select-current">
```

---

## Layout

Layout and positioning types

### AlignString

```typescript
type AlignString = "auto" \| "flex-start" \| "center" \| "flex-end" \| "stretch" \| "baseline" \| "space-between" \| "space-around" \| "space-evenly"
```

| Value | Description |
|-------|-------------|
| `"auto"` | - |
| `"flex-start"` | - |
| `"center"` | - |
| `"flex-end"` | - |
| `"stretch"` | - |
| `"baseline"` | - |
| `"space-between"` | - |
| `"space-around"` | - |
| `"space-evenly"` | - |

---

### FlexDirectionString

```typescript
type FlexDirectionString = "column" \| "column-reverse" \| "row" \| "row-reverse"
```

| Value | Description |
|-------|-------------|
| `"column"` | - |
| `"column-reverse"` | - |
| `"row"` | - |
| `"row-reverse"` | - |

---

### JustifyString

```typescript
type JustifyString = "flex-start" \| "center" \| "flex-end" \| "space-between" \| "space-around" \| "space-evenly"
```

| Value | Description |
|-------|-------------|
| `"flex-start"` | - |
| `"center"` | - |
| `"flex-end"` | - |
| `"space-between"` | - |
| `"space-around"` | - |
| `"space-evenly"` | - |

---

### LayoutOptions

Layout configuration options using Yoga (Flexbox) layout system.
All renderables support these properties to control their layout behavior.

**Options** (LayoutOptions)

| Property | Type | Description |
|----------|------|-------------|
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `id?` | `string` | Optional unique identifier for the renderable |

---

### Position

Position configuration for absolute positioning.
Values can be numbers (cell units), "auto", or percentage strings.

```typescript
interface Position {
  bottom?: number \| "auto" \| `${number}%`
  left?: number \| "auto" \| `${number}%`
  right?: number \| "auto" \| `${number}%`
  top?: number \| "auto" \| `${number}%`
}
```

**Options** (Position)

| Property | Type | Description |
|----------|------|-------------|
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Distance from the bottom edge |
| `left?` | `number \\| "auto" \\| `${number}%`` | Distance from the left edge |
| `right?` | `number \\| "auto" \\| `${number}%`` | Distance from the right edge |
| `top?` | `number \\| "auto" \\| `${number}%`` | Distance from the top edge |

---

### PositionTypeString

```typescript
type PositionTypeString = "static" \| "relative" \| "absolute"
```

| Value | Description |
|-------|-------------|
| `"static"` | - |
| `"relative"` | - |
| `"absolute"` | - |

---

## Rendering

Core rendering infrastructure

### BufferState

```typescript
interface BufferState {
  content: string
  filetype: string
  hasParser: boolean
  id: number
  version: number
}
```

**Options** (BufferState)

| Property | Type | Description |
|----------|------|-------------|
| `content` | `string` |  |
| `filetype` | `string` |  |
| `hasParser` | `boolean` |  |
| `id` | `number` |  |
| `version` | `number` |  |

---

### CliRenderer

The main renderer class for terminal UI applications.

CliRenderer manages the terminal state, coordinates rendering of all UI components,
handles user input (keyboard and mouse), and runs the render loop. It provides
the root container for all renderables and manages the layout/rendering lifecycle.

Do not instantiate directly - use createCliRenderer instead.

**Extends:** EventEmitter

**Constructor**
```typescript
new CliRenderer(lib: RenderLib, rendererPtr: Pointer, stdin: ReadStream, stdout: WriteStream, width: number, height: number, config: CliRendererConfig)
```

**Example**
```ts
import { createCliRenderer, TextRenderable } from "@opentui/core"

const renderer = await createCliRenderer()

// Add components to the root
const text = new TextRenderable(renderer, {
  content: "Hello, World!",
  fg: "#00FF00"
})
renderer.root.add(text)

// Set up keyboard handler
renderer.keyInput.on("keypress", (key) => {
  if (key.name === "q") {
    renderer.destroy()
  }
})

// Start the render loop
renderer.start()
```

---

### CliRendererConfig

Configuration options for createCliRenderer.

**Options** (CliRendererConfig)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color for the renderer |
| `consoleOptions?` | `ConsoleOptions` | Console configuration options |
| `debounceDelay?` | `number` | Debounce delay for input events in milliseconds |
| `enableMouseMovement?` | `boolean` | Whether to enable mouse movement tracking (default: false) |
| `exitOnCtrlC?` | `boolean` | Whether to automatically exit the process when Ctrl+C is pressed (default: false) |
| `exitSignals?` | `Signals[]` | Additional signals to listen for to trigger process exit |
| `experimental_splitHeight?` | `number` | Experimental: Split screen height for console/renderer |
| `gatherStats?` | `boolean` | Whether to gather rendering statistics (default: false) |
| `maxFps?` | `number` | Maximum frames per second cap |
| `maxStatSamples?` | `number` | Maximum number of stat samples to keep |
| `memorySnapshotInterval?` | `number` | Interval for memory snapshots in milliseconds |
| `onDestroy?` | `() => void` | Callback invoked when the renderer is destroyed |
| `openConsoleOnError?` | `boolean` | Whether to open console automatically on errors (default: true) |
| `postProcessFns?` | `(buffer: OptimizedBuffer, deltaTime: number) => void[]` | Post-processing functions to apply to the buffer each frame |
| `prependInputHandlers?` | `(sequence: string) => boolean[]` | Input handlers that will be prepended to the handler chain |
| `stdin?` | `ReadStream` | Input stream for reading terminal input (defaults to process.stdin) |
| `stdout?` | `WriteStream` | Output stream for writing terminal output (defaults to process.stdout) |
| `targetFps?` | `number` | Target frames per second for the render loop (default: 30) |
| `useAlternateScreen?` | `boolean` | Whether to use the terminal's alternate screen buffer (default: true) |
| `useConsole?` | `boolean` | Whether to enable the debug console (default: true) |
| `useKittyKeyboard?` | `{ events?: boolean }` | Kitty keyboard protocol configuration. |
| `useMouse?` | `boolean` | Whether to enable mouse input (default: true) |
| `useThread?` | `boolean` | Whether to use threading for rendering (default: true, auto-disabled on Linux) |

---

### EditBuffer

EditBuffer provides a text editing buffer with cursor management,
incremental editing, and grapheme-aware operations.

**Extends:** EventEmitter

**Constructor**
```typescript
new EditBuffer(lib: RenderLib, ptr: Pointer)
```

---

### FrameBufferOptions

Configuration options for FrameBufferRenderable.

**Options** (FrameBufferOptions)

| Property | Type | Description |
|----------|------|-------------|
| `height` | `number` | Height of the frame buffer in characters. |
| `respectAlpha?` | `boolean` | Whether to respect alpha transparency when compositing. |
| `width` | `number` | Width of the frame buffer in characters. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: FrameBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: FrameBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: FrameBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: FrameBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: FrameBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### OptimizedBuffer

High-performance cell-based drawing buffer for terminal rendering.
This is the primary API for drawing text, colors, and UI elements to the terminal.

OptimizedBuffer is the low-level drawing API used by all renderables. It provides:
- **Cell-Based Rendering**: Each cell contains a character, foreground/background color, and text attributes
- **Native Performance**: Backed by a native Zig implementation for speed
- **Scissor Rects**: Clipping regions for efficient partial updates
- **Alpha Blending**: Optional transparency support
- **Text Rendering**: Unicode text with selection highlighting
- **Box Drawing**: Borders with various styles
- **Frame Buffers**: Offscreen rendering support

**Constructor**
```typescript
new OptimizedBuffer(lib: RenderLib, ptr: Pointer, width: number, height: number, options: { id?: string; respectAlpha?: boolean; widthMethod?: "wcwidth" \| "unicode" })
```

**Example**
```ts
// Drawing text
buffer.drawText(
  5, 10,  // x, y position
  "Hello, World!",
  RGBA.white(),  // foreground color
  RGBA.black()   // background color
)

// Drawing a box with border
buffer.drawBox({
  x: 0, y: 0,
  width: 40, height: 10,
  border: ["top", "bottom", "left", "right"],
  borderStyle: "rounded",
  borderColor: RGBA.blue(),
  backgroundColor: RGBA.black(),
  title: "My Box"
})

// Fill a region
buffer.fillRect(10, 5, 20, 3, RGBA.red())
```

---

### ParsedBuffer

```typescript
interface ParsedBuffer {
  content: string
  filetype: string
  hasParser: true
  id: number
  version: number
}
```

**Options** (ParsedBuffer)

| Property | Type | Description |
|----------|------|-------------|
| `hasParser` | `true` |  |
| `content` | `string` |  |
| `filetype` | `string` |  |
| `id` | `number` |  |
| `version` | `number` |  |

---

### RenderContext

**Options** (RenderContext)

| Property | Type | Description |
|----------|------|-------------|
| `addToHitGrid` | `(x: number, y: number, width: number, height: number, id: number) => void` |  |
| `capabilities` | `any` |  |
| `clearSelection` | `() => void` |  |
| `currentFocusedRenderable` | `Renderable` |  |
| `dropLive` | `() => void` |  |
| `focusRenderable` | `(renderable: Renderable) => void` |  |
| `getLifecyclePasses` | `() => Set<Renderable>` |  |
| `getSelection` | `() => Selection` |  |
| `hasSelection` | `boolean` |  |
| `height` | `number` |  |
| `keyInput` | `KeyHandler` |  |
| `registerLifecyclePass` | `(renderable: Renderable) => void` |  |
| `requestLive` | `() => void` |  |
| `requestRender` | `() => void` |  |
| `requestSelectionUpdate` | `() => void` |  |
| `setCursorColor` | `(color: RGBA) => void` |  |
| `setCursorPosition` | `(x: number, y: number, visible: boolean) => void` |  |
| `setCursorStyle` | `(style: "block" \\| "line" \\| "underline", blinking: boolean) => void` |  |
| `startSelection` | `(renderable: Renderable, x: number, y: number) => void` |  |
| `unregisterLifecyclePass` | `(renderable: Renderable) => void` |  |
| `updateSelection` | `(currentRenderable: Renderable, x: number, y: number) => void` |  |
| `width` | `number` |  |
| `widthMethod` | `"wcwidth" \\| "unicode"` |  |

---

### RendererEvents

```typescript
interface RendererEvents {
  debugOverlay:toggle: (enabled: boolean) => void
  key: (data: Buffer) => void
  memory:snapshot: (snapshot: { arrayBuffers: number; heapTotal: number; heapUsed: number }) => void
  resize: (width: number, height: number) => void
  selection: (selection: Selection) => void
}
```

**Options** (RendererEvents)

| Property | Type | Description |
|----------|------|-------------|
| `debugOverlay:toggle` | `(enabled: boolean) => void` |  |
| `key` | `(data: Buffer) => void` |  |
| `memory:snapshot` | `(snapshot: { arrayBuffers: number; heapTotal: number; heapUsed: number }) => void` |  |
| `resize` | `(width: number, height: number) => void` |  |
| `selection` | `(selection: Selection) => void` |  |

---

### StdinBuffer

Buffers stdin input and emits complete sequences via the 'data' event.
Handles partial escape sequences that arrive across multiple chunks.

**Extends:** EventEmitter<StdinBufferEventMap>

**Constructor**
```typescript
new StdinBuffer(options: StdinBufferOptions)
```

---

### StdinBufferEventMap

```typescript
type StdinBufferEventMap = unknown
```

---

### StdinBufferOptions

```typescript
type StdinBufferOptions = unknown
```

---

### TextBuffer

**Constructor**
```typescript
new TextBuffer(lib: RenderLib, ptr: Pointer)
```

**Options** (TextBufferOptions)

| Property | Type | Description |
|----------|------|-------------|
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. Accepts color string or RGBA instance. |
| `fg?` | `string \\| RGBA` | Foreground (text) color. Accepts color string or RGBA instance. |
| `selectable?` | `boolean` | Whether this renderable can be selected with mouse or keyboard. |
| `selectionBg?` | `string \\| RGBA` | Background color for selected text. If undefined, uses default selection background. |
| `selectionFg?` | `string \\| RGBA` | Foreground color for selected text. If undefined, uses default foreground. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab |
| `tabIndicatorColor?` | `string \\| RGBA` | Color for tab indicator characters. |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TextBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TextBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### TextBufferOptions

Configuration options for TextBufferRenderable.

**Options** (TextBufferOptions)

| Property | Type | Description |
|----------|------|-------------|
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. Accepts color string or RGBA instance. |
| `fg?` | `string \\| RGBA` | Foreground (text) color. Accepts color string or RGBA instance. |
| `selectable?` | `boolean` | Whether this renderable can be selected with mouse or keyboard. |
| `selectionBg?` | `string \\| RGBA` | Background color for selected text. If undefined, uses default selection background. |
| `selectionFg?` | `string \\| RGBA` | Foreground color for selected text. If undefined, uses default foreground. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab |
| `tabIndicatorColor?` | `string \\| RGBA` | Color for tab indicator characters. |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TextBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TextBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### TextBufferView

**Constructor**
```typescript
new TextBufferView(lib: RenderLib, ptr: Pointer, textBuffer: TextBuffer)
```

---

## Types

Type aliases and utility types

### ArrowOptions

Configuration options for creating a Renderable.
Extends LayoutOptions with rendering and event handling capabilities.

**Options** (ArrowOptions)

| Property | Type | Description |
|----------|------|-------------|
| `arrowChars?` | `{ down?: string; left?: string; right?: string; up?: string }` |  |
| `attributes?` | `number` |  |
| `backgroundColor?` | `ColorInput` |  |
| `direction` | `"right" \\| "left" \\| "down" \\| "up"` |  |
| `foregroundColor?` | `ColorInput` |  |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: ArrowRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: ArrowRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: ArrowRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: ArrowRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: ArrowRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### ASCIIFontName

```typescript
type ASCIIFontName = "tiny" \| "block" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"
```

| Value | Description |
|-------|-------------|
| `"tiny"` | - |
| `"block"` | - |
| `"shade"` | - |
| `"slick"` | - |
| `"huge"` | - |
| `"grid"` | - |
| `"pallet"` | - |

---

### ASCIIFontOptions

Configuration options for ASCIIFontRenderable.

**Options** (ASCIIFontOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color. |
| `color?` | `ColorInput \\| ColorInput[]` | Color(s) for the text. |
| `font?` | `ASCIIFontName` | The ASCII art font to use. |
| `selectable?` | `boolean` | Whether the text can be selected. |
| `selectionBg?` | `ColorInput` | Selection background color. |
| `selectionFg?` | `ColorInput` | Selection foreground color. |
| `text?` | `string` | The text to display. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: ASCIIFontRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: ASCIIFontRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: ASCIIFontRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: ASCIIFontRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: ASCIIFontRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### BaseRenderableOptions

Base options for all renderables.

```typescript
interface BaseRenderableOptions {
  id?: string
}
```

**Options** (BaseRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `id?` | `string` | Optional unique identifier for the renderable |

---

### BorderCharacters

**Options** (BorderCharacters)

| Property | Type | Description |
|----------|------|-------------|
| `bottomLeft` | `string` |  |
| `bottomRight` | `string` |  |
| `bottomT` | `string` |  |
| `cross` | `string` |  |
| `horizontal` | `string` |  |
| `leftT` | `string` |  |
| `rightT` | `string` |  |
| `topLeft` | `string` |  |
| `topRight` | `string` |  |
| `topT` | `string` |  |
| `vertical` | `string` |  |

---

### BorderConfig

```typescript
interface BorderConfig {
  border: boolean \| "top" \| "right" \| "bottom" \| "left"[]
  borderColor?: ColorInput
  borderStyle: "single" \| "double" \| "rounded" \| "heavy"
  customBorderChars?: BorderCharacters
}
```

**Options** (BorderConfig)

| Property | Type | Description |
|----------|------|-------------|
| `border` | `boolean \\| "top" \\| "right" \\| "bottom" \\| "left"[]` |  |
| `borderColor?` | `ColorInput` |  |
| `borderStyle` | `"single" \\| "double" \\| "rounded" \\| "heavy"` |  |
| `customBorderChars?` | `BorderCharacters` |  |

---

### BorderSides

```typescript
type BorderSides = "top" \| "right" \| "bottom" \| "left"
```

| Value | Description |
|-------|-------------|
| `"top"` | - |
| `"right"` | - |
| `"bottom"` | - |
| `"left"` | - |

---

### BorderSidesConfig

```typescript
interface BorderSidesConfig {
  bottom: boolean
  left: boolean
  right: boolean
  top: boolean
}
```

**Options** (BorderSidesConfig)

| Property | Type | Description |
|----------|------|-------------|
| `bottom` | `boolean` |  |
| `left` | `boolean` |  |
| `right` | `boolean` |  |
| `top` | `boolean` |  |

---

### BoxDrawOptions

**Options** (BoxDrawOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor` | `ColorInput` |  |
| `border` | `boolean \\| "top" \\| "right" \\| "bottom" \\| "left"[]` |  |
| `borderColor` | `ColorInput` |  |
| `borderStyle` | `"single" \\| "double" \\| "rounded" \\| "heavy"` |  |
| `customBorderChars?` | `BorderCharacters` |  |
| `height` | `number` |  |
| `shouldFill?` | `boolean` |  |
| `title?` | `string` |  |
| `titleAlignment?` | `"center" \\| "right" \\| "left"` |  |
| `width` | `number` |  |
| `x` | `number` |  |
| `y` | `number` |  |

---

### BoxOptions

Configuration options for BoxRenderable.

**Options** (BoxOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `string \\| RGBA` | Background color for the box interior |
| `border?` | `boolean \\| "top" \\| "right" \\| "bottom" \\| "left"[]` | Which borders to draw (true for all, false for none, or array of sides) |
| `borderColor?` | `string \\| RGBA` | Border color |
| `borderStyle?` | `"single" \\| "double" \\| "rounded" \\| "heavy"` | Border style: "single", "double", "rounded", "bold", "ascii" |
| `columnGap?` | `number \\| `${number}%`` | Gap between columns of children |
| `customBorderChars?` | `BorderCharacters` | Custom border characters (for custom border styles) |
| `focusedBorderColor?` | `ColorInput` | Border color when the box is focused |
| `gap?` | `number \\| `${number}%`` | Gap between child elements (applies to both row and column gaps) |
| `rowGap?` | `number \\| `${number}%`` | Gap between rows of children |
| `shouldFill?` | `boolean` | Whether to fill the box interior with background color (default: true) |
| `title?` | `string` | Optional title text displayed in the top border |
| `titleAlignment?` | `"center" \\| "right" \\| "left"` | Title alignment: "left", "center", or "right" (default: "left") |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### BoxSizingString

```typescript
type BoxSizingString = "border-box" \| "content-box"
```

| Value | Description |
|-------|-------------|
| `"border-box"` | - |
| `"content-box"` | - |

---

### CodeOptions

Configuration options for CodeRenderable.

**Options** (CodeOptions)

| Property | Type | Description |
|----------|------|-------------|
| `conceal?` | `boolean` | Whether to enable concealing (hiding or transforming) certain syntax elements. |
| `content?` | `string` | The source code content to display. |
| `drawUnstyledText?` | `boolean` | Whether to show plain unstyled text before syntax highlighting completes. |
| `filetype?` | `string` | Programming language for syntax highlighting (e.g., "typescript", "python", "rust"). |
| `streaming?` | `boolean` | Whether the code is being streamed incrementally. |
| `syntaxStyle` | `SyntaxStyle` | Syntax style theme defining colors for different token types. |
| `treeSitterClient?` | `TreeSitterClient` | Custom Tree-sitter client for syntax highlighting. If not provided, uses global singleton. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. Accepts color string or RGBA instance. |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `fg?` | `string \\| RGBA` | Foreground (text) color. Accepts color string or RGBA instance. |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TextBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TextBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `selectable?` | `boolean` | Whether this renderable can be selected with mouse or keyboard. |
| `selectionBg?` | `string \\| RGBA` | Background color for selected text. If undefined, uses default selection background. |
| `selectionFg?` | `string \\| RGBA` | Foreground color for selected text. If undefined, uses default foreground. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab |
| `tabIndicatorColor?` | `string \\| RGBA` | Color for tab indicator characters. |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### ConsoleAction

Available actions for console keyboard bindings.

```typescript
type ConsoleAction = "scroll-up" \| "scroll-down" \| "scroll-to-top" \| "scroll-to-bottom" \| "position-previous" \| "position-next" \| "size-increase" \| "size-decrease" \| "save-logs" \| "copy-selection"
```

| Value | Description |
|-------|-------------|
| `"scroll-up"` | - |
| `"scroll-down"` | - |
| `"scroll-to-top"` | - |
| `"scroll-to-bottom"` | - |
| `"position-previous"` | - |
| `"position-next"` | - |
| `"size-increase"` | - |
| `"size-decrease"` | - |
| `"save-logs"` | - |
| `"copy-selection"` | - |

---

### ConsoleOptions

**Options** (ConsoleOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` |  |
| `colorDebug?` | `ColorInput` |  |
| `colorDefault?` | `ColorInput` |  |
| `colorError?` | `ColorInput` |  |
| `colorInfo?` | `ColorInput` |  |
| `colorWarn?` | `ColorInput` |  |
| `copyButtonColor?` | `ColorInput` | Color for the copy button |
| `cursorColor?` | `ColorInput` |  |
| `keyAliasMap?` | `KeyAliasMap` | Key alias map for normalizing key names |
| `keyBindings?` | `ConsoleKeyBinding[]` | Custom key bindings for console actions |
| `maxDisplayLines?` | `number` |  |
| `maxStoredLogs?` | `number` |  |
| `onCopySelection?` | `(text: string) => void` | Callback invoked when text is copied from the console selection |
| `position?` | `ConsolePosition` |  |
| `selectionColor?` | `ColorInput` | Color for text selection highlight |
| `sizePercent?` | `number` |  |
| `startInDebugMode?` | `boolean` |  |
| `title?` | `string` |  |
| `titleBarColor?` | `ColorInput` |  |
| `titleBarTextColor?` | `ColorInput` |  |
| `zIndex?` | `number` |  |

---

### Construct

```typescript
type Construct = RenderableConstructor<unknown> \| FunctionalConstruct<P>
```

---

### DataPaths

```typescript
interface DataPaths {
  globalConfigFile: string
  globalConfigPath: string
  globalDataPath: string
  localConfigFile: string
}
```

**Options** (DataPaths)

| Property | Type | Description |
|----------|------|-------------|
| `globalConfigFile` | `string` |  |
| `globalConfigPath` | `string` |  |
| `globalDataPath` | `string` |  |
| `localConfigFile` | `string` |  |

---

### DataPathsEvents

```typescript
interface DataPathsEvents {
  paths:changed: []
}
```

**Options** (DataPathsEvents)

| Property | Type | Description |
|----------|------|-------------|
| `paths:changed` | `[]` |  |

---

### DelegateMap

```typescript
type DelegateMap = Partial<Record<keyof unknown, string>>
```

---

### DiffRenderableOptions

Configuration options for DiffRenderable.

**Options** (DiffRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `addedBg?` | `string \\| RGBA` | Background color for added lines in gutter |
| `addedContentBg?` | `string \\| RGBA` | Background color for added lines in content area |
| `addedLineNumberBg?` | `string \\| RGBA` | Line number background color for added lines |
| `addedSignColor?` | `string \\| RGBA` | Color for the "+" sign on added lines |
| `conceal?` | `boolean` | Whether to conceal special characters |
| `contextBg?` | `string \\| RGBA` | Background color for context lines in gutter |
| `contextContentBg?` | `string \\| RGBA` | Background color for context lines in content area |
| `diff?` | `string` | The unified diff string to display |
| `fg?` | `string \\| RGBA` | Foreground text color |
| `filetype?` | `string` | File type for syntax highlighting |
| `lineNumberBg?` | `string \\| RGBA` | Line number gutter background color |
| `lineNumberFg?` | `string \\| RGBA` | Line number foreground color |
| `removedBg?` | `string \\| RGBA` | Background color for removed lines in gutter |
| `removedContentBg?` | `string \\| RGBA` | Background color for removed lines in content area |
| `removedLineNumberBg?` | `string \\| RGBA` | Line number background color for removed lines |
| `removedSignColor?` | `string \\| RGBA` | Color for the "-" sign on removed lines |
| `selectionBg?` | `string \\| RGBA` | Selection background color |
| `selectionFg?` | `string \\| RGBA` | Selection foreground color |
| `showLineNumbers?` | `boolean` | Whether to show line numbers |
| `syntaxStyle?` | `SyntaxStyle` | Syntax highlighting style configuration |
| `treeSitterClient?` | `TreeSitterClient` | Tree-sitter client for syntax highlighting |
| `view?` | `"unified" \\| "split"` | View mode: "unified" shows all changes in one column, "split" shows side-by-side |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: DiffRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: DiffRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: DiffRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: DiffRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: DiffRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: DiffRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### DimensionString

```typescript
type DimensionString = "width" \| "height"
```

| Value | Description |
|-------|-------------|
| `"width"` | - |
| `"height"` | - |

---

### DirectionString

```typescript
type DirectionString = "inherit" \| "ltr" \| "rtl"
```

| Value | Description |
|-------|-------------|
| `"inherit"` | - |
| `"ltr"` | - |
| `"rtl"` | - |

---

### DisplayString

```typescript
type DisplayString = "flex" \| "none" \| "contents"
```

| Value | Description |
|-------|-------------|
| `"flex"` | - |
| `"none"` | - |
| `"contents"` | - |

---

### EasingFunctions

```typescript
type EasingFunctions = keyof unknown
```

---

### EdgeString

```typescript
type EdgeString = "left" \| "top" \| "right" \| "bottom" \| "start" \| "end" \| "horizontal" \| "vertical" \| "all"
```

| Value | Description |
|-------|-------------|
| `"left"` | - |
| `"top"` | - |
| `"right"` | - |
| `"bottom"` | - |
| `"start"` | - |
| `"end"` | - |
| `"horizontal"` | - |
| `"vertical"` | - |
| `"all"` | - |

---

### Edit

```typescript
interface Edit {
  newEndIndex: number
  newEndPosition: { column: number; row: number }
  oldEndIndex: number
  oldEndPosition: { column: number; row: number }
  startIndex: number
  startPosition: { column: number; row: number }
}
```

**Options** (Edit)

| Property | Type | Description |
|----------|------|-------------|
| `newEndIndex` | `number` |  |
| `newEndPosition` | `{ column: number; row: number }` |  |
| `oldEndIndex` | `number` |  |
| `oldEndPosition` | `{ column: number; row: number }` |  |
| `startIndex` | `number` |  |
| `startPosition` | `{ column: number; row: number }` |  |

---

### EnvVarConfig

Environment variable registry

Usage:
```ts
import { registerEnvVar, env } from "./lib/env.ts";

// Register environment variables
registerEnvVar({
  name: "DEBUG",
  description: "Enable debug logging",
  type: "boolean",
  default: false
});

registerEnvVar({
  name: "PORT",
  description: "Server port number",
  type: "number",
  default: 3000
});

// Access environment variables
if (env.DEBUG) {
  console.log("Debug mode enabled");
}

const port = env.PORT; // number
```

```typescript
interface EnvVarConfig {
  default?: string \| number \| boolean
  description: string
  name: string
  type?: "string" \| "number" \| "boolean"
}
```

**Options** (EnvVarConfig)

| Property | Type | Description |
|----------|------|-------------|
| `default?` | `string \\| number \\| boolean` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `type?` | `"string" \\| "number" \\| "boolean"` |  |

---

### Extmark

```typescript
interface Extmark {
  data?: any
  end: number
  id: number
  priority?: number
  start: number
  styleId?: number
  typeId: number
  virtual: boolean
}
```

**Options** (Extmark)

| Property | Type | Description |
|----------|------|-------------|
| `data?` | `any` |  |
| `end` | `number` |  |
| `id` | `number` |  |
| `priority?` | `number` |  |
| `start` | `number` |  |
| `styleId?` | `number` |  |
| `typeId` | `number` |  |
| `virtual` | `boolean` |  |

---

### ExtmarkOptions

```typescript
interface ExtmarkOptions {
  data?: any
  end: number
  metadata?: any
  priority?: number
  start: number
  styleId?: number
  typeId?: number
  virtual?: boolean
}
```

**Options** (ExtmarkOptions)

| Property | Type | Description |
|----------|------|-------------|
| `data?` | `any` |  |
| `end` | `number` |  |
| `metadata?` | `any` |  |
| `priority?` | `number` |  |
| `start` | `number` |  |
| `styleId?` | `number` |  |
| `typeId?` | `number` |  |
| `virtual?` | `boolean` |  |

---

### FiletypeParserOptions

```typescript
interface FiletypeParserOptions {
  filetype: string
  injectionMapping?: InjectionMapping
  queries: { highlights: string[]; injections?: string[] }
  wasm: string
}
```

**Options** (FiletypeParserOptions)

| Property | Type | Description |
|----------|------|-------------|
| `filetype` | `string` |  |
| `injectionMapping?` | `InjectionMapping` |  |
| `queries` | `{ highlights: string[]; injections?: string[] }` |  |
| `wasm` | `string` |  |

---

### FunctionalConstruct

```typescript
type FunctionalConstruct = (props: P, children: VChild[]) => VNode
```

---

### GetPaletteOptions

```typescript
interface GetPaletteOptions {
  size?: number
  timeout?: number
}
```

**Options** (GetPaletteOptions)

| Property | Type | Description |
|----------|------|-------------|
| `size?` | `number` |  |
| `timeout?` | `number` |  |

---

### GutterString

```typescript
type GutterString = "column" \| "row" \| "all"
```

| Value | Description |
|-------|-------------|
| `"column"` | - |
| `"row"` | - |
| `"all"` | - |

---

### HASTElement

```typescript
interface HASTElement {
  children: HASTNode[]
  properties?: { className?: string }
  tagName: string
  type: "element"
}
```

**Options** (HASTElement)

| Property | Type | Description |
|----------|------|-------------|
| `children` | `HASTNode[]` |  |
| `properties?` | `{ className?: string }` |  |
| `tagName` | `string` |  |
| `type` | `"element"` |  |

---

### HASTNode

```typescript
type HASTNode = HASTText \| HASTElement
```

---

### HASTText

```typescript
interface HASTText {
  type: "text"
  value: string
}
```

**Options** (HASTText)

| Property | Type | Description |
|----------|------|-------------|
| `type` | `"text"` |  |
| `value` | `string` |  |

---

### Highlight

```typescript
interface Highlight {
  end: number
  hlRef?: number
  priority?: number
  start: number
  styleId: number
}
```

**Options** (Highlight)

| Property | Type | Description |
|----------|------|-------------|
| `end` | `number` |  |
| `hlRef?` | `number` |  |
| `priority?` | `number` |  |
| `start` | `number` |  |
| `styleId` | `number` |  |

---

### HighlightMeta

```typescript
interface HighlightMeta {
  conceal?: string
  concealLines?: string
  containsInjection?: boolean
  injectionLang?: string
  isInjection?: boolean
}
```

**Options** (HighlightMeta)

| Property | Type | Description |
|----------|------|-------------|
| `conceal?` | `string` |  |
| `concealLines?` | `string` |  |
| `containsInjection?` | `boolean` |  |
| `injectionLang?` | `string` |  |
| `isInjection?` | `boolean` |  |

---

### HighlightRange

```typescript
interface HighlightRange {
  endCol: number
  group: string
  startCol: number
}
```

**Options** (HighlightRange)

| Property | Type | Description |
|----------|------|-------------|
| `endCol` | `number` |  |
| `group` | `string` |  |
| `startCol` | `number` |  |

---

### HighlightResponse

```typescript
interface HighlightResponse {
  droppedHighlights: HighlightRange[]
  highlights: HighlightRange[]
  line: number
}
```

**Options** (HighlightResponse)

| Property | Type | Description |
|----------|------|-------------|
| `droppedHighlights` | `HighlightRange[]` |  |
| `highlights` | `HighlightRange[]` |  |
| `line` | `number` |  |

---

### InjectionMapping

```typescript
interface InjectionMapping {
  infoStringMap?: object
  nodeTypes?: object
}
```

**Options** (InjectionMapping)

| Property | Type | Description |
|----------|------|-------------|
| `infoStringMap?` | `object` |  |
| `nodeTypes?` | `object` |  |

---

### InstantiateFn

```typescript
type InstantiateFn = Renderable & { __node?: NodeType }
```

---

### LineInfo

```typescript
interface LineInfo {
  lineSources: number[]
  lineStarts: number[]
  lineWidths: number[]
  lineWraps: number[]
  maxLineWidth: number
}
```

**Options** (LineInfo)

| Property | Type | Description |
|----------|------|-------------|
| `lineSources` | `number[]` |  |
| `lineStarts` | `number[]` |  |
| `lineWidths` | `number[]` |  |
| `lineWraps` | `number[]` |  |
| `maxLineWidth` | `number` |  |

---

### LineInfoProvider

```typescript
interface LineInfoProvider {
  lineCount: unknown
  lineInfo: unknown
  scrollY: unknown
  virtualLineCount: unknown
}
```

**Options** (LineInfoProvider)

| Property | Type | Description |
|----------|------|-------------|

---

### LineNumberOptions

Configuration options for LineNumberRenderable.

**Options** (LineNumberOptions)

| Property | Type | Description |
|----------|------|-------------|
| `bg?` | `string \\| RGBA` | Background color for the gutter. |
| `fg?` | `string \\| RGBA` | Foreground color for line numbers. |
| `hideLineNumbers?` | `Set<number>` |  |
| `lineColors?` | `Map<number, string \\| RGBA \\| LineColorConfig>` | Map of line numbers to custom background colors for highlighting specific lines. |
| `lineNumberOffset?` | `number` |  |
| `lineNumbers?` | `Map<number, number>` |  |
| `lineSigns?` | `Map<number, LineSign>` | Map of line numbers to decorative signs (markers, icons). |
| `minWidth?` | `number` | Minimum width of the line number column in characters. |
| `paddingRight?` | `number` | Right padding after line numbers. |
| `showLineNumbers?` | `boolean` |  |
| `target?` | `Renderable & LineInfoProvider` | The target renderable to display line numbers for. Must implement LineInfoProvider. |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: LineNumberRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: LineNumberRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: LineNumberRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: LineNumberRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: LineNumberRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### LineSign

Configuration for decorative signs displayed next to line numbers.

```typescript
interface LineSign {
  after?: string
  afterColor?: string \| RGBA
  before?: string
  beforeColor?: string \| RGBA
}
```

**Options** (LineSign)

| Property | Type | Description |
|----------|------|-------------|
| `after?` | `string` | Text to display after the line number (e.g., breakpoint, error marker). |
| `afterColor?` | `string \\| RGBA` | Color for the 'after' text. |
| `before?` | `string` | Text to display before the line number (e.g., git status indicator). |
| `beforeColor?` | `string \\| RGBA` | Color for the 'before' text. |

---

### LocalSelectionBounds

```typescript
interface LocalSelectionBounds {
  anchorX: number
  anchorY: number
  focusX: number
  focusY: number
  isActive: boolean
}
```

**Options** (LocalSelectionBounds)

| Property | Type | Description |
|----------|------|-------------|
| `anchorX` | `number` |  |
| `anchorY` | `number` |  |
| `focusX` | `number` |  |
| `focusY` | `number` |  |
| `isActive` | `boolean` |  |

---

### LogicalCursor

```typescript
interface LogicalCursor {
  col: number
  offset: number
  row: number
}
```

**Options** (LogicalCursor)

| Property | Type | Description |
|----------|------|-------------|
| `col` | `number` |  |
| `offset` | `number` |  |
| `row` | `number` |  |

---

### LogLevelString

```typescript
type LogLevelString = "error" \| "warn" \| "info" \| "debug" \| "verbose" \| "fatal"
```

| Value | Description |
|-------|-------------|
| `"error"` | - |
| `"warn"` | - |
| `"info"` | - |
| `"debug"` | - |
| `"verbose"` | - |
| `"fatal"` | - |

---

### MeasureModeString

```typescript
type MeasureModeString = "undefined" \| "exactly" \| "at-most"
```

| Value | Description |
|-------|-------------|
| `"undefined"` | - |
| `"exactly"` | - |
| `"at-most"` | - |

---

### OverflowString

```typescript
type OverflowString = "visible" \| "hidden" \| "scroll"
```

| Value | Description |
|-------|-------------|
| `"visible"` | - |
| `"hidden"` | - |
| `"scroll"` | - |

---

### PendingCall

```typescript
interface PendingCall {
  args: any[]
  isProperty?: boolean
  method: string
}
```

**Options** (PendingCall)

| Property | Type | Description |
|----------|------|-------------|
| `args` | `any[]` |  |
| `isProperty?` | `boolean` |  |
| `method` | `string` |  |

---

### PerformanceStats

```typescript
interface PerformanceStats {
  averageParseTime: number
  averageQueryTime: number
  parseTimes: number[]
  queryTimes: number[]
}
```

**Options** (PerformanceStats)

| Property | Type | Description |
|----------|------|-------------|
| `averageParseTime` | `number` |  |
| `averageQueryTime` | `number` |  |
| `parseTimes` | `number[]` |  |
| `queryTimes` | `number[]` |  |

---

### PixelResolution

```typescript
type PixelResolution = unknown
```

---

### ProxiedVNode

```typescript
type ProxiedVNode = VNode<unknown> & unknown
```

---

### RenderableConstructor

```typescript
interface RenderableConstructor {
  constructor: unknown
}
```

**Options** (RenderableConstructor)

| Property | Type | Description |
|----------|------|-------------|

---

### RenderableOptions

Configuration options for creating a Renderable.
Extends LayoutOptions with rendering and event handling capabilities.

**Options** (RenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: T, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: T, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: T, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: T, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: T, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: T, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: T, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: T, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: T, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: T, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: T, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: T) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `renderAfter?` | `(this: T, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: T, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |

---

### RenderCommand

```typescript
type RenderCommand = RenderCommandPushScissorRect \| RenderCommandPopScissorRect \| RenderCommandRender \| RenderCommandPushOpacity \| RenderCommandPopOpacity
```

---

### RenderLib

**Options** (RenderLib)

| Property | Type | Description |
|----------|------|-------------|
| `addToHitGrid` | `(renderer: Pointer, x: number, y: number, width: number, height: number, id: number) => void` |  |
| `bufferClear` | `(buffer: Pointer, color: RGBA) => void` |  |
| `bufferClearOpacity` | `(buffer: Pointer) => void` |  |
| `bufferClearScissorRects` | `(buffer: Pointer) => void` |  |
| `bufferDrawBox` | `(buffer: Pointer, x: number, y: number, width: number, height: number, borderChars: Uint32Array, packedOptions: number, borderColor: RGBA, backgroundColor: RGBA, title: string) => void` |  |
| `bufferDrawChar` | `(buffer: Pointer, char: number, x: number, y: number, fg: RGBA, bg: RGBA, attributes: number) => void` |  |
| `bufferDrawEditorView` | `(buffer: Pointer, view: Pointer, x: number, y: number) => void` |  |
| `bufferDrawPackedBuffer` | `(buffer: Pointer, dataPtr: Pointer, dataLen: number, posX: number, posY: number, terminalWidthCells: number, terminalHeightCells: number) => void` |  |
| `bufferDrawSuperSampleBuffer` | `(buffer: Pointer, x: number, y: number, pixelDataPtr: Pointer, pixelDataLength: number, format: "bgra8unorm" \\| "rgba8unorm", alignedBytesPerRow: number) => void` |  |
| `bufferDrawText` | `(buffer: Pointer, text: string, x: number, y: number, color: RGBA, bgColor: RGBA, attributes: number) => void` |  |
| `bufferDrawTextBufferView` | `(buffer: Pointer, view: Pointer, x: number, y: number) => void` |  |
| `bufferFillRect` | `(buffer: Pointer, x: number, y: number, width: number, height: number, color: RGBA) => void` |  |
| `bufferGetAttributesPtr` | `(buffer: Pointer) => Pointer` |  |
| `bufferGetBgPtr` | `(buffer: Pointer) => Pointer` |  |
| `bufferGetCharPtr` | `(buffer: Pointer) => Pointer` |  |
| `bufferGetCurrentOpacity` | `(buffer: Pointer) => number` |  |
| `bufferGetFgPtr` | `(buffer: Pointer) => Pointer` |  |
| `bufferGetId` | `(buffer: Pointer) => string` |  |
| `bufferGetRealCharSize` | `(buffer: Pointer) => number` |  |
| `bufferGetRespectAlpha` | `(buffer: Pointer) => boolean` |  |
| `bufferPopOpacity` | `(buffer: Pointer) => void` |  |
| `bufferPopScissorRect` | `(buffer: Pointer) => void` |  |
| `bufferPushOpacity` | `(buffer: Pointer, opacity: number) => void` |  |
| `bufferPushScissorRect` | `(buffer: Pointer, x: number, y: number, width: number, height: number) => void` |  |
| `bufferResize` | `(buffer: Pointer, width: number, height: number) => void` |  |
| `bufferSetCell` | `(buffer: Pointer, x: number, y: number, char: string, color: RGBA, bgColor: RGBA, attributes: number) => void` |  |
| `bufferSetCellWithAlphaBlending` | `(buffer: Pointer, x: number, y: number, char: string, color: RGBA, bgColor: RGBA, attributes: number) => void` |  |
| `bufferSetRespectAlpha` | `(buffer: Pointer, respectAlpha: boolean) => void` |  |
| `bufferWriteResolvedChars` | `(buffer: Pointer, outputBuffer: Uint8Array, addLineBreaks: boolean) => number` |  |
| `checkHit` | `(renderer: Pointer, x: number, y: number) => number` |  |
| `clearTerminal` | `(renderer: Pointer) => void` |  |
| `createEditBuffer` | `(widthMethod: "wcwidth" \\| "unicode") => Pointer` |  |
| `createEditorView` | `(editBufferPtr: Pointer, viewportWidth: number, viewportHeight: number) => Pointer` |  |
| `createOptimizedBuffer` | `(width: number, height: number, widthMethod: "wcwidth" \\| "unicode", respectAlpha: boolean, id: string) => OptimizedBuffer` |  |
| `createRenderer` | `(width: number, height: number, options: { testing: boolean }) => Pointer` |  |
| `createSyntaxStyle` | `() => Pointer` |  |
| `createTextBuffer` | `(widthMethod: "wcwidth" \\| "unicode") => TextBuffer` |  |
| `createTextBufferView` | `(textBuffer: Pointer) => Pointer` |  |
| `decoder` | `TextDecoder` |  |
| `destroyEditBuffer` | `(buffer: Pointer) => void` |  |
| `destroyEditorView` | `(view: Pointer) => void` |  |
| `destroyOptimizedBuffer` | `(bufferPtr: Pointer) => void` |  |
| `destroyRenderer` | `(renderer: Pointer) => void` |  |
| `destroySyntaxStyle` | `(style: Pointer) => void` |  |
| `destroyTextBuffer` | `(buffer: Pointer) => void` |  |
| `destroyTextBufferView` | `(view: Pointer) => void` |  |
| `disableKittyKeyboard` | `(renderer: Pointer) => void` |  |
| `disableMouse` | `(renderer: Pointer) => void` |  |
| `drawFrameBuffer` | `(targetBufferPtr: Pointer, destX: number, destY: number, bufferPtr: Pointer, sourceX: number, sourceY: number, sourceWidth: number, sourceHeight: number) => void` |  |
| `dumpBuffers` | `(renderer: Pointer, timestamp: number) => void` |  |
| `dumpHitGrid` | `(renderer: Pointer) => void` |  |
| `dumpStdoutBuffer` | `(renderer: Pointer, timestamp: number) => void` |  |
| `editBufferCanRedo` | `(buffer: Pointer) => boolean` |  |
| `editBufferCanUndo` | `(buffer: Pointer) => boolean` |  |
| `editBufferClear` | `(buffer: Pointer) => void` |  |
| `editBufferClearHistory` | `(buffer: Pointer) => void` |  |
| `editBufferDebugLogRope` | `(buffer: Pointer) => void` |  |
| `editBufferDeleteChar` | `(buffer: Pointer) => void` |  |
| `editBufferDeleteCharBackward` | `(buffer: Pointer) => void` |  |
| `editBufferDeleteLine` | `(buffer: Pointer) => void` |  |
| `editBufferDeleteRange` | `(buffer: Pointer, startLine: number, startCol: number, endLine: number, endCol: number) => void` |  |
| `editBufferGetCursorPosition` | `(buffer: Pointer) => LogicalCursor` |  |
| `editBufferGetEOL` | `(buffer: Pointer) => { col: number; offset: number; row: number }` |  |
| `editBufferGetId` | `(buffer: Pointer) => number` |  |
| `editBufferGetLineStartOffset` | `(buffer: Pointer, row: number) => number` |  |
| `editBufferGetNextWordBoundary` | `(buffer: Pointer) => { col: number; offset: number; row: number }` |  |
| `editBufferGetPrevWordBoundary` | `(buffer: Pointer) => { col: number; offset: number; row: number }` |  |
| `editBufferGetText` | `(buffer: Pointer, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `editBufferGetTextBuffer` | `(buffer: Pointer) => Pointer` |  |
| `editBufferGetTextRange` | `(buffer: Pointer, startOffset: number, endOffset: number, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `editBufferGetTextRangeByCoords` | `(buffer: Pointer, startRow: number, startCol: number, endRow: number, endCol: number, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `editBufferGotoLine` | `(buffer: Pointer, line: number) => void` |  |
| `editBufferInsertChar` | `(buffer: Pointer, char: string) => void` |  |
| `editBufferInsertText` | `(buffer: Pointer, text: string) => void` |  |
| `editBufferMoveCursorDown` | `(buffer: Pointer) => void` |  |
| `editBufferMoveCursorLeft` | `(buffer: Pointer) => void` |  |
| `editBufferMoveCursorRight` | `(buffer: Pointer) => void` |  |
| `editBufferMoveCursorUp` | `(buffer: Pointer) => void` |  |
| `editBufferNewLine` | `(buffer: Pointer) => void` |  |
| `editBufferOffsetToPosition` | `(buffer: Pointer, offset: number) => { col: number; offset: number; row: number }` |  |
| `editBufferPositionToOffset` | `(buffer: Pointer, row: number, col: number) => number` |  |
| `editBufferRedo` | `(buffer: Pointer, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `editBufferReplaceText` | `(buffer: Pointer, textBytes: Uint8Array) => void` |  |
| `editBufferReplaceTextFromMem` | `(buffer: Pointer, memId: number) => void` |  |
| `editBufferSetCursor` | `(buffer: Pointer, line: number, col: number) => void` |  |
| `editBufferSetCursorByOffset` | `(buffer: Pointer, offset: number) => void` |  |
| `editBufferSetCursorToLineCol` | `(buffer: Pointer, line: number, col: number) => void` |  |
| `editBufferSetText` | `(buffer: Pointer, textBytes: Uint8Array) => void` |  |
| `editBufferSetTextFromMem` | `(buffer: Pointer, memId: number) => void` |  |
| `editBufferUndo` | `(buffer: Pointer, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `editorViewDeleteSelectedText` | `(view: Pointer) => void` |  |
| `editorViewGetCursor` | `(view: Pointer) => { col: number; row: number }` |  |
| `editorViewGetEOL` | `(view: Pointer) => VisualCursor` |  |
| `editorViewGetLineInfo` | `(view: Pointer) => LineInfo` |  |
| `editorViewGetLogicalLineInfo` | `(view: Pointer) => LineInfo` |  |
| `editorViewGetNextWordBoundary` | `(view: Pointer) => VisualCursor` |  |
| `editorViewGetPrevWordBoundary` | `(view: Pointer) => VisualCursor` |  |
| `editorViewGetSelectedTextBytes` | `(view: Pointer, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `editorViewGetSelection` | `(view: Pointer) => { end: number; start: number }` |  |
| `editorViewGetText` | `(view: Pointer, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `editorViewGetTextBufferView` | `(view: Pointer) => Pointer` |  |
| `editorViewGetTotalVirtualLineCount` | `(view: Pointer) => number` |  |
| `editorViewGetViewport` | `(view: Pointer) => { height: number; offsetX: number; offsetY: number; width: number }` |  |
| `editorViewGetVirtualLineCount` | `(view: Pointer) => number` |  |
| `editorViewGetVisualCursor` | `(view: Pointer) => VisualCursor` |  |
| `editorViewGetVisualEOL` | `(view: Pointer) => VisualCursor` |  |
| `editorViewGetVisualSOL` | `(view: Pointer) => VisualCursor` |  |
| `editorViewMoveDownVisual` | `(view: Pointer) => void` |  |
| `editorViewMoveUpVisual` | `(view: Pointer) => void` |  |
| `editorViewResetLocalSelection` | `(view: Pointer) => void` |  |
| `editorViewResetSelection` | `(view: Pointer) => void` |  |
| `editorViewSetCursorByOffset` | `(view: Pointer, offset: number) => void` |  |
| `editorViewSetLocalSelection` | `(view: Pointer, anchorX: number, anchorY: number, focusX: number, focusY: number, bgColor: RGBA, fgColor: RGBA) => boolean` |  |
| `editorViewSetPlaceholderStyledText` | `(view: Pointer, chunks: { attributes?: number; bg?: RGBA; fg?: RGBA; text: string }[]) => void` |  |
| `editorViewSetScrollMargin` | `(view: Pointer, margin: number) => void` |  |
| `editorViewSetSelection` | `(view: Pointer, start: number, end: number, bgColor: RGBA, fgColor: RGBA) => void` |  |
| `editorViewSetTabIndicator` | `(view: Pointer, indicator: number) => void` |  |
| `editorViewSetTabIndicatorColor` | `(view: Pointer, color: RGBA) => void` |  |
| `editorViewSetViewportSize` | `(view: Pointer, width: number, height: number) => void` |  |
| `editorViewSetWrapMode` | `(view: Pointer, mode: "none" \\| "char" \\| "word") => void` |  |
| `enableKittyKeyboard` | `(renderer: Pointer, flags: number) => void` |  |
| `enableMouse` | `(renderer: Pointer, enableMovement: boolean) => void` |  |
| `encoder` | `TextEncoder` |  |
| `encodeUnicode` | `(text: string, widthMethod: "wcwidth" \\| "unicode") => { data: { char: number; width: number }[]; ptr: Pointer }` |  |
| `freeUnicode` | `(encoded: { data: { char: number; width: number }[]; ptr: Pointer }) => void` |  |
| `getArenaAllocatedBytes` | `() => number` |  |
| `getBufferHeight` | `(buffer: Pointer) => number` |  |
| `getBufferWidth` | `(buffer: Pointer) => number` |  |
| `getCurrentBuffer` | `(renderer: Pointer) => OptimizedBuffer` |  |
| `getKittyKeyboardFlags` | `(renderer: Pointer) => number` |  |
| `getNextBuffer` | `(renderer: Pointer) => OptimizedBuffer` |  |
| `getPlainTextBytes` | `(buffer: Pointer, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `getTerminalCapabilities` | `(renderer: Pointer) => any` |  |
| `offNativeEvent` | `(name: string, handler: (data: ArrayBuffer) => void) => void` |  |
| `onAnyNativeEvent` | `(handler: (name: string, data: ArrayBuffer) => void) => void` |  |
| `onceNativeEvent` | `(name: string, handler: (data: ArrayBuffer) => void) => void` |  |
| `onNativeEvent` | `(name: string, handler: (data: ArrayBuffer) => void) => void` |  |
| `processCapabilityResponse` | `(renderer: Pointer, response: string) => void` |  |
| `queryPixelResolution` | `(renderer: Pointer) => void` |  |
| `render` | `(renderer: Pointer, force: boolean) => void` |  |
| `resizeRenderer` | `(renderer: Pointer, width: number, height: number) => void` |  |
| `resumeRenderer` | `(renderer: Pointer) => void` |  |
| `setBackgroundColor` | `(renderer: Pointer, color: RGBA) => void` |  |
| `setCursorColor` | `(renderer: Pointer, color: RGBA) => void` |  |
| `setCursorPosition` | `(renderer: Pointer, x: number, y: number, visible: boolean) => void` |  |
| `setCursorStyle` | `(renderer: Pointer, style: "block" \\| "line" \\| "underline", blinking: boolean) => void` |  |
| `setDebugOverlay` | `(renderer: Pointer, enabled: boolean, corner: DebugOverlayCorner) => void` |  |
| `setKittyKeyboardFlags` | `(renderer: Pointer, flags: number) => void` |  |
| `setRenderOffset` | `(renderer: Pointer, offset: number) => void` |  |
| `setTerminalTitle` | `(renderer: Pointer, title: string) => void` |  |
| `setupTerminal` | `(renderer: Pointer, useAlternateScreen: boolean) => void` |  |
| `setUseThread` | `(renderer: Pointer, useThread: boolean) => void` |  |
| `suspendRenderer` | `(renderer: Pointer) => void` |  |
| `syntaxStyleGetStyleCount` | `(style: Pointer) => number` |  |
| `syntaxStyleRegister` | `(style: Pointer, name: string, fg: RGBA, bg: RGBA, attributes: number) => number` |  |
| `syntaxStyleResolveByName` | `(style: Pointer, name: string) => number` |  |
| `textBufferAddHighlight` | `(buffer: Pointer, lineIdx: number, highlight: Highlight) => void` |  |
| `textBufferAddHighlightByCharRange` | `(buffer: Pointer, highlight: Highlight) => void` |  |
| `textBufferAppend` | `(buffer: Pointer, bytes: Uint8Array) => void` |  |
| `textBufferAppendFromMemId` | `(buffer: Pointer, memId: number) => void` |  |
| `textBufferClear` | `(buffer: Pointer) => void` |  |
| `textBufferClearAllHighlights` | `(buffer: Pointer) => void` |  |
| `textBufferClearLineHighlights` | `(buffer: Pointer, lineIdx: number) => void` |  |
| `textBufferClearMemRegistry` | `(buffer: Pointer) => void` |  |
| `textBufferGetByteSize` | `(buffer: Pointer) => number` |  |
| `textBufferGetHighlightCount` | `(buffer: Pointer) => number` |  |
| `textBufferGetLength` | `(buffer: Pointer) => number` |  |
| `textBufferGetLineCount` | `(buffer: Pointer) => number` |  |
| `textBufferGetLineHighlights` | `(buffer: Pointer, lineIdx: number) => Highlight[]` |  |
| `textBufferGetTabWidth` | `(buffer: Pointer) => number` |  |
| `textBufferGetTextRange` | `(buffer: Pointer, startOffset: number, endOffset: number, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `textBufferGetTextRangeByCoords` | `(buffer: Pointer, startRow: number, startCol: number, endRow: number, endCol: number, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `textBufferLoadFile` | `(buffer: Pointer, path: string) => boolean` |  |
| `textBufferRegisterMemBuffer` | `(buffer: Pointer, bytes: Uint8Array, owned: boolean) => number` |  |
| `textBufferRemoveHighlightsByRef` | `(buffer: Pointer, hlRef: number) => void` |  |
| `textBufferReplaceMemBuffer` | `(buffer: Pointer, memId: number, bytes: Uint8Array, owned: boolean) => boolean` |  |
| `textBufferReset` | `(buffer: Pointer) => void` |  |
| `textBufferResetDefaults` | `(buffer: Pointer) => void` |  |
| `textBufferSetDefaultAttributes` | `(buffer: Pointer, attributes: number) => void` |  |
| `textBufferSetDefaultBg` | `(buffer: Pointer, bg: RGBA) => void` |  |
| `textBufferSetDefaultFg` | `(buffer: Pointer, fg: RGBA) => void` |  |
| `textBufferSetStyledText` | `(buffer: Pointer, chunks: { attributes?: number; bg?: RGBA; fg?: RGBA; text: string }[]) => void` |  |
| `textBufferSetSyntaxStyle` | `(buffer: Pointer, style: Pointer) => void` |  |
| `textBufferSetTabWidth` | `(buffer: Pointer, width: number) => void` |  |
| `textBufferSetTextFromMem` | `(buffer: Pointer, memId: number) => void` |  |
| `textBufferViewGetLineInfo` | `(view: Pointer) => LineInfo` |  |
| `textBufferViewGetLogicalLineInfo` | `(view: Pointer) => LineInfo` |  |
| `textBufferViewGetPlainTextBytes` | `(view: Pointer, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `textBufferViewGetSelectedTextBytes` | `(view: Pointer, maxLength: number) => Uint8Array<ArrayBufferLike>` |  |
| `textBufferViewGetSelection` | `(view: Pointer) => { end: number; start: number }` |  |
| `textBufferViewGetVirtualLineCount` | `(view: Pointer) => number` |  |
| `textBufferViewMeasureForDimensions` | `(view: Pointer, width: number, height: number) => { lineCount: number; maxWidth: number }` |  |
| `textBufferViewResetLocalSelection` | `(view: Pointer) => void` |  |
| `textBufferViewResetSelection` | `(view: Pointer) => void` |  |
| `textBufferViewSetLocalSelection` | `(view: Pointer, anchorX: number, anchorY: number, focusX: number, focusY: number, bgColor: RGBA, fgColor: RGBA) => boolean` |  |
| `textBufferViewSetSelection` | `(view: Pointer, start: number, end: number, bgColor: RGBA, fgColor: RGBA) => void` |  |
| `textBufferViewSetTabIndicator` | `(view: Pointer, indicator: number) => void` |  |
| `textBufferViewSetTabIndicatorColor` | `(view: Pointer, color: RGBA) => void` |  |
| `textBufferViewSetViewport` | `(view: Pointer, x: number, y: number, width: number, height: number) => void` |  |
| `textBufferViewSetViewportSize` | `(view: Pointer, width: number, height: number) => void` |  |
| `textBufferViewSetWrapMode` | `(view: Pointer, mode: "none" \\| "char" \\| "word") => void` |  |
| `textBufferViewSetWrapWidth` | `(view: Pointer, width: number) => void` |  |
| `updateMemoryStats` | `(renderer: Pointer, heapUsed: number, heapTotal: number, arrayBuffers: number) => void` |  |
| `updateStats` | `(renderer: Pointer, time: number, fps: number, frameCallbackTime: number) => void` |  |

---

### ScrollAcceleration

```typescript
interface ScrollAcceleration {
  reset: unknown
  tick: unknown
}
```

**Options** (ScrollAcceleration)

| Property | Type | Description |
|----------|------|-------------|

---

### ScrollBarOptions

Configuration options for ScrollBarRenderable.

**Options** (ScrollBarOptions)

| Property | Type | Description |
|----------|------|-------------|
| `arrowOptions?` | `Omit<ArrowOptions, "direction">` | Options for the arrow buttons |
| `onChange?` | `(position: number) => void` | Callback invoked when scroll position changes |
| `orientation` | `"vertical" \\| "horizontal"` | Orientation of the scrollbar |
| `showArrows?` | `boolean` | Show arrow buttons at each end |
| `trackOptions?` | `Partial<SliderOptions>` | Options for the slider track |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: ScrollBarRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: ScrollBarRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: ScrollBarRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: ScrollBarRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: ScrollBarRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### ScrollBoxOptions

Configuration options for ScrollBoxRenderable.

**Options** (ScrollBoxOptions)

| Property | Type | Description |
|----------|------|-------------|
| `contentOptions?` | `BoxOptions` | Options for the content container that holds child elements |
| `horizontalScrollbarOptions?` | `Omit<ScrollBarOptions, "orientation">` | Options specific to the horizontal scrollbar |
| `rootOptions?` | `BoxOptions` | Options for the root container element |
| `scrollAcceleration?` | `ScrollAcceleration` | Custom scroll acceleration for mouse wheel events |
| `scrollbarOptions?` | `Omit<ScrollBarOptions, "orientation">` | Common scrollbar options applied to both vertical and horizontal scrollbars |
| `scrollX?` | `boolean` | Enable horizontal scrolling |
| `scrollY?` | `boolean` | Enable vertical scrolling |
| `stickyScroll?` | `boolean` | Enable sticky scroll behavior (auto-scroll when content changes) |
| `stickyStart?` | `"top" \\| "right" \\| "bottom" \\| "left"` | Initial sticky position when stickyScroll is enabled |
| `verticalScrollbarOptions?` | `Omit<ScrollBarOptions, "orientation">` | Options specific to the vertical scrollbar |
| `viewportCulling?` | `boolean` | Enable viewport culling to skip rendering off-screen children |
| `viewportOptions?` | `BoxOptions` | Options for the viewport element that clips the content |
| `wrapperOptions?` | `BoxOptions` | Options for the wrapper element that contains viewport and horizontal scrollbar |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `backgroundColor?` | `string \\| RGBA` | Background color for the box interior |
| `border?` | `boolean \\| "top" \\| "right" \\| "bottom" \\| "left"[]` | Which borders to draw (true for all, false for none, or array of sides) |
| `borderColor?` | `string \\| RGBA` | Border color |
| `borderStyle?` | `"single" \\| "double" \\| "rounded" \\| "heavy"` | Border style: "single", "double", "rounded", "bold", "ascii" |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `columnGap?` | `number \\| `${number}%`` | Gap between columns of children |
| `customBorderChars?` | `BorderCharacters` | Custom border characters (for custom border styles) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `focusedBorderColor?` | `ColorInput` | Border color when the box is focused |
| `gap?` | `number \\| `${number}%`` | Gap between child elements (applies to both row and column gaps) |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: ScrollBoxRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: ScrollBoxRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: ScrollBoxRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: ScrollBoxRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: ScrollBoxRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `rowGap?` | `number \\| `${number}%`` | Gap between rows of children |
| `shouldFill?` | `boolean` | Whether to fill the box interior with background color (default: true) |
| `title?` | `string` | Optional title text displayed in the top border |
| `titleAlignment?` | `"center" \\| "right" \\| "left"` | Title alignment: "left", "center", or "right" (default: "left") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### ScrollInfo

```typescript
interface ScrollInfo {
  delta: number
  direction: "right" \| "left" \| "down" \| "up"
}
```

**Options** (ScrollInfo)

| Property | Type | Description |
|----------|------|-------------|
| `delta` | `number` |  |
| `direction` | `"right" \\| "left" \\| "down" \\| "up"` |  |

---

### ScrollUnit

Unit of measurement for scroll operations.

```typescript
type ScrollUnit = "absolute" \| "viewport" \| "content" \| "step"
```

| Value | Description |
|-------|-------------|
| `"absolute"` | - |
| `"viewport"` | - |
| `"content"` | - |
| `"step"` | - |

---

### SelectAction

Action types for Select keyboard navigation.

```typescript
type SelectAction = "move-up" \| "move-down" \| "move-up-fast" \| "move-down-fast" \| "select-current"
```

| Value | Description |
|-------|-------------|
| `"move-up"` | - |
| `"move-down"` | - |
| `"move-up-fast"` | - |
| `"move-down-fast"` | - |
| `"select-current"` | - |

---

### SelectOption

An option item for SelectRenderable.

```typescript
interface SelectOption {
  description: string
  name: string
  value?: any
}
```

**Options** (SelectOption)

| Property | Type | Description |
|----------|------|-------------|
| `description` | `string` | Description text shown below the name |
| `name` | `string` | Display name of the option |
| `value?` | `any` | Optional value associated with the option |

---

### SelectRenderableOptions

Configuration options for SelectRenderable.

**Options** (SelectRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color when unfocused |
| `descriptionColor?` | `ColorInput` | Color for description text |
| `fastScrollStep?` | `number` | Number of items to skip when Shift is held |
| `focusedBackgroundColor?` | `ColorInput` | Background color when focused |
| `focusedTextColor?` | `ColorInput` | Text color when focused |
| `font?` | `"block" \\| "tiny" \\| "shade" \\| "slick" \\| "huge" \\| "grid" \\| "pallet"` | ASCII font to use for option names |
| `itemSpacing?` | `number` | Vertical spacing between items |
| `keyAliasMap?` | `KeyAliasMap` |  |
| `keyBindings?` | `SelectKeyBinding[]` |  |
| `options?` | `SelectOption[]` | List of selectable options |
| `selectedBackgroundColor?` | `ColorInput` | Background color for the selected item |
| `selectedDescriptionColor?` | `ColorInput` | Color for selected item's description |
| `selectedIndex?` | `number` | Initially selected option index |
| `selectedTextColor?` | `ColorInput` | Text color for the selected item |
| `showDescription?` | `boolean` | Show description text below option names |
| `showScrollIndicator?` | `boolean` | Show a scroll indicator on the right edge |
| `textColor?` | `ColorInput` | Text color when unfocused |
| `wrapSelection?` | `boolean` | Allow wrapping from last to first item |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: SelectRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: SelectRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: SelectRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: SelectRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: SelectRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: SelectRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### SimpleHighlight

```typescript
type SimpleHighlight = []
```

---

### SliderOptions

Configuration options for SliderRenderable.

**Options** (SliderOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color for the track |
| `foregroundColor?` | `ColorInput` | Foreground color for the thumb |
| `max?` | `number` | Maximum value |
| `min?` | `number` | Minimum value |
| `onChange?` | `(value: number) => void` | Callback invoked when value changes |
| `orientation` | `"vertical" \\| "horizontal"` | Orientation of the slider |
| `value?` | `number` | Current value (between min and max) |
| `viewPortSize?` | `number` | Size of the viewport (affects thumb size) |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: SliderRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: SliderRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: SliderRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: SliderRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: SliderRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: SliderRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### SubmitEvent

Event fired when the textarea is submitted (typically via Cmd/Meta+Enter).

---

### TabSelectAction

Action types for TabSelect keyboard navigation.

```typescript
type TabSelectAction = "move-left" \| "move-right" \| "select-current"
```

| Value | Description |
|-------|-------------|
| `"move-left"` | - |
| `"move-right"` | - |
| `"select-current"` | - |

---

### TabSelectOption

An option item for TabSelectRenderable.

```typescript
interface TabSelectOption {
  description: string
  name: string
  value?: any
}
```

**Options** (TabSelectOption)

| Property | Type | Description |
|----------|------|-------------|
| `description` | `string` | Description shown below tabs when selected |
| `name` | `string` | Display name of the tab |
| `value?` | `any` | Optional value associated with the tab |

---

### TabSelectRenderableOptions

Configuration options for TabSelectRenderable.

**Options** (TabSelectRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color when unfocused |
| `focusedBackgroundColor?` | `ColorInput` | Background color when focused |
| `focusedTextColor?` | `ColorInput` | Text color when focused |
| `height?` | `number` | Height is auto-calculated based on showUnderline and showDescription |
| `keyAliasMap?` | `KeyAliasMap` |  |
| `keyBindings?` | `TabSelectKeyBinding[]` |  |
| `options?` | `TabSelectOption[]` | List of tabs |
| `selectedBackgroundColor?` | `ColorInput` | Background color for selected tab |
| `selectedDescriptionColor?` | `ColorInput` | Color for description text |
| `selectedTextColor?` | `ColorInput` | Text color for selected tab |
| `showDescription?` | `boolean` | Show description below tabs |
| `showScrollArrows?` | `boolean` | Show scroll arrows when tabs overflow |
| `showUnderline?` | `boolean` | Show underline below selected tab |
| `tabWidth?` | `number` | Fixed width for each tab |
| `textColor?` | `ColorInput` | Text color when unfocused |
| `wrapSelection?` | `boolean` | Allow wrapping from last to first tab |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TabSelectRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TabSelectRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TabSelectRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TabSelectRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TabSelectRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### TerminalPaletteDetector

```typescript
interface TerminalPaletteDetector {
  cleanup: unknown
  detect: unknown
  detectOSCSupport: unknown
}
```

**Options** (TerminalPaletteDetector)

| Property | Type | Description |
|----------|------|-------------|

---

### TextareaAction

Actions that can be performed in a TextareaRenderable.

```typescript
type TextareaAction = "move-left" \| "move-right" \| "move-up" \| "move-down" \| "select-left" \| "select-right" \| "select-up" \| "select-down" \| "line-home" \| "line-end" \| "select-line-home" \| "select-line-end" \| "visual-line-home" \| "visual-line-end" \| "select-visual-line-home" \| "select-visual-line-end" \| "buffer-home" \| "buffer-end" \| "select-buffer-home" \| "select-buffer-end" \| "delete-line" \| "delete-to-line-end" \| "delete-to-line-start" \| "backspace" \| "delete" \| "newline" \| "undo" \| "redo" \| "word-forward" \| "word-backward" \| "select-word-forward" \| "select-word-backward" \| "delete-word-forward" \| "delete-word-backward" \| "submit"
```

| Value | Description |
|-------|-------------|
| `"move-left"` | - |
| `"move-right"` | - |
| `"move-up"` | - |
| `"move-down"` | - |
| `"select-left"` | - |
| `"select-right"` | - |
| `"select-up"` | - |
| `"select-down"` | - |
| `"line-home"` | - |
| `"line-end"` | - |
| `"select-line-home"` | - |
| `"select-line-end"` | - |
| `"visual-line-home"` | - |
| `"visual-line-end"` | - |
| `"select-visual-line-home"` | - |
| `"select-visual-line-end"` | - |
| `"buffer-home"` | - |
| `"buffer-end"` | - |
| `"select-buffer-home"` | - |
| `"select-buffer-end"` | - |
| `"delete-line"` | - |
| `"delete-to-line-end"` | - |
| `"delete-to-line-start"` | - |
| `"backspace"` | - |
| `"delete"` | - |
| `"newline"` | - |
| `"undo"` | - |
| `"redo"` | - |
| `"word-forward"` | - |
| `"word-backward"` | - |
| `"select-word-forward"` | - |
| `"select-word-backward"` | - |
| `"delete-word-forward"` | - |
| `"delete-word-backward"` | - |
| `"submit"` | - |

---

### TextareaOptions

Configuration options for TextareaRenderable.

**Options** (TextareaOptions)

| Property | Type | Description |
|----------|------|-------------|
| `backgroundColor?` | `ColorInput` | Background color when unfocused |
| `focusedBackgroundColor?` | `ColorInput` | Background color when focused |
| `focusedTextColor?` | `ColorInput` | Text color when focused |
| `initialValue?` | `string` | Initial text content |
| `keyAliasMap?` | `KeyAliasMap` | Custom key alias mappings for remapping keys |
| `keyBindings?` | `KeyBinding[]` | Custom key bindings to override defaults |
| `onSubmit?` | `(event: SubmitEvent) => void` | Callback invoked when textarea is submitted |
| `placeholder?` | `string \\| StyledText` | Placeholder text shown when empty |
| `textColor?` | `ColorInput` | Text color when unfocused |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline). |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `cursorColor?` | `string \\| RGBA` | Cursor color. |
| `cursorStyle?` | `CursorStyleOptions` | Cursor style configuration. |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onContentChange?` | `(event: ContentChangeEvent) => void` | Callback invoked when content changes. |
| `onCursorChange?` | `(event: CursorChangeEvent) => void` | Callback invoked when cursor position changes. |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: EditBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: EditBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: EditBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: EditBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: EditBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `scrollMargin?` | `number` | Scroll margin as fraction of viewport height. |
| `selectable?` | `boolean` | Whether text can be selected. |
| `selectionBg?` | `string \\| RGBA` | Selection background color. |
| `selectionFg?` | `string \\| RGBA` | Selection foreground color. |
| `showCursor?` | `boolean` | Whether to show the cursor. |
| `syntaxStyle?` | `SyntaxStyle` | Syntax highlighting theme. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. |
| `tabIndicatorColor?` | `string \\| RGBA` | Tab indicator color. |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### TextChunk

```typescript
interface TextChunk {
  attributes?: number
  bg?: RGBA
  fg?: RGBA
  text: string
}
```

**Options** (TextChunk)

| Property | Type | Description |
|----------|------|-------------|
| `attributes?` | `number` |  |
| `bg?` | `RGBA` |  |
| `fg?` | `RGBA` |  |
| `text` | `string` |  |

---

### TextNodeOptions

Configuration options for TextNodeRenderable.

```typescript
interface TextNodeOptions {
  attributes?: number
  bg?: string \| RGBA
  fg?: string \| RGBA
  id?: string
}
```

**Options** (TextNodeOptions)

| Property | Type | Description |
|----------|------|-------------|
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. |
| `fg?` | `string \\| RGBA` | Foreground (text) color. |
| `id?` | `string` | Optional unique identifier for the renderable |

---

### TextOptions

Configuration options for TextRenderable.

**Options** (TextOptions)

| Property | Type | Description |
|----------|------|-------------|
| `content?` | `string \\| StyledText` | Text content to display (plain string or StyledText) |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `attributes?` | `number` | Text attributes bitfield (bold, italic, underline, etc.). |
| `bg?` | `string \\| RGBA` | Background color. Accepts color string or RGBA instance. |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `fg?` | `string \\| RGBA` | Foreground (text) color. Accepts color string or RGBA instance. |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: TextBufferRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: TextBufferRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: TextBufferRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: TextBufferRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `selectable?` | `boolean` | Whether this renderable can be selected with mouse or keyboard. |
| `selectionBg?` | `string \\| RGBA` | Background color for selected text. If undefined, uses default selection background. |
| `selectionFg?` | `string \\| RGBA` | Foreground color for selected text. If undefined, uses default foreground. |
| `tabIndicator?` | `string \\| number` | Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab |
| `tabIndicatorColor?` | `string \\| RGBA` | Color for tab indicator characters. |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `wrapMode?` | `"none" \\| "char" \\| "word"` | Text wrapping mode. |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### Timeout

```typescript
type Timeout = ReturnType<unknown> \| undefined
```

---

### TreeSitterClientEvents

```typescript
interface TreeSitterClientEvents {
  buffer:disposed: []
  buffer:initialized: []
  error: []
  highlights:response: []
  warning: []
  worker:log: []
}
```

**Options** (TreeSitterClientEvents)

| Property | Type | Description |
|----------|------|-------------|
| `buffer:disposed` | `[]` |  |
| `buffer:initialized` | `[]` |  |
| `error` | `[]` |  |
| `highlights:response` | `[]` |  |
| `warning` | `[]` |  |
| `worker:log` | `[]` |  |

---

### TreeSitterClientOptions

```typescript
interface TreeSitterClientOptions {
  dataPath: string
  initTimeout?: number
  workerPath?: string \| URL
}
```

**Options** (TreeSitterClientOptions)

| Property | Type | Description |
|----------|------|-------------|
| `dataPath` | `string` |  |
| `initTimeout?` | `number` |  |
| `workerPath?` | `string \\| URL` |  |

---

### UnitString

```typescript
type UnitString = "undefined" \| "point" \| "percent" \| "auto"
```

| Value | Description |
|-------|-------------|
| `"undefined"` | - |
| `"point"` | - |
| `"percent"` | - |
| `"auto"` | - |

---

### UpdateOptions

```typescript
interface UpdateOptions {
  assetsDir: string
  configPath: string
  outputPath: string
}
```

**Options** (UpdateOptions)

| Property | Type | Description |
|----------|------|-------------|
| `assetsDir` | `string` | Directory where .wasm and .scm files will be downloaded |
| `configPath` | `string` | Path to parsers-config.json |
| `outputPath` | `string` | Path where the generated TypeScript file will be written |

---

### ValidateShape

```typescript
type ValidateShape = unknown
```

---

### VChild

```typescript
type VChild = VNode \| Renderable \| VChild[] \| null \| undefined \| false
```

---

### Viewport

```typescript
interface Viewport {
  height: number
  offsetX: number
  offsetY: number
  width: number
}
```

**Options** (Viewport)

| Property | Type | Description |
|----------|------|-------------|
| `height` | `number` |  |
| `offsetX` | `number` |  |
| `offsetY` | `number` |  |
| `width` | `number` |  |

---

### ViewportBounds

```typescript
interface ViewportBounds {
  height: number
  width: number
  x: number
  y: number
}
```

**Options** (ViewportBounds)

| Property | Type | Description |
|----------|------|-------------|
| `height` | `number` |  |
| `width` | `number` |  |
| `x` | `number` |  |
| `y` | `number` |  |

---

### VisualCursor

VisualCursor represents a cursor position with both visual and logical coordinates.
Visual coordinates (visualRow, visualCol) are VIEWPORT-RELATIVE.
This means visualRow=0 is the first visible line in the viewport, not the first line in the document.
Logical coordinates (logicalRow, logicalCol) are document-absolute.

```typescript
interface VisualCursor {
  logicalCol: number
  logicalRow: number
  offset: number
  visualCol: number
  visualRow: number
}
```

**Options** (VisualCursor)

| Property | Type | Description |
|----------|------|-------------|
| `logicalCol` | `number` |  |
| `logicalRow` | `number` |  |
| `offset` | `number` |  |
| `visualCol` | `number` |  |
| `visualRow` | `number` |  |

---

### VNode

```typescript
interface VNode {
  [BrandedVNode]: true
  children?: C
  props?: P
  type: Construct<P>
}
```

**Options** (VNode)

| Property | Type | Description |
|----------|------|-------------|
| `[BrandedVNode]` | `true` |  |
| `children?` | `C` |  |
| `props?` | `P` |  |
| `type` | `Construct<P>` |  |

---

### VRenderableOptions

Configuration options for creating a Renderable.
Extends LayoutOptions with rendering and event handling capabilities.

**Options** (VRenderableOptions)

| Property | Type | Description |
|----------|------|-------------|
| `render?` | `(this: VRenderableOptions \\| VRenderable, buffer: OptimizedBuffer, deltaTime: number, renderable: VRenderable) => void` |  |
| `alignItems?` | `AlignString` | Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline" |
| `alignSelf?` | `AlignString` | Override parent's alignItems for this item |
| `bottom?` | `number \\| "auto" \\| `${number}%`` | Position from bottom edge (requires position: "absolute") |
| `buffered?` | `boolean` | Whether to use an offscreen buffer for rendering (improves performance for complex renderables) |
| `enableLayout?` | `boolean` | Whether to enable layout calculation (default: true) |
| `flexBasis?` | `number \\| "auto"` | Initial size before remaining space is distributed |
| `flexDirection?` | `"column" \\| "column-reverse" \\| "row" \\| "row-reverse"` | Direction of flex items: "row", "column", "row-reverse", "column-reverse" |
| `flexGrow?` | `number` | How much the item should grow relative to siblings (default: 0) |
| `flexShrink?` | `number` | How much the item should shrink relative to siblings (default: 1) |
| `flexWrap?` | `"no-wrap" \\| "wrap" \\| "wrap-reverse"` | Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse" |
| `height?` | `number \\| "auto" \\| `${number}%`` | Height in cells, "auto", or percentage (e.g., "50%") |
| `id?` | `string` | Optional unique identifier for the renderable |
| `justifyContent?` | `"flex-start" \\| "center" \\| "flex-end" \\| "space-between" \\| "space-around" \\| "space-evenly"` | Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", |
| `left?` | `number \\| "auto" \\| `${number}%`` | Position from left edge (requires position: "absolute") |
| `live?` | `boolean` | Whether to request continuous rendering (default: false) |
| `margin?` | `number \\| "auto" \\| `${number}%`` | Margin on all sides |
| `marginBottom?` | `number \\| "auto" \\| `${number}%`` | Margin on bottom edge |
| `marginLeft?` | `number \\| "auto" \\| `${number}%`` | Margin on left edge |
| `marginRight?` | `number \\| "auto" \\| `${number}%`` | Margin on right edge |
| `marginTop?` | `number \\| "auto" \\| `${number}%`` | Margin on top edge |
| `maxHeight?` | `number \\| "auto" \\| `${number}%`` | Maximum height constraint |
| `maxWidth?` | `number \\| "auto" \\| `${number}%`` | Maximum width constraint |
| `minHeight?` | `number \\| "auto" \\| `${number}%`` | Minimum height constraint |
| `minWidth?` | `number \\| "auto" \\| `${number}%`` | Minimum width constraint |
| `onKeyDown?` | `(key: KeyEvent) => void` | Handler for key press events (when renderable is focused) |
| `onMouse?` | `(this: VRenderable, event: MouseEvent) => void` | Catch-all handler for any mouse event |
| `onMouseDown?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse button press |
| `onMouseDrag?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse drag (movement with button pressed) |
| `onMouseDragEnd?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for end of mouse drag |
| `onMouseDrop?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse drop (after drag) |
| `onMouseMove?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse movement (without button pressed) |
| `onMouseOut?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse leaving the renderable's bounds |
| `onMouseOver?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse entering the renderable's bounds |
| `onMouseScroll?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse scroll events |
| `onMouseUp?` | `(this: VRenderable, event: MouseEvent) => void` | Handler for mouse button release |
| `onPaste?` | `(this: VRenderable, event: PasteEvent) => void` | Handler for paste events (when renderable is focused) |
| `onSizeChange?` | `(this: VRenderable) => void` | Handler called when the renderable's size changes |
| `opacity?` | `number` |  |
| `overflow?` | `"visible" \\| "hidden" \\| "scroll"` | How overflow is handled: "visible", "hidden", "scroll" |
| `padding?` | `number \\| `${number}%`` | Padding on all sides |
| `paddingBottom?` | `number \\| `${number}%`` | Padding on bottom edge |
| `paddingLeft?` | `number \\| `${number}%`` | Padding on left edge |
| `paddingRight?` | `number \\| `${number}%`` | Padding on right edge |
| `paddingTop?` | `number \\| `${number}%`` | Padding on top edge |
| `position?` | `"static" \\| "relative" \\| "absolute"` | Position type: "relative" (default) or "absolute" |
| `renderAfter?` | `(this: VRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called after the renderable's render method |
| `renderBefore?` | `(this: VRenderable, buffer: OptimizedBuffer, deltaTime: number) => void` | Hook called before the renderable's render method |
| `right?` | `number \\| "auto" \\| `${number}%`` | Position from right edge (requires position: "absolute") |
| `top?` | `number \\| "auto" \\| `${number}%`` | Position from top edge (requires position: "absolute") |
| `visible?` | `boolean` | Whether the renderable is visible (default: true) |
| `width?` | `number \\| "auto" \\| `${number}%`` | Width in cells, "auto", or percentage (e.g., "50%") |
| `zIndex?` | `number` | Stacking order - higher values render on top (default: 0) |

---

### WidthMethod

```typescript
type WidthMethod = "wcwidth" \| "unicode"
```

| Value | Description |
|-------|-------------|
| `"wcwidth"` | - |
| `"unicode"` | - |

---

### WrapString

```typescript
type WrapString = "no-wrap" \| "wrap" \| "wrap-reverse"
```

| Value | Description |
|-------|-------------|
| `"no-wrap"` | - |
| `"wrap"` | - |
| `"wrap-reverse"` | - |

---

### WriteFunction

```typescript
type WriteFunction = (data: string \| Buffer) => boolean
```

---

## Enums

Enumeration values

### CliRenderEvents

| Member | Value |
|--------|-------|
| `DEBUG_OVERLAY_TOGGLE` | `debugOverlay:toggle` |
| `DESTROY` | `destroy` |

---

### ConsolePosition

| Member | Value |
|--------|-------|
| `BOTTOM` | `bottom` |
| `LEFT` | `left` |
| `RIGHT` | `right` |
| `TOP` | `top` |

---

### DebugOverlayCorner

| Member | Value |
|--------|-------|
| `bottomLeft` | `2` |
| `bottomRight` | `3` |
| `topLeft` | `0` |
| `topRight` | `1` |

---

### InputRenderableEvents

Events emitted by InputRenderable.

| Member | Value |
|--------|-------|
| `CHANGE` | `change` |
| `ENTER` | `enter` |
| `INPUT` | `input` |

---

### LayoutEvents

Events emitted by renderables related to layout changes.

| Member | Value |
|--------|-------|
| `ADDED` | `added` |
| `LAYOUT_CHANGED` | `layout-changed` |
| `REMOVED` | `removed` |
| `RESIZED` | `resized` |

---

### LogLevel

| Member | Value |
|--------|-------|
| `Debug` | `3` |
| `Error` | `0` |
| `Info` | `2` |
| `Warn` | `1` |

---

### MouseButton

| Member | Value |
|--------|-------|
| `LEFT` | `0` |
| `MIDDLE` | `1` |
| `RIGHT` | `2` |
| `WHEEL_DOWN` | `5` |
| `WHEEL_UP` | `4` |

---

### RenderableEvents

Events emitted by renderables related to focus state changes.

| Member | Value |
|--------|-------|
| `BLURRED` | `blurred` |
| `FOCUSED` | `focused` |

---

### RendererControlState

| Member | Value |
|--------|-------|
| `AUTO_STARTED` | `auto_started` |
| `EXPLICIT_PAUSED` | `explicit_paused` |
| `EXPLICIT_STARTED` | `explicit_started` |
| `EXPLICIT_STOPPED` | `explicit_stopped` |
| `EXPLICIT_SUSPENDED` | `explicit_suspended` |
| `IDLE` | `idle` |

---

### SelectRenderableEvents

Events emitted by SelectRenderable.

| Member | Value |
|--------|-------|
| `ITEM_SELECTED` | `itemSelected` |
| `SELECTION_CHANGED` | `selectionChanged` |

---

### TabSelectRenderableEvents

Events emitted by TabSelectRenderable.

| Member | Value |
|--------|-------|
| `ITEM_SELECTED` | `itemSelected` |
| `SELECTION_CHANGED` | `selectionChanged` |

---

## Functions

Utility functions

### addDefaultParsers

```typescript
function addDefaultParsers(parsers: FiletypeParserOptions[]): void
```

**Parameters**

- `parsers` - FiletypeParserOptions[]

---

### applyAsciiArt

Converts the buffer to ASCII art based on background brightness.

```typescript
function applyAsciiArt(buffer: OptimizedBuffer, ramp: string): void
```

**Parameters**

- `buffer` - OptimizedBuffer
- `ramp` - string

---

### applyChromaticAberration

Applies a simplified chromatic aberration effect.

```typescript
function applyChromaticAberration(buffer: OptimizedBuffer, strength: number): void
```

**Parameters**

- `buffer` - OptimizedBuffer
- `strength` - number

---

### applyGrayscale

Converts the buffer colors to grayscale.

```typescript
function applyGrayscale(buffer: OptimizedBuffer): void
```

**Parameters**

- `buffer` - OptimizedBuffer

---

### applyInvert

Inverts the colors in the buffer.

```typescript
function applyInvert(buffer: OptimizedBuffer): void
```

**Parameters**

- `buffer` - OptimizedBuffer

---

### applyNoise

Adds random noise to the buffer colors.

```typescript
function applyNoise(buffer: OptimizedBuffer, strength: number): void
```

**Parameters**

- `buffer` - OptimizedBuffer
- `strength` - number

---

### applyScanlines

Applies a scanline effect by darkening every nth row.

```typescript
function applyScanlines(buffer: OptimizedBuffer, strength: number, step: number): void
```

**Parameters**

- `buffer` - OptimizedBuffer
- `strength` - number
- `step` - number

---

### applySepia

Applies a sepia tone to the buffer.

```typescript
function applySepia(buffer: OptimizedBuffer): void
```

**Parameters**

- `buffer` - OptimizedBuffer

---

### ASCIIFont

```typescript
function ASCIIFont(props?: ASCIIFontOptions, children: VChild[]): ProxiedVNode<unknown>
```

**Parameters**

- `props` - ASCIIFontOptions
- `children` - VChild[]

---

### bg

Creates a background color function with a custom color.

```typescript
function bg(color: ColorInput): (input: StylableInput) => TextChunk
```

**Parameters**

- `color` - The color to apply (CSS name, hex, or RGBA instance)

**Returns:** A function that applies the background color to text

**Example**
```ts
const highlight = bg("#ffff00")
const text = t`${highlight("Highlighted")} text`
```

---

### bgBlack

```typescript
function bgBlack(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### bgBlue

```typescript
function bgBlue(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### bgCyan

```typescript
function bgCyan(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### bgGreen

```typescript
function bgGreen(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### bgMagenta

```typescript
function bgMagenta(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### bgRed

```typescript
function bgRed(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### bgWhite

```typescript
function bgWhite(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### bgYellow

```typescript
function bgYellow(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### black

Foreground color functions - apply standard colors to text.

```typescript
function black(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### blink

```typescript
function blink(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### blue

```typescript
function blue(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### bold

Text style functions - apply formatting attributes to text.

```typescript
function bold(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

**Example**
```ts
const text = t`${bold("Important")} ${italic("note")}`
```

---

### borderCharsToArray

```typescript
function borderCharsToArray(chars: BorderCharacters): Uint32Array
```

**Parameters**

- `chars` - BorderCharacters

---

### Box

```typescript
function Box(props?: BoxOptions, children: VChild[]): ProxiedVNode<unknown>
```

**Parameters**

- `props` - BoxOptions
- `children` - VChild[]

---

### brightBlack

```typescript
function brightBlack(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### brightBlue

```typescript
function brightBlue(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### brightCyan

```typescript
function brightCyan(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### brightGreen

```typescript
function brightGreen(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### brightMagenta

```typescript
function brightMagenta(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### brightRed

```typescript
function brightRed(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### brightWhite

```typescript
function brightWhite(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### brightYellow

```typescript
function brightYellow(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### clearEnvCache

```typescript
function clearEnvCache(): void
```

---

### convertGlobalToLocalSelection

```typescript
function convertGlobalToLocalSelection(globalSelection: Selection, localX: number, localY: number): LocalSelectionBounds
```

**Parameters**

- `globalSelection` - Selection
- `localX` - number
- `localY` - number

---

### convertThemeToStyles

```typescript
function convertThemeToStyles(theme: ThemeTokenStyle[]): Record<string, StyleDefinition>
```

**Parameters**

- `theme` - ThemeTokenStyle[]

---

### coordinateToCharacterIndex

```typescript
function coordinateToCharacterIndex(x: number, text: string, font: "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"): number
```

**Parameters**

- `x` - number
- `text` - string
- `font` - "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"

---

### createCliRenderer

Creates and initializes a CLI renderer instance.

```typescript
function createCliRenderer(config: CliRendererConfig): Promise<CliRenderer>
```

**Parameters**

- `config` - Configuration options for the renderer

**Returns:** A promise that resolves to an initialized CliRenderer instance

**Example**
```ts
import { createCliRenderer, BoxRenderable } from "@opentui/core"

// Create a basic renderer
const renderer = await createCliRenderer({
  exitOnCtrlC: true,
  targetFps: 60
})

// Add UI components
const box = new BoxRenderable(renderer, {
  width: 20,
  height: 10,
  backgroundColor: "#FF6B6B"
})
renderer.root.add(box)

// Start the render loop
renderer.start()
```

---

### createExtmarksController

```typescript
function createExtmarksController(editBuffer: EditBuffer, editorView: EditorView): ExtmarksController
```

**Parameters**

- `editBuffer` - EditBuffer
- `editorView` - EditorView

---

### createTerminalPalette

```typescript
function createTerminalPalette(stdin: ReadStream, stdout: WriteStream, writeFn?: WriteFunction, isLegacyTmux?: boolean): TerminalPaletteDetector
```

**Parameters**

- `stdin` - ReadStream
- `stdout` - WriteStream
- `writeFn` - WriteFunction
- `isLegacyTmux` - boolean

---

### createTextAttributes

```typescript
function createTextAttributes(__namedParameters: { blink?: boolean; bold?: boolean; dim?: boolean; hidden?: boolean; inverse?: boolean; italic?: boolean; strikethrough?: boolean; underline?: boolean }): number
```

**Parameters**

- `__namedParameters` - { blink?: boolean; bold?: boolean; dim?: boolean; hidden?: boolean; inverse?: boolean; italic?: boolean; strikethrough?: boolean; underline?: boolean }

---

### createTimeline

Creates a new timeline for orchestrating animations.

```typescript
function createTimeline(options: TimelineOptions): Timeline
```

**Parameters**

- `options` - Configuration options for the timeline

**Returns:** A Timeline instance ready for adding animations

**Example**
```ts
// Simple timeline with one animation
const timeline = createTimeline({ duration: 2000 })
timeline.add(box, { x: 100, y: 50, duration: 2000 })

// Timeline with multiple sequential animations
const sequence = createTimeline({ duration: 5000 })
sequence.add(box, { x: 100, duration: 1000 }, 0)     // Start at 0ms
sequence.add(box, { y: 50, duration: 1000 }, 1000)   // Start at 1000ms
sequence.add(box, { x: 0, y: 0, duration: 1000 }, 2000) // Start at 2000ms

// Looping timeline
const loop = createTimeline({
  duration: 3000,
  loop: true,
  onComplete: () => console.log("Loop iteration complete")
})
loop.add(box, {
  rotation: Math.PI * 2,
  duration: 3000,
  ease: "linear"
})

// Update timeline in render loop
renderer.setFrameCallback(async (deltaTime) => {
  timeline.update(deltaTime)
})
```

---

### cyan

```typescript
function cyan(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### delegate

```typescript
function delegate(mapping: ValidateShape<Mapping, TargetMap>, vnode: Factory): Renderable
```

**Parameters**

- `mapping` - ValidateShape<Mapping, TargetMap>
- `vnode` - Factory

---

### dim

```typescript
function dim(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### extToFiletype

```typescript
function extToFiletype(extension: string): string
```

**Parameters**

- `extension` - string

---

### fg

Creates a foreground color function with a custom color.

```typescript
function fg(color: ColorInput): (input: StylableInput) => TextChunk
```

**Parameters**

- `color` - The color to apply (CSS name, hex, or RGBA instance)

**Returns:** A function that applies the foreground color to text

**Example**
```ts
const orange = fg("#ff6600")
const text = t`${orange("Custom color")} text`
```

---

### FrameBuffer

```typescript
function FrameBuffer(props: FrameBufferOptions, children: VChild[]): ProxiedVNode<unknown>
```

**Parameters**

- `props` - FrameBufferOptions
- `children` - VChild[]

---

### generateEnvColored

```typescript
function generateEnvColored(): string
```

---

### generateEnvMarkdown

```typescript
function generateEnvMarkdown(): string
```

---

### Generic

```typescript
function Generic(props?: VRenderableOptions, children: VChild[]): ProxiedVNode<unknown>
```

**Parameters**

- `props` - VRenderableOptions
- `children` - VChild[]

---

### getBorderFromSides

```typescript
function getBorderFromSides(sides: BorderSidesConfig): boolean \| "top" \| "right" \| "bottom" \| "left"[]
```

**Parameters**

- `sides` - BorderSidesConfig

---

### getBorderSides

```typescript
function getBorderSides(border: boolean \| "top" \| "right" \| "bottom" \| "left"[]): BorderSidesConfig
```

**Parameters**

- `border` - boolean \| "top" \| "right" \| "bottom" \| "left"[]

---

### getCharacterPositions

```typescript
function getCharacterPositions(text: string, font: "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"): number[]
```

**Parameters**

- `text` - string
- `font` - "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"

---

### getDataPaths

```typescript
function getDataPaths(): DataPathsManager
```

---

### getTreeSitterClient

```typescript
function getTreeSitterClient(): TreeSitterClient
```

---

### green

```typescript
function green(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### h

```typescript
function h(type: TCtor, props?: unknown, children: VChild[]): ProxiedVNode<TCtor>
```

**Parameters**

- `type` - TCtor
- `props` - unknown
- `children` - VChild[]

---

### hastToStyledText

```typescript
function hastToStyledText(hast: HASTNode, syntaxStyle: SyntaxStyle): StyledText
```

**Parameters**

- `hast` - HASTNode
- `syntaxStyle` - SyntaxStyle

---

### hexToRgb

Converts a hexadecimal color string to an RGBA instance.

```typescript
function hexToRgb(hex: string): RGBA
```

**Parameters**

- `hex` - Hex color string (supports #RGB, #RGBA, #RRGGBB, #RRGGBBAA formats)

**Returns:** An RGBA color instance

**Example**
```ts
const red = hexToRgb("#ff0000")
const shortGreen = hexToRgb("#0f0")
const withAlpha = hexToRgb("#ff0000cc")
```

---

### hsvToRgb

```typescript
function hsvToRgb(h: number, s: number, v: number): RGBA
```

**Parameters**

- `h` - number
- `s` - number
- `v` - number

---

### Input

```typescript
function Input(props?: InputRenderableOptions, children: VChild[]): ProxiedVNode<unknown>
```

**Parameters**

- `props` - InputRenderableOptions
- `children` - VChild[]

---

### instantiate

```typescript
function instantiate(ctx: RenderContext, node: NodeType): InstantiateFn<NodeType>
```

**Parameters**

- `ctx` - RenderContext
- `node` - NodeType

---

### isRenderable

Type guard to check if an object is a Renderable.

```typescript
function isRenderable(obj: any): obj
```

**Parameters**

- `obj` - Object to check

**Returns:** True if the object is a Renderable

---

### isStyledText

Type guard to check if an object is a StyledText instance.

```typescript
function isStyledText(obj: any): obj
```

**Parameters**

- `obj` - Object to check

**Returns:** True if the object is StyledText

---

### isTextNodeRenderable

Type guard to check if an object is a TextNodeRenderable.

```typescript
function isTextNodeRenderable(obj: any): obj
```

**Parameters**

- `obj` - The object to check

**Returns:** `true` if obj is a TextNodeRenderable

---

### isVNode

```typescript
function isVNode(node: any): node
```

**Parameters**

- `node` - any

---

### italic

```typescript
function italic(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### magenta

```typescript
function magenta(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### maybeMakeRenderable

```typescript
function maybeMakeRenderable(ctx: RenderContext, node: unknown): Renderable
```

**Parameters**

- `ctx` - RenderContext
- `node` - unknown

---

### measureText

```typescript
function measureText(__namedParameters: { font?: "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"; text: string }): { height: number; width: number }
```

**Parameters**

- `__namedParameters` - { font?: "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"; text: string }

---

### parseAlign

```typescript
function parseAlign(value: string): Align
```

**Parameters**

- `value` - string

---

### parseBoxSizing

```typescript
function parseBoxSizing(value: string): BoxSizing
```

**Parameters**

- `value` - string

---

### parseColor

Parses a color input string or returns an existing RGBA instance.
Supports CSS color names, hex strings, and "transparent".

```typescript
function parseColor(color: ColorInput): RGBA
```

**Parameters**

- `color` - Color string (CSS name, hex, or "transparent") or RGBA instance

**Returns:** An RGBA color instance

**Example**
```ts
// CSS color names
const red = parseColor("red")
const brightBlue = parseColor("brightblue")

// Hex strings
const custom = parseColor("#ff6600")

// Transparent
const transparent = parseColor("transparent")

// Pass-through RGBA
const existing = RGBA.fromValues(1, 0, 0, 1)
const same = parseColor(existing)  // Returns the same instance
```

---

### parseDimension

```typescript
function parseDimension(value: string): Dimension
```

**Parameters**

- `value` - string

---

### parseDirection

```typescript
function parseDirection(value: string): Direction
```

**Parameters**

- `value` - string

---

### parseDisplay

```typescript
function parseDisplay(value: string): Display
```

**Parameters**

- `value` - string

---

### parseEdge

```typescript
function parseEdge(value: string): Edge
```

**Parameters**

- `value` - string

---

### parseFlexDirection

```typescript
function parseFlexDirection(value: string): FlexDirection
```

**Parameters**

- `value` - string

---

### parseGutter

```typescript
function parseGutter(value: string): Gutter
```

**Parameters**

- `value` - string

---

### parseJustify

```typescript
function parseJustify(value: string): Justify
```

**Parameters**

- `value` - string

---

### parseKeypress

```typescript
function parseKeypress(s: string \| Buffer<ArrayBufferLike>, options: ParseKeypressOptions): ParsedKey
```

**Parameters**

- `s` - string \| Buffer<ArrayBufferLike>
- `options` - ParseKeypressOptions

---

### parseLogLevel

```typescript
function parseLogLevel(value: string): LogLevel
```

**Parameters**

- `value` - string

---

### parseMeasureMode

```typescript
function parseMeasureMode(value: string): MeasureMode
```

**Parameters**

- `value` - string

---

### parseOverflow

```typescript
function parseOverflow(value: string): Overflow
```

**Parameters**

- `value` - string

---

### parsePositionType

```typescript
function parsePositionType(value: string): PositionType
```

**Parameters**

- `value` - string

---

### parseUnit

```typescript
function parseUnit(value: string): Unit
```

**Parameters**

- `value` - string

---

### parseWrap

```typescript
function parseWrap(value: string): Wrap
```

**Parameters**

- `value` - string

---

### pathToFiletype

```typescript
function pathToFiletype(path: string): string
```

**Parameters**

- `path` - string

---

### red

```typescript
function red(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### registerEnvVar

```typescript
function registerEnvVar(config: EnvVarConfig): void
```

**Parameters**

- `config` - EnvVarConfig

---

### renderFontToFrameBuffer

```typescript
function renderFontToFrameBuffer(buffer: OptimizedBuffer, __namedParameters: { backgroundColor?: ColorInput; color?: ColorInput \| ColorInput[]; font?: "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"; text: string; x?: number; y?: number }): { height: number; width: number }
```

**Parameters**

- `buffer` - OptimizedBuffer
- `__namedParameters` - { backgroundColor?: ColorInput; color?: ColorInput \| ColorInput[]; font?: "block" \| "tiny" \| "shade" \| "slick" \| "huge" \| "grid" \| "pallet"; text: string; x?: number; y?: number }

---

### resolveRenderLib

```typescript
function resolveRenderLib(): RenderLib
```

---

### reverse

```typescript
function reverse(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### rgbToHex

```typescript
function rgbToHex(rgb: RGBA): string
```

**Parameters**

- `rgb` - RGBA

---

### Select

```typescript
function Select(props?: SelectRenderableOptions, children: VChild[]): ProxiedVNode<unknown>
```

**Parameters**

- `props` - SelectRenderableOptions
- `children` - VChild[]

---

### setRenderLibPath

```typescript
function setRenderLibPath(libPath: string): void
```

**Parameters**

- `libPath` - string

---

### strikethrough

```typescript
function strikethrough(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### stringToStyledText

```typescript
function stringToStyledText(content: string): StyledText
```

**Parameters**

- `content` - string

---

### t

Template literal tag function for creating styled text.
Allows composing text with inline color and style formatting.

```typescript
function t(strings: TemplateStringsArray, values: StylableInput[]): StyledText
```

**Parameters**

- `strings` - Template string parts
- `values` - Interpolated values (strings, numbers, or styled chunks)

**Returns:** A StyledText object containing all text chunks

**Example**
```ts
import { t, red, bold, green, bgBlue } from "@opentui/core"

// Simple colored text
const text1 = t`Hello ${red("World")}!`

// Combining styles
const text2 = t`${bold(red("Error"))}: File not found`

// Multiple styles in one line
const text3 = t`${green("✓")} Success ${red("✗")} Failed`

// Background colors
const text4 = t`${bgBlue(white("Highlighted"))} normal text`

// Using with components
const label = new TextRenderable(ctx, {
  content: t`Status: ${green("Online")}`
})
```

---

### TabSelect

```typescript
function TabSelect(props?: TabSelectRenderableOptions, children: VChild[]): ProxiedVNode<unknown>
```

**Parameters**

- `props` - TabSelectRenderableOptions
- `children` - VChild[]

---

### Text

```typescript
function Text(props?: TextOptions & { content?: any }, children: VChild[] \| TextNodeRenderable[]): ProxiedVNode<unknown>
```

**Parameters**

- `props` - TextOptions & { content?: any }
- `children` - VChild[] \| TextNodeRenderable[]

---

### treeSitterToStyledText

```typescript
function treeSitterToStyledText(content: string, filetype: string, syntaxStyle: SyntaxStyle, client: TreeSitterClient, options?: TreeSitterToStyledTextOptions): Promise<StyledText>
```

**Parameters**

- `content` - string
- `filetype` - string
- `syntaxStyle` - SyntaxStyle
- `client` - TreeSitterClient
- `options` - TreeSitterToStyledTextOptions

---

### treeSitterToTextChunks

```typescript
function treeSitterToTextChunks(content: string, highlights: SimpleHighlight[], syntaxStyle: SyntaxStyle, options?: ConcealOptions): TextChunk[]
```

**Parameters**

- `content` - string
- `highlights` - SimpleHighlight[]
- `syntaxStyle` - SyntaxStyle
- `options` - ConcealOptions

---

### underline

```typescript
function underline(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### updateAssets

```typescript
function updateAssets(options?: Partial<UpdateOptions>): Promise<void>
```

**Parameters**

- `options` - Partial<UpdateOptions>

---

### visualizeRenderableTree

```typescript
function visualizeRenderableTree(renderable: Renderable, maxDepth: number): void
```

**Parameters**

- `renderable` - Renderable
- `maxDepth` - number

---

### white

```typescript
function white(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---

### wrapWithDelegates

```typescript
function wrapWithDelegates(instance: T, delegateMap: Record<string, string>): T
```

**Parameters**

- `instance` - T
- `delegateMap` - Record<string, string>

---

### yellow

```typescript
function yellow(input: StylableInput): TextChunk
```

**Parameters**

- `input` - StylableInput

---
