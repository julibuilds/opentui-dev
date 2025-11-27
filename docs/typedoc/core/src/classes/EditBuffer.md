[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / EditBuffer

# Class: EditBuffer

EditBuffer provides a text editing buffer with cursor management,
incremental editing, and grapheme-aware operations.

## Extends

- `EventEmitter`

## Constructors

### Constructor

> **new EditBuffer**(`lib`, `ptr`): `EditBuffer`

#### Parameters

##### lib

[`RenderLib`](../interfaces/RenderLib.md)

##### ptr

`Pointer`

#### Returns

`EditBuffer`

#### Overrides

`EventEmitter.constructor`

## Properties

### id

> `readonly` **id**: `number`

## Accessors

### ptr

#### Get Signature

> **get** **ptr**(): `Pointer`

##### Returns

`Pointer`

## Methods

### addHighlight()

> **addHighlight**(`lineIdx`, `highlight`): `void`

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

#### Parameters

##### highlight

[`Highlight`](../interfaces/Highlight.md)

#### Returns

`void`

***

### canRedo()

> **canRedo**(): `boolean`

#### Returns

`boolean`

***

### canUndo()

> **canUndo**(): `boolean`

#### Returns

`boolean`

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

### clearHistory()

> **clearHistory**(): `void`

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

### debugLogRope()

> **debugLogRope**(): `void`

#### Returns

`void`

***

### deleteChar()

> **deleteChar**(): `void`

#### Returns

`void`

***

### deleteCharBackward()

> **deleteCharBackward**(): `void`

#### Returns

`void`

***

### deleteLine()

> **deleteLine**(): `void`

#### Returns

`void`

***

### deleteRange()

> **deleteRange**(`startLine`, `startCol`, `endLine`, `endCol`): `void`

#### Parameters

##### startLine

`number`

##### startCol

`number`

##### endLine

`number`

##### endCol

`number`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### getCursorPosition()

> **getCursorPosition**(): [`LogicalCursor`](../interfaces/LogicalCursor.md)

#### Returns

[`LogicalCursor`](../interfaces/LogicalCursor.md)

***

### getEOL()

> **getEOL**(): [`LogicalCursor`](../interfaces/LogicalCursor.md)

#### Returns

[`LogicalCursor`](../interfaces/LogicalCursor.md)

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

### getLineStartOffset()

> **getLineStartOffset**(`row`): `number`

#### Parameters

##### row

`number`

#### Returns

`number`

***

### getNextWordBoundary()

> **getNextWordBoundary**(): [`LogicalCursor`](../interfaces/LogicalCursor.md)

#### Returns

[`LogicalCursor`](../interfaces/LogicalCursor.md)

***

### getPrevWordBoundary()

> **getPrevWordBoundary**(): [`LogicalCursor`](../interfaces/LogicalCursor.md)

#### Returns

[`LogicalCursor`](../interfaces/LogicalCursor.md)

***

### getSyntaxStyle()

> **getSyntaxStyle**(): [`SyntaxStyle`](SyntaxStyle.md)

#### Returns

[`SyntaxStyle`](SyntaxStyle.md)

***

### getText()

> **getText**(): `string`

#### Returns

`string`

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

### getTextRangeByCoords()

> **getTextRangeByCoords**(`startRow`, `startCol`, `endRow`, `endCol`): `string`

#### Parameters

##### startRow

`number`

##### startCol

`number`

##### endRow

`number`

##### endCol

`number`

#### Returns

`string`

***

### gotoLine()

> **gotoLine**(`line`): `void`

#### Parameters

##### line

`number`

#### Returns

`void`

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

#### Parameters

##### text

`string`

#### Returns

`void`

***

### moveCursorDown()

> **moveCursorDown**(): `void`

#### Returns

`void`

***

### moveCursorLeft()

> **moveCursorLeft**(): `void`

#### Returns

`void`

***

### moveCursorRight()

> **moveCursorRight**(): `void`

#### Returns

`void`

***

### moveCursorUp()

> **moveCursorUp**(): `void`

#### Returns

`void`

***

### newLine()

> **newLine**(): `void`

#### Returns

`void`

***

### offsetToPosition()

> **offsetToPosition**(`offset`): `object`

#### Parameters

##### offset

`number`

#### Returns

`object`

##### col

> **col**: `number`

##### row

> **row**: `number`

***

### positionToOffset()

> **positionToOffset**(`row`, `col`): `number`

#### Parameters

##### row

`number`

##### col

`number`

#### Returns

`number`

***

### redo()

> **redo**(): `string`

#### Returns

`string`

***

### removeHighlightsByRef()

> **removeHighlightsByRef**(`hlRef`): `void`

#### Parameters

##### hlRef

`number`

#### Returns

`void`

***

### resetDefaults()

> **resetDefaults**(): `void`

#### Returns

`void`

***

### setCursor()

> **setCursor**(`line`, `col`): `void`

#### Parameters

##### line

`number`

##### col

`number`

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

### setCursorToLineCol()

> **setCursorToLineCol**(`line`, `col`): `void`

#### Parameters

##### line

`number`

##### col

`number`

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

### setSyntaxStyle()

> **setSyntaxStyle**(`style`): `void`

#### Parameters

##### style

[`SyntaxStyle`](SyntaxStyle.md)

#### Returns

`void`

***

### setText()

> **setText**(`text`, `opts?`): `void`

#### Parameters

##### text

`string`

##### opts?

###### history?

`boolean`

#### Returns

`void`

***

### setTextOwned()

> **setTextOwned**(`text`, `opts?`): `void`

#### Parameters

##### text

`string`

##### opts?

###### history?

`boolean`

#### Returns

`void`

***

### undo()

> **undo**(): `string`

#### Returns

`string`

***

### create()

> `static` **create**(`widthMethod`): `EditBuffer`

#### Parameters

##### widthMethod

[`WidthMethod`](../type-aliases/WidthMethod.md)

#### Returns

`EditBuffer`
