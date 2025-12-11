[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / RenderContext

# Interface: RenderContext

## Extends

- `EventEmitter`

## Properties

### \_internalKeyInput

> **\_internalKeyInput**: [`InternalKeyHandler`](../classes/InternalKeyHandler.md)

***

### addToHitGrid()

> **addToHitGrid**: (`x`, `y`, `width`, `height`, `id`) => `void`

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

***

### capabilities

> **capabilities**: `any`

***

### clearSelection()

> **clearSelection**: () => `void`

#### Returns

`void`

***

### currentFocusedRenderable

> **currentFocusedRenderable**: [`Renderable`](../classes/Renderable.md)

***

### dropLive()

> **dropLive**: () => `void`

#### Returns

`void`

***

### focusRenderable()

> **focusRenderable**: (`renderable`) => `void`

#### Parameters

##### renderable

[`Renderable`](../classes/Renderable.md)

#### Returns

`void`

***

### getLifecyclePasses()

> **getLifecyclePasses**: () => `Set`\<[`Renderable`](../classes/Renderable.md)\>

#### Returns

`Set`\<[`Renderable`](../classes/Renderable.md)\>

***

### getSelection()

> **getSelection**: () => [`Selection`](../classes/Selection.md)

#### Returns

[`Selection`](../classes/Selection.md)

***

### hasSelection

> **hasSelection**: `boolean`

***

### height

> **height**: `number`

***

### keyInput

> **keyInput**: [`KeyHandler`](../classes/KeyHandler.md)

***

### registerLifecyclePass()

> **registerLifecyclePass**: (`renderable`) => `void`

#### Parameters

##### renderable

[`Renderable`](../classes/Renderable.md)

#### Returns

`void`

***

### requestLive()

> **requestLive**: () => `void`

#### Returns

`void`

***

### requestRender()

> **requestRender**: () => `void`

#### Returns

`void`

***

### requestSelectionUpdate()

> **requestSelectionUpdate**: () => `void`

#### Returns

`void`

***

### setCursorColor()

> **setCursorColor**: (`color`) => `void`

#### Parameters

##### color

[`RGBA`](../classes/RGBA.md)

#### Returns

`void`

***

### setCursorPosition()

> **setCursorPosition**: (`x`, `y`, `visible`) => `void`

#### Parameters

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

> **setCursorStyle**: (`style`, `blinking`) => `void`

#### Parameters

##### style

[`CursorStyle`](../type-aliases/CursorStyle.md)

##### blinking

`boolean`

#### Returns

`void`

***

### startSelection()

> **startSelection**: (`renderable`, `x`, `y`) => `void`

#### Parameters

##### renderable

[`Renderable`](../classes/Renderable.md)

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### unregisterLifecyclePass()

> **unregisterLifecyclePass**: (`renderable`) => `void`

#### Parameters

##### renderable

[`Renderable`](../classes/Renderable.md)

#### Returns

`void`

***

### updateSelection()

> **updateSelection**: (`currentRenderable`, `x`, `y`) => `void`

#### Parameters

##### currentRenderable

[`Renderable`](../classes/Renderable.md)

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### width

> **width**: `number`

***

### widthMethod

> **widthMethod**: [`WidthMethod`](../type-aliases/WidthMethod.md)
