[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / KeyHandler

# Class: KeyHandler

## Extends

- `EventEmitter`\<[`KeyHandlerEventMap`](../type-aliases/KeyHandlerEventMap.md)\>

## Extended by

- [`InternalKeyHandler`](InternalKeyHandler.md)

## Constructors

### Constructor

> **new KeyHandler**(`useKittyKeyboard`): `KeyHandler`

#### Parameters

##### useKittyKeyboard

`boolean` = `false`

#### Returns

`KeyHandler`

#### Overrides

`EventEmitter<KeyHandlerEventMap>.constructor`

## Properties

### useKittyKeyboard

> `protected` **useKittyKeyboard**: `boolean`

## Methods

### processInput()

> **processInput**(`data`): `boolean`

#### Parameters

##### data

`string`

#### Returns

`boolean`

***

### processPaste()

> **processPaste**(`data`): `void`

#### Parameters

##### data

`string`

#### Returns

`void`
