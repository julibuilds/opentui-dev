[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / CodeRenderable

# Class: CodeRenderable

A renderable for displaying syntax-highlighted source code.

## Remarks

CodeRenderable extends [TextBufferRenderable](TextBufferRenderable.md) with Tree-sitter powered syntax highlighting.
Key features:

- Automatic syntax highlighting using Tree-sitter parsers
- Support for 40+ programming languages
- Customizable syntax themes via [SyntaxStyle](SyntaxStyle.md)
- Streaming mode for incremental content updates
- Optional concealment of syntax elements
- Fallback to plain text if filetype is unknown or highlighting fails

The highlighting process is asynchronous and non-blocking. Use `drawUnstyledText` to control
whether plain text is shown while highlighting is in progress.

## Examples

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

Streaming mode for real-time updates:
```typescript
const code = new CodeRenderable(ctx, {
  filetype: "python",
  syntaxStyle: theme,
  streaming: true,
  drawUnstyledText: true
});

// Update content incrementally
code.content = "def hello():";
code.content = "def hello():\n    return 'world'";
```

## Extends

- [`TextBufferRenderable`](TextBufferRenderable.md)

## Constructors

### Constructor

> **new CodeRenderable**(`ctx`, `options`): `CodeRenderable`

#### Parameters

##### ctx

[`RenderContext`](../interfaces/RenderContext.md)

##### options

[`CodeOptions`](../interfaces/CodeOptions.md)

#### Returns

`CodeRenderable`

#### Overrides

[`TextBufferRenderable`](TextBufferRenderable.md).[`constructor`](TextBufferRenderable.md#constructor)

## Properties

### \_childrenInLayoutOrder

> `protected` **\_childrenInLayoutOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_childrenInLayoutOrder`](TextBufferRenderable.md#_childreninlayoutorder)

***

### \_childrenInZIndexOrder

> `protected` **\_childrenInZIndexOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_childrenInZIndexOrder`](TextBufferRenderable.md#_childreninzindexorder)

***

### \_contentDefaultOptions

> `protected` **\_contentDefaultOptions**: `object`

#### conceal

> **conceal**: `true` = `true`

#### content

> **content**: `string` = `""`

#### drawUnstyledText

> **drawUnstyledText**: `true` = `true`

#### streaming

> **streaming**: `false` = `false`

***

### \_ctx

> `protected` **\_ctx**: [`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_ctx`](TextBufferRenderable.md#_ctx)

***

### \_defaultAttributes

> `protected` **\_defaultAttributes**: `number`

Default text attributes bitfield.

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_defaultAttributes`](TextBufferRenderable.md#_defaultattributes)

***

### \_defaultBg

> `protected` **\_defaultBg**: [`RGBA`](RGBA.md)

Default background color.

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_defaultBg`](TextBufferRenderable.md#_defaultbg)

***

### \_defaultFg

> `protected` **\_defaultFg**: [`RGBA`](RGBA.md)

Default foreground color for text.

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_defaultFg`](TextBufferRenderable.md#_defaultfg)

***

### \_defaultOptions

> `protected` **\_defaultOptions**: `object`

#### attributes

> **attributes**: `number` = `0`

#### bg

> **bg**: [`RGBA`](RGBA.md)

#### fg

> **fg**: [`RGBA`](RGBA.md)

#### selectable

> **selectable**: `true` = `true`

#### selectionBg

> **selectionBg**: `any` = `undefined`

#### selectionFg

> **selectionFg**: `any` = `undefined`

#### tabIndicator

> **tabIndicator**: `any` = `undefined`

#### tabIndicatorColor

> **tabIndicatorColor**: `any` = `undefined`

#### wrapMode

> **wrapMode**: `"none"` \| `"char"` \| `"word"`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_defaultOptions`](TextBufferRenderable.md#_defaultoptions)

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_dirty`](TextBufferRenderable.md#_dirty)

***

### \_focusable

> `protected` **\_focusable**: `boolean` = `false`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_focusable`](TextBufferRenderable.md#_focusable)

***

### \_focused

> `protected` **\_focused**: `boolean` = `false`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_focused`](TextBufferRenderable.md#_focused)

***

### \_height

> `protected` **\_height**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_height`](TextBufferRenderable.md#_height)

***

### \_heightValue

> `protected` **\_heightValue**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_heightValue`](TextBufferRenderable.md#_heightvalue)

***

### \_id

> `protected` **\_id**: `string`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_id`](TextBufferRenderable.md#_id)

***

### \_isDestroyed

> `protected` **\_isDestroyed**: `boolean` = `false`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_isDestroyed`](TextBufferRenderable.md#_isdestroyed)

***

### \_liveCount

> `protected` **\_liveCount**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_liveCount`](TextBufferRenderable.md#_livecount)

***

### \_opacity

> `protected` **\_opacity**: `number` = `1.0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_opacity`](TextBufferRenderable.md#_opacity)

***

### \_overflow

> `protected` **\_overflow**: [`OverflowString`](../type-aliases/OverflowString.md) = `"visible"`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_overflow`](TextBufferRenderable.md#_overflow)

***

### \_position

> `protected` **\_position**: [`Position`](../interfaces/Position.md) = `{}`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_position`](TextBufferRenderable.md#_position)

***

### \_positionType

> `protected` **\_positionType**: [`PositionTypeString`](../type-aliases/PositionTypeString.md) = `"relative"`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_positionType`](TextBufferRenderable.md#_positiontype)

***

### \_scrollX

> `protected` **\_scrollX**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_scrollX`](TextBufferRenderable.md#_scrollx)

***

### \_scrollY

> `protected` **\_scrollY**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_scrollY`](TextBufferRenderable.md#_scrolly)

***

### \_selectionBg

> `protected` **\_selectionBg**: [`RGBA`](RGBA.md)

Background color for selected text, or undefined for default.

#### Inherited from

[`TextRenderable`](TextRenderable.md).[`_selectionBg`](TextRenderable.md#_selectionbg)

***

### \_selectionFg

> `protected` **\_selectionFg**: [`RGBA`](RGBA.md)

Foreground color for selected text, or undefined to inherit.

#### Inherited from

[`TextRenderable`](TextRenderable.md).[`_selectionFg`](TextRenderable.md#_selectionfg)

***

### \_tabIndicator?

> `protected` `optional` **\_tabIndicator**: `string` \| `number`

Custom tab indicator (character or width).

#### Inherited from

[`TextRenderable`](TextRenderable.md).[`_tabIndicator`](TextRenderable.md#_tabindicator)

***

### \_tabIndicatorColor?

> `protected` `optional` **\_tabIndicatorColor**: [`RGBA`](RGBA.md)

Color for tab indicator.

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_tabIndicatorColor`](TextBufferRenderable.md#_tabindicatorcolor)

***

### \_translateX

> `protected` **\_translateX**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_translateX`](TextBufferRenderable.md#_translatex)

***

### \_translateY

> `protected` **\_translateY**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_translateY`](TextBufferRenderable.md#_translatey)

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_visible`](TextBufferRenderable.md#_visible)

***

### \_width

> `protected` **\_width**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_width`](TextBufferRenderable.md#_width)

***

### \_widthValue

> `protected` **\_widthValue**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_widthValue`](TextBufferRenderable.md#_widthvalue)

***

### \_wrapMode

> `protected` **\_wrapMode**: `"none"` \| `"char"` \| `"word"` = `"word"`

Current text wrapping mode.

#### Inherited from

[`TextRenderable`](TextRenderable.md).[`_wrapMode`](TextRenderable.md#_wrapmode)

***

### \_x

> `protected` **\_x**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_x`](TextBufferRenderable.md#_x)

***

### \_y

> `protected` **\_y**: `number` = `0`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_y`](TextBufferRenderable.md#_y)

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`[BrandedRenderable]`](TextBufferRenderable.md#brandedrenderable)

***

### buffered

> `protected` **buffered**: `boolean`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`buffered`](TextBufferRenderable.md#buffered)

***

### frameBuffer

> `protected` **frameBuffer**: [`OptimizedBuffer`](OptimizedBuffer.md) = `null`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`frameBuffer`](TextBufferRenderable.md#framebuffer)

***

### keypressHandler()

> `protected` **keypressHandler**: (`key`) => `void` = `null`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`keypressHandler`](TextBufferRenderable.md#keypresshandler)

***

### lastLocalSelection

> `protected` **lastLocalSelection**: [`LocalSelectionBounds`](../interfaces/LocalSelectionBounds.md) = `null`

Cached local selection bounds from last selection change.

#### Inherited from

[`TextRenderable`](TextRenderable.md).[`lastLocalSelection`](TextRenderable.md#lastlocalselection)

***

### num

> `readonly` **num**: `number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`num`](TextBufferRenderable.md#num)

***

### onLifecyclePass()

> **onLifecyclePass**: () => `void` = `null`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`onLifecyclePass`](TextBufferRenderable.md#onlifecyclepass)

***

### parent

> **parent**: [`Renderable`](Renderable.md) = `null`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`parent`](TextBufferRenderable.md#parent)

***

### pasteHandler()

> `protected` **pasteHandler**: (`event`) => `void` = `null`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`pasteHandler`](TextBufferRenderable.md#pastehandler)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`renderAfter`](TextBufferRenderable.md#renderafter)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`renderBefore`](TextBufferRenderable.md#renderbefore)

***

### selectable

> **selectable**: `boolean` = `true`

Whether this renderable can be selected.

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`selectable`](TextBufferRenderable.md#selectable)

***

### textBuffer

> `protected` **textBuffer**: [`TextBuffer`](TextBuffer.md)

The underlying text storage and styling system.

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`textBuffer`](TextBufferRenderable.md#textbuffer)

***

### textBufferView

> `protected` **textBufferView**: [`TextBufferView`](TextBufferView.md)

View layer that handles layout, wrapping, and viewport management.

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`textBufferView`](TextBufferRenderable.md#textbufferview)

***

### yogaNode

> `protected` **yogaNode**: `YogaNode`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`yogaNode`](TextBufferRenderable.md#yoganode)

***

### renderablesByNumber

> `static` **renderablesByNumber**: `Map`\<`number`, [`Renderable`](Renderable.md)\>

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`renderablesByNumber`](TextBufferRenderable.md#renderablesbynumber)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`alignItems`](TextBufferRenderable.md#alignitems)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`alignSelf`](TextBufferRenderable.md#alignself)

***

### attributes

#### Get Signature

> **get** **attributes**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **attributes**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`attributes`](TextBufferRenderable.md#attributes)

***

### bg

#### Get Signature

> **get** **bg**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **bg**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`bg`](TextBufferRenderable.md#bg)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`bottom`](TextBufferRenderable.md#bottom)

***

### conceal

#### Get Signature

> **get** **conceal**(): `boolean`

Whether syntax concealment (hiding/transforming elements) is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **conceal**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### content

#### Get Signature

> **get** **content**(): `string`

The source code content. Setting this triggers re-highlighting.

##### Returns

`string`

#### Set Signature

> **set** **content**(`value`): `void`

##### Parameters

###### value

`string`

##### Returns

`void`

***

### ctx

#### Get Signature

> **get** **ctx**(): [`RenderContext`](../interfaces/RenderContext.md)

##### Returns

[`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`ctx`](TextBufferRenderable.md#ctx)

***

### drawUnstyledText

#### Get Signature

> **get** **drawUnstyledText**(): `boolean`

Whether to show unstyled text before highlighting completes.

##### Remarks

When true, plain text is displayed immediately and replaced with highlighted version.
When false, nothing renders until highlighting finishes.

##### Returns

`boolean`

#### Set Signature

> **set** **drawUnstyledText**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### fg

#### Get Signature

> **get** **fg**(): [`RGBA`](RGBA.md)

Default foreground (text) color.

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **fg**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`fg`](TextBufferRenderable.md#fg)

***

### filetype

#### Get Signature

> **get** **filetype**(): `string`

The programming language for syntax highlighting (e.g., "typescript", "rust").

##### Returns

`string`

#### Set Signature

> **set** **filetype**(`value`): `void`

##### Parameters

###### value

`string`

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`flexBasis`](TextBufferRenderable.md#flexbasis)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`flexDirection`](TextBufferRenderable.md#flexdirection)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`flexGrow`](TextBufferRenderable.md#flexgrow)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`flexShrink`](TextBufferRenderable.md#flexshrink)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`flexWrap`](TextBufferRenderable.md#flexwrap)

***

### focusable

#### Get Signature

> **get** **focusable**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`focusable`](TextBufferRenderable.md#focusable)

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`focused`](TextBufferRenderable.md#focused)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`height`](TextBufferRenderable.md#height)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`id`](TextBufferRenderable.md#id)

***

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`isDestroyed`](TextBufferRenderable.md#isdestroyed)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`isDirty`](TextBufferRenderable.md#isdirty)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`justifyContent`](TextBufferRenderable.md#justifycontent)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`left`](TextBufferRenderable.md#left)

***

### lineCount

#### Get Signature

> **get** **lineCount**(): `number`

Total number of logical lines in the buffer.

##### Remarks

This is the count of newline-delimited lines, not visual lines after wrapping.

##### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`lineCount`](TextBufferRenderable.md#linecount)

***

### lineInfo

#### Get Signature

> **get** **lineInfo**(): [`LineInfo`](../interfaces/LineInfo.md)

Line layout information for this text buffer.

##### Remarks

Provides data about line starts, widths, and wrapping used by components like [LineNumberRenderable](LineNumberRenderable.md).

##### Returns

[`LineInfo`](../interfaces/LineInfo.md)

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`lineInfo`](TextBufferRenderable.md#lineinfo)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`live`](TextBufferRenderable.md#live)

***

### liveCount

#### Get Signature

> **get** **liveCount**(): `number`

##### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`liveCount`](TextBufferRenderable.md#livecount)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`margin`](TextBufferRenderable.md#margin)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`marginBottom`](TextBufferRenderable.md#marginbottom)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`marginLeft`](TextBufferRenderable.md#marginleft)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`marginRight`](TextBufferRenderable.md#marginright)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`marginTop`](TextBufferRenderable.md#margintop)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`maxHeight`](TextBufferRenderable.md#maxheight)

***

### maxScrollX

#### Get Signature

> **get** **maxScrollX**(): `number`

##### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`maxScrollX`](TextBufferRenderable.md#maxscrollx)

***

### maxScrollY

#### Get Signature

> **get** **maxScrollY**(): `number`

##### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`maxScrollY`](TextBufferRenderable.md#maxscrolly)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`maxWidth`](TextBufferRenderable.md#maxwidth)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`minHeight`](TextBufferRenderable.md#minheight)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`minWidth`](TextBufferRenderable.md#minwidth)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onKeyDown`](TextBufferRenderable.md#onkeydown)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouse`](TextBufferRenderable.md#onmouse)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseDown`](TextBufferRenderable.md#onmousedown)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseDrag`](TextBufferRenderable.md#onmousedrag)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseDragEnd`](TextBufferRenderable.md#onmousedragend)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseDrop`](TextBufferRenderable.md#onmousedrop)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseMove`](TextBufferRenderable.md#onmousemove)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseOut`](TextBufferRenderable.md#onmouseout)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseOver`](TextBufferRenderable.md#onmouseover)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseScroll`](TextBufferRenderable.md#onmousescroll)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseUp`](TextBufferRenderable.md#onmouseup)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onPaste`](TextBufferRenderable.md#onpaste)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onSizeChange`](TextBufferRenderable.md#onsizechange)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`opacity`](TextBufferRenderable.md#opacity)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`overflow`](TextBufferRenderable.md#overflow)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`padding`](TextBufferRenderable.md#padding)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`paddingBottom`](TextBufferRenderable.md#paddingbottom)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`paddingLeft`](TextBufferRenderable.md#paddingleft)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`paddingRight`](TextBufferRenderable.md#paddingright)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`paddingTop`](TextBufferRenderable.md#paddingtop)

***

### plainText

#### Get Signature

> **get** **plainText**(): `string`

The complete text content as a plain string without styling.

##### Returns

`string`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`plainText`](TextBufferRenderable.md#plaintext)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`position`](TextBufferRenderable.md#position)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`right`](TextBufferRenderable.md#right)

***

### scrollHeight

#### Get Signature

> **get** **scrollHeight**(): `number`

##### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`scrollHeight`](TextBufferRenderable.md#scrollheight)

***

### scrollWidth

#### Get Signature

> **get** **scrollWidth**(): `number`

##### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`scrollWidth`](TextBufferRenderable.md#scrollwidth)

***

### scrollX

#### Get Signature

> **get** **scrollX**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **scrollX**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`scrollX`](TextBufferRenderable.md#scrollx)

***

### scrollY

#### Get Signature

> **get** **scrollY**(): `number`

Current vertical scroll offset.

##### Remarks

Controls which line is at the top of the visible viewport.

##### Returns

`number`

#### Set Signature

> **set** **scrollY**(`value`): `void`

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`scrollY`](TextBufferRenderable.md#scrolly)

***

### selectionBg

#### Get Signature

> **get** **selectionBg**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **selectionBg**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`selectionBg`](TextBufferRenderable.md#selectionbg)

***

### selectionFg

#### Get Signature

> **get** **selectionFg**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **selectionFg**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`selectionFg`](TextBufferRenderable.md#selectionfg)

***

### streaming

#### Get Signature

> **get** **streaming**(): `boolean`

Whether streaming mode is enabled for incremental content updates.

##### Remarks

In streaming mode, partial highlighting uses cached results for better performance
when content changes frequently.

##### Returns

`boolean`

#### Set Signature

> **set** **streaming**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### syntaxStyle

#### Get Signature

> **get** **syntaxStyle**(): [`SyntaxStyle`](SyntaxStyle.md)

The syntax highlighting theme. Changing this triggers re-highlighting.

##### Returns

[`SyntaxStyle`](SyntaxStyle.md)

#### Set Signature

> **set** **syntaxStyle**(`value`): `void`

##### Parameters

###### value

[`SyntaxStyle`](SyntaxStyle.md)

##### Returns

`void`

***

### tabIndicator

#### Get Signature

> **get** **tabIndicator**(): `string` \| `number`

##### Returns

`string` \| `number`

#### Set Signature

> **set** **tabIndicator**(`value`): `void`

##### Parameters

###### value

`string` | `number`

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`tabIndicator`](TextBufferRenderable.md#tabindicator)

***

### tabIndicatorColor

#### Get Signature

> **get** **tabIndicatorColor**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **tabIndicatorColor**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`tabIndicatorColor`](TextBufferRenderable.md#tabindicatorcolor)

***

### textLength

#### Get Signature

> **get** **textLength**(): `number`

Total character length of the text buffer.

##### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`textLength`](TextBufferRenderable.md#textlength)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`top`](TextBufferRenderable.md#top)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`translateX`](TextBufferRenderable.md#translatex)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`translateY`](TextBufferRenderable.md#translatey)

***

### treeSitterClient

#### Get Signature

> **get** **treeSitterClient**(): [`TreeSitterClient`](TreeSitterClient.md)

The Tree-sitter client used for syntax highlighting.

##### Returns

[`TreeSitterClient`](TreeSitterClient.md)

#### Set Signature

> **set** **treeSitterClient**(`value`): `void`

##### Parameters

###### value

[`TreeSitterClient`](TreeSitterClient.md)

##### Returns

`void`

***

### virtualLineCount

#### Get Signature

> **get** **virtualLineCount**(): `number`

Total number of virtual (visual) lines after wrapping.

##### Remarks

This accounts for line wrapping and may be greater than [lineCount](TextBufferRenderable.md#linecount).

##### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`virtualLineCount`](TextBufferRenderable.md#virtuallinecount)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`visible`](TextBufferRenderable.md#visible)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`width`](TextBufferRenderable.md#width)

***

### wrapMode

#### Get Signature

> **get** **wrapMode**(): `"none"` \| `"char"` \| `"word"`

##### Returns

`"none"` \| `"char"` \| `"word"`

#### Set Signature

> **set** **wrapMode**(`value`): `void`

##### Parameters

###### value

`"none"` | `"char"` | `"word"`

##### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`wrapMode`](TextBufferRenderable.md#wrapmode)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`x`](TextBufferRenderable.md#x)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`y`](TextBufferRenderable.md#y)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`zIndex`](TextBufferRenderable.md#zindex)

## Methods

### \_getVisibleChildren()

> `protected` **\_getVisibleChildren**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`_getVisibleChildren`](TextBufferRenderable.md#_getvisiblechildren)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`add`](TextBufferRenderable.md#add)

***

### blur()

> **blur**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`blur`](TextBufferRenderable.md#blur)

***

### createFrameBuffer()

> `protected` **createFrameBuffer**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`createFrameBuffer`](TextBufferRenderable.md#createframebuffer)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`destroy`](TextBufferRenderable.md#destroy)

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`destroyRecursively`](TextBufferRenderable.md#destroyrecursively)

***

### destroySelf()

> `protected` **destroySelf**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`destroySelf`](TextBufferRenderable.md#destroyself)

***

### findDescendantById()

> **findDescendantById**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`findDescendantById`](TextBufferRenderable.md#finddescendantbyid)

***

### focus()

> **focus**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`focus`](TextBufferRenderable.md#focus)

***

### getChildren()

> **getChildren**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`getChildren`](TextBufferRenderable.md#getchildren)

***

### getChildrenCount()

> **getChildrenCount**(): `number`

#### Returns

`number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`getChildrenCount`](TextBufferRenderable.md#getchildrencount)

***

### getChildrenSortedByPrimaryAxis()

> **getChildrenSortedByPrimaryAxis**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`getChildrenSortedByPrimaryAxis`](TextBufferRenderable.md#getchildrensortedbyprimaryaxis)

***

### getLayoutNode()

> **getLayoutNode**(): `YogaNode`

#### Returns

`YogaNode`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`getLayoutNode`](TextBufferRenderable.md#getlayoutnode)

***

### getLineHighlights()

> **getLineHighlights**(`lineIdx`): [`Highlight`](../interfaces/Highlight.md)[]

Gets the syntax highlights for a specific line.

#### Parameters

##### lineIdx

`number`

The line index (0-based)

#### Returns

[`Highlight`](../interfaces/Highlight.md)[]

Array of highlight ranges for the line

***

### getRenderable()

> **getRenderable**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`getRenderable`](TextBufferRenderable.md#getrenderable)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`getScissorRect`](TextBufferRenderable.md#getscissorrect)

***

### getSelectedText()

> **getSelectedText**(): `string`

Gets the currently selected text as a plain string.

#### Returns

`string`

The selected text, or empty string if no selection

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`getSelectedText`](TextBufferRenderable.md#getselectedtext)

***

### getSelection()

> **getSelection**(): `object`

Gets the current selection range as character offsets.

#### Returns

`object`

Object with `start` and `end` offsets, or null if no selection

##### end

> **end**: `number`

##### start

> **start**: `number`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`getSelection`](TextBufferRenderable.md#getselection)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`handleFrameBufferResize`](TextBufferRenderable.md#handleframebufferresize)

***

### handleKeyPress()?

> `optional` **handleKeyPress**(`key`): `boolean`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`boolean`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`handleKeyPress`](TextBufferRenderable.md#handlekeypress)

***

### handlePaste()?

> `optional` **handlePaste**(`event`): `void`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`handlePaste`](TextBufferRenderable.md#handlepaste)

***

### handleScroll()

> `protected` **handleScroll**(`event`): `void`

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`handleScroll`](TextBufferRenderable.md#handlescroll)

***

### hasSelection()

> **hasSelection**(): `boolean`

Checks if any text is currently selected.

#### Returns

`boolean`

`true` if there is an active selection

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`hasSelection`](TextBufferRenderable.md#hasselection)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`insertBefore`](TextBufferRenderable.md#insertbefore)

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`markClean`](TextBufferRenderable.md#markclean)

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`markDirty`](TextBufferRenderable.md#markdirty)

***

### onAttributesChanged()

> `protected` **onAttributesChanged**(`newAttributes`): `void`

#### Parameters

##### newAttributes

`number`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`onAttributesChanged`](TextBufferRenderable.md#onattributeschanged)

***

### onBgChanged()

> `protected` **onBgChanged**(`newColor`): `void`

#### Parameters

##### newColor

[`RGBA`](RGBA.md)

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`onBgChanged`](TextBufferRenderable.md#onbgchanged)

***

### onFgChanged()

> `protected` **onFgChanged**(`newColor`): `void`

#### Parameters

##### newColor

[`RGBA`](RGBA.md)

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`onFgChanged`](TextBufferRenderable.md#onfgchanged)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onLayoutResize`](TextBufferRenderable.md#onlayoutresize)

***

### onMouseEvent()

> `protected` **onMouseEvent**(`event`): `void`

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`onMouseEvent`](TextBufferRenderable.md#onmouseevent)

***

### onRemove()

> `protected` **onRemove**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`onRemove`](TextBufferRenderable.md#onremove)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`onResize`](TextBufferRenderable.md#onresize)

***

### onSelectionChanged()

> **onSelectionChanged**(`selection`): `boolean`

**`Internal`**

Handles selection changes from the global selection system.

#### Parameters

##### selection

[`Selection`](Selection.md)

The new global selection state, or null to clear

#### Returns

`boolean`

`true` if this renderable has an active selection after the change

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`onSelectionChanged`](TextBufferRenderable.md#onselectionchanged)

***

### onUpdate()

> `protected` **onUpdate**(`deltaTime`): `void`

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`onUpdate`](TextBufferRenderable.md#onupdate)

***

### processMouseEvent()

> **processMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`processMouseEvent`](TextBufferRenderable.md#processmouseevent)

***

### propagateLiveCount()

> `protected` **propagateLiveCount**(`delta`): `void`

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`propagateLiveCount`](TextBufferRenderable.md#propagatelivecount)

***

### refreshLocalSelection()

> `protected` **refreshLocalSelection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`refreshLocalSelection`](TextBufferRenderable.md#refreshlocalselection)

***

### remove()

> **remove**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`remove`](TextBufferRenderable.md#remove)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`render`](TextBufferRenderable.md#render)

***

### renderSelf()

> `protected` **renderSelf**(`buffer`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`

#### Overrides

[`TextBufferRenderable`](TextBufferRenderable.md).[`renderSelf`](TextBufferRenderable.md#renderself)

***

### requestRender()

> **requestRender**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`requestRender`](TextBufferRenderable.md#requestrender)

***

### setPosition()

> **setPosition**(`position`): `void`

#### Parameters

##### position

[`Position`](../interfaces/Position.md)

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`setPosition`](TextBufferRenderable.md#setposition)

***

### shouldStartSelection()

> **shouldStartSelection**(`x`, `y`): `boolean`

**`Internal`**

Determines if a selection gesture should start at the given coordinates.

#### Parameters

##### x

`number`

Global X coordinate

##### y

`number`

Global Y coordinate

#### Returns

`boolean`

`true` if the coordinates are within this renderable's bounds and it's selectable

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`shouldStartSelection`](TextBufferRenderable.md#shouldstartselection)

***

### updateFromLayout()

> **updateFromLayout**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`updateFromLayout`](TextBufferRenderable.md#updatefromlayout)

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

[`TextBufferRenderable`](TextBufferRenderable.md).[`updateLayout`](TextBufferRenderable.md#updatelayout)

***

### updateTextInfo()

> `protected` **updateTextInfo**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`updateTextInfo`](TextBufferRenderable.md#updatetextinfo)

***

### updateViewportOffset()

> `protected` **updateViewportOffset**(): `void`

#### Returns

`void`

#### Inherited from

[`TextBufferRenderable`](TextBufferRenderable.md).[`updateViewportOffset`](TextBufferRenderable.md#updateviewportoffset)
