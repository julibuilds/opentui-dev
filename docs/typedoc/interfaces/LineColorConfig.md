[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / LineColorConfig

# Interface: LineColorConfig

Configuration for separate gutter and content background colors.

## Remarks

Allows setting different background colors for the line number gutter
and the content area. If only gutter is specified, content will use
a darker version of the gutter color.

## Properties

### content?

> `optional` **content**: `string` \| [`RGBA`](../classes/RGBA.md)

Background color for the content area.

***

### gutter?

> `optional` **gutter**: `string` \| [`RGBA`](../classes/RGBA.md)

Background color for the gutter area.
