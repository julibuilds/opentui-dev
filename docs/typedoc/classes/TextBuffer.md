[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / TextBuffer

# Class: TextBuffer

## Constructors

### Constructor

> **new TextBuffer**(`lib`, `ptr`): `TextBuffer`

#### Parameters

##### lib

[`RenderLib`](../interfaces/RenderLib.md)

##### ptr

`Pointer`

#### Returns

`TextBuffer`

## Accessors

### byteSize

#### Get Signature

> **get** **byteSize**(): `number`

##### Returns

`number`

***

### length

#### Get Signature

> **get** **length**(): `number`

##### Returns

`number`

***

### ptr

#### Get Signature

> **get** **ptr**(): `Pointer`

##### Returns

`Pointer`

## Methods

### addHighlight()

> **addHighlight**(`lineIdx`, `highlight`): `void`

Add a highlight to a specific line by column positions.
start/end in highlight represent column offsets.

#### Parameters

##### lineIdx

`number`

##### highlight

[`Highlight`](../interfaces/Highlight.md)

#### Returns

`void`

***

### addHighlightByCharRange()

> **addHighlightByCharRange**(`highlight`): `void`

Add a highlight using character offsets into the full text.
start/end in highlight represent absolute character positions.

#### Parameters

##### highlight

[`Highlight`](../interfaces/Highlight.md)

#### Returns

`void`

***

### append()

> **append**(`text`): `void`

#### Parameters

##### text

`string`

#### Returns

`void`

***

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### clearAllHighlights()

> **clearAllHighlights**(): `void`

#### Returns

`void`

***

### clearLineHighlights()

> **clearLineHighlights**(`lineIdx`): `void`

#### Parameters

##### lineIdx

`number`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getHighlightCount()

> **getHighlightCount**(): `number`

#### Returns

`number`

***

### getLineCount()

> **getLineCount**(): `number`

#### Returns

`number`

***

### getLineHighlights()

> **getLineHighlights**(`lineIdx`): [`Highlight`](../interfaces/Highlight.md)[]

#### Parameters

##### lineIdx

`number`

#### Returns

[`Highlight`](../interfaces/Highlight.md)[]

***

### getPlainText()

> **getPlainText**(): `string`

#### Returns

`string`

***

### getSyntaxStyle()

> **getSyntaxStyle**(): [`SyntaxStyle`](SyntaxStyle.md)

#### Returns

[`SyntaxStyle`](SyntaxStyle.md)

***

### getTabWidth()

> **getTabWidth**(): `number`

#### Returns

`number`

***

### getTextRange()

> **getTextRange**(`startOffset`, `endOffset`): `string`

#### Parameters

##### startOffset

`number`

##### endOffset

`number`

#### Returns

`string`

***

### loadFile()

> **loadFile**(`path`): `void`

#### Parameters

##### path

`string`

#### Returns

`void`

***

### removeHighlightsByRef()

> **removeHighlightsByRef**(`hlRef`): `void`

#### Parameters

##### hlRef

`number`

#### Returns

`void`

***

### reset()

> **reset**(): `void`

#### Returns

`void`

***

### resetDefaults()

> **resetDefaults**(): `void`

#### Returns

`void`

***

### setDefaultAttributes()

> **setDefaultAttributes**(`attributes`): `void`

#### Parameters

##### attributes

`number`

#### Returns

`void`

***

### setDefaultBg()

> **setDefaultBg**(`bg`): `void`

#### Parameters

##### bg

[`RGBA`](RGBA.md)

#### Returns

`void`

***

### setDefaultFg()

> **setDefaultFg**(`fg`): `void`

#### Parameters

##### fg

[`RGBA`](RGBA.md)

#### Returns

`void`

***

### setStyledText()

> **setStyledText**(`text`): `void`

#### Parameters

##### text

[`StyledText`](StyledText.md)

#### Returns

`void`

***

### setSyntaxStyle()

> **setSyntaxStyle**(`style`): `void`

#### Parameters

##### style

[`SyntaxStyle`](SyntaxStyle.md)

#### Returns

`void`

***

### setTabWidth()

> **setTabWidth**(`width`): `void`

#### Parameters

##### width

`number`

#### Returns

`void`

***

### setText()

> **setText**(`text`): `void`

#### Parameters

##### text

`string`

#### Returns

`void`

***

### create()

> `static` **create**(`widthMethod`): `TextBuffer`

#### Parameters

##### widthMethod

[`WidthMethod`](../type-aliases/WidthMethod.md)

#### Returns

`TextBuffer`
