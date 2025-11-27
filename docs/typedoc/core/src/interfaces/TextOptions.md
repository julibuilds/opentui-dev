[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / TextOptions

# Interface: TextOptions

Configuration options for TextRenderable.

## Extends

- [`TextBufferOptions`](TextBufferOptions.md)

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

Text attributes bitfield (bold, italic, underline, etc.).

#### Default Value

```ts
0
```

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`attributes`](TextBufferOptions.md#attributes)

***

### bg?

> `optional` **bg**: `string` \| [`RGBA`](../classes/RGBA.md)

Background color. Accepts color string or RGBA instance.

#### Inherited from

`TextOptions`.[`bg`](#bg)

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

[`TextBufferOptions`](TextBufferOptions.md).[`buffered`](TextBufferOptions.md#buffered)

***

### content?

> `optional` **content**: `string` \| [`StyledText`](../classes/StyledText.md)

Text content to display (plain string or StyledText)

***

### enableLayout?

> `optional` **enableLayout**: `boolean`

Whether to enable layout calculation (default: true)

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`enableLayout`](LayoutOptions.md#enablelayout)

***

### fg?

> `optional` **fg**: `string` \| [`RGBA`](../classes/RGBA.md)

Foreground (text) color. Accepts color string or RGBA instance.

#### Inherited from

`TextOptions`.[`fg`](#fg)

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

### height?

> `optional` **height**: `number` \| `"auto"` \| `` `${number}%` ``

Height in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`height`](TextBufferOptions.md#height)

***

### id?

> `optional` **id**: `string`

Optional unique identifier for the renderable

#### Inherited from

[`BaseRenderableOptions`](BaseRenderableOptions.md).[`id`](BaseRenderableOptions.md#id)

***

### justifyContent?

> `optional` **justifyContent**: [`JustifyString`](../type-aliases/JustifyString.md)

Align children along main axis: "flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`justifyContent`](LayoutOptions.md#justifycontent)

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

[`TextBufferOptions`](TextBufferOptions.md).[`live`](TextBufferOptions.md#live)

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

### onKeyDown()?

> `optional` **onKeyDown**: (`key`) => `void`

Handler for key press events (when renderable is focused)

#### Parameters

##### key

[`KeyEvent`](../classes/KeyEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onKeyDown`](TextBufferOptions.md#onkeydown)

***

### onMouse()?

> `optional` **onMouse**: (`this`, `event`) => `void`

Catch-all handler for any mouse event

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouse`](TextBufferOptions.md#onmouse)

***

### onMouseDown()?

> `optional` **onMouseDown**: (`this`, `event`) => `void`

Handler for mouse button press

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseDown`](TextBufferOptions.md#onmousedown)

***

### onMouseDrag()?

> `optional` **onMouseDrag**: (`this`, `event`) => `void`

Handler for mouse drag (movement with button pressed)

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseDrag`](TextBufferOptions.md#onmousedrag)

***

### onMouseDragEnd()?

> `optional` **onMouseDragEnd**: (`this`, `event`) => `void`

Handler for end of mouse drag

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseDragEnd`](TextBufferOptions.md#onmousedragend)

***

### onMouseDrop()?

> `optional` **onMouseDrop**: (`this`, `event`) => `void`

Handler for mouse drop (after drag)

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseDrop`](TextBufferOptions.md#onmousedrop)

***

### onMouseMove()?

> `optional` **onMouseMove**: (`this`, `event`) => `void`

Handler for mouse movement (without button pressed)

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseMove`](TextBufferOptions.md#onmousemove)

***

### onMouseOut()?

> `optional` **onMouseOut**: (`this`, `event`) => `void`

Handler for mouse leaving the renderable's bounds

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseOut`](TextBufferOptions.md#onmouseout)

***

### onMouseOver()?

> `optional` **onMouseOver**: (`this`, `event`) => `void`

Handler for mouse entering the renderable's bounds

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseOver`](TextBufferOptions.md#onmouseover)

***

### onMouseScroll()?

> `optional` **onMouseScroll**: (`this`, `event`) => `void`

Handler for mouse scroll events

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseScroll`](TextBufferOptions.md#onmousescroll)

***

### onMouseUp()?

> `optional` **onMouseUp**: (`this`, `event`) => `void`

Handler for mouse button release

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onMouseUp`](TextBufferOptions.md#onmouseup)

***

### onPaste()?

> `optional` **onPaste**: (`this`, `event`) => `void`

Handler for paste events (when renderable is focused)

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### event

[`PasteEvent`](../classes/PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onPaste`](TextBufferOptions.md#onpaste)

***

### onSizeChange()?

> `optional` **onSizeChange**: (`this`) => `void`

Handler called when the renderable's size changes

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`onSizeChange`](TextBufferOptions.md#onsizechange)

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

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`renderAfter`](TextBufferOptions.md#renderafter)

***

### renderBefore()?

> `optional` **renderBefore**: (`this`, `buffer`, `deltaTime`) => `void`

Hook called before the renderable's render method

#### Parameters

##### this

[`TextBufferRenderable`](../classes/TextBufferRenderable.md)

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`renderBefore`](TextBufferOptions.md#renderbefore)

***

### right?

> `optional` **right**: `number` \| `"auto"` \| `` `${number}%` ``

Position from right edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`right`](LayoutOptions.md#right)

***

### selectable?

> `optional` **selectable**: `boolean`

Whether this renderable can be selected with mouse or keyboard.

#### Default Value

```ts
true
```

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`selectable`](TextBufferOptions.md#selectable)

***

### selectionBg?

> `optional` **selectionBg**: `string` \| [`RGBA`](../classes/RGBA.md)

Background color for selected text. If undefined, uses default selection background.

#### Inherited from

`TextOptions`.[`selectionBg`](#selectionbg)

***

### selectionFg?

> `optional` **selectionFg**: `string` \| [`RGBA`](../classes/RGBA.md)

Foreground color for selected text. If undefined, uses default foreground.

#### Inherited from

`TextOptions`.[`selectionFg`](#selectionfg)

***

### tabIndicator?

> `optional` **tabIndicator**: `string` \| `number`

Custom tab indicator character or width. If string, displays as tab placeholder; if number, sets tab width.

#### Inherited from

`TextOptions`.[`tabIndicator`](#tabindicator)

***

### tabIndicatorColor?

> `optional` **tabIndicatorColor**: `string` \| [`RGBA`](../classes/RGBA.md)

Color for tab indicator characters.

#### Inherited from

`TextOptions`.[`tabIndicatorColor`](#tabindicatorcolor)

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

[`TextBufferOptions`](TextBufferOptions.md).[`visible`](TextBufferOptions.md#visible)

***

### width?

> `optional` **width**: `number` \| `"auto"` \| `` `${number}%` ``

Width in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`width`](TextBufferOptions.md#width)

***

### wrapMode?

> `optional` **wrapMode**: `"none"` \| `"char"` \| `"word"`

Text wrapping mode.

#### Default Value

```ts
"word"
```

#### Inherited from

`TextOptions`.[`wrapMode`](#wrapmode)

***

### zIndex?

> `optional` **zIndex**: `number`

Stacking order - higher values render on top (default: 0)

#### Inherited from

[`TextBufferOptions`](TextBufferOptions.md).[`zIndex`](TextBufferOptions.md#zindex)
