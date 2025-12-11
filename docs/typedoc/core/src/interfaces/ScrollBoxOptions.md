[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / ScrollBoxOptions

# Interface: ScrollBoxOptions

Configuration options for [ScrollBoxRenderable](../classes/ScrollBoxRenderable.md).

## Extends

- [`BoxOptions`](BoxOptions.md)\<[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)\>

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

### backgroundColor?

> `optional` **backgroundColor**: `string` \| [`RGBA`](../classes/RGBA.md)

Background color for the box interior

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`backgroundColor`](BoxOptions.md#backgroundcolor)

***

### border?

> `optional` **border**: `boolean` \| [`BorderSides`](../type-aliases/BorderSides.md)[]

Which borders to draw (true for all, false for none, or array of sides)

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`border`](BoxOptions.md#border)

***

### borderColor?

> `optional` **borderColor**: `string` \| [`RGBA`](../classes/RGBA.md)

Border color

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`borderColor`](BoxOptions.md#bordercolor)

***

### borderStyle?

> `optional` **borderStyle**: [`BorderStyle`](../type-aliases/BorderStyle.md)

Border style: "single", "double", "rounded", "bold", "ascii"

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`borderStyle`](BoxOptions.md#borderstyle)

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

[`BoxOptions`](BoxOptions.md).[`buffered`](BoxOptions.md#buffered)

***

### columnGap?

> `optional` **columnGap**: `number` \| `` `${number}%` ``

Gap between columns of children

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`columnGap`](BoxOptions.md#columngap)

***

### contentOptions?

> `optional` **contentOptions**: [`BoxOptions`](BoxOptions.md)

Options for the content container that holds child elements

***

### customBorderChars?

> `optional` **customBorderChars**: [`BorderCharacters`](BorderCharacters.md)

Custom border characters (for custom border styles)

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`customBorderChars`](BoxOptions.md#customborderchars)

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

### focusedBorderColor?

> `optional` **focusedBorderColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Border color when the box is focused

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`focusedBorderColor`](BoxOptions.md#focusedbordercolor)

***

### gap?

> `optional` **gap**: `number` \| `` `${number}%` ``

Gap between child elements (applies to both row and column gaps)

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`gap`](BoxOptions.md#gap)

***

### height?

> `optional` **height**: `number` \| `"auto"` \| `` `${number}%` ``

Height in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`height`](BoxOptions.md#height)

***

### horizontalScrollbarOptions?

> `optional` **horizontalScrollbarOptions**: `Omit`\<[`ScrollBarOptions`](ScrollBarOptions.md), `"orientation"`\>

Options specific to the horizontal scrollbar

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

[`BoxOptions`](BoxOptions.md).[`live`](BoxOptions.md#live)

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

[`BoxOptions`](BoxOptions.md).[`onKeyDown`](BoxOptions.md#onkeydown)

***

### onMouse()?

> `optional` **onMouse**: (`this`, `event`) => `void`

Catch-all handler for any mouse event

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouse`](BoxOptions.md#onmouse)

***

### onMouseDown()?

> `optional` **onMouseDown**: (`this`, `event`) => `void`

Handler for mouse button press

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseDown`](BoxOptions.md#onmousedown)

***

### onMouseDrag()?

> `optional` **onMouseDrag**: (`this`, `event`) => `void`

Handler for mouse drag (movement with button pressed)

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseDrag`](BoxOptions.md#onmousedrag)

***

### onMouseDragEnd()?

> `optional` **onMouseDragEnd**: (`this`, `event`) => `void`

Handler for end of mouse drag

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseDragEnd`](BoxOptions.md#onmousedragend)

***

### onMouseDrop()?

> `optional` **onMouseDrop**: (`this`, `event`) => `void`

Handler for mouse drop (after drag)

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseDrop`](BoxOptions.md#onmousedrop)

***

### onMouseMove()?

> `optional` **onMouseMove**: (`this`, `event`) => `void`

Handler for mouse movement (without button pressed)

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseMove`](BoxOptions.md#onmousemove)

***

### onMouseOut()?

> `optional` **onMouseOut**: (`this`, `event`) => `void`

Handler for mouse leaving the renderable's bounds

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseOut`](BoxOptions.md#onmouseout)

***

### onMouseOver()?

> `optional` **onMouseOver**: (`this`, `event`) => `void`

Handler for mouse entering the renderable's bounds

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseOver`](BoxOptions.md#onmouseover)

***

### onMouseScroll()?

> `optional` **onMouseScroll**: (`this`, `event`) => `void`

Handler for mouse scroll events

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseScroll`](BoxOptions.md#onmousescroll)

***

### onMouseUp()?

> `optional` **onMouseUp**: (`this`, `event`) => `void`

Handler for mouse button release

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onMouseUp`](BoxOptions.md#onmouseup)

***

### onPaste()?

> `optional` **onPaste**: (`this`, `event`) => `void`

Handler for paste events (when renderable is focused)

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### event

[`PasteEvent`](../classes/PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onPaste`](BoxOptions.md#onpaste)

***

### onSizeChange()?

> `optional` **onSizeChange**: (`this`) => `void`

Handler called when the renderable's size changes

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`onSizeChange`](BoxOptions.md#onsizechange)

***

### opacity?

> `optional` **opacity**: `number`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`opacity`](BoxOptions.md#opacity)

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

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`renderAfter`](BoxOptions.md#renderafter)

***

### renderBefore()?

> `optional` **renderBefore**: (`this`, `buffer`, `deltaTime`) => `void`

Hook called before the renderable's render method

#### Parameters

##### this

[`ScrollBoxRenderable`](../classes/ScrollBoxRenderable.md)

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`renderBefore`](BoxOptions.md#renderbefore)

***

### right?

> `optional` **right**: `number` \| `"auto"` \| `` `${number}%` ``

Position from right edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`right`](LayoutOptions.md#right)

***

### rootOptions?

> `optional` **rootOptions**: [`BoxOptions`](BoxOptions.md)

Options for the root container element

***

### rowGap?

> `optional` **rowGap**: `number` \| `` `${number}%` ``

Gap between rows of children

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`rowGap`](BoxOptions.md#rowgap)

***

### scrollAcceleration?

> `optional` **scrollAcceleration**: [`ScrollAcceleration`](ScrollAcceleration.md)

Custom scroll acceleration for mouse wheel events

***

### scrollbarOptions?

> `optional` **scrollbarOptions**: `Omit`\<[`ScrollBarOptions`](ScrollBarOptions.md), `"orientation"`\>

Common scrollbar options applied to both vertical and horizontal scrollbars

***

### scrollX?

> `optional` **scrollX**: `boolean`

Enable horizontal scrolling

***

### scrollY?

> `optional` **scrollY**: `boolean`

Enable vertical scrolling

***

### shouldFill?

> `optional` **shouldFill**: `boolean`

Whether to fill the box interior with background color (default: true)

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`shouldFill`](BoxOptions.md#shouldfill)

***

### stickyScroll?

> `optional` **stickyScroll**: `boolean`

Enable sticky scroll behavior (auto-scroll when content changes)

***

### stickyStart?

> `optional` **stickyStart**: `"top"` \| `"right"` \| `"bottom"` \| `"left"`

Initial sticky position when stickyScroll is enabled

***

### title?

> `optional` **title**: `string`

Optional title text displayed in the top border

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`title`](BoxOptions.md#title)

***

### titleAlignment?

> `optional` **titleAlignment**: `"center"` \| `"right"` \| `"left"`

Title alignment: "left", "center", or "right" (default: "left")

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`titleAlignment`](BoxOptions.md#titlealignment)

***

### top?

> `optional` **top**: `number` \| `"auto"` \| `` `${number}%` ``

Position from top edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`top`](LayoutOptions.md#top)

***

### verticalScrollbarOptions?

> `optional` **verticalScrollbarOptions**: `Omit`\<[`ScrollBarOptions`](ScrollBarOptions.md), `"orientation"`\>

Options specific to the vertical scrollbar

***

### viewportCulling?

> `optional` **viewportCulling**: `boolean`

Enable viewport culling to skip rendering off-screen children

***

### viewportOptions?

> `optional` **viewportOptions**: [`BoxOptions`](BoxOptions.md)

Options for the viewport element that clips the content

***

### visible?

> `optional` **visible**: `boolean`

Whether the renderable is visible (default: true)

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`visible`](BoxOptions.md#visible)

***

### width?

> `optional` **width**: `number` \| `"auto"` \| `` `${number}%` ``

Width in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`width`](BoxOptions.md#width)

***

### wrapperOptions?

> `optional` **wrapperOptions**: [`BoxOptions`](BoxOptions.md)

Options for the wrapper element that contains viewport and horizontal scrollbar

***

### zIndex?

> `optional` **zIndex**: `number`

Stacking order - higher values render on top (default: 0)

#### Inherited from

[`BoxOptions`](BoxOptions.md).[`zIndex`](BoxOptions.md#zindex)
