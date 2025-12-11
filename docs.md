Documentation Format Comparison Report

## tsdoc-markdown vs typedoc for OpenTUI Libraries

### Overview

| Metric | tsdoc-markdown | typedoc |
|--------|---------------|---------|
| **File Structure** | 2 monolithic files | 355 individual files |
| **Total Lines** | ~9,500 | ~99,000 |
| **Organization** | Flat, single-page per package | Hierarchical by type (classes, interfaces, functions, etc.) |
| **Code Examples** | ~71 | ~48 files contain examples |

---

## Effectiveness for Claude Code Navigation

### tsdoc-markdown

**Strengths:**
- **Single-file simplicity**: One `grep` command can search the entire `@opentui/core` or `@opentui/react` documentation
- **Lower context usage**: Reading one file provides broad coverage without multiple file reads
- **Fast initial discovery**: The table of contents at the top lists all functions, making it easy to find what's available
- **Inline type signatures**: Function signatures shown directly in tables (e.g., `useKeyboard | (handler: (key: KeyEvent) => void, options?: UseKeyboardOptions) => void`)

**Weaknesses:**
- **Missing property documentation**: Interfaces like `BoxOptions` aren't fully documented - only functions and classes get detailed descriptions
- **No inheritance visualization**: Hard to understand type hierarchies (e.g., `BoxOptions extends RenderableOptions extends LayoutOptions`)
- **Limited cross-referencing**: No hyperlinks between related types within the same file
- **Dense format**: 9,000 lines for core makes targeted searches within a single concept difficult

### typedoc

**Strengths:**
- **Complete property documentation**: Every interface property is documented with type, description, and inheritance info (see `BoxOptions.md` with 60+ properties fully documented)
- **Clear inheritance chains**: Shows `Inherited from [LayoutOptions](...)` with clickable links
- **Type relationships visible**: "Extended by" and "Extends" sections show the type hierarchy
- **Granular file access**: Can read just `BoxRenderable.md` (150 lines) instead of searching through 9,000 lines
- **Better class documentation**: Properties, methods, and constructors are clearly separated

**Weaknesses:**
- **High file count overhead**: Finding the right file among 355 requires knowing the structure (`classes/`, `interfaces/`, `functions/`, etc.)
- **More context usage**: Exploring a feature often requires reading multiple files (class + interface + related types)
- **Fragmented examples**: Code examples are spread across individual files rather than grouped by use case
- **Navigation overhead**: Relative links like `[RenderableOptions](RenderableOptions.md)` require additional file reads

---

## Efficiency Analysis

### Scenario 1: "How do I use the useKeyboard hook?"

| Approach | tsdoc-markdown | typedoc |
|----------|---------------|---------|
| Steps | 1. `grep "useKeyboard" react.md` | 1. Read `react/src/functions/useKeyboard.md` |
| Context Used | ~40 lines | ~50 lines |
| Completeness | Good - has examples, params, remarks | Good - same info, cleaner format |
| **Winner** | **Tie** | **Tie** |

### Scenario 2: "What properties can I set on a box?"

| Approach | tsdoc-markdown | typedoc |
|----------|---------------|---------|
| Steps | 1. Search for BoxOptions - not found as detailed interface | 1. Read `interfaces/BoxOptions.md` |
| Context Used | ~10 lines (just the function signature) | ~400 lines (full property list) |
| Completeness | **Poor** - only shows `BoxOptions<BoxRenderable>` exists | **Excellent** - all 60+ properties documented |
| **Winner** | | **typedoc** |

### Scenario 3: "Give me an overview of the core library"

| Approach | tsdoc-markdown | typedoc |
|----------|---------------|---------|
| Steps | 1. Read first 100 lines of `core.md` | 1. Read README, then browse multiple directories |
| Context Used | ~100 lines | ~300+ lines across files |
| Completeness | Good - full function list visible | Scattered - requires exploration |
| **Winner** | **tsdoc-markdown** | |

### Scenario 4: "How does BoxRenderable relate to other classes?"

| Approach | tsdoc-markdown | typedoc |
|----------|---------------|---------|
| Steps | 1. Search for BoxRenderable, get limited info | 1. Read `classes/BoxRenderable.md`, see "Extends Renderable", "Extended by ScrollBoxRenderable" |
| Completeness | No inheritance info | Full hierarchy visible |
| **Winner** | | **typedoc** |

---

## Helpfulness for Building Apps

### tsdoc-markdown Excels At:
1. **Quick reference lookup** - "What's the signature of `createCliRenderer`?"
2. **Discovery** - "What hooks are available in `@opentui/react`?"
3. **Copy-paste examples** - Examples are grouped with their functions
4. **Low-overhead searches** - Single file means fewer tool calls

### typedoc Excels At:
1. **Learning the type system** - Full interface documentation essential for TypeScript
2. **Understanding component options** - All props documented with types and defaults
3. **Navigating class hierarchies** - Clear inheritance chains
4. **Deep dives** - Individual files are focused and complete

---

## Drawbacks

### tsdoc-markdown
- **Incomplete for interfaces**: Critical gap - can't see what props are available on components
- **No type aliases documented**: Types like `BorderStyle`, `ColorInput` aren't explained
- **Monolithic files become unwieldy**: 9,000 lines means lots of scrolling/searching
- **Missing enums**: No documentation for enums like `LogLevel`, `MouseButton`

### typedoc
- **Over-fragmented**: Simple questions require reading multiple files
- **Boilerplate heavy**: Every file has breadcrumb navigation taking up space
- **Internal details exposed**: Protected properties (`_backgroundColor`) clutter the docs
- **Relative links don't resolve**: Links like `[RGBA](../classes/RGBA.md)` require manual navigation

---

## Recommendations

### For Claude Code Usage:

1. **Use tsdoc-markdown for**:
   - Initial exploration ("what's in this package?")
   - Function usage examples
   - Quick signature lookups

2. **Use typedoc for**:
   - Component prop reference (essential for building UIs)
   - Understanding type hierarchies
   - Deep dives into specific classes

3. **Optimal workflow**:
   - Start with tsdoc-markdown to find the right function/class
   - Switch to typedoc when you need interface/options details

### Documentation Improvements:

For **tsdoc-markdown**:
- Add interface documentation (critical gap)
- Add enum documentation
- Consider splitting into sections (functions, classes, interfaces)

For **typedoc**:
- Consider a "quick reference" summary page
- Hide internal/protected members by default
- Group related types together

---

## Conclusion

**Neither format is clearly superior** - they serve different purposes:

| Use Case | Better Format |
|----------|--------------|
| Quick lookups | tsdoc-markdown |
| Interface props | typedoc |
| Code examples | tsdoc-markdown |
| Type relationships | typedoc |
| Context efficiency | tsdoc-markdown |
| Completeness | typedoc |

For building OpenTUI apps, **both are needed**: tsdoc-markdown for discovery and examples, typedoc for the complete type information required to use components correctly.
