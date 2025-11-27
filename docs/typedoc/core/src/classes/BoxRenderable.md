[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / BoxRenderable

# Class: BoxRenderable

A container renderable that displays a box with optional borders, background, and title.
This is the most commonly used layout component in OpenTUI.

## Remarks

BoxRenderable is a versatile container that provides:
- **Borders**: Multiple styles (single, double, rounded, bold, ascii)
- **Background**: Solid color fill
- **Title**: Optional title text in the top border
- **Flexbox Layout**: Full flexbox support for child positioning
- **Gaps**: Row and column gaps between children
- **Focus Styling**: Different border color when focused

## Example

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

## Extends

- [`Renderable`](Renderable.md)

## Extended by

- [`ScrollBoxRenderable`](ScrollBoxRenderable.md)

## Constructors

### Constructor

> **new BoxRenderable**(`ctx`, `options`): `BoxRenderable`

#### Parameters

##### ctx

[`RenderContext`](../interfaces/RenderContext.md)

##### options

[`BoxOptions`](../interfaces/BoxOptions.md)

#### Returns

`BoxRenderable`

#### Overrides

[`Renderable`](Renderable.md).[`constructor`](Renderable.md#constructor)

## Properties

### \_backgroundColor

> `protected` **\_backgroundColor**: [`RGBA`](RGBA.md)

***

### \_border

> `protected` **\_border**: `boolean` \| [`BorderSides`](../type-aliases/BorderSides.md)[]

***

### \_borderColor

> `protected` **\_borderColor**: [`RGBA`](RGBA.md)

***

### \_borderStyle

> `protected` **\_borderStyle**: [`BorderStyle`](../type-aliases/BorderStyle.md)

***

### \_childrenInLayoutOrder

> `protected` **\_childrenInLayoutOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

[`Renderable`](Renderable.md).[`_childrenInLayoutOrder`](Renderable.md#_childreninlayoutorder)

***

### \_childrenInZIndexOrder

> `protected` **\_childrenInZIndexOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

[`Renderable`](Renderable.md).[`_childrenInZIndexOrder`](Renderable.md#_childreninzindexorder)

***

### \_ctx

> `protected` **\_ctx**: [`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

[`Renderable`](Renderable.md).[`_ctx`](Renderable.md#_ctx)

***

### \_customBorderChars?

> `protected` `optional` **\_customBorderChars**: `Uint32Array`

***

### \_defaultOptions

> `protected` **\_defaultOptions**: `object`

#### backgroundColor

> **backgroundColor**: `string` = `"transparent"`

#### border

> **border**: `false` = `false`

#### borderColor

> **borderColor**: `string` = `"#FFFFFF"`

#### borderStyle

> **borderStyle**: `"single"` = `"single"`

#### focusedBorderColor

> **focusedBorderColor**: `string` = `"#00AAFF"`

#### shouldFill

> **shouldFill**: `true` = `true`

#### titleAlignment

> **titleAlignment**: `"left"` = `"left"`

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`Renderable`](Renderable.md).[`_dirty`](Renderable.md#_dirty)

***

### \_focusable

> `protected` **\_focusable**: `boolean` = `false`

#### Inherited from

[`Renderable`](Renderable.md).[`_focusable`](Renderable.md#_focusable)

***

### \_focused

> `protected` **\_focused**: `boolean` = `false`

#### Inherited from

[`Renderable`](Renderable.md).[`_focused`](Renderable.md#_focused)

***

### \_focusedBorderColor

> `protected` **\_focusedBorderColor**: [`RGBA`](RGBA.md)

***

### \_height

> `protected` **\_height**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

[`Renderable`](Renderable.md).[`_height`](Renderable.md#_height)

***

### \_heightValue

> `protected` **\_heightValue**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_heightValue`](Renderable.md#_heightvalue)

***

### \_id

> `protected` **\_id**: `string`

#### Inherited from

[`Renderable`](Renderable.md).[`_id`](Renderable.md#_id)

***

### \_liveCount

> `protected` **\_liveCount**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_liveCount`](Renderable.md#_livecount)

***

### \_overflow

> `protected` **\_overflow**: [`OverflowString`](../type-aliases/OverflowString.md) = `"visible"`

#### Inherited from

[`Renderable`](Renderable.md).[`_overflow`](Renderable.md#_overflow)

***

### \_position

> `protected` **\_position**: [`Position`](../interfaces/Position.md) = `{}`

#### Inherited from

[`Renderable`](Renderable.md).[`_position`](Renderable.md#_position)

***

### \_positionType

> `protected` **\_positionType**: [`PositionTypeString`](../type-aliases/PositionTypeString.md) = `"relative"`

#### Inherited from

[`Renderable`](Renderable.md).[`_positionType`](Renderable.md#_positiontype)

***

### \_title?

> `protected` `optional` **\_title**: `string`

***

### \_titleAlignment

> `protected` **\_titleAlignment**: `"center"` \| `"right"` \| `"left"`

***

### \_translateX

> `protected` **\_translateX**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_translateX`](Renderable.md#_translatex)

***

### \_translateY

> `protected` **\_translateY**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_translateY`](Renderable.md#_translatey)

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

#### Inherited from

[`Renderable`](Renderable.md).[`_visible`](Renderable.md#_visible)

***

### \_width

> `protected` **\_width**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

[`Renderable`](Renderable.md).[`_width`](Renderable.md#_width)

***

### \_widthValue

> `protected` **\_widthValue**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_widthValue`](Renderable.md#_widthvalue)

***

### \_x

> `protected` **\_x**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_x`](Renderable.md#_x)

***

### \_y

> `protected` **\_y**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_y`](Renderable.md#_y)

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

#### Inherited from

[`Renderable`](Renderable.md).[`[BrandedRenderable]`](Renderable.md#brandedrenderable)

***

### borderSides

> `protected` **borderSides**: [`BorderSidesConfig`](../interfaces/BorderSidesConfig.md)

***

### buffered

> `protected` **buffered**: `boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`buffered`](Renderable.md#buffered)

***

### frameBuffer

> `protected` **frameBuffer**: [`OptimizedBuffer`](OptimizedBuffer.md) = `null`

#### Inherited from

[`Renderable`](Renderable.md).[`frameBuffer`](Renderable.md#framebuffer)

***

### keypressHandler()

> `protected` **keypressHandler**: (`key`) => `void` = `null`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`keypressHandler`](Renderable.md#keypresshandler)

***

### num

> `readonly` **num**: `number`

#### Inherited from

[`Renderable`](Renderable.md).[`num`](Renderable.md#num)

***

### onLifecyclePass()

> **onLifecyclePass**: () => `void` = `null`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`onLifecyclePass`](Renderable.md#onlifecyclepass)

***

### parent

> **parent**: [`Renderable`](Renderable.md) = `null`

#### Inherited from

[`Renderable`](Renderable.md).[`parent`](Renderable.md#parent)

***

### pasteHandler()

> `protected` **pasteHandler**: (`event`) => `void` = `null`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`pasteHandler`](Renderable.md#pastehandler)

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

[`Renderable`](Renderable.md).[`renderAfter`](Renderable.md#renderafter)

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

[`Renderable`](Renderable.md).[`renderBefore`](Renderable.md#renderbefore)

***

### selectable

> **selectable**: `boolean` = `false`

#### Inherited from

[`Renderable`](Renderable.md).[`selectable`](Renderable.md#selectable)

***

### shouldFill

> **shouldFill**: `boolean`

***

### yogaNode

> `protected` **yogaNode**: `Node`

#### Inherited from

[`Renderable`](Renderable.md).[`yogaNode`](Renderable.md#yoganode)

***

### renderablesByNumber

> `static` **renderablesByNumber**: `Map`\<`number`, [`Renderable`](Renderable.md)\>

#### Inherited from

[`Renderable`](Renderable.md).[`renderablesByNumber`](Renderable.md#renderablesbynumber)

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

[`Renderable`](Renderable.md).[`alignItems`](Renderable.md#alignitems)

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

[`Renderable`](Renderable.md).[`alignSelf`](Renderable.md#alignself)

***

### backgroundColor

#### Get Signature

> **get** **backgroundColor**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **backgroundColor**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

***

### border

#### Get Signature

> **get** **border**(): `boolean` \| [`BorderSides`](../type-aliases/BorderSides.md)[]

##### Returns

`boolean` \| [`BorderSides`](../type-aliases/BorderSides.md)[]

#### Set Signature

> **set** **border**(`value`): `void`

##### Parameters

###### value

`boolean` | [`BorderSides`](../type-aliases/BorderSides.md)[]

##### Returns

`void`

***

### borderColor

#### Get Signature

> **get** **borderColor**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **borderColor**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

***

### borderStyle

#### Get Signature

> **get** **borderStyle**(): [`BorderStyle`](../type-aliases/BorderStyle.md)

##### Returns

[`BorderStyle`](../type-aliases/BorderStyle.md)

#### Set Signature

> **set** **borderStyle**(`value`): `void`

##### Parameters

###### value

[`BorderStyle`](../type-aliases/BorderStyle.md)

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

[`Renderable`](Renderable.md).[`bottom`](Renderable.md#bottom)

***

### columnGap

#### Set Signature

> **set** **columnGap**(`columnGap`): `void`

##### Parameters

###### columnGap

`number` | `` `${number}%` ``

##### Returns

`void`

***

### ctx

#### Get Signature

> **get** **ctx**(): [`RenderContext`](../interfaces/RenderContext.md)

##### Returns

[`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

[`Renderable`](Renderable.md).[`ctx`](Renderable.md#ctx)

***

### customBorderChars

#### Get Signature

> **get** **customBorderChars**(): [`BorderCharacters`](../interfaces/BorderCharacters.md)

##### Returns

[`BorderCharacters`](../interfaces/BorderCharacters.md)

#### Set Signature

> **set** **customBorderChars**(`value`): `void`

##### Parameters

###### value

[`BorderCharacters`](../interfaces/BorderCharacters.md)

##### Returns

`void`

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

[`Renderable`](Renderable.md).[`flexBasis`](Renderable.md#flexbasis)

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

[`Renderable`](Renderable.md).[`flexDirection`](Renderable.md#flexdirection)

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

[`Renderable`](Renderable.md).[`flexGrow`](Renderable.md#flexgrow)

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

[`Renderable`](Renderable.md).[`flexShrink`](Renderable.md#flexshrink)

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

[`Renderable`](Renderable.md).[`flexWrap`](Renderable.md#flexwrap)

***

### focusable

#### Get Signature

> **get** **focusable**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`focusable`](Renderable.md#focusable)

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`focused`](Renderable.md#focused)

***

### focusedBorderColor

#### Get Signature

> **get** **focusedBorderColor**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **focusedBorderColor**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

***

### gap

#### Set Signature

> **set** **gap**(`gap`): `void`

##### Parameters

###### gap

`number` | `` `${number}%` ``

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

[`Renderable`](Renderable.md).[`height`](Renderable.md#height)

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

[`Renderable`](Renderable.md).[`id`](Renderable.md#id)

***

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`isDestroyed`](Renderable.md#isdestroyed)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`isDirty`](Renderable.md#isdirty)

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

[`Renderable`](Renderable.md).[`justifyContent`](Renderable.md#justifycontent)

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

[`Renderable`](Renderable.md).[`left`](Renderable.md#left)

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

[`Renderable`](Renderable.md).[`live`](Renderable.md#live)

***

### liveCount

#### Get Signature

> **get** **liveCount**(): `number`

##### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`liveCount`](Renderable.md#livecount)

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

[`Renderable`](Renderable.md).[`margin`](Renderable.md#margin)

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

[`Renderable`](Renderable.md).[`marginBottom`](Renderable.md#marginbottom)

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

[`Renderable`](Renderable.md).[`marginLeft`](Renderable.md#marginleft)

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

[`Renderable`](Renderable.md).[`marginRight`](Renderable.md#marginright)

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

[`Renderable`](Renderable.md).[`marginTop`](Renderable.md#margintop)

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

[`Renderable`](Renderable.md).[`maxHeight`](Renderable.md#maxheight)

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

[`Renderable`](Renderable.md).[`maxWidth`](Renderable.md#maxwidth)

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

[`Renderable`](Renderable.md).[`minHeight`](Renderable.md#minheight)

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

[`Renderable`](Renderable.md).[`minWidth`](Renderable.md#minwidth)

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

[`Renderable`](Renderable.md).[`onKeyDown`](Renderable.md#onkeydown)

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

[`Renderable`](Renderable.md).[`onMouse`](Renderable.md#onmouse)

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

[`Renderable`](Renderable.md).[`onMouseDown`](Renderable.md#onmousedown)

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

[`Renderable`](Renderable.md).[`onMouseDrag`](Renderable.md#onmousedrag)

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

[`Renderable`](Renderable.md).[`onMouseDragEnd`](Renderable.md#onmousedragend)

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

[`Renderable`](Renderable.md).[`onMouseDrop`](Renderable.md#onmousedrop)

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

[`Renderable`](Renderable.md).[`onMouseMove`](Renderable.md#onmousemove)

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

[`Renderable`](Renderable.md).[`onMouseOut`](Renderable.md#onmouseout)

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

[`Renderable`](Renderable.md).[`onMouseOver`](Renderable.md#onmouseover)

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

[`Renderable`](Renderable.md).[`onMouseScroll`](Renderable.md#onmousescroll)

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

[`Renderable`](Renderable.md).[`onMouseUp`](Renderable.md#onmouseup)

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

[`Renderable`](Renderable.md).[`onPaste`](Renderable.md#onpaste)

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

[`Renderable`](Renderable.md).[`onSizeChange`](Renderable.md#onsizechange)

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

[`Renderable`](Renderable.md).[`overflow`](Renderable.md#overflow)

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

[`Renderable`](Renderable.md).[`padding`](Renderable.md#padding)

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

[`Renderable`](Renderable.md).[`paddingBottom`](Renderable.md#paddingbottom)

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

[`Renderable`](Renderable.md).[`paddingLeft`](Renderable.md#paddingleft)

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

[`Renderable`](Renderable.md).[`paddingRight`](Renderable.md#paddingright)

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

[`Renderable`](Renderable.md).[`paddingTop`](Renderable.md#paddingtop)

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

[`Renderable`](Renderable.md).[`position`](Renderable.md#position)

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

[`Renderable`](Renderable.md).[`right`](Renderable.md#right)

***

### rowGap

#### Set Signature

> **set** **rowGap**(`rowGap`): `void`

##### Parameters

###### rowGap

`number` | `` `${number}%` ``

##### Returns

`void`

***

### title

#### Get Signature

> **get** **title**(): `string`

##### Returns

`string`

#### Set Signature

> **set** **title**(`value`): `void`

##### Parameters

###### value

`string`

##### Returns

`void`

***

### titleAlignment

#### Get Signature

> **get** **titleAlignment**(): `"center"` \| `"right"` \| `"left"`

##### Returns

`"center"` \| `"right"` \| `"left"`

#### Set Signature

> **set** **titleAlignment**(`value`): `void`

##### Parameters

###### value

`"center"` | `"right"` | `"left"`

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

[`Renderable`](Renderable.md).[`top`](Renderable.md#top)

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

[`Renderable`](Renderable.md).[`translateX`](Renderable.md#translatex)

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

[`Renderable`](Renderable.md).[`translateY`](Renderable.md#translatey)

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

[`Renderable`](Renderable.md).[`visible`](Renderable.md#visible)

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

[`Renderable`](Renderable.md).[`width`](Renderable.md#width)

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

[`Renderable`](Renderable.md).[`x`](Renderable.md#x)

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

[`Renderable`](Renderable.md).[`y`](Renderable.md#y)

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

[`Renderable`](Renderable.md).[`zIndex`](Renderable.md#zindex)

## Methods

### \_getVisibleChildren()

> `protected` **\_getVisibleChildren**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[`Renderable`](Renderable.md).[`_getVisibleChildren`](Renderable.md#_getvisiblechildren)

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

[`Renderable`](Renderable.md).[`add`](Renderable.md#add)

***

### blur()

> **blur**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`blur`](Renderable.md#blur)

***

### createFrameBuffer()

> `protected` **createFrameBuffer**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`createFrameBuffer`](Renderable.md#createframebuffer)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`destroy`](Renderable.md#destroy)

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`destroyRecursively`](Renderable.md#destroyrecursively)

***

### destroySelf()

> `protected` **destroySelf**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`destroySelf`](Renderable.md#destroyself)

***

### findDescendantById()

> **findDescendantById**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

[`Renderable`](Renderable.md).[`findDescendantById`](Renderable.md#finddescendantbyid)

***

### focus()

> **focus**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`focus`](Renderable.md#focus)

***

### getChildren()

> **getChildren**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

[`Renderable`](Renderable.md).[`getChildren`](Renderable.md#getchildren)

***

### getChildrenCount()

> **getChildrenCount**(): `number`

#### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`getChildrenCount`](Renderable.md#getchildrencount)

***

### getChildrenSortedByPrimaryAxis()

> **getChildrenSortedByPrimaryAxis**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

[`Renderable`](Renderable.md).[`getChildrenSortedByPrimaryAxis`](Renderable.md#getchildrensortedbyprimaryaxis)

***

### getLayoutNode()

> **getLayoutNode**(): `Node`

#### Returns

`Node`

#### Inherited from

[`Renderable`](Renderable.md).[`getLayoutNode`](Renderable.md#getlayoutnode)

***

### getRenderable()

> **getRenderable**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

[`Renderable`](Renderable.md).[`getRenderable`](Renderable.md#getrenderable)

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

#### Overrides

[`Renderable`](Renderable.md).[`getScissorRect`](Renderable.md#getscissorrect)

***

### getSelectedText()

> **getSelectedText**(): `string`

#### Returns

`string`

#### Inherited from

[`Renderable`](Renderable.md).[`getSelectedText`](Renderable.md#getselectedtext)

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

[`Renderable`](Renderable.md).[`handleFrameBufferResize`](Renderable.md#handleframebufferresize)

***

### handleKeyPress()?

> `optional` **handleKeyPress**(`key`): `boolean`

#### Parameters

##### key

`string` | [`KeyEvent`](KeyEvent.md)

#### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`handleKeyPress`](Renderable.md#handlekeypress)

***

### handlePaste()?

> `optional` **handlePaste**(`event`): `void`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`handlePaste`](Renderable.md#handlepaste)

***

### hasSelection()

> **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`hasSelection`](Renderable.md#hasselection)

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

[`Renderable`](Renderable.md).[`insertBefore`](Renderable.md#insertbefore)

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`markClean`](Renderable.md#markclean)

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`markDirty`](Renderable.md#markdirty)

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

[`Renderable`](Renderable.md).[`onLayoutResize`](Renderable.md#onlayoutresize)

***

### onMouseEvent()

> `protected` **onMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`onMouseEvent`](Renderable.md#onmouseevent)

***

### onRemove()

> `protected` **onRemove**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`onRemove`](Renderable.md#onremove)

***

### onResize()

> `protected` **onResize**(`width`, `height`): `void`

This will be called during a render pass.
Requesting a render during a render pass will drop the requested render.
If you need to request a render during a render pass, use process.nextTick.

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`onResize`](Renderable.md#onresize)

***

### onSelectionChanged()

> **onSelectionChanged**(`selection`): `boolean`

#### Parameters

##### selection

[`Selection`](Selection.md)

#### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`onSelectionChanged`](Renderable.md#onselectionchanged)

***

### onUpdate()

> `protected` **onUpdate**(`deltaTime`): `void`

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`onUpdate`](Renderable.md#onupdate)

***

### processMouseEvent()

> **processMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`processMouseEvent`](Renderable.md#processmouseevent)

***

### propagateLiveCount()

> `protected` **propagateLiveCount**(`delta`): `void`

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`propagateLiveCount`](Renderable.md#propagatelivecount)

***

### remove()

> **remove**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`remove`](Renderable.md#remove)

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

[`Renderable`](Renderable.md).[`render`](Renderable.md#render)

***

### renderSelf()

> `protected` **renderSelf**(`buffer`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`

#### Overrides

[`Renderable`](Renderable.md).[`renderSelf`](Renderable.md#renderself)

***

### requestRender()

> **requestRender**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`requestRender`](Renderable.md#requestrender)

***

### setPosition()

> **setPosition**(`position`): `void`

#### Parameters

##### position

[`Position`](../interfaces/Position.md)

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`setPosition`](Renderable.md#setposition)

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

#### Inherited from

[`Renderable`](Renderable.md).[`shouldStartSelection`](Renderable.md#shouldstartselection)

***

### updateFromLayout()

> **updateFromLayout**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`updateFromLayout`](Renderable.md#updatefromlayout)

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

[`Renderable`](Renderable.md).[`updateLayout`](Renderable.md#updatelayout)
