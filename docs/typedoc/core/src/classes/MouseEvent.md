[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / MouseEvent

# Class: MouseEvent

Represents a mouse event in the terminal.

## Remarks

Mouse events are triggered by user interactions such as clicks, drags, scrolls,
and mouse movements. Events are dispatched to the renderable at the mouse position.

## Constructors

### Constructor

> **new MouseEvent**(`target`, `attributes`): `MouseEvent`

#### Parameters

##### target

[`Renderable`](Renderable.md)

##### attributes

[`RawMouseEvent`](../type-aliases/RawMouseEvent.md) & `object`

#### Returns

`MouseEvent`

## Properties

### button

> `readonly` **button**: `number`

Mouse button that was pressed (0=left, 1=middle, 2=right)

***

### isSelecting?

> `readonly` `optional` **isSelecting**: `boolean`

***

### modifiers

> `readonly` **modifiers**: `object`

Keyboard modifiers active during the event

#### alt

> **alt**: `boolean`

#### ctrl

> **ctrl**: `boolean`

#### shift

> **shift**: `boolean`

***

### scroll?

> `readonly` `optional` **scroll**: [`ScrollInfo`](../interfaces/ScrollInfo.md)

***

### source?

> `readonly` `optional` **source**: [`Renderable`](Renderable.md)

The renderable that is the source of a drag operation

***

### target

> `readonly` **target**: [`Renderable`](Renderable.md)

***

### type

> `readonly` **type**: [`MouseEventType`](../type-aliases/MouseEventType.md)

Type of mouse event (e.g., "down", "up", "move", "drag", "scroll")

***

### x

> `readonly` **x**: `number`

X coordinate in terminal cells

***

### y

> `readonly` **y**: `number`

Y coordinate in terminal cells

## Accessors

### defaultPrevented

#### Get Signature

> **get** **defaultPrevented**(): `boolean`

##### Returns

`boolean`

***

### propagationStopped

#### Get Signature

> **get** **propagationStopped**(): `boolean`

##### Returns

`boolean`

## Methods

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`
