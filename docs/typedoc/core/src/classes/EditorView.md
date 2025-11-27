[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / EditorView

# Class: EditorView

## Constructors

### Constructor

> **new EditorView**(`lib`, `ptr`, `editBuffer`): `EditorView`

#### Parameters

##### lib

[`RenderLib`](../interfaces/RenderLib.md)

##### ptr

`Pointer`

##### editBuffer

[`EditBuffer`](EditBuffer.md)

#### Returns

`EditorView`

## Accessors

### extmarks

#### Get Signature

> **get** **extmarks**(): `any`

##### Returns

`any`

***

### ptr

#### Get Signature

> **get** **ptr**(): `Pointer`

##### Returns

`Pointer`

## Methods

### deleteSelectedText()

> **deleteSelectedText**(): `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getCursor()

> **getCursor**(): `object`

#### Returns

`object`

##### col

> **col**: `number`

##### row

> **row**: `number`

***

### getEOL()

> **getEOL**(): [`VisualCursor`](../interfaces/VisualCursor.md)

#### Returns

[`VisualCursor`](../interfaces/VisualCursor.md)

***

### getLineInfo()

> **getLineInfo**(): [`LineInfo`](../interfaces/LineInfo.md)

#### Returns

[`LineInfo`](../interfaces/LineInfo.md)

***

### getLogicalLineInfo()

> **getLogicalLineInfo**(): [`LineInfo`](../interfaces/LineInfo.md)

#### Returns

[`LineInfo`](../interfaces/LineInfo.md)

***

### getNextWordBoundary()

> **getNextWordBoundary**(): [`VisualCursor`](../interfaces/VisualCursor.md)

#### Returns

[`VisualCursor`](../interfaces/VisualCursor.md)

***

### getPrevWordBoundary()

> **getPrevWordBoundary**(): [`VisualCursor`](../interfaces/VisualCursor.md)

#### Returns

[`VisualCursor`](../interfaces/VisualCursor.md)

***

### getSelectedText()

> **getSelectedText**(): `string`

#### Returns

`string`

***

### getSelection()

> **getSelection**(): `object`

#### Returns

`object`

##### end

> **end**: `number`

##### start

> **start**: `number`

***

### getText()

> **getText**(): `string`

#### Returns

`string`

***

### getTotalVirtualLineCount()

> **getTotalVirtualLineCount**(): `number`

#### Returns

`number`

***

### getViewport()

> **getViewport**(): [`Viewport`](../interfaces/Viewport.md)

#### Returns

[`Viewport`](../interfaces/Viewport.md)

***

### getVirtualLineCount()

> **getVirtualLineCount**(): `number`

#### Returns

`number`

***

### getVisualCursor()

> **getVisualCursor**(): [`VisualCursor`](../interfaces/VisualCursor.md)

#### Returns

[`VisualCursor`](../interfaces/VisualCursor.md)

***

### hasSelection()

> **hasSelection**(): `boolean`

#### Returns

`boolean`

***

### measureForDimensions()

> **measureForDimensions**(`width`, `height`): `object`

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`object`

##### lineCount

> **lineCount**: `number`

##### maxWidth

> **maxWidth**: `number`

***

### moveDownVisual()

> **moveDownVisual**(): `void`

#### Returns

`void`

***

### moveUpVisual()

> **moveUpVisual**(): `void`

#### Returns

`void`

***

### resetLocalSelection()

> **resetLocalSelection**(): `void`

#### Returns

`void`

***

### resetSelection()

> **resetSelection**(): `void`

#### Returns

`void`

***

### setCursorByOffset()

> **setCursorByOffset**(`offset`): `void`

#### Parameters

##### offset

`number`

#### Returns

`void`

***

### setLocalSelection()

> **setLocalSelection**(`anchorX`, `anchorY`, `focusX`, `focusY`, `bgColor?`, `fgColor?`): `boolean`

#### Parameters

##### anchorX

`number`

##### anchorY

`number`

##### focusX

`number`

##### focusY

`number`

##### bgColor?

[`RGBA`](RGBA.md)

##### fgColor?

[`RGBA`](RGBA.md)

#### Returns

`boolean`

***

### setPlaceholderStyledText()

> **setPlaceholderStyledText**(`chunks`): `void`

#### Parameters

##### chunks

`object`[]

#### Returns

`void`

***

### setScrollMargin()

> **setScrollMargin**(`margin`): `void`

#### Parameters

##### margin

`number`

#### Returns

`void`

***

### setSelection()

> **setSelection**(`start`, `end`, `bgColor?`, `fgColor?`): `void`

#### Parameters

##### start

`number`

##### end

`number`

##### bgColor?

[`RGBA`](RGBA.md)

##### fgColor?

[`RGBA`](RGBA.md)

#### Returns

`void`

***

### setTabIndicator()

> **setTabIndicator**(`indicator`): `void`

#### Parameters

##### indicator

`string` | `number`

#### Returns

`void`

***

### setTabIndicatorColor()

> **setTabIndicatorColor**(`color`): `void`

#### Parameters

##### color

[`RGBA`](RGBA.md)

#### Returns

`void`

***

### setViewportSize()

> **setViewportSize**(`width`, `height`): `void`

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### setWrapMode()

> **setWrapMode**(`mode`): `void`

#### Parameters

##### mode

`"none"` | `"char"` | `"word"`

#### Returns

`void`

***

### create()

> `static` **create**(`editBuffer`, `viewportWidth`, `viewportHeight`): `EditorView`

#### Parameters

##### editBuffer

[`EditBuffer`](EditBuffer.md)

##### viewportWidth

`number`

##### viewportHeight

`number`

#### Returns

`EditorView`
