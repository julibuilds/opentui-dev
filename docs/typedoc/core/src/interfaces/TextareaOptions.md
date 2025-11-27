[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / TextareaOptions

# Interface: TextareaOptions

Configuration options for [TextareaRenderable](../classes/TextareaRenderable.md).

## Extends

- `EditBufferOptions`

## Properties

### alignItems?

> `optional` **alignItems**: [`AlignString`](../type-aliases/AlignString.md)

Align children along cross axis: "flex-start", "center", "flex-end", "stretch", "baseline"

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`alignItems`](LayoutOptions.md#alignitems)

***

### alignSelf?

> `optional` **alignSelf**: [`AlignString`](../type-aliases/AlignString.md)

Override parent's alignItems for this item

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`alignSelf`](LayoutOptions.md#alignself)

***

### attributes?

> `optional` **attributes**: `number`

Text attributes bitfield (bold, italic, underline).

#### Default Value

```ts
0
```

#### Inherited from

`EditBufferOptions.attributes`

***

### backgroundColor?

> `optional` **backgroundColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Background color when unfocused

#### Overrides

`EditBufferOptions.backgroundColor`

***

### bottom?

> `optional` **bottom**: `number` \| `"auto"` \| `` `${number}%` ``

Position from bottom edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`bottom`](LayoutOptions.md#bottom)

***

### buffered?

> `optional` **buffered**: `boolean`

Whether to use an offscreen buffer for rendering (improves performance for complex renderables)

#### Inherited from

`EditBufferOptions.buffered`

***

### cursorColor?

> `optional` **cursorColor**: `string` \| [`RGBA`](../classes/RGBA.md)

Cursor color.

#### Default Value

```ts
white
```

#### Inherited from

`EditBufferOptions.cursorColor`

***

### cursorStyle?

> `optional` **cursorStyle**: [`CursorStyleOptions`](CursorStyleOptions.md)

Cursor style configuration.

#### Inherited from

`EditBufferOptions.cursorStyle`

***

### enableLayout?

> `optional` **enableLayout**: `boolean`

Whether to enable layout calculation (default: true)

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`enableLayout`](LayoutOptions.md#enablelayout)

***

### flexBasis?

> `optional` **flexBasis**: `number` \| `"auto"`

Initial size before remaining space is distributed

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`flexBasis`](LayoutOptions.md#flexbasis)

***

### flexDirection?

> `optional` **flexDirection**: [`FlexDirectionString`](../type-aliases/FlexDirectionString.md)

Direction of flex items: "row", "column", "row-reverse", "column-reverse"

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`flexDirection`](LayoutOptions.md#flexdirection)

***

### flexGrow?

> `optional` **flexGrow**: `number`

How much the item should grow relative to siblings (default: 0)

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`flexGrow`](LayoutOptions.md#flexgrow)

***

### flexShrink?

> `optional` **flexShrink**: `number`

How much the item should shrink relative to siblings (default: 1)

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`flexShrink`](LayoutOptions.md#flexshrink)

***

### flexWrap?

> `optional` **flexWrap**: [`WrapString`](../type-aliases/WrapString.md)

Whether flex items should wrap: "wrap", "nowrap", "wrap-reverse"

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`flexWrap`](LayoutOptions.md#flexwrap)

***

### focusedBackgroundColor?

> `optional` **focusedBackgroundColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Background color when focused

***

### focusedTextColor?

> `optional` **focusedTextColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Text color when focused

***

### height?

> `optional` **height**: `number` \| `"auto"` \| `` `${number}%` ``

Height in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

`EditBufferOptions.height`

***

### id?

> `optional` **id**: `string`

Optional unique identifier for the renderable

#### Inherited from

[`BaseRenderableOptions`](BaseRenderableOptions.md).[`id`](BaseRenderableOptions.md#id)

***

### initialValue?

> `optional` **initialValue**: `string`

Initial text content

***

### justifyContent?

> `optional` **justifyContent**: [`JustifyString`](../type-aliases/JustifyString.md)

Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`justifyContent`](LayoutOptions.md#justifycontent)

***

### keyBindings?

> `optional` **keyBindings**: [`KeyBinding`](../type-aliases/KeyBinding.md)[]

Custom key bindings to override defaults

***

### left?

> `optional` **left**: `number` \| `"auto"` \| `` `${number}%` ``

Position from left edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`left`](LayoutOptions.md#left)

***

### live?

> `optional` **live**: `boolean`

Whether to request continuous rendering (default: false)

#### Inherited from

`EditBufferOptions.live`

***

### margin?

> `optional` **margin**: `number` \| `"auto"` \| `` `${number}%` ``

Margin on all sides

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`margin`](LayoutOptions.md#margin)

***

### marginBottom?

> `optional` **marginBottom**: `number` \| `"auto"` \| `` `${number}%` ``

Margin on bottom edge

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`marginBottom`](LayoutOptions.md#marginbottom)

***

### marginLeft?

> `optional` **marginLeft**: `number` \| `"auto"` \| `` `${number}%` ``

Margin on left edge

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`marginLeft`](LayoutOptions.md#marginleft)

***

### marginRight?

> `optional` **marginRight**: `number` \| `"auto"` \| `` `${number}%` ``

Margin on right edge

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`marginRight`](LayoutOptions.md#marginright)

***

### marginTop?

> `optional` **marginTop**: `number` \| `"auto"` \| `` `${number}%` ``

Margin on top edge

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`marginTop`](LayoutOptions.md#margintop)

***

### maxHeight?

> `optional` **maxHeight**: `number` \| `"auto"` \| `` `${number}%` ``

Maximum height constraint

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`maxHeight`](LayoutOptions.md#maxheight)

***

### maxWidth?

> `optional` **maxWidth**: `number` \| `"auto"` \| `` `${number}%` ``

Maximum width constraint

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`maxWidth`](LayoutOptions.md#maxwidth)

***

### minHeight?

> `optional` **minHeight**: `number` \| `"auto"` \| `` `${number}%` ``

Minimum height constraint

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`minHeight`](LayoutOptions.md#minheight)

***

### minWidth?

> `optional` **minWidth**: `number` \| `"auto"` \| `` `${number}%` ``

Minimum width constraint

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`minWidth`](LayoutOptions.md#minwidth)

***

### onContentChange()?

> `optional` **onContentChange**: (`event`) => `void`

Callback invoked when content changes.

#### Parameters

##### event

`ContentChangeEvent`

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onContentChange`

***

### onCursorChange()?

> `optional` **onCursorChange**: (`event`) => `void`

Callback invoked when cursor position changes.

#### Parameters

##### event

`CursorChangeEvent`

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onCursorChange`

***

### onKeyDown()?

> `optional` **onKeyDown**: (`key`) => `void`

Handler for key press events (when renderable is focused)

#### Parameters

##### key

[`KeyEvent`](../classes/KeyEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onKeyDown`

***

### onMouse()?

> `optional` **onMouse**: (`this`, `event`) => `void`

Catch-all handler for any mouse event

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouse`

***

### onMouseDown()?

> `optional` **onMouseDown**: (`this`, `event`) => `void`

Handler for mouse button press

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseDown`

***

### onMouseDrag()?

> `optional` **onMouseDrag**: (`this`, `event`) => `void`

Handler for mouse drag (movement with button pressed)

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseDrag`

***

### onMouseDragEnd()?

> `optional` **onMouseDragEnd**: (`this`, `event`) => `void`

Handler for end of mouse drag

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseDragEnd`

***

### onMouseDrop()?

> `optional` **onMouseDrop**: (`this`, `event`) => `void`

Handler for mouse drop (after drag)

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseDrop`

***

### onMouseMove()?

> `optional` **onMouseMove**: (`this`, `event`) => `void`

Handler for mouse movement (without button pressed)

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseMove`

***

### onMouseOut()?

> `optional` **onMouseOut**: (`this`, `event`) => `void`

Handler for mouse leaving the renderable's bounds

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseOut`

***

### onMouseOver()?

> `optional` **onMouseOver**: (`this`, `event`) => `void`

Handler for mouse entering the renderable's bounds

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseOver`

***

### onMouseScroll()?

> `optional` **onMouseScroll**: (`this`, `event`) => `void`

Handler for mouse scroll events

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseScroll`

***

### onMouseUp()?

> `optional` **onMouseUp**: (`this`, `event`) => `void`

Handler for mouse button release

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onMouseUp`

***

### onPaste()?

> `optional` **onPaste**: (`this`, `event`) => `void`

Handler for paste events (when renderable is focused)

#### Parameters

##### this

`EditBufferRenderable`

##### event

[`PasteEvent`](../classes/PasteEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onPaste`

***

### onSizeChange()?

> `optional` **onSizeChange**: (`this`) => `void`

Handler called when the renderable's size changes

#### Parameters

##### this

`EditBufferRenderable`

#### Returns

`void`

#### Inherited from

`EditBufferOptions.onSizeChange`

***

### onSubmit()?

> `optional` **onSubmit**: (`event`) => `void`

Callback invoked when textarea is submitted

#### Parameters

##### event

[`SubmitEvent`](SubmitEvent.md)

#### Returns

`void`

***

### overflow?

> `optional` **overflow**: [`OverflowString`](../type-aliases/OverflowString.md)

How overflow is handled: "visible", "hidden", "scroll"

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`overflow`](LayoutOptions.md#overflow)

***

### padding?

> `optional` **padding**: `number` \| `` `${number}%` ``

Padding on all sides

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`padding`](LayoutOptions.md#padding)

***

### paddingBottom?

> `optional` **paddingBottom**: `number` \| `` `${number}%` ``

Padding on bottom edge

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`paddingBottom`](LayoutOptions.md#paddingbottom)

***

### paddingLeft?

> `optional` **paddingLeft**: `number` \| `` `${number}%` ``

Padding on left edge

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`paddingLeft`](LayoutOptions.md#paddingleft)

***

### paddingRight?

> `optional` **paddingRight**: `number` \| `` `${number}%` ``

Padding on right edge

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`paddingRight`](LayoutOptions.md#paddingright)

***

### paddingTop?

> `optional` **paddingTop**: `number` \| `` `${number}%` ``

Padding on top edge

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`paddingTop`](LayoutOptions.md#paddingtop)

***

### placeholder?

> `optional` **placeholder**: `string` \| [`StyledText`](../classes/StyledText.md)

Placeholder text shown when empty

***

### position?

> `optional` **position**: [`PositionTypeString`](../type-aliases/PositionTypeString.md)

Position type: "relative" (default) or "absolute"

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`position`](LayoutOptions.md#position)

***

### renderAfter()?

> `optional` **renderAfter**: (`this`, `buffer`, `deltaTime`) => `void`

Hook called after the renderable's render method

#### Parameters

##### this

`EditBufferRenderable`

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

`EditBufferOptions.renderAfter`

***

### renderBefore()?

> `optional` **renderBefore**: (`this`, `buffer`, `deltaTime`) => `void`

Hook called before the renderable's render method

#### Parameters

##### this

`EditBufferRenderable`

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

`EditBufferOptions.renderBefore`

***

### right?

> `optional` **right**: `number` \| `"auto"` \| `` `${number}%` ``

Position from right edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`right`](LayoutOptions.md#right)

***

### scrollMargin?

> `optional` **scrollMargin**: `number`

Scroll margin as fraction of viewport height.

#### Default Value

```ts
0.2
```

#### Remarks

When cursor approaches edges, viewport scrolls to maintain this margin.

#### Inherited from

`EditBufferOptions.scrollMargin`

***

### selectable?

> `optional` **selectable**: `boolean`

Whether text can be selected.

#### Default Value

```ts
true
```

#### Inherited from

`EditBufferOptions.selectable`

***

### selectionBg?

> `optional` **selectionBg**: `string` \| [`RGBA`](../classes/RGBA.md)

Selection background color.

#### Inherited from

`EditBufferOptions.selectionBg`

***

### selectionFg?

> `optional` **selectionFg**: `string` \| [`RGBA`](../classes/RGBA.md)

Selection foreground color.

#### Inherited from

`EditBufferOptions.selectionFg`

***

### showCursor?

> `optional` **showCursor**: `boolean`

Whether to show the cursor.

#### Default Value

```ts
true
```

#### Inherited from

`EditBufferOptions.showCursor`

***

### syntaxStyle?

> `optional` **syntaxStyle**: [`SyntaxStyle`](../classes/SyntaxStyle.md)

Syntax highlighting theme.

#### Inherited from

`EditBufferOptions.syntaxStyle`

***

### tabIndicator?

> `optional` **tabIndicator**: `string` \| `number`

Custom tab indicator character or width.

#### Inherited from

`EditBufferOptions.tabIndicator`

***

### tabIndicatorColor?

> `optional` **tabIndicatorColor**: `string` \| [`RGBA`](../classes/RGBA.md)

Tab indicator color.

#### Inherited from

`EditBufferOptions.tabIndicatorColor`

***

### textColor?

> `optional` **textColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Text color when unfocused

#### Overrides

`EditBufferOptions.textColor`

***

### top?

> `optional` **top**: `number` \| `"auto"` \| `` `${number}%` ``

Position from top edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`top`](LayoutOptions.md#top)

***

### visible?

> `optional` **visible**: `boolean`

Whether the renderable is visible (default: true)

#### Inherited from

`EditBufferOptions.visible`

***

### width?

> `optional` **width**: `number` \| `"auto"` \| `` `${number}%` ``

Width in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

`EditBufferOptions.width`

***

### wrapMode?

> `optional` **wrapMode**: `"none"` \| `"char"` \| `"word"`

Text wrapping mode.

#### Default Value

```ts
"word"
```

#### Inherited from

`EditBufferOptions.wrapMode`

***

### zIndex?

> `optional` **zIndex**: `number`

Stacking order - higher values render on top (default: 0)

#### Inherited from

`EditBufferOptions.zIndex`
