[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / h

# Function: h()

## Call Signature

> **h**\<`TCtor`\>(`type`, `props?`, ...`children?`): [`ProxiedVNode`](../type-aliases/ProxiedVNode.md)\<`TCtor`\>

### Type Parameters

#### TCtor

`TCtor` *extends* [`RenderableConstructor`](../interfaces/RenderableConstructor.md)\<`any`\>

### Parameters

#### type

`TCtor`

#### props?

`TCtor` *extends* [`RenderableConstructor`](../interfaces/RenderableConstructor.md)\<`P`\> ? `P` : `never`

#### children?

...[`VChild`](../type-aliases/VChild.md)[]

### Returns

[`ProxiedVNode`](../type-aliases/ProxiedVNode.md)\<`TCtor`\>

## Call Signature

> **h**\<`P`\>(`type`, `props?`, ...`children?`): [`VNode`](../interfaces/VNode.md)\<`P`\>

### Type Parameters

#### P

`P`

### Parameters

#### type

[`FunctionalConstruct`](../type-aliases/FunctionalConstruct.md)\<`P`\>

#### props?

`P`

#### children?

...[`VChild`](../type-aliases/VChild.md)[]

### Returns

[`VNode`](../interfaces/VNode.md)\<`P`\>

## Call Signature

> **h**\<`P`\>(`type`, `props?`, ...`children?`): [`VNode`](../interfaces/VNode.md)\<`P`, [`VChild`](../type-aliases/VChild.md)[]\> \| [`ProxiedVNode`](../type-aliases/ProxiedVNode.md)\<`any`\>

### Type Parameters

#### P

`P`

### Parameters

#### type

[`Construct`](../type-aliases/Construct.md)\<`P`\>

#### props?

`P`

#### children?

...[`VChild`](../type-aliases/VChild.md)[]

### Returns

[`VNode`](../interfaces/VNode.md)\<`P`, [`VChild`](../type-aliases/VChild.md)[]\> \| [`ProxiedVNode`](../type-aliases/ProxiedVNode.md)\<`any`\>
