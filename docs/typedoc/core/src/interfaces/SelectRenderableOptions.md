[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / SelectRenderableOptions

# Interface: SelectRenderableOptions

Configuration options for [SelectRenderable](../classes/SelectRenderable.md).

## Extends

- [`RenderableOptions`](RenderableOptions.md)\<[`SelectRenderable`](../classes/SelectRenderable.md)\>

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

> `optional` **backgroundColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Background color when unfocused

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

[`RenderableOptions`](RenderableOptions.md).[`buffered`](RenderableOptions.md#buffered)

***

### descriptionColor?

> `optional` **descriptionColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Color for description text

***

### enableLayout?

> `optional` **enableLayout**: `boolean`

Whether to enable layout calculation (default: true)

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`enableLayout`](LayoutOptions.md#enablelayout)

***

### fastScrollStep?

> `optional` **fastScrollStep**: `number`

Number of items to skip when Shift is held

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

### font?

> `optional` **font**: `"block"` \| `"tiny"` \| `"shade"` \| `"slick"` \| `"huge"` \| `"grid"` \| `"pallet"`

ASCII font to use for option names

***

### height?

> `optional` **height**: `number` \| `"auto"` \| `` `${number}%` ``

Height in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`height`](RenderableOptions.md#height)

***

### id?

> `optional` **id**: `string`

Optional unique identifier for the renderable

#### Inherited from

[`BaseRenderableOptions`](BaseRenderableOptions.md).[`id`](BaseRenderableOptions.md#id)

***

### itemSpacing?

> `optional` **itemSpacing**: `number`

Vertical spacing between items

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

[`RenderableOptions`](RenderableOptions.md).[`live`](RenderableOptions.md#live)

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

[`RenderableOptions`](RenderableOptions.md).[`onKeyDown`](RenderableOptions.md#onkeydown)

***

### onMouse()?

> `optional` **onMouse**: (`this`, `event`) => `void`

Catch-all handler for any mouse event

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouse`](RenderableOptions.md#onmouse)

***

### onMouseDown()?

> `optional` **onMouseDown**: (`this`, `event`) => `void`

Handler for mouse button press

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseDown`](RenderableOptions.md#onmousedown)

***

### onMouseDrag()?

> `optional` **onMouseDrag**: (`this`, `event`) => `void`

Handler for mouse drag (movement with button pressed)

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseDrag`](RenderableOptions.md#onmousedrag)

***

### onMouseDragEnd()?

> `optional` **onMouseDragEnd**: (`this`, `event`) => `void`

Handler for end of mouse drag

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseDragEnd`](RenderableOptions.md#onmousedragend)

***

### onMouseDrop()?

> `optional` **onMouseDrop**: (`this`, `event`) => `void`

Handler for mouse drop (after drag)

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseDrop`](RenderableOptions.md#onmousedrop)

***

### onMouseMove()?

> `optional` **onMouseMove**: (`this`, `event`) => `void`

Handler for mouse movement (without button pressed)

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseMove`](RenderableOptions.md#onmousemove)

***

### onMouseOut()?

> `optional` **onMouseOut**: (`this`, `event`) => `void`

Handler for mouse leaving the renderable's bounds

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseOut`](RenderableOptions.md#onmouseout)

***

### onMouseOver()?

> `optional` **onMouseOver**: (`this`, `event`) => `void`

Handler for mouse entering the renderable's bounds

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseOver`](RenderableOptions.md#onmouseover)

***

### onMouseScroll()?

> `optional` **onMouseScroll**: (`this`, `event`) => `void`

Handler for mouse scroll events

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseScroll`](RenderableOptions.md#onmousescroll)

***

### onMouseUp()?

> `optional` **onMouseUp**: (`this`, `event`) => `void`

Handler for mouse button release

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onMouseUp`](RenderableOptions.md#onmouseup)

***

### onPaste()?

> `optional` **onPaste**: (`this`, `event`) => `void`

Handler for paste events (when renderable is focused)

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### event

[`PasteEvent`](../classes/PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onPaste`](RenderableOptions.md#onpaste)

***

### onSizeChange()?

> `optional` **onSizeChange**: (`this`) => `void`

Handler called when the renderable's size changes

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`onSizeChange`](RenderableOptions.md#onsizechange)

***

### options?

> `optional` **options**: [`SelectOption`](SelectOption.md)[]

List of selectable options

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

[`SelectRenderable`](../classes/SelectRenderable.md)

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`renderAfter`](RenderableOptions.md#renderafter)

***

### renderBefore()?

> `optional` **renderBefore**: (`this`, `buffer`, `deltaTime`) => `void`

Hook called before the renderable's render method

#### Parameters

##### this

[`SelectRenderable`](../classes/SelectRenderable.md)

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`renderBefore`](RenderableOptions.md#renderbefore)

***

### right?

> `optional` **right**: `number` \| `"auto"` \| `` `${number}%` ``

Position from right edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`right`](LayoutOptions.md#right)

***

### selectedBackgroundColor?

> `optional` **selectedBackgroundColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Background color for the selected item

***

### selectedDescriptionColor?

> `optional` **selectedDescriptionColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Color for selected item's description

***

### selectedIndex?

> `optional` **selectedIndex**: `number`

Initially selected option index

***

### selectedTextColor?

> `optional` **selectedTextColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Text color for the selected item

***

### showDescription?

> `optional` **showDescription**: `boolean`

Show description text below option names

***

### showScrollIndicator?

> `optional` **showScrollIndicator**: `boolean`

Show a scroll indicator on the right edge

***

### textColor?

> `optional` **textColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Text color when unfocused

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

[`RenderableOptions`](RenderableOptions.md).[`visible`](RenderableOptions.md#visible)

***

### width?

> `optional` **width**: `number` \| `"auto"` \| `` `${number}%` ``

Width in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`width`](RenderableOptions.md#width)

***

### wrapSelection?

> `optional` **wrapSelection**: `boolean`

Allow wrapping from last to first item

***

### zIndex?

> `optional` **zIndex**: `number`

Stacking order - higher values render on top (default: 0)

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`zIndex`](RenderableOptions.md#zindex)
