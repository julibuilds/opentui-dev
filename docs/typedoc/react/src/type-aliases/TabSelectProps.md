[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / TabSelectProps

# Type Alias: TabSelectProps

> **TabSelectProps** = `ComponentProps`\<[`TabSelectRenderableOptions`](../../../core/src/interfaces/TabSelectRenderableOptions.md), [`TabSelectRenderable`](../../../core/src/classes/TabSelectRenderable.md)\> & `object`

## Type Declaration

### focused?

> `optional` **focused**: `boolean`

### onChange()?

> `optional` **onChange**: (`index`, `option`) => `void`

#### Parameters

##### index

`number`

##### option

[`TabSelectOption`](../../../core/src/interfaces/TabSelectOption.md) | `null`

#### Returns

`void`

### onSelect()?

> `optional` **onSelect**: (`index`, `option`) => `void`

#### Parameters

##### index

`number`

##### option

[`TabSelectOption`](../../../core/src/interfaces/TabSelectOption.md) | `null`

#### Returns

`void`
