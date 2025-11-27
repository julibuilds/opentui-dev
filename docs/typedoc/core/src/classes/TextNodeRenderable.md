[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / TextNodeRenderable

# Class: TextNodeRenderable

A lightweight node for building styled text hierarchies.

## Remarks

TextNodeRenderable is a tree structure for composing styled text. Unlike full [Renderable](Renderable.md)s,
TextNodes don't participate in layout or rendering directly. Instead, they form a tree that
gets flattened into [TextChunk](../interfaces/TextChunk.md)s for rendering by [Text](../functions/Text.md).

Key features:
- Hierarchical style inheritance (children inherit parent styles)
- Lightweight compared to full renderables
- Supports mixing plain strings and styled nodes
- Can convert to/from [StyledText](StyledText.md)

TextNodes are ideal for:
- Rich text with nested styling (bold within italic, colored within underlined, etc.)
- Building text programmatically with inherited styles
- Converting from markup or styled text formats

## Examples

Building styled text:
```typescript
const root = new TextNodeRenderable({ fg: "white" });
root.add("Hello ");

const bold = new TextNodeRenderable({ attributes: BOLD });
bold.add("world");
root.add(bold);

root.add("!");
// Renders as: "Hello world!" with "world" in bold
```

Style inheritance:
```typescript
const outer = new TextNodeRenderable({ fg: "red" });
const inner = new TextNodeRenderable({ attributes: BOLD });
inner.add("Bold Red");
outer.add(inner);
// "Bold Red" is both red (inherited) and bold
```

## Extends

- [`BaseRenderable`](BaseRenderable.md)

## Extended by

- [`RootTextNodeRenderable`](RootTextNodeRenderable.md)

## Constructors

### Constructor

> **new TextNodeRenderable**(`options`): `TextNodeRenderable`

#### Parameters

##### options

[`TextNodeOptions`](../interfaces/TextNodeOptions.md)

#### Returns

`TextNodeRenderable`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`constructor`](BaseRenderable.md#constructor)

## Properties

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`_dirty`](BaseRenderable.md#_dirty)

***

### \_id

> `protected` **\_id**: `string`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`_id`](BaseRenderable.md#_id)

***

### \_visible

> `protected` **\_visible**: `boolean` = `true`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`_visible`](BaseRenderable.md#_visible)

***

### \[BrandedRenderable\]

> **\[BrandedRenderable\]**: `boolean` = `true`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`[BrandedRenderable]`](BaseRenderable.md#brandedrenderable)

***

### \[BrandedTextNodeRenderable\]

> **\[BrandedTextNodeRenderable\]**: `boolean` = `true`

**`Internal`**

***

### num

> `readonly` **num**: `number`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`num`](BaseRenderable.md#num)

***

### parent

> **parent**: `TextNodeRenderable` = `null`

Parent node, if this is a child of another TextNodeRenderable.

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`parent`](BaseRenderable.md#parent)

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

***

### children

#### Get Signature

> **get** **children**(): (`string` \| `TextNodeRenderable`)[]

##### Returns

(`string` \| `TextNodeRenderable`)[]

#### Set Signature

> **set** **children**(`children`): `void`

##### Parameters

###### children

(`string` \| `TextNodeRenderable`)[]

##### Returns

`void`

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

[`BaseRenderable`](BaseRenderable.md).[`id`](BaseRenderable.md#id)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

##### Returns

`boolean`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`isDirty`](BaseRenderable.md#isdirty)

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

[`BaseRenderable`](BaseRenderable.md).[`visible`](BaseRenderable.md#visible)

## Methods

### add()

> **add**(`obj`, `index?`): `number`

Adds a child to this text node.

#### Parameters

##### obj

The child to add: a string, TextNodeRenderable, or StyledText

`string` | [`StyledText`](StyledText.md) | `TextNodeRenderable`

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

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`add`](BaseRenderable.md#add)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`destroy`](BaseRenderable.md#destroy)

***

### destroyRecursively()

> **destroyRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`destroyRecursively`](BaseRenderable.md#destroyrecursively)

***

### findDescendantById()

> **findDescendantById**(`id`): [`BaseRenderable`](BaseRenderable.md)

#### Parameters

##### id

`string`

#### Returns

[`BaseRenderable`](BaseRenderable.md)

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`findDescendantById`](BaseRenderable.md#finddescendantbyid)

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

***

### getChildren()

> **getChildren**(): [`BaseRenderable`](BaseRenderable.md)[]

#### Returns

[`BaseRenderable`](BaseRenderable.md)[]

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`getChildren`](BaseRenderable.md#getchildren)

***

### getChildrenCount()

> **getChildrenCount**(): `number`

#### Returns

`number`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`getChildrenCount`](BaseRenderable.md#getchildrencount)

***

### getRenderable()

> **getRenderable**(`id`): [`BaseRenderable`](BaseRenderable.md)

#### Parameters

##### id

`string`

#### Returns

[`BaseRenderable`](BaseRenderable.md)

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`getRenderable`](BaseRenderable.md#getrenderable)

***

### getRenderableIndex()

> **getRenderableIndex**(`id`): `number`

#### Parameters

##### id

`string`

#### Returns

`number`

***

### insertBefore()

> **insertBefore**(`child`, `anchorNode`): `this`

#### Parameters

##### child

`string` | [`StyledText`](StyledText.md) | `TextNodeRenderable`

##### anchorNode

`unknown`

#### Returns

`this`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`insertBefore`](BaseRenderable.md#insertbefore)

***

### markClean()

> `protected` **markClean**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`markClean`](BaseRenderable.md#markclean)

***

### markDirty()

> `protected` **markDirty**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseRenderable`](BaseRenderable.md).[`markDirty`](BaseRenderable.md#markdirty)

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

***

### remove()

> **remove**(`id`): `this`

#### Parameters

##### id

`string`

#### Returns

`this`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`remove`](BaseRenderable.md#remove)

***

### replace()

> **replace**(`obj`, `index`): `void`

#### Parameters

##### obj

`string` | `TextNodeRenderable`

##### index

`number`

#### Returns

`void`

***

### requestRender()

> **requestRender**(): `void`

#### Returns

`void`

#### Overrides

[`BaseRenderable`](BaseRenderable.md).[`requestRender`](BaseRenderable.md#requestrender)

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

***

### fromNodes()

> `static` **fromNodes**(`nodes`, `options`): `TextNodeRenderable`

Creates a TextNodeRenderable containing multiple child nodes.

#### Parameters

##### nodes

`TextNodeRenderable`[]

Child nodes to add

##### options

`Partial`\<[`TextNodeOptions`](../interfaces/TextNodeOptions.md)\> = `{}`

Optional style configuration for the parent

#### Returns

`TextNodeRenderable`

A new TextNodeRenderable wrapping the children

***

### fromString()

> `static` **fromString**(`text`, `options`): `TextNodeRenderable`

Creates a TextNodeRenderable from a plain string.

#### Parameters

##### text

`string`

The text content

##### options

`Partial`\<[`TextNodeOptions`](../interfaces/TextNodeOptions.md)\> = `{}`

Optional style configuration

#### Returns

`TextNodeRenderable`

A new TextNodeRenderable containing the text

#### Example

```typescript
const node = TextNodeRenderable.fromString("Hello", { fg: "red" });
```
