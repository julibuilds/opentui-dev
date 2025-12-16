[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / RendererEvents

# Interface: RendererEvents

## Properties

### debugOverlay:toggle()

> **debugOverlay:toggle**: (`enabled`) => `void`

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### key()

> **key**: (`data`) => `void`

#### Parameters

##### data

`Buffer`

#### Returns

`void`

***

### memory:snapshot()

> **memory:snapshot**: (`snapshot`) => `void`

#### Parameters

##### snapshot

###### arrayBuffers

`number`

###### heapTotal

`number`

###### heapUsed

`number`

#### Returns

`void`

***

### resize()

> **resize**: (`width`, `height`) => `void`

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### selection()

> **selection**: (`selection`) => `void`

#### Parameters

##### selection

[`Selection`](../classes/Selection.md)

#### Returns

`void`
