[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / ProxiedVNode

# Type Alias: ProxiedVNode\<TCtor\>

> **ProxiedVNode**\<`TCtor`\> = [`VNode`](../interfaces/VNode.md)\<`TCtor` *extends* [`RenderableConstructor`](../interfaces/RenderableConstructor.md)\<infer P\> ? `P` : `any`\> & `{ [K in keyof InstanceType<TCtor>]: InstanceType<TCtor>[K] extends (args: infer Args) => any ? (args: Args) => ProxiedVNode<TCtor> : InstanceType<TCtor>[K] }`

## Type Parameters

### TCtor

`TCtor` *extends* [`RenderableConstructor`](../interfaces/RenderableConstructor.md)\<`any`\>
