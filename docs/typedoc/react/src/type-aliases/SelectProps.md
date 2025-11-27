[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [react/src](../README.md) / SelectProps

# Type Alias: SelectProps

> **SelectProps** = `ComponentProps`\<[`SelectRenderableOptions`](../../../core/src/interfaces/SelectRenderableOptions.md), [`SelectRenderable`](../../../core/src/classes/SelectRenderable.md)\> & `object`

## Type Declaration

### focused?

> `optional` **focused**: `boolean`

### onChange()?

> `optional` **onChange**: (`index`, `option`) => `void`

#### Parameters

##### index

`number`

##### option

[`SelectOption`](../../../core/src/interfaces/SelectOption.md) | `null`

#### Returns

`void`

### onSelect()?

> `optional` **onSelect**: (`index`, `option`) => `void`

#### Parameters

##### index

`number`

##### option

[`SelectOption`](../../../core/src/interfaces/SelectOption.md) | `null`

#### Returns

`void`
