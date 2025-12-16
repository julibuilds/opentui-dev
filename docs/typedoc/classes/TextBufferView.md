[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / TextBufferView

# Class: TextBufferView

## Constructors

### Constructor

> **new TextBufferView**(`lib`, `ptr`, `textBuffer`): `TextBufferView`

#### Parameters

##### lib

[`RenderLib`](../interfaces/RenderLib.md)

##### ptr

`Pointer`

##### textBuffer

[`TextBuffer`](TextBuffer.md)

#### Returns

`TextBufferView`

## Accessors

### lineInfo

#### Get Signature

> **get** **lineInfo**(): [`LineInfo`](../interfaces/LineInfo.md)

##### Returns

[`LineInfo`](../interfaces/LineInfo.md)

***

### logicalLineInfo

#### Get Signature

> **get** **logicalLineInfo**(): [`LineInfo`](../interfaces/LineInfo.md)

##### Returns

[`LineInfo`](../interfaces/LineInfo.md)

***

### ptr

#### Get Signature

> **get** **ptr**(): `Pointer`

##### Returns

`Pointer`

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getPlainText()

> **getPlainText**(): `string`

#### Returns

`string`

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

### getVirtualLineCount()

> **getVirtualLineCount**(): `number`

#### Returns

`number`

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

### setViewport()

> **setViewport**(`x`, `y`, `width`, `height`): `void`

#### Parameters

##### x

`number`

##### y

`number`

##### width

`number`

##### height

`number`

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

### setWrapWidth()

> **setWrapWidth**(`width`): `void`

#### Parameters

##### width

`number`

#### Returns

`void`

***

### create()

> `static` **create**(`textBuffer`): `TextBufferView`

#### Parameters

##### textBuffer

[`TextBuffer`](TextBuffer.md)

#### Returns

`TextBufferView`
