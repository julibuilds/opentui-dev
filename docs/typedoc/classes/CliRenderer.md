[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / CliRenderer

# Class: CliRenderer

The main renderer class for terminal UI applications.

## Remarks

CliRenderer manages the terminal state, coordinates rendering of all UI components,
handles user input (keyboard and mouse), and runs the render loop. It provides
the root container for all renderables and manages the layout/rendering lifecycle.

Do not instantiate directly - use [createCliRenderer](../functions/createCliRenderer.md) instead.

## Example

```ts
import { createCliRenderer, TextRenderable } from "@opentui/core"

const renderer = await createCliRenderer()

// Add components to the root
const text = new TextRenderable(renderer, {
  content: "Hello, World!",
  fg: "#00FF00"
})
renderer.root.add(text)

// Set up keyboard handler
renderer.keyInput.on("keypress", (key) => {
  if (key.name === "q") {
    renderer.destroy()
  }
})

// Start the render loop
renderer.start()
```

## Extends

- `EventEmitter`

## Implements

- [`RenderContext`](../interfaces/RenderContext.md)

## Constructors

### Constructor

> **new CliRenderer**(`lib`, `rendererPtr`, `stdin`, `stdout`, `width`, `height`, `config`): `CliRenderer`

#### Parameters

##### lib

[`RenderLib`](../interfaces/RenderLib.md)

##### rendererPtr

`Pointer`

##### stdin

`ReadStream`

##### stdout

`WriteStream`

##### width

`number`

##### height

`number`

##### config

[`CliRendererConfig`](../interfaces/CliRendererConfig.md) = `{}`

#### Returns

`CliRenderer`

#### Overrides

`EventEmitter.constructor`

## Properties

### currentRenderBuffer

> **currentRenderBuffer**: [`OptimizedBuffer`](OptimizedBuffer.md)

***

### debugOverlay

> **debugOverlay**: `object`

#### corner

> **corner**: [`DebugOverlayCorner`](../enumerations/DebugOverlayCorner.md) = `DebugOverlayCorner.bottomRight`

#### enabled

> **enabled**: `boolean` = `false`

***

### height

> **height**: `number`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`height`](../interfaces/RenderContext.md#height)

***

### nextRenderBuffer

> **nextRenderBuffer**: [`OptimizedBuffer`](OptimizedBuffer.md)

***

### rendererPtr

> **rendererPtr**: `Pointer`

***

### root

> `readonly` **root**: [`RootRenderable`](RootRenderable.md)

***

### stdin

> **stdin**: `ReadStream`

***

### width

> **width**: `number`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`width`](../interfaces/RenderContext.md#width)

## Accessors

### \_internalKeyInput

#### Get Signature

> **get** **\_internalKeyInput**(): [`InternalKeyHandler`](InternalKeyHandler.md)

##### Returns

[`InternalKeyHandler`](InternalKeyHandler.md)

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`_internalKeyInput`](../interfaces/RenderContext.md#_internalkeyinput)

***

### capabilities

#### Get Signature

> **get** **capabilities**(): `any`

##### Returns

`any`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`capabilities`](../interfaces/RenderContext.md#capabilities)

***

### console

#### Get Signature

> **get** **console**(): [`TerminalConsole`](TerminalConsole.md)

##### Returns

[`TerminalConsole`](TerminalConsole.md)

***

### controlState

#### Get Signature

> **get** **controlState**(): [`RendererControlState`](../enumerations/RendererControlState.md)

##### Returns

[`RendererControlState`](../enumerations/RendererControlState.md)

***

### currentControlState

#### Get Signature

> **get** **currentControlState**(): `string`

##### Returns

`string`

***

### currentFocusedRenderable

#### Get Signature

> **get** **currentFocusedRenderable**(): [`Renderable`](Renderable.md)

##### Returns

[`Renderable`](Renderable.md)

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`currentFocusedRenderable`](../interfaces/RenderContext.md#currentfocusedrenderable)

***

### experimental\_splitHeight

#### Get Signature

> **get** **experimental\_splitHeight**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **experimental\_splitHeight**(`splitHeight`): `void`

##### Parameters

###### splitHeight

`number`

##### Returns

`void`

***

### hasSelection

#### Get Signature

> **get** **hasSelection**(): `boolean`

##### Returns

`boolean`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`hasSelection`](../interfaces/RenderContext.md#hasselection)

***

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

##### Returns

`boolean`

***

### isRunning

#### Get Signature

> **get** **isRunning**(): `boolean`

##### Returns

`boolean`

***

### keyInput

#### Get Signature

> **get** **keyInput**(): [`KeyHandler`](KeyHandler.md)

##### Returns

[`KeyHandler`](KeyHandler.md)

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`keyInput`](../interfaces/RenderContext.md#keyinput)

***

### liveRequestCount

#### Get Signature

> **get** **liveRequestCount**(): `number`

##### Returns

`number`

***

### paletteDetectionStatus

#### Get Signature

> **get** **paletteDetectionStatus**(): `"idle"` \| `"detecting"` \| `"cached"`

##### Returns

`"idle"` \| `"detecting"` \| `"cached"`

***

### resolution

#### Get Signature

> **get** **resolution**(): [`PixelResolution`](../type-aliases/PixelResolution.md)

##### Returns

[`PixelResolution`](../type-aliases/PixelResolution.md)

***

### terminalHeight

#### Get Signature

> **get** **terminalHeight**(): `number`

##### Returns

`number`

***

### terminalWidth

#### Get Signature

> **get** **terminalWidth**(): `number`

##### Returns

`number`

***

### useConsole

#### Get Signature

> **get** **useConsole**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **useConsole**(`value`): `void`

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useKittyKeyboard

#### Get Signature

> **get** **useKittyKeyboard**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **useKittyKeyboard**(`use`): `void`

##### Parameters

###### use

`boolean`

##### Returns

`void`

***

### useMouse

#### Get Signature

> **get** **useMouse**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **useMouse**(`useMouse`): `void`

##### Parameters

###### useMouse

`boolean`

##### Returns

`void`

***

### useThread

#### Get Signature

> **get** **useThread**(): `boolean`

##### Returns

`boolean`

#### Set Signature

> **set** **useThread**(`useThread`): `void`

##### Parameters

###### useThread

`boolean`

##### Returns

`void`

***

### widthMethod

#### Get Signature

> **get** **widthMethod**(): [`WidthMethod`](../type-aliases/WidthMethod.md)

##### Returns

[`WidthMethod`](../type-aliases/WidthMethod.md)

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`widthMethod`](../interfaces/RenderContext.md#widthmethod)

## Methods

### addInputHandler()

> **addInputHandler**(`handler`): `void`

#### Parameters

##### handler

(`sequence`) => `boolean`

#### Returns

`void`

***

### addPostProcessFn()

> **addPostProcessFn**(`processFn`): `void`

#### Parameters

##### processFn

(`buffer`, `deltaTime`) => `void`

#### Returns

`void`

***

### addToHitGrid()

> **addToHitGrid**(`x`, `y`, `width`, `height`, `id`): `void`

#### Parameters

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

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`addToHitGrid`](../interfaces/RenderContext.md#addtohitgrid)

***

### auto()

> **auto**(): `void`

#### Returns

`void`

***

### clearFrameCallbacks()

> **clearFrameCallbacks**(): `void`

Removes all registered frame callbacks.

#### Returns

`void`

***

### clearPaletteCache()

> **clearPaletteCache**(): `void`

#### Returns

`void`

***

### clearPostProcessFns()

> **clearPostProcessFns**(): `void`

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`clearSelection`](../interfaces/RenderContext.md#clearselection)

***

### configureDebugOverlay()

> **configureDebugOverlay**(`options`): `void`

#### Parameters

##### options

###### corner?

[`DebugOverlayCorner`](../enumerations/DebugOverlayCorner.md)

###### enabled?

`boolean`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

***

### disableKittyKeyboard()

> **disableKittyKeyboard**(): `void`

#### Returns

`void`

***

### disableStdoutInterception()

> **disableStdoutInterception**(): `void`

#### Returns

`void`

***

### dropLive()

> **dropLive**(): `void`

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`dropLive`](../interfaces/RenderContext.md#droplive)

***

### dumpBuffers()

> **dumpBuffers**(`timestamp?`): `void`

#### Parameters

##### timestamp?

`number`

#### Returns

`void`

***

### dumpHitGrid()

> **dumpHitGrid**(): `void`

#### Returns

`void`

***

### dumpStdoutBuffer()

> **dumpStdoutBuffer**(`timestamp?`): `void`

#### Parameters

##### timestamp?

`number`

#### Returns

`void`

***

### enableKittyKeyboard()

> **enableKittyKeyboard**(`flags`): `void`

#### Parameters

##### flags

`number` = `0b00011`

#### Returns

`void`

***

### focusRenderable()

> **focusRenderable**(`renderable`): `void`

#### Parameters

##### renderable

[`Renderable`](Renderable.md)

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`focusRenderable`](../interfaces/RenderContext.md#focusrenderable)

***

### getDebugInputs()

> **getDebugInputs**(): `object`[]

#### Returns

`object`[]

***

### getLifecyclePasses()

> **getLifecyclePasses**(): `Set`\<[`Renderable`](Renderable.md)\>

#### Returns

`Set`\<[`Renderable`](Renderable.md)\>

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`getLifecyclePasses`](../interfaces/RenderContext.md#getlifecyclepasses)

***

### getPalette()

> **getPalette**(`options?`): `Promise`\<[`TerminalColors`](../interfaces/TerminalColors.md)\>

Detects the terminal's color palette

#### Parameters

##### options?

[`GetPaletteOptions`](../interfaces/GetPaletteOptions.md)

#### Returns

`Promise`\<[`TerminalColors`](../interfaces/TerminalColors.md)\>

Promise resolving to TerminalColors object containing palette and special colors

#### Throws

Error if renderer is suspended

***

### getSelection()

> **getSelection**(): [`Selection`](Selection.md)

#### Returns

[`Selection`](Selection.md)

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`getSelection`](../interfaces/RenderContext.md#getselection)

***

### getSelectionContainer()

> **getSelectionContainer**(): [`Renderable`](Renderable.md)

#### Returns

[`Renderable`](Renderable.md)

***

### getStats()

> **getStats**(): `object`

#### Returns

`object`

##### averageFrameTime

> **averageFrameTime**: `number`

##### fps

> **fps**: `number`

##### frameCount

> **frameCount**: `number`

##### frameTimes

> **frameTimes**: `number`[]

##### maxFrameTime

> **maxFrameTime**: `number`

##### minFrameTime

> **minFrameTime**: `number`

***

### idle()

> **idle**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### intermediateRender()

> **intermediateRender**(): `void`

#### Returns

`void`

***

### pause()

> **pause**(): `void`

#### Returns

`void`

***

### prependInputHandler()

> **prependInputHandler**(`handler`): `void`

#### Parameters

##### handler

(`sequence`) => `boolean`

#### Returns

`void`

***

### registerLifecyclePass()

> **registerLifecyclePass**(`renderable`): `void`

#### Parameters

##### renderable

[`Renderable`](Renderable.md)

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`registerLifecyclePass`](../interfaces/RenderContext.md#registerlifecyclepass)

***

### removeFrameCallback()

> **removeFrameCallback**(`callback`): `void`

Removes a previously registered frame callback.

#### Parameters

##### callback

(`deltaTime`) => `Promise`\<`void`\>

The callback function to remove

#### Returns

`void`

***

### removeInputHandler()

> **removeInputHandler**(`handler`): `void`

#### Parameters

##### handler

(`sequence`) => `boolean`

#### Returns

`void`

***

### removePostProcessFn()

> **removePostProcessFn**(`processFn`): `void`

#### Parameters

##### processFn

(`buffer`, `deltaTime`) => `void`

#### Returns

`void`

***

### requestLive()

> **requestLive**(): `void`

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`requestLive`](../interfaces/RenderContext.md#requestlive)

***

### requestRender()

> **requestRender**(): `void`

Requests a single render frame to be scheduled.

#### Returns

`void`

#### Remarks

This method is useful when you need to manually trigger a render update
without starting the continuous render loop. It's commonly used when
the renderer is stopped but you want to display changes.

#### Example

```ts
// Update UI without starting render loop
box.backgroundColor = "red"
renderer.requestRender()
```

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`requestRender`](../interfaces/RenderContext.md#requestrender)

***

### requestSelectionUpdate()

> **requestSelectionUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`requestSelectionUpdate`](../interfaces/RenderContext.md#requestselectionupdate)

***

### resetStats()

> **resetStats**(): `void`

#### Returns

`void`

***

### resume()

> **resume**(): `void`

#### Returns

`void`

***

### setBackgroundColor()

> **setBackgroundColor**(`color`): `void`

Sets the background color for the entire terminal canvas.

#### Parameters

##### color

[`ColorInput`](../type-aliases/ColorInput.md)

Color value (hex string, color name, or RGBA object)

#### Returns

`void`

#### Remarks

The background color fills the entire terminal area not covered by renderables.
Accepts multiple color formats including:
- Hex strings: "#FF0000", "#F00"
- Color names: "red", "blue", "green"
- RGBA objects: RGBA.fromInts(255, 0, 0, 255)

#### Example

```ts
// Using hex color
renderer.setBackgroundColor("#1a1b26")

// Using color name
renderer.setBackgroundColor("black")

// Using RGBA object
renderer.setBackgroundColor(RGBA.fromInts(26, 27, 38, 255))
```

***

### setCursorColor()

> **setCursorColor**(`color`): `void`

#### Parameters

##### color

[`RGBA`](RGBA.md)

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`setCursorColor`](../interfaces/RenderContext.md#setcursorcolor)

***

### setCursorPosition()

> **setCursorPosition**(`x`, `y`, `visible`): `void`

#### Parameters

##### x

`number`

##### y

`number`

##### visible

`boolean` = `true`

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`setCursorPosition`](../interfaces/RenderContext.md#setcursorposition)

***

### setCursorStyle()

> **setCursorStyle**(`style`, `blinking`, `color?`): `void`

#### Parameters

##### style

[`CursorStyle`](../type-aliases/CursorStyle.md)

##### blinking

`boolean` = `false`

##### color?

[`RGBA`](RGBA.md)

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`setCursorStyle`](../interfaces/RenderContext.md#setcursorstyle)

***

### setFrameCallback()

> **setFrameCallback**(`callback`): `void`

Registers a callback to be invoked on every render frame.

#### Parameters

##### callback

(`deltaTime`) => `Promise`\<`void`\>

Async function that receives deltaTime in milliseconds

#### Returns

`void`

#### Remarks

Frame callbacks are executed before rendering each frame and are useful for:
- Animations and smooth transitions
- Physics simulations
- Time-based updates
- Game loops

Multiple callbacks can be registered and will execute in order.

#### Example

```ts
let rotation = 0
renderer.setFrameCallback(async (deltaTime) => {
  rotation += deltaTime * 0.001
  box.transform.rotation = rotation
})
```

***

### setGatherStats()

> **setGatherStats**(`enabled`): `void`

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### setMemorySnapshotInterval()

> **setMemorySnapshotInterval**(`interval`): `void`

#### Parameters

##### interval

`number`

#### Returns

`void`

***

### setTerminalTitle()

> **setTerminalTitle**(`title`): `void`

#### Parameters

##### title

`string`

#### Returns

`void`

***

### setupTerminal()

> **setupTerminal**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `void`

Starts the continuous render loop.

#### Returns

`void`

#### Remarks

Once started, the renderer will continuously render frames at the configured
target FPS until [stop](#stop) is called. This is required for:
- Animations
- Interactive applications
- Real-time updates
- Frame callbacks

The render loop can be stopped with [stop](#stop) and restarted with [start](#start).

#### Example

```ts
const renderer = await createCliRenderer({ targetFps: 60 })

// Set up your UI
const box = new BoxRenderable(renderer, { width: 10, height: 5 })
renderer.root.add(box)

// Start the render loop
renderer.start()
```

***

### startSelection()

> **startSelection**(`renderable`, `x`, `y`): `void`

Start a new selection at the given coordinates.
Used by both mouse and keyboard selection.

#### Parameters

##### renderable

[`Renderable`](Renderable.md)

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`startSelection`](../interfaces/RenderContext.md#startselection)

***

### stop()

> **stop**(): `void`

Stops the continuous render loop.

#### Returns

`void`

#### Remarks

After stopping, the renderer will no longer automatically render frames.
You can still trigger manual renders using [requestRender](#requestrender).
The render loop can be restarted by calling [start](#start).

#### Example

```ts
// Stop rendering when done with animation
renderer.stop()

// Later, restart if needed
renderer.start()
```

***

### suspend()

> **suspend**(): `void`

#### Returns

`void`

***

### toggleDebugOverlay()

> **toggleDebugOverlay**(): `void`

#### Returns

`void`

***

### unregisterLifecyclePass()

> **unregisterLifecyclePass**(`renderable`): `void`

#### Parameters

##### renderable

[`Renderable`](Renderable.md)

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`unregisterLifecyclePass`](../interfaces/RenderContext.md#unregisterlifecyclepass)

***

### updateSelection()

> **updateSelection**(`currentRenderable`, `x`, `y`): `void`

#### Parameters

##### currentRenderable

[`Renderable`](Renderable.md)

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Implementation of

[`RenderContext`](../interfaces/RenderContext.md).[`updateSelection`](../interfaces/RenderContext.md#updateselection)

***

### setCursorColor()

> `static` **setCursorColor**(`renderer`, `color`): `void`

#### Parameters

##### renderer

`CliRenderer`

##### color

[`RGBA`](RGBA.md)

#### Returns

`void`

***

### setCursorPosition()

> `static` **setCursorPosition**(`renderer`, `x`, `y`, `visible`): `void`

#### Parameters

##### renderer

`CliRenderer`

##### x

`number`

##### y

`number`

##### visible

`boolean` = `true`

#### Returns

`void`

***

### setCursorStyle()

> `static` **setCursorStyle**(`renderer`, `style`, `blinking`, `color?`): `void`

#### Parameters

##### renderer

`CliRenderer`

##### style

[`CursorStyle`](../type-aliases/CursorStyle.md)

##### blinking

`boolean` = `false`

##### color?

[`RGBA`](RGBA.md)

#### Returns

`void`
