[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / InternalKeyHandler

# Class: InternalKeyHandler

This class is used internally by the renderer to ensure global handlers
can preventDefault before renderable handlers process events.

## Extends

- [`KeyHandler`](KeyHandler.md)

## Constructors

### Constructor

> **new InternalKeyHandler**(`useKittyKeyboard`): `InternalKeyHandler`

#### Parameters

##### useKittyKeyboard

`boolean` = `false`

#### Returns

`InternalKeyHandler`

#### Overrides

[`KeyHandler`](KeyHandler.md).[`constructor`](KeyHandler.md#constructor)

## Properties

### useKittyKeyboard

> `protected` **useKittyKeyboard**: `boolean`

#### Inherited from

[`KeyHandler`](KeyHandler.md).[`useKittyKeyboard`](KeyHandler.md#usekittykeyboard)

## Methods

### emit()

> **emit**\<`K`\>(`event`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type Parameters

##### K

`K` *extends* keyof [`KeyHandlerEventMap`](../type-aliases/KeyHandlerEventMap.md)

#### Parameters

##### event

`K`

##### args

...[`KeyHandlerEventMap`](../type-aliases/KeyHandlerEventMap.md)\[`K`\]

#### Returns

`boolean`

#### Since

v0.1.26

#### Overrides

`KeyHandler.emit`

***

### offInternal()

> **offInternal**\<`K`\>(`event`, `handler`): `void`

#### Type Parameters

##### K

`K` *extends* keyof [`KeyHandlerEventMap`](../type-aliases/KeyHandlerEventMap.md)

#### Parameters

##### event

`K`

##### handler

(...`args`) => `void`

#### Returns

`void`

***

### onInternal()

> **onInternal**\<`K`\>(`event`, `handler`): `void`

#### Type Parameters

##### K

`K` *extends* keyof [`KeyHandlerEventMap`](../type-aliases/KeyHandlerEventMap.md)

#### Parameters

##### event

`K`

##### handler

(...`args`) => `void`

#### Returns

`void`

***

### processInput()

> **processInput**(`data`): `boolean`

#### Parameters

##### data

`string`

#### Returns

`boolean`

#### Inherited from

[`KeyHandler`](KeyHandler.md).[`processInput`](KeyHandler.md#processinput)

***

### processPaste()

> **processPaste**(`data`): `void`

#### Parameters

##### data

`string`

#### Returns

`void`

#### Inherited from

[`KeyHandler`](KeyHandler.md).[`processPaste`](KeyHandler.md#processpaste)
