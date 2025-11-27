[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / RootTextNodeRenderable

# Class: RootTextNodeRenderable

**`Internal`**

Root text node that connects to the rendering system.

## Remarks

RootTextNodeRenderable extends TextNodeRenderable with a connection to the render context
and its parent [TextRenderable](TextRenderable.md). It's used internally by the Text component as the
root of the text node tree.

## Extends

- [`TextNodeRenderable`](TextNodeRenderable.md)

## Constructors

### Constructor

> **new RootTextNodeRenderable**(`ctx`, `options`, `textParent`): `RootTextNodeRenderable`

#### Parameters

##### ctx

[`RenderContext`](../interfaces/RenderContext.md)

##### options

[`TextNodeOptions`](../interfaces/TextNodeOptions.md)

##### textParent

[`TextRenderable`](TextRenderable.md)

#### Returns

`RootTextNodeRenderable`

#### Overrides

[`TextNodeRenderable`](TextNodeRenderable.md).[`constructor`](TextNodeRenderable.md#constructor)

## Properties

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`_dirty`](TextNodeRenderable.md#_dirty)

***

### \_id

> `protected` **\_id**: `string`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`_id`](TextNodeRenderable.md#_id)

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`_visible`](TextNodeRenderable.md#_visible)

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`[BrandedRenderable]`](TextNodeRenderable.md#brandedrenderable)

***

### \[BrandedTextNodeRenderable\]

> **\[BrandedTextNodeRenderable\]**: `boolean` = `true`

**`Internal`**

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`[BrandedTextNodeRenderable]`](TextNodeRenderable.md#brandedtextnoderenderable)

***

### num

> `readonly` **num**: `number`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`num`](TextNodeRenderable.md#num)

***

### parent

> **parent**: [`TextNodeRenderable`](TextNodeRenderable.md) = `null`

Parent node, if this is a child of another TextNodeRenderable.

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`parent`](TextNodeRenderable.md#parent)

***

### textParent

> **textParent**: [`TextRenderable`](TextRenderable.md)

The TextRenderable that owns this root node.

## Accessors

### attributes

#### Get Signature

> **get** **attributes**(): `number`

##### Returns

`number`

#### Set Signature

> **set** **attributes**(`attributes`): `void`

##### Parameters

###### attributes

`number`

##### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`attributes`](TextNodeRenderable.md#attributes)

***

### bg

#### Get Signature

> **get** **bg**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **bg**(`bg`): `void`

##### Parameters

###### bg

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`bg`](TextNodeRenderable.md#bg)

***

### children

#### Get Signature

> **get** **children**(): (`string` \| [`TextNodeRenderable`](TextNodeRenderable.md))[]

##### Returns

(`string` \| [`TextNodeRenderable`](TextNodeRenderable.md))[]

#### Set Signature

> **set** **children**(`children`): `void`

##### Parameters

###### children

(`string` \| [`TextNodeRenderable`](TextNodeRenderable.md))[]

##### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`children`](TextNodeRenderable.md#children)

***

### fg

#### Get Signature

> **get** **fg**(): [`RGBA`](RGBA.md)

##### Returns

[`RGBA`](RGBA.md)

#### Set Signature

> **set** **fg**(`fg`): `void`

##### Parameters

###### fg

`string` | [`RGBA`](RGBA.md)

##### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`fg`](TextNodeRenderable.md#fg)

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

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`id`](TextNodeRenderable.md#id)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`isDirty`](TextNodeRenderable.md#isdirty)

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

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`visible`](TextNodeRenderable.md#visible)

## Methods

### add()

> **add**(`obj`, `index?`): `number`

Adds a child to this text node.

#### Parameters

##### obj

The child to add: a string, TextNodeRenderable, or StyledText

`string` | [`StyledText`](StyledText.md) | [`TextNodeRenderable`](TextNodeRenderable.md)

##### index?

`number`

Optional position to insert at. If omitted, appends to end.

#### Returns

`number`

The index where the child was inserted

#### Remarks

- Strings are rendered with this node's inherited styles
- TextNodeRenderables become children with style inheritance
- StyledText is converted to TextNodeRenderables and inserted

#### Example

```typescript
const node = new TextNodeRenderable({ fg: "blue" });
node.add("Hello ");
node.add(new TextNodeRenderable({ attributes: BOLD }).add("world"));
```

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`add`](TextNodeRenderable.md#add)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`clear`](TextNodeRenderable.md#clear)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`destroy`](TextNodeRenderable.md#destroy)

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`destroyRecursively`](TextNodeRenderable.md#destroyrecursively)

***

### findDescendantById()

> **findDescendantById**(`id`): [`BaseRenderable`](BaseRenderable.md)

#### Parameters

##### id

`string`

#### Returns

[`BaseRenderable`](BaseRenderable.md)

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`findDescendantById`](TextNodeRenderable.md#finddescendantbyid)

***

### gatherWithInheritedStyle()

> **gatherWithInheritedStyle**(`parentStyle`): [`TextChunk`](../interfaces/TextChunk.md)[]

**`Internal`**

Recursively flattens this node tree into styled text chunks.

#### Parameters

##### parentStyle

Style inherited from parent

###### attributes

`number`

###### bg?

[`RGBA`](RGBA.md)

###### fg?

[`RGBA`](RGBA.md)

#### Returns

[`TextChunk`](../interfaces/TextChunk.md)[]

Array of styled text chunks ready for rendering

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`gatherWithInheritedStyle`](TextNodeRenderable.md#gatherwithinheritedstyle)

***

### getChildren()

> **getChildren**(): [`BaseRenderable`](BaseRenderable.md)[]

#### Returns

[`BaseRenderable`](BaseRenderable.md)[]

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`getChildren`](TextNodeRenderable.md#getchildren)

***

### getChildrenCount()

> **getChildrenCount**(): `number`

#### Returns

`number`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`getChildrenCount`](TextNodeRenderable.md#getchildrencount)

***

### getRenderable()

> **getRenderable**(`id`): [`BaseRenderable`](BaseRenderable.md)

#### Parameters

##### id

`string`

#### Returns

[`BaseRenderable`](BaseRenderable.md)

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`getRenderable`](TextNodeRenderable.md#getrenderable)

***

### getRenderableIndex()

> **getRenderableIndex**(`id`): `number`

#### Parameters

##### id

`string`

#### Returns

`number`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`getRenderableIndex`](TextNodeRenderable.md#getrenderableindex)

***

### insertBefore()

> **insertBefore**(`child`, `anchorNode`): `this`

#### Parameters

##### child

`string` | [`StyledText`](StyledText.md) | [`TextNodeRenderable`](TextNodeRenderable.md)

##### anchorNode

`unknown`

#### Returns

`this`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`insertBefore`](TextNodeRenderable.md#insertbefore)

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`markClean`](TextNodeRenderable.md#markclean)

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`markDirty`](TextNodeRenderable.md#markdirty)

***

### mergeStyles()

> **mergeStyles**(`parentStyle`): `object`

Merges this node's styles with parent styles.

#### Parameters

##### parentStyle

The parent's effective style

###### attributes

`number`

###### bg?

[`RGBA`](RGBA.md)

###### fg?

[`RGBA`](RGBA.md)

#### Returns

`object`

The merged style (own properties override parent's)

##### attributes

> **attributes**: `number`

##### bg?

> `optional` **bg**: [`RGBA`](RGBA.md)

##### fg?

> `optional` **fg**: [`RGBA`](RGBA.md)

#### Remarks

Attributes are OR'd together (accumulative), while colors use this node's if defined.

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`mergeStyles`](TextNodeRenderable.md#mergestyles)

***

### remove()

> **remove**(`id`): `this`

#### Parameters

##### id

`string`

#### Returns

`this`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`remove`](TextNodeRenderable.md#remove)

***

### replace()

> **replace**(`obj`, `index`): `void`

#### Parameters

##### obj

`string` | [`TextNodeRenderable`](TextNodeRenderable.md)

##### index

`number`

#### Returns

`void`

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`replace`](TextNodeRenderable.md#replace)

***

### requestRender()

> **requestRender**(): `void`

Requests a render of the parent Text component.

#### Returns

`void`

#### Overrides

[`TextNodeRenderable`](TextNodeRenderable.md).[`requestRender`](TextNodeRenderable.md#requestrender)

***

### toChunks()

> **toChunks**(`parentStyle`): [`TextChunk`](../interfaces/TextChunk.md)[]

Converts this text node tree to an array of styled chunks.

#### Parameters

##### parentStyle

Optional parent style to inherit from

###### attributes

`number`

###### bg?

[`RGBA`](RGBA.md)

###### fg?

[`RGBA`](RGBA.md)

#### Returns

[`TextChunk`](../interfaces/TextChunk.md)[]

Flattened array of styled text chunks

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`toChunks`](TextNodeRenderable.md#tochunks)

***

### fromNodes()

> `static` **fromNodes**(`nodes`, `options`): [`TextNodeRenderable`](TextNodeRenderable.md)

Creates a TextNodeRenderable containing multiple child nodes.

#### Parameters

##### nodes

[`TextNodeRenderable`](TextNodeRenderable.md)[]

Child nodes to add

##### options

`Partial`\<[`TextNodeOptions`](../interfaces/TextNodeOptions.md)\> = `{}`

Optional style configuration for the parent

#### Returns

[`TextNodeRenderable`](TextNodeRenderable.md)

A new TextNodeRenderable wrapping the children

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`fromNodes`](TextNodeRenderable.md#fromnodes)

***

### fromString()

> `static` **fromString**(`text`, `options`): [`TextNodeRenderable`](TextNodeRenderable.md)

Creates a TextNodeRenderable from a plain string.

#### Parameters

##### text

`string`

The text content

##### options

`Partial`\<[`TextNodeOptions`](../interfaces/TextNodeOptions.md)\> = `{}`

Optional style configuration

#### Returns

[`TextNodeRenderable`](TextNodeRenderable.md)

A new TextNodeRenderable containing the text

#### Example

```typescript
const node = TextNodeRenderable.fromString("Hello", { fg: "red" });
```

#### Inherited from

[`TextNodeRenderable`](TextNodeRenderable.md).[`fromString`](TextNodeRenderable.md#fromstring)
