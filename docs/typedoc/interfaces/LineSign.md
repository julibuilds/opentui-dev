[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / LineSign

# Interface: LineSign

Configuration for decorative signs displayed next to line numbers.

## Remarks

Line signs can display custom indicators (like git status, breakpoints, diagnostics)
before or after the line number.

## Example

```typescript
const errorSign: LineSign = {
  after: "●",
  afterColor: "#ff0000"
};
lineNumbers.setLineSign(42, errorSign);
```

## Properties

### after?

> `optional` **after**: `string`

Text to display after the line number (e.g., breakpoint, error marker).

***

### afterColor?

> `optional` **afterColor**: `string` \| [`RGBA`](../classes/RGBA.md)

Color for the 'after' text.

***

### before?

> `optional` **before**: `string`

Text to display before the line number (e.g., git status indicator).

***

### beforeColor?

> `optional` **beforeColor**: `string` \| [`RGBA`](../classes/RGBA.md)

Color for the 'before' text.
