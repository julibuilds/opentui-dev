[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / ScrollBoxRenderable

# Class: ScrollBoxRenderable

A scrollable container component with vertical and horizontal scrollbars.

## Remarks

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

## Example

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

## Extends

- [`BoxRenderable`](BoxRenderable.md)

## Constructors

### Constructor

> **new ScrollBoxRenderable**(`ctx`, `__namedParameters`): `ScrollBoxRenderable`

#### Parameters

##### ctx

[`RenderContext`](../interfaces/RenderContext.md)

##### \_\_namedParameters

[`ScrollBoxOptions`](../interfaces/ScrollBoxOptions.md)

#### Returns

`ScrollBoxRenderable`

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`constructor`](BoxRenderable.md#constructor)

## Properties

### \_backgroundColor

> `protected` **\_backgroundColor**: [`RGBA`](RGBA.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_backgroundColor`](BoxRenderable.md#_backgroundcolor)

***

### \_border

> `protected` **\_border**: `boolean` \| [`BorderSides`](../type-aliases/BorderSides.md)[]

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_border`](BoxRenderable.md#_border)

***

### \_borderColor

> `protected` **\_borderColor**: [`RGBA`](RGBA.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_borderColor`](BoxRenderable.md#_bordercolor)

***

### \_borderStyle

> `protected` **\_borderStyle**: [`BorderStyle`](../type-aliases/BorderStyle.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_borderStyle`](BoxRenderable.md#_borderstyle)

***

### \_childrenInLayoutOrder

> `protected` **\_childrenInLayoutOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_childrenInLayoutOrder`](BoxRenderable.md#_childreninlayoutorder)

***

### \_childrenInZIndexOrder

> `protected` **\_childrenInZIndexOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_childrenInZIndexOrder`](BoxRenderable.md#_childreninzindexorder)

***

### \_ctx

> `protected` **\_ctx**: [`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_ctx`](BoxRenderable.md#_ctx)

***

### \_customBorderChars?

> `protected` `optional` **\_customBorderChars**: `Uint32Array`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_customBorderChars`](BoxRenderable.md#_customborderchars)

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_defaultOptions`](BoxRenderable.md#_defaultoptions)

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_dirty`](BoxRenderable.md#_dirty)

***

### \_focusable

> `protected` **\_focusable**: `boolean` = `true`

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`_focusable`](BoxRenderable.md#_focusable)

***

### \_focused

> `protected` **\_focused**: `boolean` = `false`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_focused`](BoxRenderable.md#_focused)

***

### \_focusedBorderColor

> `protected` **\_focusedBorderColor**: [`RGBA`](RGBA.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_focusedBorderColor`](BoxRenderable.md#_focusedbordercolor)

***

### \_height

> `protected` **\_height**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_height`](BoxRenderable.md#_height)

***

### \_heightValue

> `protected` **\_heightValue**: `number` = `0`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_heightValue`](BoxRenderable.md#_heightvalue)

***

### \_id

> `protected` **\_id**: `string`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_id`](BoxRenderable.md#_id)

***

### \_isDestroyed

> `protected` **\_isDestroyed**: `boolean` = `false`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_isDestroyed`](BoxRenderable.md#_isdestroyed)

***

### \_liveCount

> `protected` **\_liveCount**: `number` = `0`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_liveCount`](BoxRenderable.md#_livecount)

***

### \_opacity

> `protected` **\_opacity**: `number` = `1.0`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_opacity`](BoxRenderable.md#_opacity)

***

### \_overflow

> `protected` **\_overflow**: [`OverflowString`](../type-aliases/OverflowString.md) = `"visible"`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_overflow`](BoxRenderable.md#_overflow)

***

### \_position

> `protected` **\_position**: [`Position`](../interfaces/Position.md) = `{}`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_position`](BoxRenderable.md#_position)

***

### \_positionType

> `protected` **\_positionType**: [`PositionTypeString`](../type-aliases/PositionTypeString.md) = `"relative"`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_positionType`](BoxRenderable.md#_positiontype)

***

### \_title?

> `protected` `optional` **\_title**: `string`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_title`](BoxRenderable.md#_title)

***

### \_titleAlignment

> `protected` **\_titleAlignment**: `"center"` \| `"right"` \| `"left"`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_titleAlignment`](BoxRenderable.md#_titlealignment)

***

### \_translateX

> `protected` **\_translateX**: `number` = `0`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_translateX`](BoxRenderable.md#_translatex)

***

### \_translateY

> `protected` **\_translateY**: `number` = `0`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_translateY`](BoxRenderable.md#_translatey)

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_visible`](BoxRenderable.md#_visible)

***

### \_width

> `protected` **\_width**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_width`](BoxRenderable.md#_width)

***

### \_widthValue

> `protected` **\_widthValue**: `number` = `0`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_widthValue`](BoxRenderable.md#_widthvalue)

***

### \_x

> `protected` **\_x**: `number` = `0`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_x`](BoxRenderable.md#_x)

***

### \_y

> `protected` **\_y**: `number` = `0`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_y`](BoxRenderable.md#_y)

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`[BrandedRenderable]`](BoxRenderable.md#brandedrenderable)

***

### borderSides

> `protected` **borderSides**: [`BorderSidesConfig`](../interfaces/BorderSidesConfig.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`borderSides`](BoxRenderable.md#bordersides)

***

### buffered

> `protected` **buffered**: `boolean`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`buffered`](BoxRenderable.md#buffered)

***

### content

> `readonly` **content**: `ContentRenderable`

The content container that holds all child elements

***

### frameBuffer

> `protected` **frameBuffer**: [`OptimizedBuffer`](OptimizedBuffer.md) = `null`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`frameBuffer`](BoxRenderable.md#framebuffer)

***

### horizontalScrollBar

> `readonly` **horizontalScrollBar**: [`ScrollBarRenderable`](ScrollBarRenderable.md)

The horizontal scrollbar

***

### keypressHandler()

> `protected` **keypressHandler**: (`key`) => `void` = `null`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`keypressHandler`](BoxRenderable.md#keypresshandler)

***

### num

> `readonly` **num**: `number`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`num`](BoxRenderable.md#num)

***

### onLifecyclePass()

> **onLifecyclePass**: () => `void` = `null`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`onLifecyclePass`](BoxRenderable.md#onlifecyclepass)

***

### parent

> **parent**: [`Renderable`](Renderable.md) = `null`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`parent`](BoxRenderable.md#parent)

***

### pasteHandler()

> `protected` **pasteHandler**: (`event`) => `void` = `null`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`pasteHandler`](BoxRenderable.md#pastehandler)

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

[`BoxRenderable`](BoxRenderable.md).[`renderAfter`](BoxRenderable.md#renderafter)

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

[`BoxRenderable`](BoxRenderable.md).[`renderBefore`](BoxRenderable.md#renderbefore)

***

### selectable

> **selectable**: `boolean` = `false`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`selectable`](BoxRenderable.md#selectable)

***

### shouldFill

> **shouldFill**: `boolean`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`shouldFill`](BoxRenderable.md#shouldfill)

***

### verticalScrollBar

> `readonly` **verticalScrollBar**: [`ScrollBarRenderable`](ScrollBarRenderable.md)

The vertical scrollbar

***

### viewport

> `readonly` **viewport**: [`BoxRenderable`](BoxRenderable.md)

The viewport element that clips the content to the visible area

***

### wrapper

> `readonly` **wrapper**: [`BoxRenderable`](BoxRenderable.md)

The wrapper element that contains the viewport and horizontal scrollbar

***

### yogaNode

> `protected` **yogaNode**: `YogaNode`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`yogaNode`](BoxRenderable.md#yoganode)

***

### idCounter

> `static` **idCounter**: `number` = `0`

***

### renderablesByNumber

> `static` **renderablesByNumber**: `Map`\<`number`, [`Renderable`](Renderable.md)\>

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`renderablesByNumber`](BoxRenderable.md#renderablesbynumber)

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

[`BoxRenderable`](BoxRenderable.md).[`alignItems`](BoxRenderable.md#alignitems)

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

[`BoxRenderable`](BoxRenderable.md).[`alignSelf`](BoxRenderable.md#alignself)

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`backgroundColor`](BoxRenderable.md#backgroundcolor)

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`border`](BoxRenderable.md#border)

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`borderColor`](BoxRenderable.md#bordercolor)

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`borderStyle`](BoxRenderable.md#borderstyle)

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

[`BoxRenderable`](BoxRenderable.md).[`bottom`](BoxRenderable.md#bottom)

***

### columnGap

#### Set Signature

> **set** **columnGap**(`columnGap`): `void`

##### Parameters

###### columnGap

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`columnGap`](BoxRenderable.md#columngap)

***

### contentOptions

#### Set Signature

> **set** **contentOptions**(`options`): `void`

##### Parameters

###### options

[`BoxOptions`](../interfaces/BoxOptions.md)\<[`BoxRenderable`](BoxRenderable.md)\>

##### Returns

`void`

***

### ctx

#### Get Signature

> **get** **ctx**(): [`RenderContext`](../interfaces/RenderContext.md)

##### Returns

[`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`ctx`](BoxRenderable.md#ctx)

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`customBorderChars`](BoxRenderable.md#customborderchars)

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

[`BoxRenderable`](BoxRenderable.md).[`flexBasis`](BoxRenderable.md#flexbasis)

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

[`BoxRenderable`](BoxRenderable.md).[`flexDirection`](BoxRenderable.md#flexdirection)

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

[`BoxRenderable`](BoxRenderable.md).[`flexGrow`](BoxRenderable.md#flexgrow)

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

[`BoxRenderable`](BoxRenderable.md).[`flexShrink`](BoxRenderable.md#flexshrink)

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

[`BoxRenderable`](BoxRenderable.md).[`flexWrap`](BoxRenderable.md#flexwrap)

***

### focusable

#### Get Signature

> **get** **focusable**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`focusable`](BoxRenderable.md#focusable)

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`focused`](BoxRenderable.md#focused)

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`focusedBorderColor`](BoxRenderable.md#focusedbordercolor)

***

### gap

#### Set Signature

> **set** **gap**(`gap`): `void`

##### Parameters

###### gap

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`gap`](BoxRenderable.md#gap)

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

[`BoxRenderable`](BoxRenderable.md).[`height`](BoxRenderable.md#height)

***

### horizontalScrollbarOptions

#### Set Signature

> **set** **horizontalScrollbarOptions**(`options`): `void`

##### Parameters

###### options

`Omit`\<[`ScrollBarOptions`](../interfaces/ScrollBarOptions.md), `"orientation"`\>

##### Returns

`void`

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

[`BoxRenderable`](BoxRenderable.md).[`id`](BoxRenderable.md#id)

***

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`isDestroyed`](BoxRenderable.md#isdestroyed)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`isDirty`](BoxRenderable.md#isdirty)

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

[`BoxRenderable`](BoxRenderable.md).[`justifyContent`](BoxRenderable.md#justifycontent)

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

[`BoxRenderable`](BoxRenderable.md).[`left`](BoxRenderable.md#left)

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

[`BoxRenderable`](BoxRenderable.md).[`live`](BoxRenderable.md#live)

***

### liveCount

#### Get Signature

> **get** **liveCount**(): `number`

##### Returns

`number`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`liveCount`](BoxRenderable.md#livecount)

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

[`BoxRenderable`](BoxRenderable.md).[`margin`](BoxRenderable.md#margin)

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

[`BoxRenderable`](BoxRenderable.md).[`marginBottom`](BoxRenderable.md#marginbottom)

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

[`BoxRenderable`](BoxRenderable.md).[`marginLeft`](BoxRenderable.md#marginleft)

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

[`BoxRenderable`](BoxRenderable.md).[`marginRight`](BoxRenderable.md#marginright)

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

[`BoxRenderable`](BoxRenderable.md).[`marginTop`](BoxRenderable.md#margintop)

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

[`BoxRenderable`](BoxRenderable.md).[`maxHeight`](BoxRenderable.md#maxheight)

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

[`BoxRenderable`](BoxRenderable.md).[`maxWidth`](BoxRenderable.md#maxwidth)

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

[`BoxRenderable`](BoxRenderable.md).[`minHeight`](BoxRenderable.md#minheight)

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

[`BoxRenderable`](BoxRenderable.md).[`minWidth`](BoxRenderable.md#minwidth)

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

[`BoxRenderable`](BoxRenderable.md).[`onKeyDown`](BoxRenderable.md#onkeydown)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouse`](BoxRenderable.md#onmouse)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseDown`](BoxRenderable.md#onmousedown)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseDrag`](BoxRenderable.md#onmousedrag)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseDragEnd`](BoxRenderable.md#onmousedragend)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseDrop`](BoxRenderable.md#onmousedrop)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseMove`](BoxRenderable.md#onmousemove)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseOut`](BoxRenderable.md#onmouseout)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseOver`](BoxRenderable.md#onmouseover)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseScroll`](BoxRenderable.md#onmousescroll)

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

[`BoxRenderable`](BoxRenderable.md).[`onMouseUp`](BoxRenderable.md#onmouseup)

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

[`BoxRenderable`](BoxRenderable.md).[`onPaste`](BoxRenderable.md#onpaste)

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

[`BoxRenderable`](BoxRenderable.md).[`onSizeChange`](BoxRenderable.md#onsizechange)

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

[`BoxRenderable`](BoxRenderable.md).[`opacity`](BoxRenderable.md#opacity)

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

[`BoxRenderable`](BoxRenderable.md).[`overflow`](BoxRenderable.md#overflow)

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

[`BoxRenderable`](BoxRenderable.md).[`padding`](BoxRenderable.md#padding)

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

[`BoxRenderable`](BoxRenderable.md).[`paddingBottom`](BoxRenderable.md#paddingbottom)

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

[`BoxRenderable`](BoxRenderable.md).[`paddingLeft`](BoxRenderable.md#paddingleft)

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

[`BoxRenderable`](BoxRenderable.md).[`paddingRight`](BoxRenderable.md#paddingright)

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

[`BoxRenderable`](BoxRenderable.md).[`paddingTop`](BoxRenderable.md#paddingtop)

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

[`BoxRenderable`](BoxRenderable.md).[`position`](BoxRenderable.md#position)

***

### primaryAxis

#### Get Signature

> **get** **primaryAxis**(): `"column"` \| `"row"`

##### Returns

`"column"` \| `"row"`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`primaryAxis`](BoxRenderable.md#primaryaxis)

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

[`BoxRenderable`](BoxRenderable.md).[`right`](BoxRenderable.md#right)

***

### rootOptions

#### Set Signature

> **set** **rootOptions**(`options`): `void`

##### Parameters

###### options

[`BoxOptions`](../interfaces/BoxOptions.md)\<[`BoxRenderable`](BoxRenderable.md)\>

##### Returns

`void`

***

### rowGap

#### Set Signature

> **set** **rowGap**(`rowGap`): `void`

##### Parameters

###### rowGap

`number` | `` `${number}%` ``

##### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`rowGap`](BoxRenderable.md#rowgap)

***

### scrollAcceleration

#### Get Signature

> **get** **scrollAcceleration**(): [`ScrollAcceleration`](../interfaces/ScrollAcceleration.md)

##### Returns

[`ScrollAcceleration`](../interfaces/ScrollAcceleration.md)

#### Set Signature

> **set** **scrollAcceleration**(`value`): `void`

##### Parameters

###### value

[`ScrollAcceleration`](../interfaces/ScrollAcceleration.md)

##### Returns

`void`

***

### scrollbarOptions

#### Set Signature

> **set** **scrollbarOptions**(`options`): `void`

##### Parameters

###### options

`Omit`\<[`ScrollBarOptions`](../interfaces/ScrollBarOptions.md), `"orientation"`\>

##### Returns

`void`

***

### scrollHeight

#### Get Signature

> **get** **scrollHeight**(): `number`

Gets the total scrollable height of the content.

##### Returns

`number`

***

### scrollLeft

#### Get Signature

> **get** **scrollLeft**(): `number`

Gets the horizontal scroll position in pixels.

##### Returns

`number`

#### Set Signature

> **set** **scrollLeft**(`value`): `void`

Sets the horizontal scroll position in pixels.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### scrollTop

#### Get Signature

> **get** **scrollTop**(): `number`

Gets the vertical scroll position in pixels.

##### Returns

`number`

#### Set Signature

> **set** **scrollTop**(`value`): `void`

Sets the vertical scroll position in pixels.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### scrollWidth

#### Get Signature

> **get** **scrollWidth**(): `number`

Gets the total scrollable width of the content.

##### Returns

`number`

***

### stickyScroll

#### Get Signature

> **get** **stickyScroll**(): `boolean`

Gets whether sticky scroll is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **stickyScroll**(`value`): `void`

Sets whether sticky scroll is enabled.
When enabled, the scroll position automatically follows content changes
based on the [stickyStart](#stickystart) position.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### stickyStart

#### Get Signature

> **get** **stickyStart**(): `"top"` \| `"right"` \| `"bottom"` \| `"left"`

Gets the sticky scroll start position.

##### Returns

`"top"` \| `"right"` \| `"bottom"` \| `"left"`

#### Set Signature

> **set** **stickyStart**(`value`): `void`

Sets the sticky scroll start position.
Determines which edge to stick to when [stickyScroll](#stickyscroll) is enabled.

##### Parameters

###### value

`"top"` | `"right"` | `"bottom"` | `"left"`

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`title`](BoxRenderable.md#title)

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

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`titleAlignment`](BoxRenderable.md#titlealignment)

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

[`BoxRenderable`](BoxRenderable.md).[`top`](BoxRenderable.md#top)

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

[`BoxRenderable`](BoxRenderable.md).[`translateX`](BoxRenderable.md#translatex)

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

[`BoxRenderable`](BoxRenderable.md).[`translateY`](BoxRenderable.md#translatey)

***

### verticalScrollbarOptions

#### Set Signature

> **set** **verticalScrollbarOptions**(`options`): `void`

##### Parameters

###### options

`Omit`\<[`ScrollBarOptions`](../interfaces/ScrollBarOptions.md), `"orientation"`\>

##### Returns

`void`

***

### viewportCulling

#### Get Signature

> **get** **viewportCulling**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **viewportCulling**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### viewportOptions

#### Set Signature

> **set** **viewportOptions**(`options`): `void`

##### Parameters

###### options

[`BoxOptions`](../interfaces/BoxOptions.md)\<[`BoxRenderable`](BoxRenderable.md)\>

##### Returns

`void`

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

[`BoxRenderable`](BoxRenderable.md).[`visible`](BoxRenderable.md#visible)

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

[`BoxRenderable`](BoxRenderable.md).[`width`](BoxRenderable.md#width)

***

### wrapperOptions

#### Set Signature

> **set** **wrapperOptions**(`options`): `void`

##### Parameters

###### options

[`BoxOptions`](../interfaces/BoxOptions.md)\<[`BoxRenderable`](BoxRenderable.md)\>

##### Returns

`void`

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

[`BoxRenderable`](BoxRenderable.md).[`x`](BoxRenderable.md#x)

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

[`BoxRenderable`](BoxRenderable.md).[`y`](BoxRenderable.md#y)

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

[`BoxRenderable`](BoxRenderable.md).[`zIndex`](BoxRenderable.md#zindex)

## Methods

### \_getVisibleChildren()

> `protected` **\_getVisibleChildren**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`_getVisibleChildren`](BoxRenderable.md#_getvisiblechildren)

***

### add()

> **add**(`obj`, `index?`): `number`

#### Parameters

##### obj

[`Renderable`](Renderable.md) | [`VNode`](../interfaces/VNode.md)\<`any`, `any`[]\>

##### index?

`number`

#### Returns

`number`

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`add`](BoxRenderable.md#add)

***

### blur()

> **blur**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`blur`](BoxRenderable.md#blur)

***

### createFrameBuffer()

> `protected` **createFrameBuffer**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`createFrameBuffer`](BoxRenderable.md#createframebuffer)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`destroy`](BoxRenderable.md#destroy)

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`destroyRecursively`](BoxRenderable.md#destroyrecursively)

***

### destroySelf()

> `protected` **destroySelf**(): `void`

#### Returns

`void`

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`destroySelf`](BoxRenderable.md#destroyself)

***

### findDescendantById()

> **findDescendantById**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`findDescendantById`](BoxRenderable.md#finddescendantbyid)

***

### focus()

> **focus**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`focus`](BoxRenderable.md#focus)

***

### getChildren()

> **getChildren**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`getChildren`](BoxRenderable.md#getchildren)

***

### getChildrenCount()

> **getChildrenCount**(): `number`

#### Returns

`number`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`getChildrenCount`](BoxRenderable.md#getchildrencount)

***

### getChildrenSortedByPrimaryAxis()

> **getChildrenSortedByPrimaryAxis**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`getChildrenSortedByPrimaryAxis`](BoxRenderable.md#getchildrensortedbyprimaryaxis)

***

### getLayoutNode()

> **getLayoutNode**(): `YogaNode`

#### Returns

`YogaNode`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`getLayoutNode`](BoxRenderable.md#getlayoutnode)

***

### getRenderable()

> **getRenderable**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`getRenderable`](BoxRenderable.md#getrenderable)

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

[`BoxRenderable`](BoxRenderable.md).[`getScissorRect`](BoxRenderable.md#getscissorrect)

***

### getSelectedText()

> **getSelectedText**(): `string`

#### Returns

`string`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`getSelectedText`](BoxRenderable.md#getselectedtext)

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

[`BoxRenderable`](BoxRenderable.md).[`handleFrameBufferResize`](BoxRenderable.md#handleframebufferresize)

***

### handleKeyPress()

> **handleKeyPress**(`key`): `boolean`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`boolean`

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`handleKeyPress`](BoxRenderable.md#handlekeypress)

***

### handlePaste()?

> `optional` **handlePaste**(`event`): `void`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`handlePaste`](BoxRenderable.md#handlepaste)

***

### hasSelection()

> **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`hasSelection`](BoxRenderable.md#hasselection)

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

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`insertBefore`](BoxRenderable.md#insertbefore)

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`markClean`](BoxRenderable.md#markclean)

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`markDirty`](BoxRenderable.md#markdirty)

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

[`BoxRenderable`](BoxRenderable.md).[`onLayoutResize`](BoxRenderable.md#onlayoutresize)

***

### onMouseEvent()

> `protected` **onMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`onMouseEvent`](BoxRenderable.md#onmouseevent)

***

### onRemove()

> `protected` **onRemove**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`onRemove`](BoxRenderable.md#onremove)

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

[`BoxRenderable`](BoxRenderable.md).[`onResize`](BoxRenderable.md#onresize)

***

### onSelectionChanged()

> **onSelectionChanged**(`selection`): `boolean`

#### Parameters

##### selection

[`Selection`](Selection.md)

#### Returns

`boolean`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`onSelectionChanged`](BoxRenderable.md#onselectionchanged)

***

### onUpdate()

> `protected` **onUpdate**(`deltaTime`): `void`

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`onUpdate`](BoxRenderable.md#onupdate)

***

### processMouseEvent()

> **processMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`processMouseEvent`](BoxRenderable.md#processmouseevent)

***

### propagateLiveCount()

> `protected` **propagateLiveCount**(`delta`): `void`

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`propagateLiveCount`](BoxRenderable.md#propagatelivecount)

***

### remove()

> **remove**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Overrides

[`BoxRenderable`](BoxRenderable.md).[`remove`](BoxRenderable.md#remove)

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

[`BoxRenderable`](BoxRenderable.md).[`render`](BoxRenderable.md#render)

***

### renderSelf()

> `protected` **renderSelf**(`buffer`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`renderSelf`](BoxRenderable.md#renderself)

***

### requestRender()

> **requestRender**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`requestRender`](BoxRenderable.md#requestrender)

***

### scrollBy()

> **scrollBy**(`delta`, `unit`): `void`

Scrolls the content by a relative amount.

#### Parameters

##### delta

The amount to scroll (number for vertical, object for both axes)

`number` | \{ `x`: `number`; `y`: `number`; \}

##### unit

[`ScrollUnit`](../type-aliases/ScrollUnit.md) = `"absolute"`

The unit of measurement for the delta value

#### Returns

`void`

#### Example

```typescript
// Scroll down by 10 pixels
scrollBox.scrollBy(10);

// Scroll by half a viewport
scrollBox.scrollBy(0.5, "viewport");

// Scroll both axes
scrollBox.scrollBy({ x: 10, y: 20 });
```

***

### scrollTo()

> **scrollTo**(`position`): `void`

Scrolls to an absolute position.

#### Parameters

##### position

The position to scroll to (number for vertical, object for both axes)

`number` | \{ `x`: `number`; `y`: `number`; \}

#### Returns

`void`

#### Example

```typescript
// Scroll to top
scrollBox.scrollTo(0);

// Scroll to specific position
scrollBox.scrollTo({ x: 100, y: 200 });
```

***

### setPosition()

> **setPosition**(`position`): `void`

#### Parameters

##### position

[`Position`](../interfaces/Position.md)

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`setPosition`](BoxRenderable.md#setposition)

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

[`BoxRenderable`](BoxRenderable.md).[`shouldStartSelection`](BoxRenderable.md#shouldstartselection)

***

### startAutoScroll()

> **startAutoScroll**(`mouseX`, `mouseY`): `void`

#### Parameters

##### mouseX

`number`

##### mouseY

`number`

#### Returns

`void`

***

### stopAutoScroll()

> **stopAutoScroll**(): `void`

#### Returns

`void`

***

### updateAutoScroll()

> **updateAutoScroll**(`mouseX`, `mouseY`): `void`

#### Parameters

##### mouseX

`number`

##### mouseY

`number`

#### Returns

`void`

***

### updateFromLayout()

> **updateFromLayout**(): `void`

#### Returns

`void`

#### Inherited from

[`BoxRenderable`](BoxRenderable.md).[`updateFromLayout`](BoxRenderable.md#updatefromlayout)

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

[`BoxRenderable`](BoxRenderable.md).[`updateLayout`](BoxRenderable.md#updatelayout)
