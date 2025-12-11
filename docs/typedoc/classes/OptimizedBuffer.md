[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / OptimizedBuffer

# Class: OptimizedBuffer

High-performance cell-based drawing buffer for terminal rendering.
This is the primary API for drawing text, colors, and UI elements to the terminal.

## Remarks

OptimizedBuffer is the low-level drawing API used by all renderables. It provides:
- **Cell-Based Rendering**: Each cell contains a character, foreground/background color, and text attributes
- **Native Performance**: Backed by a native Zig implementation for speed
- **Scissor Rects**: Clipping regions for efficient partial updates
- **Alpha Blending**: Optional transparency support
- **Text Rendering**: Unicode text with selection highlighting
- **Box Drawing**: Borders with various styles
- **Frame Buffers**: Offscreen rendering support

## Example

```ts
// Drawing text
buffer.drawText(
  5, 10,  // x, y position
  "Hello, World!",
  RGBA.white(),  // foreground color
  RGBA.black()   // background color
)

// Drawing a box with border
buffer.drawBox({
  x: 0, y: 0,
  width: 40, height: 10,
  border: ["top", "bottom", "left", "right"],
  borderStyle: "rounded",
  borderColor: RGBA.blue(),
  backgroundColor: RGBA.black(),
  title: "My Box"
})

// Fill a region
buffer.fillRect(10, 5, 20, 3, RGBA.red())
```

## Constructors

### Constructor

> **new OptimizedBuffer**(`lib`, `ptr`, `width`, `height`, `options`): `OptimizedBuffer`

#### Parameters

##### lib

[`RenderLib`](../interfaces/RenderLib.md)

##### ptr

`Pointer`

##### width

`number`

##### height

`number`

##### options

###### id?

`string`

###### respectAlpha?

`boolean`

###### widthMethod?

[`WidthMethod`](../type-aliases/WidthMethod.md)

#### Returns

`OptimizedBuffer`

## Properties

### id

> **id**: `string`

Unique identifier for this buffer

***

### lib

> **lib**: [`RenderLib`](../interfaces/RenderLib.md)

Reference to the native rendering library

***

### respectAlpha

> **respectAlpha**: `boolean` = `false`

Whether to respect alpha channel for transparency

## Accessors

### buffers

#### Get Signature

> **get** **buffers**(): `object`

##### Returns

`object`

###### attributes

> **attributes**: `Uint8Array`

###### bg

> **bg**: `Float32Array`

###### char

> **char**: `Uint32Array`

###### fg

> **fg**: `Float32Array`

***

### height

#### Get Signature

> **get** **height**(): `number`

##### Returns

`number`

***

### ptr

#### Get Signature

> **get** **ptr**(): `Pointer`

##### Returns

`Pointer`

***

### width

#### Get Signature

> **get** **width**(): `number`

##### Returns

`number`

***

### widthMethod

#### Get Signature

> **get** **widthMethod**(): [`WidthMethod`](../type-aliases/WidthMethod.md)

##### Returns

[`WidthMethod`](../type-aliases/WidthMethod.md)

## Methods

### clear()

> **clear**(`bg`): `void`

Clears the entire buffer, filling it with the specified background color.

#### Parameters

##### bg

[`RGBA`](RGBA.md) = `...`

Background color to fill (default: opaque black)

#### Returns

`void`

#### Example

```ts
// Clear to black
buffer.clear()

// Clear to blue
buffer.clear(RGBA.blue())
```

***

### clearOpacity()

> **clearOpacity**(): `void`

#### Returns

`void`

***

### clearScissorRects()

> **clearScissorRects**(): `void`

Clears all scissor rectangles from the stack.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Destroys the buffer and frees its native resources.
The buffer should not be used after calling this method.

#### Returns

`void`

***

### drawBox()

> **drawBox**(`options`): `void`

Draws a box with optional borders, fill, and title.
This is a high-level method used by BoxRenderable.

#### Parameters

##### options

Box drawing configuration

###### backgroundColor

[`RGBA`](RGBA.md)

Background color

###### border

`boolean` \| [`BorderSides`](../type-aliases/BorderSides.md)[]

Which borders to draw (true for all, or array of sides)

###### borderColor

[`RGBA`](RGBA.md)

Color of the border

###### borderStyle?

[`BorderStyle`](../type-aliases/BorderStyle.md)

Border style: "single", "double", "rounded", "bold", "ascii"

###### customBorderChars?

`Uint32Array`

###### height

`number`

Height of the box

###### shouldFill?

`boolean`

Whether to fill the interior (default: false)

###### title?

`string`

Optional title text

###### titleAlignment?

`"center"` \| `"right"` \| `"left"`

Title alignment: "left", "center", "right"

###### width

`number`

Width of the box

###### x

`number`

X coordinate

###### y

`number`

Y coordinate

#### Returns

`void`

#### Example

```ts
// Draw a rounded box with title
buffer.drawBox({
  x: 5, y: 5,
  width: 40, height: 10,
  border: ["top", "bottom", "left", "right"],
  borderStyle: "rounded",
  borderColor: RGBA.cyan(),
  backgroundColor: RGBA.black(),
  shouldFill: true,
  title: "My Window",
  titleAlignment: "center"
})
```

***

### drawChar()

> **drawChar**(`char`, `x`, `y`, `fg`, `bg`, `attributes`): `void`

#### Parameters

##### char

`number`

##### x

`number`

##### y

`number`

##### fg

[`RGBA`](RGBA.md)

##### bg

[`RGBA`](RGBA.md)

##### attributes

`number` = `0`

#### Returns

`void`

***

### drawEditorView()

> **drawEditorView**(`editorView`, `x`, `y`): `void`

#### Parameters

##### editorView

[`EditorView`](EditorView.md)

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### drawFrameBuffer()

> **drawFrameBuffer**(`destX`, `destY`, `frameBuffer`, `sourceX?`, `sourceY?`, `sourceWidth?`, `sourceHeight?`): `void`

Draws another buffer onto this buffer at the specified position.
Useful for compositing offscreen buffers or implementing layers.

#### Parameters

##### destX

`number`

Destination X coordinate

##### destY

`number`

Destination Y coordinate

##### frameBuffer

`OptimizedBuffer`

Source buffer to draw

##### sourceX?

`number`

Source X coordinate (optional)

##### sourceY?

`number`

Source Y coordinate (optional)

##### sourceWidth?

`number`

Source width (optional)

##### sourceHeight?

`number`

Source height (optional)

#### Returns

`void`

#### Example

```ts
// Draw entire offscreen buffer onto main buffer
mainBuffer.drawFrameBuffer(10, 5, offscreenBuffer)

// Draw partial region from source buffer
mainBuffer.drawFrameBuffer(10, 5, sourceBuffer, 0, 0, 40, 20)
```

***

### drawPackedBuffer()

> **drawPackedBuffer**(`dataPtr`, `dataLen`, `posX`, `posY`, `terminalWidthCells`, `terminalHeightCells`): `void`

#### Parameters

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

### drawSuperSampleBuffer()

> **drawSuperSampleBuffer**(`x`, `y`, `pixelDataPtr`, `pixelDataLength`, `format`, `alignedBytesPerRow`): `void`

#### Parameters

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

### drawText()

> **drawText**(`text`, `x`, `y`, `fg`, `bg?`, `attributes?`, `selection?`): `void`

Draws a string of text at the specified position.
Supports Unicode, emojis, and optional text selection highlighting.

#### Parameters

##### text

`string`

Text string to draw

##### x

`number`

Starting X coordinate (column)

##### y

`number`

Y coordinate (row)

##### fg

[`RGBA`](RGBA.md)

Foreground (text) color

##### bg?

[`RGBA`](RGBA.md)

Background color (optional)

##### attributes?

`number` = `0`

Text attributes (bold, italic, etc.)

##### selection?

Optional selection range with highlighting colors

###### bgColor?

[`RGBA`](RGBA.md)

###### end

`number`

###### fgColor?

[`RGBA`](RGBA.md)

###### start

`number`

#### Returns

`void`

#### Example

```ts
// Draw simple text
buffer.drawText("Hello, World!", 5, 10, RGBA.white(), RGBA.black())

// Draw text with selection (characters 0-5 highlighted)
buffer.drawText("Selected text", 5, 10, RGBA.white(), RGBA.black(), 0, {
  start: 0,
  end: 5,
  bgColor: RGBA.blue(),
  fgColor: RGBA.white()
})
```

***

### drawTextBuffer()

> **drawTextBuffer**(`textBufferView`, `x`, `y`): `void`

#### Parameters

##### textBufferView

[`TextBufferView`](TextBufferView.md)

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### encodeUnicode()

> **encodeUnicode**(`text`): `object`

#### Parameters

##### text

`string`

#### Returns

`object`

##### data

> **data**: `object`[]

##### ptr

> **ptr**: `Pointer`

***

### fillRect()

> **fillRect**(`x`, `y`, `width`, `height`, `bg`): `void`

Fills a rectangular region with a solid background color.

#### Parameters

##### x

`number`

Starting X coordinate

##### y

`number`

Starting Y coordinate

##### width

`number`

Width of the rectangle

##### height

`number`

Height of the rectangle

##### bg

[`RGBA`](RGBA.md)

Background color to fill

#### Returns

`void`

#### Example

```ts
// Fill a 20x5 rectangle with red
buffer.fillRect(10, 5, 20, 5, RGBA.red())
```

***

### freeUnicode()

> **freeUnicode**(`encoded`): `void`

#### Parameters

##### encoded

###### data

`object`[]

###### ptr

`Pointer`

#### Returns

`void`

***

### getCurrentOpacity()

> **getCurrentOpacity**(): `number`

#### Returns

`number`

***

### getNativeId()

> **getNativeId**(): `string`

#### Returns

`string`

***

### getRealCharBytes()

> **getRealCharBytes**(`addLineBreaks`): `Uint8Array`

#### Parameters

##### addLineBreaks

`boolean` = `false`

#### Returns

`Uint8Array`

***

### popOpacity()

> **popOpacity**(): `void`

#### Returns

`void`

***

### popScissorRect()

> **popScissorRect**(): `void`

Removes the most recently pushed scissor rectangle from the stack.

#### Returns

`void`

***

### pushOpacity()

> **pushOpacity**(`opacity`): `void`

#### Parameters

##### opacity

`number`

#### Returns

`void`

***

### pushScissorRect()

> **pushScissorRect**(`x`, `y`, `width`, `height`): `void`

Pushes a scissor rectangle onto the stack, restricting rendering to the specified region.
Useful for implementing scrollable viewports and clipping.

#### Parameters

##### x

`number`

X coordinate of the clip region

##### y

`number`

Y coordinate of the clip region

##### width

`number`

Width of the clip region

##### height

`number`

Height of the clip region

#### Returns

`void`

#### Remarks

Scissor rects are stacked - call [popScissorRect](#popscissorrect) to remove.

#### Example

```ts
// Only draw within a 40x20 region
buffer.pushScissorRect(10, 5, 40, 20)
buffer.drawText("This text will be clipped", 0, 0, RGBA.white())
buffer.popScissorRect()
```

***

### resize()

> **resize**(`width`, `height`): `void`

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### setCell()

> **setCell**(`x`, `y`, `char`, `fg`, `bg`, `attributes`): `void`

Sets a single cell at the specified position.

#### Parameters

##### x

`number`

X coordinate (column)

##### y

`number`

Y coordinate (row)

##### char

`string`

Character to draw (single character or emoji)

##### fg

[`RGBA`](RGBA.md)

Foreground (text) color

##### bg

[`RGBA`](RGBA.md)

Background color

##### attributes

`number` = `0`

Text attributes (bold, italic, etc.) - see [TextAttributes](../variables/TextAttributes.md)

#### Returns

`void`

#### Example

```ts
// Draw a red 'X' on white background
buffer.setCell(10, 5, 'X', RGBA.red(), RGBA.white())

// Draw bold text
buffer.setCell(10, 5, 'B', RGBA.white(), RGBA.black(), TextAttributes.BOLD)
```

***

### setCellWithAlphaBlending()

> **setCellWithAlphaBlending**(`x`, `y`, `char`, `fg`, `bg`, `attributes`): `void`

Sets a single cell with alpha blending enabled.
Use this when you need transparency effects.

#### Parameters

##### x

`number`

X coordinate (column)

##### y

`number`

Y coordinate (row)

##### char

`string`

Character to draw

##### fg

[`RGBA`](RGBA.md)

Foreground color (with alpha)

##### bg

[`RGBA`](RGBA.md)

Background color (with alpha)

##### attributes

`number` = `0`

Text attributes

#### Returns

`void`

***

### setRespectAlpha()

> **setRespectAlpha**(`respectAlpha`): `void`

#### Parameters

##### respectAlpha

`boolean`

#### Returns

`void`

***

### create()

> `static` **create**(`width`, `height`, `widthMethod`, `options`): `OptimizedBuffer`

Creates a new OptimizedBuffer with the specified dimensions.

#### Parameters

##### width

`number`

Width of the buffer in cells

##### height

`number`

Height of the buffer in cells

##### widthMethod

[`WidthMethod`](../type-aliases/WidthMethod.md)

Character width calculation method ("unicode" or "terminal")

##### options

Optional configuration

###### id?

`string`

Optional identifier for debugging

###### respectAlpha?

`boolean`

Whether to enable alpha blending (default: false)

#### Returns

`OptimizedBuffer`

A new OptimizedBuffer instance

#### Example

```ts
// Create a standard buffer
const buffer = OptimizedBuffer.create(80, 24, "unicode")

// Create a buffer with alpha blending
const overlay = OptimizedBuffer.create(40, 10, "unicode", {
  respectAlpha: true,
  id: "overlay-buffer"
})
```
