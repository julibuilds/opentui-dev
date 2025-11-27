[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / Renderable

# Abstract Class: Renderable

Base class for all renderable components in OpenTUI.
Provides layout (via Yoga/Flexbox), rendering, event handling, and focus management.

## Remarks

Renderable is the core building block for creating terminal UIs. It provides:
- **Flexbox Layout**: Full flexbox layout system via Yoga layout engine
- **Event Handling**: Mouse, keyboard, and paste events
- **Focus Management**: Focus and blur for keyboard input
- **Z-Index Ordering**: Control rendering order with zIndex
- **Buffering**: Offscreen rendering for performance optimization
- **Parent-Child Hierarchy**: Tree-based composition

All UI components (BoxRenderable, TextRenderable, etc.) extend this class.

## Example

```ts
// Create a custom renderable
class MyComponent extends Renderable {
  constructor(ctx: RenderContext, options: RenderableOptions) {
    super(ctx, options)
  }

  render(buffer: OptimizedBuffer, deltaTime: number): void {
    // Custom rendering logic
    buffer.drawText(this.x, this.y, "Hello!", RGBA.white())
  }
}

// Use built-in renderables
const root = new RootRenderable(ctx)
const box = new BoxRenderable(ctx, {
  width: 40,
  height: 10,
  flexDirection: "column",
  padding: 2
})
root.add(box)
```

## Extends

- [`BaseRenderable`](BaseRenderable.md)

## Extended by

- [`RootRenderable`](RootRenderable.md)
- [`BoxRenderable`](BoxRenderable.md)
- [`VRenderable`](VRenderable.md)
- [`FrameBufferRenderable`](FrameBufferRenderable.md)
- [`InputRenderable`](InputRenderable.md)
- [`LineNumberRenderable`](LineNumberRenderable.md)
- [`ScrollBarRenderable`](ScrollBarRenderable.md)
- [`ArrowRenderable`](ArrowRenderable.md)
- [`SelectRenderable`](SelectRenderable.md)
- [`SliderRenderable`](SliderRenderable.md)
- [`TabSelectRenderable`](TabSelectRenderable.md)
- [`TextBufferRenderable`](TextBufferRenderable.md)

## Constructors

### Constructor

> **new Renderable**(`ctx`, `options`): `Renderable`

#### Parameters

##### ctx

[`RenderContext`](../interfaces/RenderContext.md)

##### options

[`RenderableOptions`](../interfaces/RenderableOptions.md)\<`any`\>

#### Returns

`Renderable`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`constructor`](BaseRenderable.md#constructor)

## Properties

### \_childrenInLayoutOrder

> `protected` **\_childrenInLayoutOrder**: `Renderable`[] = `[]`

***

### \_childrenInZIndexOrder

> `protected` **\_childrenInZIndexOrder**: `Renderable`[] = `[]`

***

### \_ctx

> `protected` **\_ctx**: [`RenderContext`](../interfaces/RenderContext.md)

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`_dirty`](BaseRenderable.md#_dirty)

***

### \_focusable

> `protected` **\_focusable**: `boolean` = `false`

***

### \_focused

> `protected` **\_focused**: `boolean` = `false`

***

### \_height

> `protected` **\_height**: `number` \| `"auto"` \| `` `${number}%` ``

***

### \_heightValue

> `protected` **\_heightValue**: `number` = `0`

***

### \_id

> `protected` **\_id**: `string`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`_id`](BaseRenderable.md#_id)

***

### \_liveCount

> `protected` **\_liveCount**: `number` = `0`

***

### \_overflow

> `protected` **\_overflow**: [`OverflowString`](../type-aliases/OverflowString.md) = `"visible"`

***

### \_position

> `protected` **\_position**: [`Position`](../interfaces/Position.md) = `{}`

***

### \_positionType

> `protected` **\_positionType**: [`PositionTypeString`](../type-aliases/PositionTypeString.md) = `"relative"`

***

### \_translateX

> `protected` **\_translateX**: `number` = `0`

***

### \_translateY

> `protected` **\_translateY**: `number` = `0`

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`_visible`](BaseRenderable.md#_visible)

***

### \_width

> `protected` **\_width**: `number` \| `"auto"` \| `` `${number}%` ``

***

### \_widthValue

> `protected` **\_widthValue**: `number` = `0`

***

### \_x

> `protected` **\_x**: `number` = `0`

***

### \_y

> `protected` **\_y**: `number` = `0`

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`[BrandedRenderable]`](BaseRenderable.md#brandedrenderable)

***

### buffered

> `protected` **buffered**: `boolean`

***

### frameBuffer

> `protected` **frameBuffer**: [`OptimizedBuffer`](OptimizedBuffer.md) = `null`

***

### keypressHandler()

> `protected` **keypressHandler**: (`key`) => `void` = `null`

#### Parameters

##### key

[`KeyEvent`](KeyEvent.md)

#### Returns

`void`

***

### num

> `readonly` **num**: `number`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`num`](BaseRenderable.md#num)

***

### onLifecyclePass()

> **onLifecyclePass**: () => `void` = `null`

#### Returns

`void`

***

### parent

> **parent**: `Renderable` = `null`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`parent`](BaseRenderable.md#parent)

***

### pasteHandler()

> `protected` **pasteHandler**: (`event`) => `void` = `null`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

***

### renderAfter()?

> `optional` **renderAfter**: (`this`, `buffer`, `deltaTime`) => `void`

#### Parameters

##### this

`Renderable`

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

***

### renderBefore()?

> `optional` **renderBefore**: (`this`, `buffer`, `deltaTime`) => `void`

#### Parameters

##### this

`Renderable`

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

***

### selectable

> **selectable**: `boolean` = `false`

***

### yogaNode

> `protected` **yogaNode**: `Node`

***

### renderablesByNumber

> `static` **renderablesByNumber**: `Map`\<`number`, `Renderable`\>

## Accessors

### alignItems

#### Set Signature

> **set** **alignItems**(`alignItems`): `void`

##### Parameters

###### alignItems

[`AlignString`](../type-aliases/AlignString.md)

##### Returns

`void`

***

### alignSelf

#### Set Signature

> **set** **alignSelf**(`alignSelf`): `void`

##### Parameters

###### alignSelf

[`AlignString`](../type-aliases/AlignString.md)

##### Returns

`void`

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

***

### ctx

#### Get Signature

> **get** **ctx**(): [`RenderContext`](../interfaces/RenderContext.md)

##### Returns

[`RenderContext`](../interfaces/RenderContext.md)

***

### flexBasis

#### Set Signature

> **set** **flexBasis**(`basis`): `void`

##### Parameters

###### basis

`number` | `"auto"`

##### Returns

`void`

***

### flexDirection

#### Set Signature

> **set** **flexDirection**(`direction`): `void`

##### Parameters

###### direction

[`FlexDirectionString`](../type-aliases/FlexDirectionString.md)

##### Returns

`void`

***

### flexGrow

#### Set Signature

> **set** **flexGrow**(`grow`): `void`

##### Parameters

###### grow

`number`

##### Returns

`void`

***

### flexShrink

#### Set Signature

> **set** **flexShrink**(`shrink`): `void`

##### Parameters

###### shrink

`number`

##### Returns

`void`

***

### flexWrap

#### Set Signature

> **set** **flexWrap**(`wrap`): `void`

##### Parameters

###### wrap

[`WrapString`](../type-aliases/WrapString.md)

##### Returns

`void`

***

### focusable

#### Get Signature

> **get** **focusable**(): `boolean`

##### Returns

`boolean`

***

### focused

#### Get Signature

> **get** **focused**(): `boolean`

##### Returns

`boolean`

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

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`id`](BaseRenderable.md#id)

***

### isDestroyed

#### Get Signature

> **get** **isDestroyed**(): `boolean`

##### Returns

`boolean`

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`isDirty`](BaseRenderable.md#isdirty)

***

### justifyContent

#### Set Signature

> **set** **justifyContent**(`justifyContent`): `void`

##### Parameters

###### justifyContent

[`JustifyString`](../type-aliases/JustifyString.md)

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

***

### liveCount

#### Get Signature

> **get** **liveCount**(): `number`

##### Returns

`number`

***

### margin

#### Set Signature

> **set** **margin**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

***

### marginBottom

#### Set Signature

> **set** **marginBottom**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

***

### marginLeft

#### Set Signature

> **set** **marginLeft**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

***

### marginRight

#### Set Signature

> **set** **marginRight**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

***

### marginTop

#### Set Signature

> **set** **marginTop**(`margin`): `void`

##### Parameters

###### margin

`number` | `"auto"` | `` `${number}%` ``

##### Returns

`void`

***

### maxHeight

#### Set Signature

> **set** **maxHeight**(`maxHeight`): `void`

##### Parameters

###### maxHeight

`number` | `` `${number}%` ``

##### Returns

`void`

***

### maxWidth

#### Set Signature

> **set** **maxWidth**(`maxWidth`): `void`

##### Parameters

###### maxWidth

`number` | `` `${number}%` ``

##### Returns

`void`

***

### minHeight

#### Set Signature

> **set** **minHeight**(`minHeight`): `void`

##### Parameters

###### minHeight

`number` | `` `${number}%` ``

##### Returns

`void`

***

### minWidth

#### Set Signature

> **set** **minWidth**(`minWidth`): `void`

##### Parameters

###### minWidth

`number` | `` `${number}%` ``

##### Returns

`void`

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

***

### onMouse

#### Set Signature

> **set** **onMouse**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseDown

#### Set Signature

> **set** **onMouseDown**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseDrag

#### Set Signature

> **set** **onMouseDrag**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseDragEnd

#### Set Signature

> **set** **onMouseDragEnd**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseDrop

#### Set Signature

> **set** **onMouseDrop**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseMove

#### Set Signature

> **set** **onMouseMove**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseOut

#### Set Signature

> **set** **onMouseOut**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseOver

#### Set Signature

> **set** **onMouseOver**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseScroll

#### Set Signature

> **set** **onMouseScroll**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

***

### onMouseUp

#### Set Signature

> **set** **onMouseUp**(`handler`): `void`

##### Parameters

###### handler

(`event`) => `void`

##### Returns

`void`

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

***

### padding

#### Set Signature

> **set** **padding**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

***

### paddingBottom

#### Set Signature

> **set** **paddingBottom**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

***

### paddingLeft

#### Set Signature

> **set** **paddingLeft**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

***

### paddingRight

#### Set Signature

> **set** **paddingRight**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

***

### paddingTop

#### Set Signature

> **set** **paddingTop**(`padding`): `void`

##### Parameters

###### padding

`number` | `` `${number}%` ``

##### Returns

`void`

***

### position

#### Set Signature

> **set** **position**(`positionType`): `void`

##### Parameters

###### positionType

[`PositionTypeString`](../type-aliases/PositionTypeString.md)

##### Returns

`void`

***

### primaryAxis

#### Get Signature

> **get** **primaryAxis**(): `"column"` \| `"row"`

##### Returns

`"column"` \| `"row"`

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

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`visible`](BaseRenderable.md#visible)

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

## Methods

### \_getVisibleChildren()

> `protected` **\_getVisibleChildren**(): `number`[]

#### Returns

`number`[]

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

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`add`](BaseRenderable.md#add)

***

### blur()

> **blur**(): `void`

#### Returns

`void`

***

### createFrameBuffer()

> `protected` **createFrameBuffer**(): `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`destroy`](BaseRenderable.md#destroy)

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`destroyRecursively`](BaseRenderable.md#destroyrecursively)

***

### destroySelf()

> `protected` **destroySelf**(): `void`

#### Returns

`void`

***

### findDescendantById()

> **findDescendantById**(`id`): `Renderable`

#### Parameters

##### id

`string`

#### Returns

`Renderable`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`findDescendantById`](BaseRenderable.md#finddescendantbyid)

***

### focus()

> **focus**(): `void`

#### Returns

`void`

***

### getChildren()

> **getChildren**(): `Renderable`[]

#### Returns

`Renderable`[]

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`getChildren`](BaseRenderable.md#getchildren)

***

### getChildrenCount()

> **getChildrenCount**(): `number`

#### Returns

`number`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`getChildrenCount`](BaseRenderable.md#getchildrencount)

***

### getChildrenSortedByPrimaryAxis()

> **getChildrenSortedByPrimaryAxis**(): `Renderable`[]

#### Returns

`Renderable`[]

***

### getLayoutNode()

> **getLayoutNode**(): `Node`

#### Returns

`Node`

***

### getRenderable()

> **getRenderable**(`id`): `Renderable`

#### Parameters

##### id

`string`

#### Returns

`Renderable`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`getRenderable`](BaseRenderable.md#getrenderable)

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

***

### getSelectedText()

> **getSelectedText**(): `string`

#### Returns

`string`

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

***

### handleKeyPress()?

> `optional` **handleKeyPress**(`key`): `boolean`

#### Parameters

##### key

`string` | [`KeyEvent`](KeyEvent.md)

#### Returns

`boolean`

***

### handlePaste()?

> `optional` **handlePaste**(`event`): `void`

#### Parameters

##### event

[`PasteEvent`](PasteEvent.md)

#### Returns

`void`

***

### hasSelection()

> **hasSelection**(): `boolean`

#### Returns

`boolean`

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

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`insertBefore`](BaseRenderable.md#insertbefore)

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`markClean`](BaseRenderable.md#markclean)

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`markDirty`](BaseRenderable.md#markdirty)

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

***

### onMouseEvent()

> `protected` **onMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

***

### onRemove()

> `protected` **onRemove**(): `void`

#### Returns

`void`

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

***

### onSelectionChanged()

> **onSelectionChanged**(`selection`): `boolean`

#### Parameters

##### selection

[`Selection`](Selection.md)

#### Returns

`boolean`

***

### onUpdate()

> `protected` **onUpdate**(`deltaTime`): `void`

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### processMouseEvent()

> **processMouseEvent**(`event`): `void`

#### Parameters

##### event

[`MouseEvent`](MouseEvent.md)

#### Returns

`void`

***

### propagateLiveCount()

> `protected` **propagateLiveCount**(`delta`): `void`

#### Parameters

##### delta

`number`

#### Returns

`void`

***

### remove()

> **remove**(`id`): `void`

#### Parameters

##### id

`string`

#### Returns

`void`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`remove`](BaseRenderable.md#remove)

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

***

### renderSelf()

> `protected` **renderSelf**(`buffer`, `deltaTime`): `void`

#### Parameters

##### buffer

[`OptimizedBuffer`](OptimizedBuffer.md)

##### deltaTime

`number`

#### Returns

`void`

***

### requestRender()

> **requestRender**(): `void`

#### Returns

`void`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`requestRender`](BaseRenderable.md#requestrender)

***

### setPosition()

> **setPosition**(`position`): `void`

#### Parameters

##### position

[`Position`](../interfaces/Position.md)

#### Returns

`void`

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

***

### updateFromLayout()

> **updateFromLayout**(): `void`

#### Returns

`void`

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
