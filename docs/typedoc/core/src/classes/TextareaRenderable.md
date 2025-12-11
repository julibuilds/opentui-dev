[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / TextareaRenderable

# Class: TextareaRenderable

A multi-line text input component with comprehensive editing capabilities.

## Remarks

TextareaRenderable extends EditBufferRenderable to provide a fully-featured
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

## Example

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

## Extends

- `EditBufferRenderable`

## Constructors

### Constructor

> **new TextareaRenderable**(`ctx`, `options`): `TextareaRenderable`

#### Parameters

##### ctx

[`RenderContext`](../interfaces/RenderContext.md)

##### options

[`TextareaOptions`](../interfaces/TextareaOptions.md)

#### Returns

`TextareaRenderable`

#### Overrides

`EditBufferRenderable.constructor`

## Properties

### \_backgroundColor

> `protected` **\_backgroundColor**: [`RGBA`](RGBA.md)

#### Inherited from

`EditBufferRenderable._backgroundColor`

***

### \_childrenInLayoutOrder

> `protected` **\_childrenInLayoutOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

`EditBufferRenderable._childrenInLayoutOrder`

***

### \_childrenInZIndexOrder

> `protected` **\_childrenInZIndexOrder**: [`Renderable`](Renderable.md)[] = `[]`

#### Inherited from

`EditBufferRenderable._childrenInZIndexOrder`

***

### \_ctx

> `protected` **\_ctx**: [`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

`EditBufferRenderable._ctx`

***

### \_cursorColor

> `protected` **\_cursorColor**: [`RGBA`](RGBA.md)

#### Inherited from

`EditBufferRenderable._cursorColor`

***

### \_cursorStyle

> `protected` **\_cursorStyle**: [`CursorStyleOptions`](../interfaces/CursorStyleOptions.md)

#### Inherited from

`EditBufferRenderable._cursorStyle`

***

### \_defaultAttributes

> `protected` **\_defaultAttributes**: `number`

#### Inherited from

`EditBufferRenderable._defaultAttributes`

***

### \_defaultOptions

> `protected` **\_defaultOptions**: `object`

#### attributes

> **attributes**: `number` = `0`

#### backgroundColor

> **backgroundColor**: `string` = `"transparent"`

#### cursorColor

> **cursorColor**: [`RGBA`](RGBA.md)

#### cursorStyle

> **cursorStyle**: `object`

##### cursorStyle.blinking

> **blinking**: `true` = `true`

##### cursorStyle.style

> **style**: `"block"` = `"block"`

#### scrollMargin

> **scrollMargin**: `number` = `0.2`

#### selectable

> **selectable**: `true` = `true`

#### selectionBg

> **selectionBg**: `any` = `undefined`

#### selectionFg

> **selectionFg**: `any` = `undefined`

#### showCursor

> **showCursor**: `true` = `true`

#### tabIndicator

> **tabIndicator**: `any` = `undefined`

#### tabIndicatorColor

> **tabIndicatorColor**: `any` = `undefined`

#### textColor

> **textColor**: [`RGBA`](RGBA.md)

#### wrapMode

> **wrapMode**: `"none"` \| `"char"` \| `"word"`

#### Inherited from

`EditBufferRenderable._defaultOptions`

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

`EditBufferRenderable._dirty`

***

### \_focusable

> `protected` **\_focusable**: `boolean` = `true`

Whether this renderable can receive keyboard focus.

#### Inherited from

`EditBufferRenderable._focusable`

***

### \_focused

> `protected` **\_focused**: `boolean` = `false`

#### Inherited from

`EditBufferRenderable._focused`

***

### \_height

> `protected` **\_height**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

`EditBufferRenderable._height`

***

### \_heightValue

> `protected` **\_heightValue**: `number` = `0`

#### Inherited from

`EditBufferRenderable._heightValue`

***

### \_id

> `protected` **\_id**: `string`

#### Inherited from

`EditBufferRenderable._id`

***

### \_isDestroyed

> `protected` **\_isDestroyed**: `boolean` = `false`

#### Inherited from

`EditBufferRenderable._isDestroyed`

***

### \_liveCount

> `protected` **\_liveCount**: `number` = `0`

#### Inherited from

`EditBufferRenderable._liveCount`

***

### \_opacity

> `protected` **\_opacity**: `number` = `1.0`

#### Inherited from

`EditBufferRenderable._opacity`

***

### \_overflow

> `protected` **\_overflow**: [`OverflowString`](../type-aliases/OverflowString.md) = `"visible"`

#### Inherited from

`EditBufferRenderable._overflow`

***

### \_position

> `protected` **\_position**: [`Position`](../interfaces/Position.md) = `{}`

#### Inherited from

`EditBufferRenderable._position`

***

### \_positionType

> `protected` **\_positionType**: [`PositionTypeString`](../type-aliases/PositionTypeString.md) = `"relative"`

#### Inherited from

`EditBufferRenderable._positionType`

***

### \_scrollMargin

> `protected` **\_scrollMargin**: `number` = `0.2`

Fraction of viewport height to maintain as margin when scrolling.

#### Inherited from

`EditBufferRenderable._scrollMargin`

***

### \_selectionBg

> `protected` **\_selectionBg**: [`RGBA`](RGBA.md)

#### Inherited from

`EditBufferRenderable._selectionBg`

***

### \_selectionFg

> `protected` **\_selectionFg**: [`RGBA`](RGBA.md)

#### Inherited from

`EditBufferRenderable._selectionFg`

***

### \_showCursor

> `protected` **\_showCursor**: `boolean` = `true`

#### Inherited from

`EditBufferRenderable._showCursor`

***

### \_tabIndicator?

> `protected` `optional` **\_tabIndicator**: `string` \| `number`

#### Inherited from

`EditBufferRenderable._tabIndicator`

***

### \_tabIndicatorColor?

> `protected` `optional` **\_tabIndicatorColor**: [`RGBA`](RGBA.md)

#### Inherited from

`EditBufferRenderable._tabIndicatorColor`

***

### \_textColor

> `protected` **\_textColor**: [`RGBA`](RGBA.md)

#### Inherited from

`EditBufferRenderable._textColor`

***

### \_translateX

> `protected` **\_translateX**: `number` = `0`

#### Inherited from

`EditBufferRenderable._translateX`

***

### \_translateY

> `protected` **\_translateY**: `number` = `0`

#### Inherited from

`EditBufferRenderable._translateY`

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

#### Inherited from

`EditBufferRenderable._visible`

***

### \_width

> `protected` **\_width**: `number` \| `"auto"` \| `` `${number}%` ``

#### Inherited from

`EditBufferRenderable._width`

***

### \_widthValue

> `protected` **\_widthValue**: `number` = `0`

#### Inherited from

`EditBufferRenderable._widthValue`

***

### \_wrapMode

> `protected` **\_wrapMode**: `"none"` \| `"char"` \| `"word"` = `"word"`

#### Inherited from

`EditBufferRenderable._wrapMode`

***

### \_x

> `protected` **\_x**: `number` = `0`

#### Inherited from

`EditBufferRenderable._x`

***

### \_y

> `protected` **\_y**: `number` = `0`

#### Inherited from

`EditBufferRenderable._y`

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

#### Inherited from

`EditBufferRenderable.[BrandedRenderable]`

***

### buffered

> `protected` **buffered**: `boolean`

#### Inherited from

`EditBufferRenderable.buffered`

***

### editBuffer

> `readonly` **editBuffer**: [`EditBuffer`](EditBuffer.md)

The underlying text buffer managing content and editing operations.

#### Inherited from

`EditBufferRenderable.editBuffer`

***

### editorView

> `readonly` **editorView**: [`EditorView`](EditorView.md)

The view layer managing layout, wrapping, and viewport.

#### Inherited from

`EditBufferRenderable.editorView`

***

### frameBuffer

> `protected` **frameBuffer**: [`OptimizedBuffer`](OptimizedBuffer.md) = `null`

#### Inherited from

`EditBufferRenderable.frameBuffer`

***

### keypressHandler()

> `protected` **keypressHandler**: (`key`) => `void` = `null`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.keypressHandler`

***

### lastLocalSelection

> `protected` **lastLocalSelection**: [`LocalSelectionBounds`](../interfaces/LocalSelectionBounds.md) = `null`

Cached local selection bounds.

#### Inherited from

`EditBufferRenderable.lastLocalSelection`

***

### num

> `readonly` **num**: `number`

#### Inherited from

`EditBufferRenderable.num`

***

### onLifecyclePass()

> **onLifecyclePass**: () => `void` = `null`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.onLifecyclePass`

***

### parent

> **parent**: [`Renderable`](Renderable.md) = `null`

#### Inherited from

`EditBufferRenderable.parent`

***

### pasteHandler()

> `protected` **pasteHandler**: (`event`) => `void` = `null`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.pasteHandler`

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

`EditBufferRenderable.renderAfter`

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

`EditBufferRenderable.renderBefore`

***

### selectable

> **selectable**: `boolean` = `true`

Whether text can be selected.

#### Inherited from

`EditBufferRenderable.selectable`

***

### yogaNode

> `protected` **yogaNode**: `YogaNode`

#### Inherited from

`EditBufferRenderable.yogaNode`

***

### renderablesByNumber

> `static` **renderablesByNumber**: `Map`\<`number`, [`Renderable`](Renderable.md)\>

#### Inherited from

`EditBufferRenderable.renderablesByNumber`

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

`EditBufferRenderable.alignItems`

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

`EditBufferRenderable.alignSelf`

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

`EditBufferRenderable.attributes`

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

#### Overrides

`EditBufferRenderable.backgroundColor`

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

`EditBufferRenderable.bottom`

***

### ctx

#### Get Signature

> **get** **ctx**(): [`RenderContext`](../interfaces/RenderContext.md)

##### Returns

[`RenderContext`](../interfaces/RenderContext.md)

#### Inherited from

`EditBufferRenderable.ctx`

***

### cursorColor

#### Get Signature

> **get** **cursorColor**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **cursorColor**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Inherited from

`EditBufferRenderable.cursorColor`

***

### cursorOffset

#### Get Signature

> **get** **cursorOffset**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **cursorOffset**(`offset`): `void`

##### Parameters

###### offset

`number`

##### Returns

`void`

#### Inherited from

`EditBufferRenderable.cursorOffset`

***

### cursorStyle

#### Get Signature

> **get** **cursorStyle**(): [`CursorStyleOptions`](../interfaces/CursorStyleOptions.md)

##### Returns

[`CursorStyleOptions`](../interfaces/CursorStyleOptions.md)

#### Set Signature

> **set** **cursorStyle**(`style`): `void`

##### Parameters

###### style

[`CursorStyleOptions`](../interfaces/CursorStyleOptions.md)

##### Returns

`void`

#### Inherited from

`EditBufferRenderable.cursorStyle`

***

### extmarks

#### Get Signature

> **get** **extmarks**(): [`ExtmarksController`](ExtmarksController.md)

##### Returns

[`ExtmarksController`](ExtmarksController.md)

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

`EditBufferRenderable.flexBasis`

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

`EditBufferRenderable.flexDirection`

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

`EditBufferRenderable.flexGrow`

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

`EditBufferRenderable.flexShrink`

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

`EditBufferRenderable.flexWrap`

***

### focusable

#### Get Signature

> **get** **focusable**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`EditBufferRenderable.focusable`

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`EditBufferRenderable.focused`

***

### focusedBackgroundColor

#### Set Signature

> **set** **focusedBackgroundColor**(`value`): `void`

##### Parameters

###### value

[`ColorInput`](../type-aliases/ColorInput.md)

##### Returns

`void`

***

### focusedTextColor

#### Set Signature

> **set** **focusedTextColor**(`value`): `void`

##### Parameters

###### value

[`ColorInput`](../type-aliases/ColorInput.md)

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

`EditBufferRenderable.height`

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

`EditBufferRenderable.id`

***

### initialValue

#### Set Signature

> **set** **initialValue**(`value`): `void`

##### Parameters

###### value

`string`

##### Returns

`void`

***

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`EditBufferRenderable.isDestroyed`

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`EditBufferRenderable.isDirty`

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

`EditBufferRenderable.justifyContent`

***

### keyAliasMap

#### Set Signature

> **set** **keyAliasMap**(`aliases`): `void`

##### Parameters

###### aliases

`KeyAliasMap`

##### Returns

`void`

***

### keyBindings

#### Set Signature

> **set** **keyBindings**(`bindings`): `void`

##### Parameters

###### bindings

[`KeyBinding`](../type-aliases/KeyBinding.md)[]

##### Returns

`void`

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

`EditBufferRenderable.left`

***

### lineCount

#### Get Signature

> **get** **lineCount**(): `number`

##### Returns

`number`

#### Inherited from

`EditBufferRenderable.lineCount`

***

### lineInfo

#### Get Signature

> **get** **lineInfo**(): [`LineInfo`](../interfaces/LineInfo.md)

##### Returns

[`LineInfo`](../interfaces/LineInfo.md)

#### Inherited from

`EditBufferRenderable.lineInfo`

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

`EditBufferRenderable.live`

***

### liveCount

#### Get Signature

> **get** **liveCount**(): `number`

##### Returns

`number`

#### Inherited from

`EditBufferRenderable.liveCount`

***

### logicalCursor

#### Get Signature

> **get** **logicalCursor**(): [`LogicalCursor`](../interfaces/LogicalCursor.md)

##### Returns

[`LogicalCursor`](../interfaces/LogicalCursor.md)

#### Inherited from

`EditBufferRenderable.logicalCursor`

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

`EditBufferRenderable.margin`

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

`EditBufferRenderable.marginBottom`

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

`EditBufferRenderable.marginLeft`

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

`EditBufferRenderable.marginRight`

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

`EditBufferRenderable.marginTop`

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

`EditBufferRenderable.maxHeight`

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

`EditBufferRenderable.maxWidth`

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

`EditBufferRenderable.minHeight`

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

`EditBufferRenderable.minWidth`

***

### onContentChange

#### Get Signature

> **get** **onContentChange**(): (`event`) => `void`

##### Returns

> (`event`): `void`

###### Parameters

###### event

`ContentChangeEvent`

###### Returns

`void`

#### Set Signature

> **set** **onContentChange**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

`EditBufferRenderable.onContentChange`

***

### onCursorChange

#### Get Signature

> **get** **onCursorChange**(): (`event`) => `void`

##### Returns

> (`event`): `void`

###### Parameters

###### event

`CursorChangeEvent`

###### Returns

`void`

#### Set Signature

> **set** **onCursorChange**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

#### Inherited from

`EditBufferRenderable.onCursorChange`

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

`EditBufferRenderable.onKeyDown`

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

`EditBufferRenderable.onMouse`

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

`EditBufferRenderable.onMouseDown`

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

`EditBufferRenderable.onMouseDrag`

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

`EditBufferRenderable.onMouseDragEnd`

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

`EditBufferRenderable.onMouseDrop`

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

`EditBufferRenderable.onMouseMove`

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

`EditBufferRenderable.onMouseOut`

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

`EditBufferRenderable.onMouseOver`

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

`EditBufferRenderable.onMouseScroll`

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

`EditBufferRenderable.onMouseUp`

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

`EditBufferRenderable.onPaste`

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

`EditBufferRenderable.onSizeChange`

***

### onSubmit

#### Get Signature

> **get** **onSubmit**(): (`event`) => `void`

##### Returns

> (`event`): `void`

###### Parameters

###### event

[`SubmitEvent`](../interfaces/SubmitEvent.md)

###### Returns

`void`

#### Set Signature

> **set** **onSubmit**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

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

`EditBufferRenderable.opacity`

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

`EditBufferRenderable.overflow`

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

`EditBufferRenderable.padding`

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

`EditBufferRenderable.paddingBottom`

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

`EditBufferRenderable.paddingLeft`

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

`EditBufferRenderable.paddingRight`

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

`EditBufferRenderable.paddingTop`

***

### placeholder

#### Get Signature

> **get** **placeholder**(): `string` \| [`StyledText`](StyledText.md)

##### Returns

`string` \| [`StyledText`](StyledText.md)

#### Set Signature

> **set** **placeholder**(`value`): `void`

##### Parameters

###### value

`string` | [`StyledText`](StyledText.md)

##### Returns

`void`

***

### plainText

#### Get Signature

> **get** **plainText**(): `string`

##### Returns

`string`

#### Inherited from

`EditBufferRenderable.plainText`

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

`EditBufferRenderable.position`

***

### primaryAxis

#### Get Signature

> **get** **primaryAxis**(): `"column"` \| `"row"`

##### Returns

`"column"` \| `"row"`

#### Inherited from

`EditBufferRenderable.primaryAxis`

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

`EditBufferRenderable.right`

***

### scrollY

#### Get Signature

> **get** **scrollY**(): `number`

##### Returns

`number`

#### Inherited from

`EditBufferRenderable.scrollY`

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

`EditBufferRenderable.selectionBg`

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

`EditBufferRenderable.selectionFg`

***

### showCursor

#### Get Signature

> **get** **showCursor**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **showCursor**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`EditBufferRenderable.showCursor`

***

### syntaxStyle

#### Get Signature

> **get** **syntaxStyle**(): [`SyntaxStyle`](SyntaxStyle.md)

##### Returns

[`SyntaxStyle`](SyntaxStyle.md)

#### Set Signature

> **set** **syntaxStyle**(`style`): `void`

##### Parameters

###### style

[`SyntaxStyle`](SyntaxStyle.md)

##### Returns

`void`

#### Inherited from

`EditBufferRenderable.syntaxStyle`

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

`EditBufferRenderable.tabIndicator`

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

`EditBufferRenderable.tabIndicatorColor`

***

### textColor

#### Get Signature

> **get** **textColor**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **textColor**(`value`): `void`

##### Parameters

###### value

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Overrides

`EditBufferRenderable.textColor`

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

`EditBufferRenderable.top`

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

`EditBufferRenderable.translateX`

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

`EditBufferRenderable.translateY`

***

### virtualLineCount

#### Get Signature

> **get** **virtualLineCount**(): `number`

##### Returns

`number`

#### Inherited from

`EditBufferRenderable.virtualLineCount`

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

`EditBufferRenderable.visible`

***

### visualCursor

#### Get Signature

> **get** **visualCursor**(): [`VisualCursor`](../interfaces/VisualCursor.md)

##### Returns

[`VisualCursor`](../interfaces/VisualCursor.md)

#### Inherited from

`EditBufferRenderable.visualCursor`

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

`EditBufferRenderable.width`

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

`EditBufferRenderable.wrapMode`

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

`EditBufferRenderable.x`

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

`EditBufferRenderable.y`

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

`EditBufferRenderable.zIndex`

## Methods

### \_getVisibleChildren()

> `protected` **\_getVisibleChildren**(): `number`[]

#### Returns

`number`[]

#### Inherited from

`EditBufferRenderable._getVisibleChildren`

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

`EditBufferRenderable.add`

***

### addHighlight()

> **addHighlight**(`lineIdx`, `highlight`): `void`

#### Parameters

##### lineIdx

`number`

##### highlight

[`Highlight`](../interfaces/Highlight.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.addHighlight`

***

### addHighlightByCharRange()

> **addHighlightByCharRange**(`highlight`): `void`

#### Parameters

##### highlight

[`Highlight`](../interfaces/Highlight.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.addHighlightByCharRange`

***

### blur()

> **blur**(): `void`

#### Returns

`void`

#### Overrides

`EditBufferRenderable.blur`

***

### clear()

> **clear**(): `void`

Clears all text content and highlights.

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.clear`

***

### clearAllHighlights()

> **clearAllHighlights**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.clearAllHighlights`

***

### clearLineHighlights()

> **clearLineHighlights**(`lineIdx`): `void`

#### Parameters

##### lineIdx

`number`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.clearLineHighlights`

***

### createFrameBuffer()

> `protected` **createFrameBuffer**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.createFrameBuffer`

***

### deleteChar()

> **deleteChar**(): `boolean`

#### Returns

`boolean`

***

### deleteCharBackward()

> **deleteCharBackward**(): `boolean`

#### Returns

`boolean`

***

### deleteLine()

> **deleteLine**(): `boolean`

#### Returns

`boolean`

***

### deleteRange()

> **deleteRange**(`startLine`, `startCol`, `endLine`, `endCol`): `void`

Deletes a range of text specified by line and column coordinates.

#### Parameters

##### startLine

`number`

Starting line (0-based)

##### startCol

`number`

Starting column (0-based)

##### endLine

`number`

Ending line (0-based)

##### endCol

`number`

Ending column (0-based)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.deleteRange`

***

### deleteToLineEnd()

> **deleteToLineEnd**(): `boolean`

#### Returns

`boolean`

***

### deleteToLineStart()

> **deleteToLineStart**(): `boolean`

#### Returns

`boolean`

***

### deleteWordBackward()

> **deleteWordBackward**(): `boolean`

#### Returns

`boolean`

***

### deleteWordForward()

> **deleteWordForward**(): `boolean`

#### Returns

`boolean`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.destroy`

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.destroyRecursively`

***

### destroySelf()

> `protected` **destroySelf**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.destroySelf`

***

### findDescendantById()

> **findDescendantById**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

`EditBufferRenderable.findDescendantById`

***

### focus()

> **focus**(): `void`

#### Returns

`void`

#### Overrides

`EditBufferRenderable.focus`

***

### getChildren()

> **getChildren**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

`EditBufferRenderable.getChildren`

***

### getChildrenCount()

> **getChildrenCount**(): `number`

#### Returns

`number`

#### Inherited from

`EditBufferRenderable.getChildrenCount`

***

### getChildrenSortedByPrimaryAxis()

> **getChildrenSortedByPrimaryAxis**(): [`Renderable`](Renderable.md)[]

#### Returns

[`Renderable`](Renderable.md)[]

#### Inherited from

`EditBufferRenderable.getChildrenSortedByPrimaryAxis`

***

### getLayoutNode()

> **getLayoutNode**(): `YogaNode`

#### Returns

`YogaNode`

#### Inherited from

`EditBufferRenderable.getLayoutNode`

***

### getLineHighlights()

> **getLineHighlights**(`lineIdx`): [`Highlight`](../interfaces/Highlight.md)[]

#### Parameters

##### lineIdx

`number`

#### Returns

[`Highlight`](../interfaces/Highlight.md)[]

#### Inherited from

`EditBufferRenderable.getLineHighlights`

***

### getRenderable()

> **getRenderable**(`id`): [`Renderable`](Renderable.md)

#### Parameters

##### id

`string`

#### Returns

[`Renderable`](Renderable.md)

#### Inherited from

`EditBufferRenderable.getRenderable`

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

`EditBufferRenderable.getScissorRect`

***

### getSelectedText()

> **getSelectedText**(): `string`

#### Returns

`string`

#### Inherited from

`EditBufferRenderable.getSelectedText`

***

### getSelection()

> **getSelection**(): `object`

#### Returns

`object`

##### end

> **end**: `number`

##### start

> **start**: `number`

#### Inherited from

`EditBufferRenderable.getSelection`

***

### getTextRange()

> **getTextRange**(`startOffset`, `endOffset`): `string`

Gets a substring of the text by character offsets.

#### Parameters

##### startOffset

`number`

Starting character offset (0-based)

##### endOffset

`number`

Ending character offset (0-based, exclusive)

#### Returns

`string`

The substring

#### Inherited from

`EditBufferRenderable.getTextRange`

***

### getTextRangeByCoords()

> **getTextRangeByCoords**(`startRow`, `startCol`, `endRow`, `endCol`): `string`

Gets a substring of the text by line and column coordinates.

#### Parameters

##### startRow

`number`

Starting line (0-based)

##### startCol

`number`

Starting column (0-based)

##### endRow

`number`

Ending line (0-based)

##### endCol

`number`

Ending column (0-based)

#### Returns

`string`

The substring

#### Inherited from

`EditBufferRenderable.getTextRangeByCoords`

***

### gotoBufferEnd()

> **gotoBufferEnd**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### gotoBufferHome()

> **gotoBufferHome**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### gotoLine()

> **gotoLine**(`line`): `void`

#### Parameters

##### line

`number`

#### Returns

`void`

***

### gotoLineEnd()

> **gotoLineEnd**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### gotoLineHome()

> **gotoLineHome**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### gotoVisualLineEnd()

> **gotoVisualLineEnd**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### gotoVisualLineHome()

> **gotoVisualLineHome**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

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

`EditBufferRenderable.handleFrameBufferResize`

***

### handleKeyPress()

> **handleKeyPress**(`key`): `boolean`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`boolean`

#### Overrides

`EditBufferRenderable.handleKeyPress`

***

### handlePaste()

> **handlePaste**(`event`): `void`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

#### Overrides

`EditBufferRenderable.handlePaste`

***

### hasSelection()

> **hasSelection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`EditBufferRenderable.hasSelection`

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

`EditBufferRenderable.insertBefore`

***

### insertChar()

> **insertChar**(`char`): `void`

#### Parameters

##### char

`string`

#### Returns

`void`

***

### insertText()

> **insertText**(`text`): `void`

Inserts text at the current cursor position.

#### Parameters

##### text

`string`

The text to insert

#### Returns

`void`

#### Overrides

`EditBufferRenderable.insertText`

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.markClean`

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.markDirty`

***

### moveCursorDown()

> **moveCursorDown**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### moveCursorLeft()

> **moveCursorLeft**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### moveCursorRight()

> **moveCursorRight**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### moveCursorUp()

> **moveCursorUp**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### moveWordBackward()

> **moveWordBackward**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### moveWordForward()

> **moveWordForward**(`options?`): `boolean`

#### Parameters

##### options?

###### select?

`boolean`

#### Returns

`boolean`

***

### newLine()

> **newLine**(): `boolean`

#### Returns

`boolean`

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

`EditBufferRenderable.onLayoutResize`

***

### onMouseEvent()

> `protected` **onMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.onMouseEvent`

***

### onRemove()

> `protected` **onRemove**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.onRemove`

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

`EditBufferRenderable.onResize`

***

### onSelectionChanged()

> **onSelectionChanged**(`selection`): `boolean`

#### Parameters

##### selection

[`Selection`](Selection.md)

#### Returns

`boolean`

#### Inherited from

`EditBufferRenderable.onSelectionChanged`

***

### onUpdate()

> `protected` **onUpdate**(`deltaTime`): `void`

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.onUpdate`

***

### processMouseEvent()

> **processMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.processMouseEvent`

***

### propagateLiveCount()

> `protected` **propagateLiveCount**(`delta`): `void`

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.propagateLiveCount`

***

### redo()

> **redo**(): `boolean`

#### Returns

`boolean`

***

### refreshLocalSelection()

> `protected` **refreshLocalSelection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`EditBufferRenderable.refreshLocalSelection`

***

### remove()

> **remove**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.remove`

***

### removeHighlightsByRef()

> **removeHighlightsByRef**(`hlRef`): `void`

#### Parameters

##### hlRef

`number`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.removeHighlightsByRef`

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

`EditBufferRenderable.render`

***

### renderCursor()

> `protected` **renderCursor**(`buffer`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.renderCursor`

***

### renderSelf()

> `protected` **renderSelf**(`buffer`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.renderSelf`

***

### replaceText()

> **replaceText**(`text`): `void`

Replaces text while preserving undo history.

#### Parameters

##### text

`string`

The new text content

#### Returns

`void`

#### Remarks

This method creates an undo point, allowing the operation to be undone.
Use this when you want the text replacement to be undoable.
For a complete reset without history, use [setText](#settext) instead.

#### Inherited from

`EditBufferRenderable.replaceText`

***

### requestRender()

> **requestRender**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.requestRender`

***

### setPosition()

> **setPosition**(`position`): `void`

#### Parameters

##### position

[`Position`](../interfaces/Position.md)

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.setPosition`

***

### setText()

> **setText**(`text`): `void`

Sets the entire text content and resets buffer state.

#### Parameters

##### text

`string`

The new text content

#### Returns

`void`

#### Remarks

This method clears the undo history and resets the add_buffer.
Use this for initial text setting or when you want a clean slate.
For undoable text replacement, use [replaceText](#replacetext) instead.

#### Inherited from

`EditBufferRenderable.setText`

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

`EditBufferRenderable.shouldStartSelection`

***

### submit()

> **submit**(): `boolean`

#### Returns

`boolean`

***

### undo()

> **undo**(): `boolean`

#### Returns

`boolean`

***

### updateFromLayout()

> **updateFromLayout**(): `void`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.updateFromLayout`

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

`EditBufferRenderable.updateLayout`

***

### updateSelectionForMovement()

> `protected` **updateSelectionForMovement**(`shiftPressed`, `isBeforeMovement`): `void`

#### Parameters

##### shiftPressed

`boolean`

##### isBeforeMovement

`boolean`

#### Returns

`void`

#### Inherited from

`EditBufferRenderable.updateSelectionForMovement`
