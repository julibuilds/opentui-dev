[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / VisualCursor

# Interface: VisualCursor

VisualCursor represents a cursor position with both visual and logical coordinates.
Visual coordinates (visualRow, visualCol) are VIEWPORT-RELATIVE.
This means visualRow=0 is the first visible line in the viewport, not the first line in the document.
Logical coordinates (logicalRow, logicalCol) are document-absolute.

## Properties

### logicalCol

> **logicalCol**: `number`

***

### logicalRow

> **logicalRow**: `number`

***

### offset

> **offset**: `number`

***

### visualCol

> **visualCol**: `number`

***

### visualRow

> **visualRow**: `number`
