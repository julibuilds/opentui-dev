[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / delegate

# Function: delegate()

Controlled delegation that routes selected properties/methods
to a descendant renderable identified by ID.

## Call Signature

> **delegate**\<`Factory`, `InnerNode`, `TargetMap`, `Mapping`\>(`mapping`, `vnode`): [`Renderable`](../classes/Renderable.md)

### Type Parameters

#### Factory

`Factory` *extends* [`InstantiateFn`](../type-aliases/InstantiateFn.md)\<`any`\>

#### InnerNode

`InnerNode` *extends* `any`

#### TargetMap

`TargetMap` *extends* `Record`\<keyof `InnerNode`, `string`\>

#### Mapping

`Mapping` *extends* `Partial`\<`TargetMap`\>

### Parameters

#### mapping

[`ValidateShape`](../type-aliases/ValidateShape.md)\<`Mapping`, `TargetMap`\>

#### vnode

`Factory`

### Returns

[`Renderable`](../classes/Renderable.md)

## Call Signature

> **delegate**\<`ConstructorType`, `TargetMap`, `Mapping`\>(`mapping`, `vnode`): [`ProxiedVNode`](../type-aliases/ProxiedVNode.md)\<`ConstructorType`\>

### Type Parameters

#### ConstructorType

`ConstructorType` *extends* [`RenderableConstructor`](../interfaces/RenderableConstructor.md)\<`any`\>

#### TargetMap

`TargetMap` *extends* `Record`\<keyof `InstanceType`\<`ConstructorType`\>, `string`\>

#### Mapping

`Mapping` *extends* `Partial`\<`TargetMap`\>

### Parameters

#### mapping

[`ValidateShape`](../type-aliases/ValidateShape.md)\<`Mapping`, `TargetMap`\>

#### vnode

[`ProxiedVNode`](../type-aliases/ProxiedVNode.md)\<`ConstructorType`\>

### Returns

[`ProxiedVNode`](../type-aliases/ProxiedVNode.md)\<`ConstructorType`\>

## Call Signature

> **delegate**\<`ConstructorType`, `Mapping`\>(`mapping`, `vnode`): [`VNode`](../interfaces/VNode.md)

### Type Parameters

#### ConstructorType

`ConstructorType` *extends* [`RenderableConstructor`](../interfaces/RenderableConstructor.md)\<`any`\>

#### Mapping

`Mapping` *extends* `Partial`\<`Record`\<keyof `InstanceType`\<`ConstructorType`\>, `string`\>\>

### Parameters

#### mapping

[`ValidateShape`](../type-aliases/ValidateShape.md)\<`Mapping`, `string`\>

#### vnode

[`VNode`](../interfaces/VNode.md)\<`any`, [`VChild`](../type-aliases/VChild.md)[]\> & `object`

### Returns

[`VNode`](../interfaces/VNode.md)
