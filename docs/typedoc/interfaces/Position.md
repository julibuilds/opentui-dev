[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / Position

# Interface: Position

Position configuration for absolute positioning.
Values can be numbers (cell units), "auto", or percentage strings.

## Example

```ts
// Absolute position 10 cells from top, 5 from left
const pos: Position = { top: 10, left: 5 }

// Position at 50% from top
const centered: Position = { top: "50%" }
```

## Properties

### bottom?

> `optional` **bottom**: `number` \| `"auto"` \| `` `${number}%` ``

Distance from the bottom edge

***

### left?

> `optional` **left**: `number` \| `"auto"` \| `` `${number}%` ``

Distance from the left edge

***

### right?

> `optional` **right**: `number` \| `"auto"` \| `` `${number}%` ``

Distance from the right edge

***

### top?

> `optional` **top**: `number` \| `"auto"` \| `` `${number}%` ``

Distance from the top edge
