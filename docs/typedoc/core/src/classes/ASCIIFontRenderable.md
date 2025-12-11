[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / ASCIIFontRenderable

# Class: ASCIIFontRenderable

A renderable that displays text using large ASCII art fonts.

## Remarks

ASCIIFontRenderable renders text in decorative ASCII art styles, perfect for:

- Eye-catching titles and headers
- Logos and branding
- Visual emphasis in terminal UIs
- Retro/artistic text effects

The renderable automatically sizes itself to fit the text, supports text selection,
and can use single colors or color gradients.

Available fonts include: "tiny", "banner", "block", "doom", and many more.

## Examples

Basic usage:
```typescript
const title = new ASCIIFontRenderable(ctx, {
  text: "OpenTUI",
  font: "banner",
  color: "#00ff00"
});
```

Gradient colors:
```typescript
const rainbow = new ASCIIFontRenderable(ctx, {
  text: "Rainbow",
  font: "block",
  color: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]
});
```

## Extends

- [`FrameBufferRenderable`](FrameBufferRenderable.md)

## Constructors

### Constructor

> **new ASCIIFontRenderable**(`ctx`, `options`): `ASCIIFontRenderable`

#### Parameters

##### ctx

[`RenderContext`](../interfaces/RenderContext.md)

##### options

[`ASCIIFontOptions`](../interfaces/ASCIIFontOptions.md)

#### Returns

`ASCIIFontRenderable`

#### Overrides

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`constructor`](FrameBufferRenderable.md#constructor)

## Properties

### \_backgroundColor

> `protected` **\_backgroundColor**: [`ColorInput`](../type-aliases/ColorInput.md)

***

### \_childrenInLayoutOrder

> `protected` **\_childrenInLayoutOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_childrenInLayoutOrder`](FrameBufferRenderable.md#_childreninlayoutorder)

***

### \_childrenInZIndexOrder

> `protected` **\_childrenInZIndexOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_childrenInZIndexOrder`](FrameBufferRenderable.md#_childreninzindexorder)

***

### \_color

> `protected` **\_color**: [`ColorInput`](../type-aliases/ColorInput.md) \| [`ColorInput`](../type-aliases/ColorInput.md)[]

***

### \_ctx

> `protected` **\_ctx**: [`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_ctx`](FrameBufferRenderable.md#_ctx)

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_dirty`](FrameBufferRenderable.md#_dirty)

***

### \_focusable

> `protected` **\_focusable**: `boolean` = `false`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_focusable`](FrameBufferRenderable.md#_focusable)

***

### \_focused

> `protected` **\_focused**: `boolean` = `false`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_focused`](FrameBufferRenderable.md#_focused)

***

### \_font

> `protected` **\_font**: `"block"` \| `"tiny"` \| `"shade"` \| `"slick"` \| `"huge"` \| `"grid"` \| `"pallet"`

***

### \_height

> `protected` **\_height**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_height`](FrameBufferRenderable.md#_height)

***

### \_heightValue

> `protected` **\_heightValue**: `number` = `0`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_heightValue`](FrameBufferRenderable.md#_heightvalue)

***

### \_id

> `protected` **\_id**: `string`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_id`](FrameBufferRenderable.md#_id)

***

### \_isDestroyed

> `protected` **\_isDestroyed**: `boolean` = `false`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_isDestroyed`](FrameBufferRenderable.md#_isdestroyed)

***

### \_liveCount

> `protected` **\_liveCount**: `number` = `0`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_liveCount`](FrameBufferRenderable.md#_livecount)

***

### \_opacity

> `protected` **\_opacity**: `number` = `1.0`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_opacity`](FrameBufferRenderable.md#_opacity)

***

### \_overflow

> `protected` **\_overflow**: [`OverflowString`](../type-aliases/OverflowString.md) = `"visible"`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_overflow`](FrameBufferRenderable.md#_overflow)

***

### \_position

> `protected` **\_position**: [`Position`](../interfaces/Position.md) = `{}`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_position`](FrameBufferRenderable.md#_position)

***

### \_positionType

> `protected` **\_positionType**: [`PositionTypeString`](../type-aliases/PositionTypeString.md) = `"relative"`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_positionType`](FrameBufferRenderable.md#_positiontype)

***

### \_selectionBg

> `protected` **\_selectionBg**: [`ColorInput`](../type-aliases/ColorInput.md)

***

### \_selectionFg

> `protected` **\_selectionFg**: [`ColorInput`](../type-aliases/ColorInput.md)

***

### \_text

> `protected` **\_text**: `string`

***

### \_translateX

> `protected` **\_translateX**: `number` = `0`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_translateX`](FrameBufferRenderable.md#_translatex)

***

### \_translateY

> `protected` **\_translateY**: `number` = `0`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_translateY`](FrameBufferRenderable.md#_translatey)

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_visible`](FrameBufferRenderable.md#_visible)

***

### \_width

> `protected` **\_width**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_width`](FrameBufferRenderable.md#_width)

***

### \_widthValue

> `protected` **\_widthValue**: `number` = `0`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_widthValue`](FrameBufferRenderable.md#_widthvalue)

***

### \_x

> `protected` **\_x**: `number` = `0`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_x`](FrameBufferRenderable.md#_x)

***

### \_y

> `protected` **\_y**: `number` = `0`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_y`](FrameBufferRenderable.md#_y)

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`[BrandedRenderable]`](FrameBufferRenderable.md#brandedrenderable)

***

### buffered

> `protected` **buffered**: `boolean`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`buffered`](FrameBufferRenderable.md#buffered)

***

### frameBuffer

> **frameBuffer**: [`OptimizedBuffer`](OptimizedBuffer.md)

The off-screen buffer owned by this renderable.

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`frameBuffer`](FrameBufferRenderable.md#framebuffer)

***

### keypressHandler()

> `protected` **keypressHandler**: (`key`) => `void` = `null`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`keypressHandler`](FrameBufferRenderable.md#keypresshandler)

***

### lastLocalSelection

> `protected` **lastLocalSelection**: [`LocalSelectionBounds`](../interfaces/LocalSelectionBounds.md) = `null`

Cached local selection bounds.

***

### num

> `readonly` **num**: `number`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`num`](FrameBufferRenderable.md#num)

***

### onLifecyclePass()

> **onLifecyclePass**: () => `void` = `null`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onLifecyclePass`](FrameBufferRenderable.md#onlifecyclepass)

***

### parent

> **parent**: [`Renderable`](Renderable.md) = `null`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`parent`](FrameBufferRenderable.md#parent)

***

### pasteHandler()

> `protected` **pasteHandler**: (`event`) => `void` = `null`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`pasteHandler`](FrameBufferRenderable.md#pastehandler)

***

### renderAfter()?

> `optional` **renderAfter**: (`this`, `buffer`, `deltaTime`) => `void`

#### Parameters

##### this

[`Renderable`](Renderable.md)

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`renderAfter`](FrameBufferRenderable.md#renderafter)

***

### renderBefore()?

> `optional` **renderBefore**: (`this`, `buffer`, `deltaTime`) => `void`

#### Parameters

##### this

[`Renderable`](Renderable.md)

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`renderBefore`](FrameBufferRenderable.md#renderbefore)

***

### respectAlpha

> `protected` **respectAlpha**: `boolean`

Whether alpha blending is enabled for compositing.

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`respectAlpha`](FrameBufferRenderable.md#respectalpha)

***

### selectable

> **selectable**: `boolean` = `true`

Whether text can be selected.

#### Overrides

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`selectable`](FrameBufferRenderable.md#selectable)

***

### yogaNode

> `protected` **yogaNode**: `YogaNode`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`yogaNode`](FrameBufferRenderable.md#yoganode)

***

### \_defaultOptions

> `protected` `readonly` `static` **\_defaultOptions**: `object`

Default configuration values.

#### backgroundColor

> **backgroundColor**: `string` = `"transparent"`

#### color

> **color**: `string` = `"#FFFFFF"`

#### font

> **font**: `"tiny"` = `"tiny"`

#### selectable

> **selectable**: `true` = `true`

#### selectionBg

> **selectionBg**: `any` = `undefined`

#### selectionFg

> **selectionFg**: `any` = `undefined`

#### text

> **text**: `string` = `""`

***

### renderablesByNumber

> `static` **renderablesByNumber**: `Map`\<`number`, [`Renderable`](Renderable.md)\>

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`renderablesByNumber`](FrameBufferRenderable.md#renderablesbynumber)

## Accessors

### alignItems

#### Set Signature

> **set** **alignItems**(`alignItems`): `void`

##### Parameters

###### alignItems

[`AlignString`](../type-aliases/AlignString.md)

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`alignItems`](FrameBufferRenderable.md#alignitems)

***

### alignSelf

#### Set Signature

> **set** **alignSelf**(`alignSelf`): `void`

##### Parameters

###### alignSelf

[`AlignString`](../type-aliases/AlignString.md)

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`alignSelf`](FrameBufferRenderable.md#alignself)

***

### backgroundColor

#### Get Signature

> **get** **backgroundColor**(): [`ColorInput`](../type-aliases/ColorInput.md)

Background color for the renderable.

##### Returns

[`ColorInput`](../type-aliases/ColorInput.md)

#### Set Signature

> **set** **backgroundColor**(`value`): `void`

##### Parameters

###### value

[`ColorInput`](../type-aliases/ColorInput.md)

##### Returns

`void`

***

### bottom

#### Get Signature

> **get** **bottom**(): `number` \| `"auto"` \| `` `${number}%` ``

##### Returns

`number` \| `"auto"` \| `` `${number}%` ``

#### Set Signature

> **set** **bottom**(`value`): `void`

##### Parameters

###### value

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`bottom`](FrameBufferRenderable.md#bottom)

***

### color

#### Get Signature

> **get** **color**(): [`ColorInput`](../type-aliases/ColorInput.md) \| [`ColorInput`](../type-aliases/ColorInput.md)[]

Text color, either a single color or an array for gradients.

##### Returns

[`ColorInput`](../type-aliases/ColorInput.md) \| [`ColorInput`](../type-aliases/ColorInput.md)[]

#### Set Signature

> **set** **color**(`value`): `void`

##### Parameters

###### value

[`ColorInput`](../type-aliases/ColorInput.md) | [`ColorInput`](../type-aliases/ColorInput.md)[]

##### Returns

`void`

***

### ctx

#### Get Signature

> **get** **ctx**(): [`RenderContext`](../interfaces/RenderContext.md)

##### Returns

[`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`ctx`](FrameBufferRenderable.md#ctx)

***

### flexBasis

#### Set Signature

> **set** **flexBasis**(`basis`): `void`

##### Parameters

###### basis

`number` | `"auto"`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`flexBasis`](FrameBufferRenderable.md#flexbasis)

***

### flexDirection

#### Set Signature

> **set** **flexDirection**(`direction`): `void`

##### Parameters

###### direction

[`FlexDirectionString`](../type-aliases/FlexDirectionString.md)

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`flexDirection`](FrameBufferRenderable.md#flexdirection)

***

### flexGrow

#### Set Signature

> **set** **flexGrow**(`grow`): `void`

##### Parameters

###### grow

`number`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`flexGrow`](FrameBufferRenderable.md#flexgrow)

***

### flexShrink

#### Set Signature

> **set** **flexShrink**(`shrink`): `void`

##### Parameters

###### shrink

`number`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`flexShrink`](FrameBufferRenderable.md#flexshrink)

***

### flexWrap

#### Set Signature

> **set** **flexWrap**(`wrap`): `void`

##### Parameters

###### wrap

[`WrapString`](../type-aliases/WrapString.md)

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`flexWrap`](FrameBufferRenderable.md#flexwrap)

***

### focusable

#### Get Signature

> **get** **focusable**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`focusable`](FrameBufferRenderable.md#focusable)

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`focused`](FrameBufferRenderable.md#focused)

***

### font

#### Get Signature

> **get** **font**(): `"block"` \| `"tiny"` \| `"shade"` \| `"slick"` \| `"huge"` \| `"grid"` \| `"pallet"`

The ASCII art font name.

##### Remarks

See [ASCIIFontName](../type-aliases/ASCIIFontName.md) for available fonts. Changing this updates dimensions and re-renders.

##### Returns

`"block"` \| `"tiny"` \| `"shade"` \| `"slick"` \| `"huge"` \| `"grid"` \| `"pallet"`

#### Set Signature

> **set** **font**(`value`): `void`

##### Parameters

###### value

`"block"` | `"tiny"` | `"shade"` | `"slick"` | `"huge"` | `"grid"` | `"pallet"`

##### Returns

`void`

***

### height

#### Get Signature

> **get** **height**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **height**(`value`): `void`

##### Parameters

###### value

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`height`](FrameBufferRenderable.md#height)

***

### id

#### Get Signature

> **get** **id**(): `string`

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`id`](FrameBufferRenderable.md#id)

***

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`isDestroyed`](FrameBufferRenderable.md#isdestroyed)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`isDirty`](FrameBufferRenderable.md#isdirty)

***

### justifyContent

#### Set Signature

> **set** **justifyContent**(`justifyContent`): `void`

##### Parameters

###### justifyContent

[`JustifyString`](../type-aliases/JustifyString.md)

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`justifyContent`](FrameBufferRenderable.md#justifycontent)

***

### left

#### Get Signature

> **get** **left**(): `number` \| `"auto"` \| `` `${number}%` ``

##### Returns

`number` \| `"auto"` \| `` `${number}%` ``

#### Set Signature

> **set** **left**(`value`): `void`

##### Parameters

###### value

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`left`](FrameBufferRenderable.md#left)

***

### live

#### Get Signature

> **get** **live**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **live**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`live`](FrameBufferRenderable.md#live)

***

### liveCount

#### Get Signature

> **get** **liveCount**(): `number`

##### Returns

`number`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`liveCount`](FrameBufferRenderable.md#livecount)

***

### margin

#### Set Signature

> **set** **margin**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`margin`](FrameBufferRenderable.md#margin)

***

### marginBottom

#### Set Signature

> **set** **marginBottom**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`marginBottom`](FrameBufferRenderable.md#marginbottom)

***

### marginLeft

#### Set Signature

> **set** **marginLeft**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`marginLeft`](FrameBufferRenderable.md#marginleft)

***

### marginRight

#### Set Signature

> **set** **marginRight**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`marginRight`](FrameBufferRenderable.md#marginright)

***

### marginTop

#### Set Signature

> **set** **marginTop**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`marginTop`](FrameBufferRenderable.md#margintop)

***

### maxHeight

#### Set Signature

> **set** **maxHeight**(`maxHeight`): `void`

##### Parameters

###### maxHeight

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`maxHeight`](FrameBufferRenderable.md#maxheight)

***

### maxWidth

#### Set Signature

> **set** **maxWidth**(`maxWidth`): `void`

##### Parameters

###### maxWidth

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`maxWidth`](FrameBufferRenderable.md#maxwidth)

***

### minHeight

#### Set Signature

> **set** **minHeight**(`minHeight`): `void`

##### Parameters

###### minHeight

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`minHeight`](FrameBufferRenderable.md#minheight)

***

### minWidth

#### Set Signature

> **set** **minWidth**(`minWidth`): `void`

##### Parameters

###### minWidth

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`minWidth`](FrameBufferRenderable.md#minwidth)

***

### onKeyDown

#### Get Signature

> **get** **onKeyDown**(): (`key`) => `void`

##### Returns

> (`key`): `void`

###### Parameters

###### key

[`KeyEvent`](KeyEvent.md)

###### Returns

`void`

#### Set Signature

> **set** **onKeyDown**(`handler`): `void`

##### Parameters

###### handler

(`key`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onKeyDown`](FrameBufferRenderable.md#onkeydown)

***

### onMouse

#### Set Signature

> **set** **onMouse**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouse`](FrameBufferRenderable.md#onmouse)

***

### onMouseDown

#### Set Signature

> **set** **onMouseDown**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseDown`](FrameBufferRenderable.md#onmousedown)

***

### onMouseDrag

#### Set Signature

> **set** **onMouseDrag**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseDrag`](FrameBufferRenderable.md#onmousedrag)

***

### onMouseDragEnd

#### Set Signature

> **set** **onMouseDragEnd**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseDragEnd`](FrameBufferRenderable.md#onmousedragend)

***

### onMouseDrop

#### Set Signature

> **set** **onMouseDrop**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseDrop`](FrameBufferRenderable.md#onmousedrop)

***

### onMouseMove

#### Set Signature

> **set** **onMouseMove**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseMove`](FrameBufferRenderable.md#onmousemove)

***

### onMouseOut

#### Set Signature

> **set** **onMouseOut**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseOut`](FrameBufferRenderable.md#onmouseout)

***

### onMouseOver

#### Set Signature

> **set** **onMouseOver**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseOver`](FrameBufferRenderable.md#onmouseover)

***

### onMouseScroll

#### Set Signature

> **set** **onMouseScroll**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseScroll`](FrameBufferRenderable.md#onmousescroll)

***

### onMouseUp

#### Set Signature

> **set** **onMouseUp**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseUp`](FrameBufferRenderable.md#onmouseup)

***

### onPaste

#### Get Signature

> **get** **onPaste**(): (`event`) => `void`

##### Returns

> (`event`): `void`

###### Parameters

###### event

[`PasteEvent`](PasteEvent.md)

###### Returns

`void`

#### Set Signature

> **set** **onPaste**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onPaste`](FrameBufferRenderable.md#onpaste)

***

### onSizeChange

#### Get Signature

> **get** **onSizeChange**(): () => `void`

##### Returns

> (): `void`

###### Returns

`void`

#### Set Signature

> **set** **onSizeChange**(`handler`): `void`

##### Parameters

###### handler

() => `void`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onSizeChange`](FrameBufferRenderable.md#onsizechange)

***

### opacity

#### Get Signature

> **get** **opacity**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **opacity**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`opacity`](FrameBufferRenderable.md#opacity)

***

### overflow

#### Get Signature

> **get** **overflow**(): [`OverflowString`](../type-aliases/OverflowString.md)

##### Returns

[`OverflowString`](../type-aliases/OverflowString.md)

#### Set Signature

> **set** **overflow**(`overflow`): `void`

##### Parameters

###### overflow

[`OverflowString`](../type-aliases/OverflowString.md)

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`overflow`](FrameBufferRenderable.md#overflow)

***

### padding

#### Set Signature

> **set** **padding**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`padding`](FrameBufferRenderable.md#padding)

***

### paddingBottom

#### Set Signature

> **set** **paddingBottom**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`paddingBottom`](FrameBufferRenderable.md#paddingbottom)

***

### paddingLeft

#### Set Signature

> **set** **paddingLeft**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`paddingLeft`](FrameBufferRenderable.md#paddingleft)

***

### paddingRight

#### Set Signature

> **set** **paddingRight**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`paddingRight`](FrameBufferRenderable.md#paddingright)

***

### paddingTop

#### Set Signature

> **set** **paddingTop**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`paddingTop`](FrameBufferRenderable.md#paddingtop)

***

### position

#### Set Signature

> **set** **position**(`positionType`): `void`

##### Parameters

###### positionType

[`PositionTypeString`](../type-aliases/PositionTypeString.md)

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`position`](FrameBufferRenderable.md#position)

***

### primaryAxis

#### Get Signature

> **get** **primaryAxis**(): `"column"` \| `"row"`

##### Returns

`"column"` \| `"row"`

#### Inherited from

[`TextareaRenderable`](TextareaRenderable.md).[`primaryAxis`](TextareaRenderable.md#primaryaxis)

***

### right

#### Get Signature

> **get** **right**(): `number` \| `"auto"` \| `` `${number}%` ``

##### Returns

`number` \| `"auto"` \| `` `${number}%` ``

#### Set Signature

> **set** **right**(`value`): `void`

##### Parameters

###### value

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`right`](FrameBufferRenderable.md#right)

***

### text

#### Get Signature

> **get** **text**(): `string`

The text to display.

##### Remarks

Changing this updates the dimensions and re-renders the font.

##### Returns

`string`

#### Set Signature

> **set** **text**(`value`): `void`

##### Parameters

###### value

`string`

##### Returns

`void`

***

### top

#### Get Signature

> **get** **top**(): `number` \| `"auto"` \| `` `${number}%` ``

##### Returns

`number` \| `"auto"` \| `` `${number}%` ``

#### Set Signature

> **set** **top**(`value`): `void`

##### Parameters

###### value

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`top`](FrameBufferRenderable.md#top)

***

### translateX

#### Get Signature

> **get** **translateX**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **translateX**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`translateX`](FrameBufferRenderable.md#translatex)

***

### translateY

#### Get Signature

> **get** **translateY**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **translateY**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`translateY`](FrameBufferRenderable.md#translatey)

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`visible`](FrameBufferRenderable.md#visible)

***

### width

#### Get Signature

> **get** **width**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

##### Parameters

###### value

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`width`](FrameBufferRenderable.md#width)

***

### x

#### Get Signature

> **get** **x**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`x`](FrameBufferRenderable.md#x)

***

### y

#### Get Signature

> **get** **y**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`y`](FrameBufferRenderable.md#y)

***

### zIndex

#### Get Signature

> **get** **zIndex**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **zIndex**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`zIndex`](FrameBufferRenderable.md#zindex)

## Methods

### \_getVisibleChildren()

> `protected` **\_getVisibleChildren**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`_getVisibleChildren`](FrameBufferRenderable.md#_getvisiblechildren)

***

### add()

> **add**(`obj`, `index?`): `number`

#### Parameters

##### obj

`unknown`

##### index?

`number`

#### Returns

`number`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`add`](FrameBufferRenderable.md#add)

***

### blur()

> **blur**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`blur`](FrameBufferRenderable.md#blur)

***

### createFrameBuffer()

> `protected` **createFrameBuffer**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`createFrameBuffer`](FrameBufferRenderable.md#createframebuffer)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`destroy`](FrameBufferRenderable.md#destroy)

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`destroyRecursively`](FrameBufferRenderable.md#destroyrecursively)

***

### destroySelf()

> `protected` **destroySelf**(): `void`

**`Internal`**

Destroys the framebuffer and cleans up resources.

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`destroySelf`](FrameBufferRenderable.md#destroyself)

***

### findDescendantById()

> **findDescendantById**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`findDescendantById`](FrameBufferRenderable.md#finddescendantbyid)

***

### focus()

> **focus**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`focus`](FrameBufferRenderable.md#focus)

***

### getChildren()

> **getChildren**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`getChildren`](FrameBufferRenderable.md#getchildren)

***

### getChildrenCount()

> **getChildrenCount**(): `number`

#### Returns

`number`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`getChildrenCount`](FrameBufferRenderable.md#getchildrencount)

***

### getChildrenSortedByPrimaryAxis()

> **getChildrenSortedByPrimaryAxis**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`getChildrenSortedByPrimaryAxis`](FrameBufferRenderable.md#getchildrensortedbyprimaryaxis)

***

### getLayoutNode()

> **getLayoutNode**(): `YogaNode`

#### Returns

`YogaNode`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`getLayoutNode`](FrameBufferRenderable.md#getlayoutnode)

***

### getRenderable()

> **getRenderable**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`getRenderable`](FrameBufferRenderable.md#getrenderable)

***

### getScissorRect()

> `protected` **getScissorRect**(): `object`

#### Returns

`object`

##### height

> **height**: `number`

##### width

> **width**: `number`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`getScissorRect`](FrameBufferRenderable.md#getscissorrect)

***

### getSelectedText()

> **getSelectedText**(): `string`

#### Returns

`string`

#### Overrides

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`getSelectedText`](FrameBufferRenderable.md#getselectedtext)

***

### handleFrameBufferResize()

> `protected` **handleFrameBufferResize**(`width`, `height`): `void`

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`handleFrameBufferResize`](FrameBufferRenderable.md#handleframebufferresize)

***

### handleKeyPress()?

> `optional` **handleKeyPress**(`key`): `boolean`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`boolean`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`handleKeyPress`](FrameBufferRenderable.md#handlekeypress)

***

### handlePaste()?

> `optional` **handlePaste**(`event`): `void`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`handlePaste`](FrameBufferRenderable.md#handlepaste)

***

### hasSelection()

> **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`hasSelection`](FrameBufferRenderable.md#hasselection)

***

### insertBefore()

> **insertBefore**(`obj`, `anchor?`): `number`

#### Parameters

##### obj

`unknown`

##### anchor?

`unknown`

#### Returns

`number`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`insertBefore`](FrameBufferRenderable.md#insertbefore)

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`markClean`](FrameBufferRenderable.md#markclean)

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`markDirty`](FrameBufferRenderable.md#markdirty)

***

### onLayoutResize()

> `protected` **onLayoutResize**(`width`, `height`): `void`

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onLayoutResize`](FrameBufferRenderable.md#onlayoutresize)

***

### onMouseEvent()

> `protected` **onMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onMouseEvent`](FrameBufferRenderable.md#onmouseevent)

***

### onRemove()

> `protected` **onRemove**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onRemove`](FrameBufferRenderable.md#onremove)

***

### onResize()

> `protected` **onResize**(`width`, `height`): `void`

Called when the renderable is resized. Automatically resizes the framebuffer.

#### Parameters

##### width

`number`

New width in characters

##### height

`number`

New height in characters

#### Returns

`void`

#### Throws

Error if width or height is zero or negative

#### Overrides

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onResize`](FrameBufferRenderable.md#onresize)

***

### onSelectionChanged()

> **onSelectionChanged**(`selection`): `boolean`

#### Parameters

##### selection

[`Selection`](Selection.md)

#### Returns

`boolean`

#### Overrides

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onSelectionChanged`](FrameBufferRenderable.md#onselectionchanged)

***

### onUpdate()

> `protected` **onUpdate**(`deltaTime`): `void`

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`onUpdate`](FrameBufferRenderable.md#onupdate)

***

### processMouseEvent()

> **processMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`processMouseEvent`](FrameBufferRenderable.md#processmouseevent)

***

### propagateLiveCount()

> `protected` **propagateLiveCount**(`delta`): `void`

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`propagateLiveCount`](FrameBufferRenderable.md#propagatelivecount)

***

### remove()

> **remove**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`remove`](FrameBufferRenderable.md#remove)

***

### render()

> **render**(`buffer`, `deltaTime`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`render`](FrameBufferRenderable.md#render)

***

### renderSelf()

> `protected` **renderSelf**(`buffer`): `void`

**`Internal`**

Renders the framebuffer to the main screen buffer.

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

The main screen buffer to draw to

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`renderSelf`](FrameBufferRenderable.md#renderself)

***

### requestRender()

> **requestRender**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`requestRender`](FrameBufferRenderable.md#requestrender)

***

### setPosition()

> **setPosition**(`position`): `void`

#### Parameters

##### position

[`Position`](../interfaces/Position.md)

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`setPosition`](FrameBufferRenderable.md#setposition)

***

### shouldStartSelection()

> **shouldStartSelection**(`x`, `y`): `boolean`

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`boolean`

#### Overrides

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`shouldStartSelection`](FrameBufferRenderable.md#shouldstartselection)

***

### updateFromLayout()

> **updateFromLayout**(): `void`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`updateFromLayout`](FrameBufferRenderable.md#updatefromlayout)

***

### updateLayout()

> **updateLayout**(`deltaTime`, `renderList`): `void`

#### Parameters

##### deltaTime

`number`

##### renderList

[`RenderCommand`](../type-aliases/RenderCommand.md)[] = `[]`

#### Returns

`void`

#### Inherited from

[`FrameBufferRenderable`](FrameBufferRenderable.md).[`updateLayout`](FrameBufferRenderable.md#updatelayout)
