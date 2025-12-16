[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / TabSelectRenderableOptions

# Interface: TabSelectRenderableOptions

Configuration options for [TabSelectRenderable](../classes/TabSelectRenderable.md).

## Extends

- `Omit`\<[`RenderableOptions`](RenderableOptions.md)\<[`TabSelectRenderable`](../classes/TabSelectRenderable.md)\>, `"height"`\>

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

[`TextareaOptions`](TextareaOptions.md).[`buffered`](TextareaOptions.md#buffered)

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

> `optional` **height**: `number`

Height is auto-calculated based on showUnderline and showDescription

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

### keyAliasMap?

> `optional` **keyAliasMap**: `KeyAliasMap`

***

### keyBindings?

> `optional` **keyBindings**: [`TabSelectKeyBinding`](../type-aliases/TabSelectKeyBinding.md)[]

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

[`TextareaOptions`](TextareaOptions.md).[`live`](TextareaOptions.md#live)

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

`Omit.onKeyDown`

***

### onMouse()?

> `optional` **onMouse**: (`this`, `event`) => `void`

Catch-all handler for any mouse event

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouse`

***

### onMouseDown()?

> `optional` **onMouseDown**: (`this`, `event`) => `void`

Handler for mouse button press

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseDown`

***

### onMouseDrag()?

> `optional` **onMouseDrag**: (`this`, `event`) => `void`

Handler for mouse drag (movement with button pressed)

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseDrag`

***

### onMouseDragEnd()?

> `optional` **onMouseDragEnd**: (`this`, `event`) => `void`

Handler for end of mouse drag

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseDragEnd`

***

### onMouseDrop()?

> `optional` **onMouseDrop**: (`this`, `event`) => `void`

Handler for mouse drop (after drag)

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseDrop`

***

### onMouseMove()?

> `optional` **onMouseMove**: (`this`, `event`) => `void`

Handler for mouse movement (without button pressed)

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseMove`

***

### onMouseOut()?

> `optional` **onMouseOut**: (`this`, `event`) => `void`

Handler for mouse leaving the renderable's bounds

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseOut`

***

### onMouseOver()?

> `optional` **onMouseOver**: (`this`, `event`) => `void`

Handler for mouse entering the renderable's bounds

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseOver`

***

### onMouseScroll()?

> `optional` **onMouseScroll**: (`this`, `event`) => `void`

Handler for mouse scroll events

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseScroll`

***

### onMouseUp()?

> `optional` **onMouseUp**: (`this`, `event`) => `void`

Handler for mouse button release

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`MouseEvent`](../classes/MouseEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onMouseUp`

***

### onPaste()?

> `optional` **onPaste**: (`this`, `event`) => `void`

Handler for paste events (when renderable is focused)

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### event

[`PasteEvent`](../classes/PasteEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onPaste`

***

### onSizeChange()?

> `optional` **onSizeChange**: (`this`) => `void`

Handler called when the renderable's size changes

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

#### Returns

`void`

#### Inherited from

`Omit.onSizeChange`

***

### opacity?

> `optional` **opacity**: `number`

#### Inherited from

[`TextareaOptions`](TextareaOptions.md).[`opacity`](TextareaOptions.md#opacity)

***

### options?

> `optional` **options**: [`TabSelectOption`](TabSelectOption.md)[]

List of tabs

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

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

`Omit.renderAfter`

***

### renderBefore()?

> `optional` **renderBefore**: (`this`, `buffer`, `deltaTime`) => `void`

Hook called before the renderable's render method

#### Parameters

##### this

[`TabSelectRenderable`](../classes/TabSelectRenderable.md)

##### buffer

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

`Omit.renderBefore`

***

### right?

> `optional` **right**: `number` \| `"auto"` \| `` `${number}%` ``

Position from right edge (requires position: "absolute")

#### Inherited from

[`LayoutOptions`](LayoutOptions.md).[`right`](LayoutOptions.md#right)

***

### selectedBackgroundColor?

> `optional` **selectedBackgroundColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Background color for selected tab

***

### selectedDescriptionColor?

> `optional` **selectedDescriptionColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Color for description text

***

### selectedTextColor?

> `optional` **selectedTextColor**: [`ColorInput`](../type-aliases/ColorInput.md)

Text color for selected tab

***

### showDescription?

> `optional` **showDescription**: `boolean`

Show description below tabs

***

### showScrollArrows?

> `optional` **showScrollArrows**: `boolean`

Show scroll arrows when tabs overflow

***

### showUnderline?

> `optional` **showUnderline**: `boolean`

Show underline below selected tab

***

### tabWidth?

> `optional` **tabWidth**: `number`

Fixed width for each tab

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

[`TextareaOptions`](TextareaOptions.md).[`visible`](TextareaOptions.md#visible)

***

### width?

> `optional` **width**: `number` \| `"auto"` \| `` `${number}%` ``

Width in cells, "auto", or percentage (e.g., "50%")

#### Inherited from

`Omit.width`

***

### wrapSelection?

> `optional` **wrapSelection**: `boolean`

Allow wrapping from last to first tab

***

### zIndex?

> `optional` **zIndex**: `number`

Stacking order - higher values render on top (default: 0)

#### Inherited from

[`TextareaOptions`](TextareaOptions.md).[`zIndex`](TextareaOptions.md#zindex)
