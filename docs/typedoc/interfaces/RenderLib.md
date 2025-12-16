[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / RenderLib

# Interface: RenderLib

## Properties

### addToHitGrid()

> **addToHitGrid**: (`renderer`, `x`, `y`, `width`, `height`, `id`) => `void`

#### Parameters

##### renderer

`Pointer`

##### x

`number`

##### y

`number`

##### width

`number`

##### height

`number`

##### id

`number`

#### Returns

`void`

***

### bufferClear()

> **bufferClear**: (`buffer`, `color`) => `void`

#### Parameters

##### buffer

`Pointer`

##### color

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### bufferClearOpacity()

> **bufferClearOpacity**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### bufferClearScissorRects()

> **bufferClearScissorRects**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### bufferDrawBox()

> **bufferDrawBox**: (`buffer`, `x`, `y`, `width`, `height`, `borderChars`, `packedOptions`, `borderColor`, `backgroundColor`, `title`) => `void`

#### Parameters

##### buffer

`Pointer`

##### x

`number`

##### y

`number`

##### width

`number`

##### height

`number`

##### borderChars

`Uint32Array`

##### packedOptions

`number`

##### borderColor

[`RGBA`](../classes/RGBA.md)

##### backgroundColor

[`RGBA`](../classes/RGBA.md)

##### title

`string`

#### Returns

`void`

***

### bufferDrawChar()

> **bufferDrawChar**: (`buffer`, `char`, `x`, `y`, `fg`, `bg`, `attributes?`) => `void`

#### Parameters

##### buffer

`Pointer`

##### char

`number`

##### x

`number`

##### y

`number`

##### fg

[`RGBA`](../classes/RGBA.md)

##### bg

[`RGBA`](../classes/RGBA.md)

##### attributes?

`number`

#### Returns

`void`

***

### bufferDrawEditorView()

> **bufferDrawEditorView**: (`buffer`, `view`, `x`, `y`) => `void`

#### Parameters

##### buffer

`Pointer`

##### view

`Pointer`

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### bufferDrawPackedBuffer()

> **bufferDrawPackedBuffer**: (`buffer`, `dataPtr`, `dataLen`, `posX`, `posY`, `terminalWidthCells`, `terminalHeightCells`) => `void`

#### Parameters

##### buffer

`Pointer`

##### dataPtr

`Pointer`

##### dataLen

`number`

##### posX

`number`

##### posY

`number`

##### terminalWidthCells

`number`

##### terminalHeightCells

`number`

#### Returns

`void`

***

### bufferDrawSuperSampleBuffer()

> **bufferDrawSuperSampleBuffer**: (`buffer`, `x`, `y`, `pixelDataPtr`, `pixelDataLength`, `format`, `alignedBytesPerRow`) => `void`

#### Parameters

##### buffer

`Pointer`

##### x

`number`

##### y

`number`

##### pixelDataPtr

`Pointer`

##### pixelDataLength

`number`

##### format

`"bgra8unorm"` | `"rgba8unorm"`

##### alignedBytesPerRow

`number`

#### Returns

`void`

***

### bufferDrawText()

> **bufferDrawText**: (`buffer`, `text`, `x`, `y`, `color`, `bgColor?`, `attributes?`) => `void`

#### Parameters

##### buffer

`Pointer`

##### text

`string`

##### x

`number`

##### y

`number`

##### color

[`RGBA`](../classes/RGBA.md)

##### bgColor?

[`RGBA`](../classes/RGBA.md)

##### attributes?

`number`

#### Returns

`void`

***

### bufferDrawTextBufferView()

> **bufferDrawTextBufferView**: (`buffer`, `view`, `x`, `y`) => `void`

#### Parameters

##### buffer

`Pointer`

##### view

`Pointer`

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### bufferFillRect()

> **bufferFillRect**: (`buffer`, `x`, `y`, `width`, `height`, `color`) => `void`

#### Parameters

##### buffer

`Pointer`

##### x

`number`

##### y

`number`

##### width

`number`

##### height

`number`

##### color

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### bufferGetAttributesPtr()

> **bufferGetAttributesPtr**: (`buffer`) => `Pointer`

#### Parameters

##### buffer

`Pointer`

#### Returns

`Pointer`

***

### bufferGetBgPtr()

> **bufferGetBgPtr**: (`buffer`) => `Pointer`

#### Parameters

##### buffer

`Pointer`

#### Returns

`Pointer`

***

### bufferGetCharPtr()

> **bufferGetCharPtr**: (`buffer`) => `Pointer`

#### Parameters

##### buffer

`Pointer`

#### Returns

`Pointer`

***

### bufferGetCurrentOpacity()

> **bufferGetCurrentOpacity**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### bufferGetFgPtr()

> **bufferGetFgPtr**: (`buffer`) => `Pointer`

#### Parameters

##### buffer

`Pointer`

#### Returns

`Pointer`

***

### bufferGetId()

> **bufferGetId**: (`buffer`) => `string`

#### Parameters

##### buffer

`Pointer`

#### Returns

`string`

***

### bufferGetRealCharSize()

> **bufferGetRealCharSize**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### bufferGetRespectAlpha()

> **bufferGetRespectAlpha**: (`buffer`) => `boolean`

#### Parameters

##### buffer

`Pointer`

#### Returns

`boolean`

***

### bufferPopOpacity()

> **bufferPopOpacity**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### bufferPopScissorRect()

> **bufferPopScissorRect**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### bufferPushOpacity()

> **bufferPushOpacity**: (`buffer`, `opacity`) => `void`

#### Parameters

##### buffer

`Pointer`

##### opacity

`number`

#### Returns

`void`

***

### bufferPushScissorRect()

> **bufferPushScissorRect**: (`buffer`, `x`, `y`, `width`, `height`) => `void`

#### Parameters

##### buffer

`Pointer`

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

### bufferResize()

> **bufferResize**: (`buffer`, `width`, `height`) => `void`

#### Parameters

##### buffer

`Pointer`

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### bufferSetCell()

> **bufferSetCell**: (`buffer`, `x`, `y`, `char`, `color`, `bgColor`, `attributes?`) => `void`

#### Parameters

##### buffer

`Pointer`

##### x

`number`

##### y

`number`

##### char

`string`

##### color

[`RGBA`](../classes/RGBA.md)

##### bgColor

[`RGBA`](../classes/RGBA.md)

##### attributes?

`number`

#### Returns

`void`

***

### bufferSetCellWithAlphaBlending()

> **bufferSetCellWithAlphaBlending**: (`buffer`, `x`, `y`, `char`, `color`, `bgColor`, `attributes?`) => `void`

#### Parameters

##### buffer

`Pointer`

##### x

`number`

##### y

`number`

##### char

`string`

##### color

[`RGBA`](../classes/RGBA.md)

##### bgColor

[`RGBA`](../classes/RGBA.md)

##### attributes?

`number`

#### Returns

`void`

***

### bufferSetRespectAlpha()

> **bufferSetRespectAlpha**: (`buffer`, `respectAlpha`) => `void`

#### Parameters

##### buffer

`Pointer`

##### respectAlpha

`boolean`

#### Returns

`void`

***

### bufferWriteResolvedChars()

> **bufferWriteResolvedChars**: (`buffer`, `outputBuffer`, `addLineBreaks`) => `number`

#### Parameters

##### buffer

`Pointer`

##### outputBuffer

`Uint8Array`

##### addLineBreaks

`boolean`

#### Returns

`number`

***

### checkHit()

> **checkHit**: (`renderer`, `x`, `y`) => `number`

#### Parameters

##### renderer

`Pointer`

##### x

`number`

##### y

`number`

#### Returns

`number`

***

### clearTerminal()

> **clearTerminal**: (`renderer`) => `void`

#### Parameters

##### renderer

`Pointer`

#### Returns

`void`

***

### createEditBuffer()

> **createEditBuffer**: (`widthMethod`) => `Pointer`

#### Parameters

##### widthMethod

[`WidthMethod`](../type-aliases/WidthMethod.md)

#### Returns

`Pointer`

***

### createEditorView()

> **createEditorView**: (`editBufferPtr`, `viewportWidth`, `viewportHeight`) => `Pointer`

#### Parameters

##### editBufferPtr

`Pointer`

##### viewportWidth

`number`

##### viewportHeight

`number`

#### Returns

`Pointer`

***

### createOptimizedBuffer()

> **createOptimizedBuffer**: (`width`, `height`, `widthMethod`, `respectAlpha?`, `id?`) => [`OptimizedBuffer`](../classes/OptimizedBuffer.md)

#### Parameters

##### width

`number`

##### height

`number`

##### widthMethod

[`WidthMethod`](../type-aliases/WidthMethod.md)

##### respectAlpha?

`boolean`

##### id?

`string`

#### Returns

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

***

### createRenderer()

> **createRenderer**: (`width`, `height`, `options?`) => `Pointer`

#### Parameters

##### width

`number`

##### height

`number`

##### options?

###### testing

`boolean`

#### Returns

`Pointer`

***

### createSyntaxStyle()

> **createSyntaxStyle**: () => `Pointer`

#### Returns

`Pointer`

***

### createTextBuffer()

> **createTextBuffer**: (`widthMethod`) => [`TextBuffer`](../classes/TextBuffer.md)

#### Parameters

##### widthMethod

[`WidthMethod`](../type-aliases/WidthMethod.md)

#### Returns

[`TextBuffer`](../classes/TextBuffer.md)

***

### createTextBufferView()

> **createTextBufferView**: (`textBuffer`) => `Pointer`

#### Parameters

##### textBuffer

`Pointer`

#### Returns

`Pointer`

***

### decoder

> `readonly` **decoder**: `TextDecoder`

***

### destroyEditBuffer()

> **destroyEditBuffer**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### destroyEditorView()

> **destroyEditorView**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### destroyOptimizedBuffer()

> **destroyOptimizedBuffer**: (`bufferPtr`) => `void`

#### Parameters

##### bufferPtr

`Pointer`

#### Returns

`void`

***

### destroyRenderer()

> **destroyRenderer**: (`renderer`) => `void`

#### Parameters

##### renderer

`Pointer`

#### Returns

`void`

***

### destroySyntaxStyle()

> **destroySyntaxStyle**: (`style`) => `void`

#### Parameters

##### style

`Pointer`

#### Returns

`void`

***

### destroyTextBuffer()

> **destroyTextBuffer**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### destroyTextBufferView()

> **destroyTextBufferView**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### disableKittyKeyboard()

> **disableKittyKeyboard**: (`renderer`) => `void`

#### Parameters

##### renderer

`Pointer`

#### Returns

`void`

***

### disableMouse()

> **disableMouse**: (`renderer`) => `void`

#### Parameters

##### renderer

`Pointer`

#### Returns

`void`

***

### drawFrameBuffer()

> **drawFrameBuffer**: (`targetBufferPtr`, `destX`, `destY`, `bufferPtr`, `sourceX?`, `sourceY?`, `sourceWidth?`, `sourceHeight?`) => `void`

#### Parameters

##### targetBufferPtr

`Pointer`

##### destX

`number`

##### destY

`number`

##### bufferPtr

`Pointer`

##### sourceX?

`number`

##### sourceY?

`number`

##### sourceWidth?

`number`

##### sourceHeight?

`number`

#### Returns

`void`

***

### dumpBuffers()

> **dumpBuffers**: (`renderer`, `timestamp?`) => `void`

#### Parameters

##### renderer

`Pointer`

##### timestamp?

`number`

#### Returns

`void`

***

### dumpHitGrid()

> **dumpHitGrid**: (`renderer`) => `void`

#### Parameters

##### renderer

`Pointer`

#### Returns

`void`

***

### dumpStdoutBuffer()

> **dumpStdoutBuffer**: (`renderer`, `timestamp?`) => `void`

#### Parameters

##### renderer

`Pointer`

##### timestamp?

`number`

#### Returns

`void`

***

### editBufferCanRedo()

> **editBufferCanRedo**: (`buffer`) => `boolean`

#### Parameters

##### buffer

`Pointer`

#### Returns

`boolean`

***

### editBufferCanUndo()

> **editBufferCanUndo**: (`buffer`) => `boolean`

#### Parameters

##### buffer

`Pointer`

#### Returns

`boolean`

***

### editBufferClear()

> **editBufferClear**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferClearHistory()

> **editBufferClearHistory**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferDebugLogRope()

> **editBufferDebugLogRope**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferDeleteChar()

> **editBufferDeleteChar**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferDeleteCharBackward()

> **editBufferDeleteCharBackward**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferDeleteLine()

> **editBufferDeleteLine**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferDeleteRange()

> **editBufferDeleteRange**: (`buffer`, `startLine`, `startCol`, `endLine`, `endCol`) => `void`

#### Parameters

##### buffer

`Pointer`

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

### editBufferGetCursorPosition()

> **editBufferGetCursorPosition**: (`buffer`) => [`LogicalCursor`](LogicalCursor.md)

#### Parameters

##### buffer

`Pointer`

#### Returns

[`LogicalCursor`](LogicalCursor.md)

***

### editBufferGetEOL()

> **editBufferGetEOL**: (`buffer`) => `object`

#### Parameters

##### buffer

`Pointer`

#### Returns

`object`

##### col

> **col**: `number`

##### offset

> **offset**: `number`

##### row

> **row**: `number`

***

### editBufferGetId()

> **editBufferGetId**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### editBufferGetLineStartOffset()

> **editBufferGetLineStartOffset**: (`buffer`, `row`) => `number`

#### Parameters

##### buffer

`Pointer`

##### row

`number`

#### Returns

`number`

***

### editBufferGetNextWordBoundary()

> **editBufferGetNextWordBoundary**: (`buffer`) => `object`

#### Parameters

##### buffer

`Pointer`

#### Returns

`object`

##### col

> **col**: `number`

##### offset

> **offset**: `number`

##### row

> **row**: `number`

***

### editBufferGetPrevWordBoundary()

> **editBufferGetPrevWordBoundary**: (`buffer`) => `object`

#### Parameters

##### buffer

`Pointer`

#### Returns

`object`

##### col

> **col**: `number`

##### offset

> **offset**: `number`

##### row

> **row**: `number`

***

### editBufferGetText()

> **editBufferGetText**: (`buffer`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### buffer

`Pointer`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### editBufferGetTextBuffer()

> **editBufferGetTextBuffer**: (`buffer`) => `Pointer`

#### Parameters

##### buffer

`Pointer`

#### Returns

`Pointer`

***

### editBufferGetTextRange()

> **editBufferGetTextRange**: (`buffer`, `startOffset`, `endOffset`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### buffer

`Pointer`

##### startOffset

`number`

##### endOffset

`number`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### editBufferGetTextRangeByCoords()

> **editBufferGetTextRangeByCoords**: (`buffer`, `startRow`, `startCol`, `endRow`, `endCol`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### buffer

`Pointer`

##### startRow

`number`

##### startCol

`number`

##### endRow

`number`

##### endCol

`number`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### editBufferGotoLine()

> **editBufferGotoLine**: (`buffer`, `line`) => `void`

#### Parameters

##### buffer

`Pointer`

##### line

`number`

#### Returns

`void`

***

### editBufferInsertChar()

> **editBufferInsertChar**: (`buffer`, `char`) => `void`

#### Parameters

##### buffer

`Pointer`

##### char

`string`

#### Returns

`void`

***

### editBufferInsertText()

> **editBufferInsertText**: (`buffer`, `text`) => `void`

#### Parameters

##### buffer

`Pointer`

##### text

`string`

#### Returns

`void`

***

### editBufferMoveCursorDown()

> **editBufferMoveCursorDown**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferMoveCursorLeft()

> **editBufferMoveCursorLeft**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferMoveCursorRight()

> **editBufferMoveCursorRight**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferMoveCursorUp()

> **editBufferMoveCursorUp**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferNewLine()

> **editBufferNewLine**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### editBufferOffsetToPosition()

> **editBufferOffsetToPosition**: (`buffer`, `offset`) => `object`

#### Parameters

##### buffer

`Pointer`

##### offset

`number`

#### Returns

`object`

##### col

> **col**: `number`

##### offset

> **offset**: `number`

##### row

> **row**: `number`

***

### editBufferPositionToOffset()

> **editBufferPositionToOffset**: (`buffer`, `row`, `col`) => `number`

#### Parameters

##### buffer

`Pointer`

##### row

`number`

##### col

`number`

#### Returns

`number`

***

### editBufferRedo()

> **editBufferRedo**: (`buffer`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### buffer

`Pointer`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### editBufferReplaceText()

> **editBufferReplaceText**: (`buffer`, `textBytes`) => `void`

#### Parameters

##### buffer

`Pointer`

##### textBytes

`Uint8Array`

#### Returns

`void`

***

### editBufferReplaceTextFromMem()

> **editBufferReplaceTextFromMem**: (`buffer`, `memId`) => `void`

#### Parameters

##### buffer

`Pointer`

##### memId

`number`

#### Returns

`void`

***

### editBufferSetCursor()

> **editBufferSetCursor**: (`buffer`, `line`, `col`) => `void`

#### Parameters

##### buffer

`Pointer`

##### line

`number`

##### col

`number`

#### Returns

`void`

***

### editBufferSetCursorByOffset()

> **editBufferSetCursorByOffset**: (`buffer`, `offset`) => `void`

#### Parameters

##### buffer

`Pointer`

##### offset

`number`

#### Returns

`void`

***

### editBufferSetCursorToLineCol()

> **editBufferSetCursorToLineCol**: (`buffer`, `line`, `col`) => `void`

#### Parameters

##### buffer

`Pointer`

##### line

`number`

##### col

`number`

#### Returns

`void`

***

### editBufferSetText()

> **editBufferSetText**: (`buffer`, `textBytes`) => `void`

#### Parameters

##### buffer

`Pointer`

##### textBytes

`Uint8Array`

#### Returns

`void`

***

### editBufferSetTextFromMem()

> **editBufferSetTextFromMem**: (`buffer`, `memId`) => `void`

#### Parameters

##### buffer

`Pointer`

##### memId

`number`

#### Returns

`void`

***

### editBufferUndo()

> **editBufferUndo**: (`buffer`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### buffer

`Pointer`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### editorViewDeleteSelectedText()

> **editorViewDeleteSelectedText**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### editorViewGetCursor()

> **editorViewGetCursor**: (`view`) => `object`

#### Parameters

##### view

`Pointer`

#### Returns

`object`

##### col

> **col**: `number`

##### row

> **row**: `number`

***

### editorViewGetEOL()

> **editorViewGetEOL**: (`view`) => [`VisualCursor`](VisualCursor.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`VisualCursor`](VisualCursor.md)

***

### editorViewGetLineInfo()

> **editorViewGetLineInfo**: (`view`) => [`LineInfo`](LineInfo.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`LineInfo`](LineInfo.md)

***

### editorViewGetLogicalLineInfo()

> **editorViewGetLogicalLineInfo**: (`view`) => [`LineInfo`](LineInfo.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`LineInfo`](LineInfo.md)

***

### editorViewGetNextWordBoundary()

> **editorViewGetNextWordBoundary**: (`view`) => [`VisualCursor`](VisualCursor.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`VisualCursor`](VisualCursor.md)

***

### editorViewGetPrevWordBoundary()

> **editorViewGetPrevWordBoundary**: (`view`) => [`VisualCursor`](VisualCursor.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`VisualCursor`](VisualCursor.md)

***

### editorViewGetSelectedTextBytes()

> **editorViewGetSelectedTextBytes**: (`view`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### view

`Pointer`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### editorViewGetSelection()

> **editorViewGetSelection**: (`view`) => `object`

#### Parameters

##### view

`Pointer`

#### Returns

`object`

##### end

> **end**: `number`

##### start

> **start**: `number`

***

### editorViewGetText()

> **editorViewGetText**: (`view`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### view

`Pointer`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### editorViewGetTextBufferView()

> **editorViewGetTextBufferView**: (`view`) => `Pointer`

#### Parameters

##### view

`Pointer`

#### Returns

`Pointer`

***

### editorViewGetTotalVirtualLineCount()

> **editorViewGetTotalVirtualLineCount**: (`view`) => `number`

#### Parameters

##### view

`Pointer`

#### Returns

`number`

***

### editorViewGetViewport()

> **editorViewGetViewport**: (`view`) => `object`

#### Parameters

##### view

`Pointer`

#### Returns

`object`

##### height

> **height**: `number`

##### offsetX

> **offsetX**: `number`

##### offsetY

> **offsetY**: `number`

##### width

> **width**: `number`

***

### editorViewGetVirtualLineCount()

> **editorViewGetVirtualLineCount**: (`view`) => `number`

#### Parameters

##### view

`Pointer`

#### Returns

`number`

***

### editorViewGetVisualCursor()

> **editorViewGetVisualCursor**: (`view`) => [`VisualCursor`](VisualCursor.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`VisualCursor`](VisualCursor.md)

***

### editorViewGetVisualEOL()

> **editorViewGetVisualEOL**: (`view`) => [`VisualCursor`](VisualCursor.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`VisualCursor`](VisualCursor.md)

***

### editorViewGetVisualSOL()

> **editorViewGetVisualSOL**: (`view`) => [`VisualCursor`](VisualCursor.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`VisualCursor`](VisualCursor.md)

***

### editorViewMoveDownVisual()

> **editorViewMoveDownVisual**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### editorViewMoveUpVisual()

> **editorViewMoveUpVisual**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### editorViewResetLocalSelection()

> **editorViewResetLocalSelection**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### editorViewResetSelection()

> **editorViewResetSelection**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### editorViewSetCursorByOffset()

> **editorViewSetCursorByOffset**: (`view`, `offset`) => `void`

#### Parameters

##### view

`Pointer`

##### offset

`number`

#### Returns

`void`

***

### editorViewSetLocalSelection()

> **editorViewSetLocalSelection**: (`view`, `anchorX`, `anchorY`, `focusX`, `focusY`, `bgColor`, `fgColor`) => `boolean`

#### Parameters

##### view

`Pointer`

##### anchorX

`number`

##### anchorY

`number`

##### focusX

`number`

##### focusY

`number`

##### bgColor

[`RGBA`](../classes/RGBA.md)

##### fgColor

[`RGBA`](../classes/RGBA.md)

#### Returns

`boolean`

***

### editorViewSetPlaceholderStyledText()

> **editorViewSetPlaceholderStyledText**: (`view`, `chunks`) => `void`

#### Parameters

##### view

`Pointer`

##### chunks

`object`[]

#### Returns

`void`

***

### editorViewSetScrollMargin()

> **editorViewSetScrollMargin**: (`view`, `margin`) => `void`

#### Parameters

##### view

`Pointer`

##### margin

`number`

#### Returns

`void`

***

### editorViewSetSelection()

> **editorViewSetSelection**: (`view`, `start`, `end`, `bgColor`, `fgColor`) => `void`

#### Parameters

##### view

`Pointer`

##### start

`number`

##### end

`number`

##### bgColor

[`RGBA`](../classes/RGBA.md)

##### fgColor

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### editorViewSetTabIndicator()

> **editorViewSetTabIndicator**: (`view`, `indicator`) => `void`

#### Parameters

##### view

`Pointer`

##### indicator

`number`

#### Returns

`void`

***

### editorViewSetTabIndicatorColor()

> **editorViewSetTabIndicatorColor**: (`view`, `color`) => `void`

#### Parameters

##### view

`Pointer`

##### color

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### editorViewSetViewportSize()

> **editorViewSetViewportSize**: (`view`, `width`, `height`) => `void`

#### Parameters

##### view

`Pointer`

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### editorViewSetWrapMode()

> **editorViewSetWrapMode**: (`view`, `mode`) => `void`

#### Parameters

##### view

`Pointer`

##### mode

`"none"` | `"char"` | `"word"`

#### Returns

`void`

***

### enableKittyKeyboard()

> **enableKittyKeyboard**: (`renderer`, `flags`) => `void`

#### Parameters

##### renderer

`Pointer`

##### flags

`number`

#### Returns

`void`

***

### enableMouse()

> **enableMouse**: (`renderer`, `enableMovement`) => `void`

#### Parameters

##### renderer

`Pointer`

##### enableMovement

`boolean`

#### Returns

`void`

***

### encoder

> `readonly` **encoder**: `TextEncoder`

***

### encodeUnicode()

> **encodeUnicode**: (`text`, `widthMethod`) => `object`

#### Parameters

##### text

`string`

##### widthMethod

[`WidthMethod`](../type-aliases/WidthMethod.md)

#### Returns

`object`

##### data

> **data**: `object`[]

##### ptr

> **ptr**: `Pointer`

***

### freeUnicode()

> **freeUnicode**: (`encoded`) => `void`

#### Parameters

##### encoded

###### data

`object`[]

###### ptr

`Pointer`

#### Returns

`void`

***

### getArenaAllocatedBytes()

> **getArenaAllocatedBytes**: () => `number`

#### Returns

`number`

***

### getBufferHeight()

> **getBufferHeight**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### getBufferWidth()

> **getBufferWidth**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### getCurrentBuffer()

> **getCurrentBuffer**: (`renderer`) => [`OptimizedBuffer`](../classes/OptimizedBuffer.md)

#### Parameters

##### renderer

`Pointer`

#### Returns

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

***

### getKittyKeyboardFlags()

> **getKittyKeyboardFlags**: (`renderer`) => `number`

#### Parameters

##### renderer

`Pointer`

#### Returns

`number`

***

### getNextBuffer()

> **getNextBuffer**: (`renderer`) => [`OptimizedBuffer`](../classes/OptimizedBuffer.md)

#### Parameters

##### renderer

`Pointer`

#### Returns

[`OptimizedBuffer`](../classes/OptimizedBuffer.md)

***

### getPlainTextBytes()

> **getPlainTextBytes**: (`buffer`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### buffer

`Pointer`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### getTerminalCapabilities()

> **getTerminalCapabilities**: (`renderer`) => `any`

#### Parameters

##### renderer

`Pointer`

#### Returns

`any`

***

### offNativeEvent()

> **offNativeEvent**: (`name`, `handler`) => `void`

#### Parameters

##### name

`string`

##### handler

(`data`) => `void`

#### Returns

`void`

***

### onAnyNativeEvent()

> **onAnyNativeEvent**: (`handler`) => `void`

#### Parameters

##### handler

(`name`, `data`) => `void`

#### Returns

`void`

***

### onceNativeEvent()

> **onceNativeEvent**: (`name`, `handler`) => `void`

#### Parameters

##### name

`string`

##### handler

(`data`) => `void`

#### Returns

`void`

***

### onNativeEvent()

> **onNativeEvent**: (`name`, `handler`) => `void`

#### Parameters

##### name

`string`

##### handler

(`data`) => `void`

#### Returns

`void`

***

### processCapabilityResponse()

> **processCapabilityResponse**: (`renderer`, `response`) => `void`

#### Parameters

##### renderer

`Pointer`

##### response

`string`

#### Returns

`void`

***

### queryPixelResolution()

> **queryPixelResolution**: (`renderer`) => `void`

#### Parameters

##### renderer

`Pointer`

#### Returns

`void`

***

### render()

> **render**: (`renderer`, `force`) => `void`

#### Parameters

##### renderer

`Pointer`

##### force

`boolean`

#### Returns

`void`

***

### resizeRenderer()

> **resizeRenderer**: (`renderer`, `width`, `height`) => `void`

#### Parameters

##### renderer

`Pointer`

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### resumeRenderer()

> **resumeRenderer**: (`renderer`) => `void`

#### Parameters

##### renderer

`Pointer`

#### Returns

`void`

***

### setBackgroundColor()

> **setBackgroundColor**: (`renderer`, `color`) => `void`

#### Parameters

##### renderer

`Pointer`

##### color

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### setCursorColor()

> **setCursorColor**: (`renderer`, `color`) => `void`

#### Parameters

##### renderer

`Pointer`

##### color

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### setCursorPosition()

> **setCursorPosition**: (`renderer`, `x`, `y`, `visible`) => `void`

#### Parameters

##### renderer

`Pointer`

##### x

`number`

##### y

`number`

##### visible

`boolean`

#### Returns

`void`

***

### setCursorStyle()

> **setCursorStyle**: (`renderer`, `style`, `blinking`) => `void`

#### Parameters

##### renderer

`Pointer`

##### style

[`CursorStyle`](../type-aliases/CursorStyle.md)

##### blinking

`boolean`

#### Returns

`void`

***

### setDebugOverlay()

> **setDebugOverlay**: (`renderer`, `enabled`, `corner`) => `void`

#### Parameters

##### renderer

`Pointer`

##### enabled

`boolean`

##### corner

[`DebugOverlayCorner`](../enumerations/DebugOverlayCorner.md)

#### Returns

`void`

***

### setKittyKeyboardFlags()

> **setKittyKeyboardFlags**: (`renderer`, `flags`) => `void`

#### Parameters

##### renderer

`Pointer`

##### flags

`number`

#### Returns

`void`

***

### setRenderOffset()

> **setRenderOffset**: (`renderer`, `offset`) => `void`

#### Parameters

##### renderer

`Pointer`

##### offset

`number`

#### Returns

`void`

***

### setTerminalTitle()

> **setTerminalTitle**: (`renderer`, `title`) => `void`

#### Parameters

##### renderer

`Pointer`

##### title

`string`

#### Returns

`void`

***

### setupTerminal()

> **setupTerminal**: (`renderer`, `useAlternateScreen`) => `void`

#### Parameters

##### renderer

`Pointer`

##### useAlternateScreen

`boolean`

#### Returns

`void`

***

### setUseThread()

> **setUseThread**: (`renderer`, `useThread`) => `void`

#### Parameters

##### renderer

`Pointer`

##### useThread

`boolean`

#### Returns

`void`

***

### suspendRenderer()

> **suspendRenderer**: (`renderer`) => `void`

#### Parameters

##### renderer

`Pointer`

#### Returns

`void`

***

### syntaxStyleGetStyleCount()

> **syntaxStyleGetStyleCount**: (`style`) => `number`

#### Parameters

##### style

`Pointer`

#### Returns

`number`

***

### syntaxStyleRegister()

> **syntaxStyleRegister**: (`style`, `name`, `fg`, `bg`, `attributes`) => `number`

#### Parameters

##### style

`Pointer`

##### name

`string`

##### fg

[`RGBA`](../classes/RGBA.md)

##### bg

[`RGBA`](../classes/RGBA.md)

##### attributes

`number`

#### Returns

`number`

***

### syntaxStyleResolveByName()

> **syntaxStyleResolveByName**: (`style`, `name`) => `number`

#### Parameters

##### style

`Pointer`

##### name

`string`

#### Returns

`number`

***

### textBufferAddHighlight()

> **textBufferAddHighlight**: (`buffer`, `lineIdx`, `highlight`) => `void`

#### Parameters

##### buffer

`Pointer`

##### lineIdx

`number`

##### highlight

[`Highlight`](Highlight.md)

#### Returns

`void`

***

### textBufferAddHighlightByCharRange()

> **textBufferAddHighlightByCharRange**: (`buffer`, `highlight`) => `void`

#### Parameters

##### buffer

`Pointer`

##### highlight

[`Highlight`](Highlight.md)

#### Returns

`void`

***

### textBufferAppend()

> **textBufferAppend**: (`buffer`, `bytes`) => `void`

#### Parameters

##### buffer

`Pointer`

##### bytes

`Uint8Array`

#### Returns

`void`

***

### textBufferAppendFromMemId()

> **textBufferAppendFromMemId**: (`buffer`, `memId`) => `void`

#### Parameters

##### buffer

`Pointer`

##### memId

`number`

#### Returns

`void`

***

### textBufferClear()

> **textBufferClear**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### textBufferClearAllHighlights()

> **textBufferClearAllHighlights**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### textBufferClearLineHighlights()

> **textBufferClearLineHighlights**: (`buffer`, `lineIdx`) => `void`

#### Parameters

##### buffer

`Pointer`

##### lineIdx

`number`

#### Returns

`void`

***

### textBufferClearMemRegistry()

> **textBufferClearMemRegistry**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### textBufferGetByteSize()

> **textBufferGetByteSize**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### textBufferGetHighlightCount()

> **textBufferGetHighlightCount**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### textBufferGetLength()

> **textBufferGetLength**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### textBufferGetLineCount()

> **textBufferGetLineCount**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### textBufferGetLineHighlights()

> **textBufferGetLineHighlights**: (`buffer`, `lineIdx`) => [`Highlight`](Highlight.md)[]

#### Parameters

##### buffer

`Pointer`

##### lineIdx

`number`

#### Returns

[`Highlight`](Highlight.md)[]

***

### textBufferGetTabWidth()

> **textBufferGetTabWidth**: (`buffer`) => `number`

#### Parameters

##### buffer

`Pointer`

#### Returns

`number`

***

### textBufferGetTextRange()

> **textBufferGetTextRange**: (`buffer`, `startOffset`, `endOffset`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### buffer

`Pointer`

##### startOffset

`number`

##### endOffset

`number`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### textBufferGetTextRangeByCoords()

> **textBufferGetTextRangeByCoords**: (`buffer`, `startRow`, `startCol`, `endRow`, `endCol`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### buffer

`Pointer`

##### startRow

`number`

##### startCol

`number`

##### endRow

`number`

##### endCol

`number`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### textBufferLoadFile()

> **textBufferLoadFile**: (`buffer`, `path`) => `boolean`

#### Parameters

##### buffer

`Pointer`

##### path

`string`

#### Returns

`boolean`

***

### textBufferRegisterMemBuffer()

> **textBufferRegisterMemBuffer**: (`buffer`, `bytes`, `owned?`) => `number`

#### Parameters

##### buffer

`Pointer`

##### bytes

`Uint8Array`

##### owned?

`boolean`

#### Returns

`number`

***

### textBufferRemoveHighlightsByRef()

> **textBufferRemoveHighlightsByRef**: (`buffer`, `hlRef`) => `void`

#### Parameters

##### buffer

`Pointer`

##### hlRef

`number`

#### Returns

`void`

***

### textBufferReplaceMemBuffer()

> **textBufferReplaceMemBuffer**: (`buffer`, `memId`, `bytes`, `owned?`) => `boolean`

#### Parameters

##### buffer

`Pointer`

##### memId

`number`

##### bytes

`Uint8Array`

##### owned?

`boolean`

#### Returns

`boolean`

***

### textBufferReset()

> **textBufferReset**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### textBufferResetDefaults()

> **textBufferResetDefaults**: (`buffer`) => `void`

#### Parameters

##### buffer

`Pointer`

#### Returns

`void`

***

### textBufferSetDefaultAttributes()

> **textBufferSetDefaultAttributes**: (`buffer`, `attributes`) => `void`

#### Parameters

##### buffer

`Pointer`

##### attributes

`number`

#### Returns

`void`

***

### textBufferSetDefaultBg()

> **textBufferSetDefaultBg**: (`buffer`, `bg`) => `void`

#### Parameters

##### buffer

`Pointer`

##### bg

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### textBufferSetDefaultFg()

> **textBufferSetDefaultFg**: (`buffer`, `fg`) => `void`

#### Parameters

##### buffer

`Pointer`

##### fg

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### textBufferSetStyledText()

> **textBufferSetStyledText**: (`buffer`, `chunks`) => `void`

#### Parameters

##### buffer

`Pointer`

##### chunks

`object`[]

#### Returns

`void`

***

### textBufferSetSyntaxStyle()

> **textBufferSetSyntaxStyle**: (`buffer`, `style`) => `void`

#### Parameters

##### buffer

`Pointer`

##### style

`Pointer`

#### Returns

`void`

***

### textBufferSetTabWidth()

> **textBufferSetTabWidth**: (`buffer`, `width`) => `void`

#### Parameters

##### buffer

`Pointer`

##### width

`number`

#### Returns

`void`

***

### textBufferSetTextFromMem()

> **textBufferSetTextFromMem**: (`buffer`, `memId`) => `void`

#### Parameters

##### buffer

`Pointer`

##### memId

`number`

#### Returns

`void`

***

### textBufferViewGetLineInfo()

> **textBufferViewGetLineInfo**: (`view`) => [`LineInfo`](LineInfo.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`LineInfo`](LineInfo.md)

***

### textBufferViewGetLogicalLineInfo()

> **textBufferViewGetLogicalLineInfo**: (`view`) => [`LineInfo`](LineInfo.md)

#### Parameters

##### view

`Pointer`

#### Returns

[`LineInfo`](LineInfo.md)

***

### textBufferViewGetPlainTextBytes()

> **textBufferViewGetPlainTextBytes**: (`view`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### view

`Pointer`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### textBufferViewGetSelectedTextBytes()

> **textBufferViewGetSelectedTextBytes**: (`view`, `maxLength`) => `Uint8Array`\<`ArrayBufferLike`\>

#### Parameters

##### view

`Pointer`

##### maxLength

`number`

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### textBufferViewGetSelection()

> **textBufferViewGetSelection**: (`view`) => `object`

#### Parameters

##### view

`Pointer`

#### Returns

`object`

##### end

> **end**: `number`

##### start

> **start**: `number`

***

### textBufferViewGetVirtualLineCount()

> **textBufferViewGetVirtualLineCount**: (`view`) => `number`

#### Parameters

##### view

`Pointer`

#### Returns

`number`

***

### textBufferViewMeasureForDimensions()

> **textBufferViewMeasureForDimensions**: (`view`, `width`, `height`) => `object`

#### Parameters

##### view

`Pointer`

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

### textBufferViewResetLocalSelection()

> **textBufferViewResetLocalSelection**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### textBufferViewResetSelection()

> **textBufferViewResetSelection**: (`view`) => `void`

#### Parameters

##### view

`Pointer`

#### Returns

`void`

***

### textBufferViewSetLocalSelection()

> **textBufferViewSetLocalSelection**: (`view`, `anchorX`, `anchorY`, `focusX`, `focusY`, `bgColor`, `fgColor`) => `boolean`

#### Parameters

##### view

`Pointer`

##### anchorX

`number`

##### anchorY

`number`

##### focusX

`number`

##### focusY

`number`

##### bgColor

[`RGBA`](../classes/RGBA.md)

##### fgColor

[`RGBA`](../classes/RGBA.md)

#### Returns

`boolean`

***

### textBufferViewSetSelection()

> **textBufferViewSetSelection**: (`view`, `start`, `end`, `bgColor`, `fgColor`) => `void`

#### Parameters

##### view

`Pointer`

##### start

`number`

##### end

`number`

##### bgColor

[`RGBA`](../classes/RGBA.md)

##### fgColor

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### textBufferViewSetTabIndicator()

> **textBufferViewSetTabIndicator**: (`view`, `indicator`) => `void`

#### Parameters

##### view

`Pointer`

##### indicator

`number`

#### Returns

`void`

***

### textBufferViewSetTabIndicatorColor()

> **textBufferViewSetTabIndicatorColor**: (`view`, `color`) => `void`

#### Parameters

##### view

`Pointer`

##### color

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### textBufferViewSetViewport()

> **textBufferViewSetViewport**: (`view`, `x`, `y`, `width`, `height`) => `void`

#### Parameters

##### view

`Pointer`

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

### textBufferViewSetViewportSize()

> **textBufferViewSetViewportSize**: (`view`, `width`, `height`) => `void`

#### Parameters

##### view

`Pointer`

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### textBufferViewSetWrapMode()

> **textBufferViewSetWrapMode**: (`view`, `mode`) => `void`

#### Parameters

##### view

`Pointer`

##### mode

`"none"` | `"char"` | `"word"`

#### Returns

`void`

***

### textBufferViewSetWrapWidth()

> **textBufferViewSetWrapWidth**: (`view`, `width`) => `void`

#### Parameters

##### view

`Pointer`

##### width

`number`

#### Returns

`void`

***

### updateMemoryStats()

> **updateMemoryStats**: (`renderer`, `heapUsed`, `heapTotal`, `arrayBuffers`) => `void`

#### Parameters

##### renderer

`Pointer`

##### heapUsed

`number`

##### heapTotal

`number`

##### arrayBuffers

`number`

#### Returns

`void`

***

### updateStats()

> **updateStats**: (`renderer`, `time`, `fps`, `frameCallbackTime`) => `void`

#### Parameters

##### renderer

`Pointer`

##### time

`number`

##### fps

`number`

##### frameCallbackTime

`number`

#### Returns

`void`
