Now I have a clear picture. Let me provide comprehensive recommendations and a pipeline design.

---

# Top Recommendations & Unified Documentation Pipeline

## Part 1: Top Recommendations for Each Format

### tsdoc-markdown Improvements

1. **Add Interface Documentation (Critical)**
   - Currently only documents functions and classes
   - Missing: `BoxOptions`, `TextOptions`, `UseKeyboardOptions`, etc.
   - This is the #1 gap - users can't see component props

2. **Add Enum Documentation**
   - Missing: `LogLevel`, `MouseButton`, `BorderStyle`, etc.
   - Essential for understanding valid option values

3. **Add Type Alias Documentation**
   - Missing: `ColorInput`, `BorderSides`, `FlexDirectionString`
   - Users need to know what types are accepted

4. **Improve Table of Contents Structure**
   - Group by category (Components, Hooks, Utilities, Styling)
   - Not just a flat list of 150+ functions

5. **Remove Emoji Clutter**
   - `:gear:`, `:toolbox:`, `:factory:` add noise without value
   - Plain markdown headers are cleaner for LLM parsing

### typedoc Improvements

1. **Exclude Protected/Internal Members**
   - Change `"excludeProtected": false` to `true` in `typedoc.json`
   - Removes `_backgroundColor`, `_border`, etc. clutter

2. **Create Summary Index Files**
   - One-page "quick reference" per package
   - Lists all exports with one-line descriptions

3. **Flatten Simple Files**
   - Merge small type-alias files into parent interface docs
   - Reduces file count and navigation overhead

4. **Add Category Grouping**
   - Use `@category` tags: Components, Hooks, Styling, Layout, Input
   - Creates logical groupings in output

5. **Inline Inherited Properties**
   - Instead of "Inherited from LayoutOptions", show the actual property
   - Reduces cross-file navigation

---

## Part 2: Unified Pipeline Design

### Goal
Create a single optimized documentation format for Claude Code that combines:
- tsdoc-markdown's single-file efficiency
- typedoc's complete type information

### Proposed Output Structure

```
docs/claude/
├── core-reference.md      # ~3000 lines, complete @opentui/core
├── react-reference.md     # ~1000 lines, complete @opentui/react  
└── quick-start.md         # ~200 lines, common patterns & examples
```

### Pipeline Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Source: TSDoc Comments                       │
│                  packages/core/src/**/*.ts                       │
│                  packages/react/src/**/*.ts                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              Step 1: TypeDoc JSON Export                         │
│   typedoc --json docs/.build/api.json                           │
│   (Full AST with all type information)                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              Step 2: Custom Transformer Script                   │
│   scripts/generate-claude-docs.ts                               │
│                                                                  │
│   - Parse api.json                                              │
│   - Filter: exclude private, internal, test-only                │
│   - Flatten: inline inherited properties                        │
│   - Group: by category (Components, Hooks, Types, Utils)        │
│   - Format: optimized markdown structure                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              Step 3: Output Optimized Markdown                   │
│   docs/claude/core-reference.md                                 │
│   docs/claude/react-reference.md                                │
└─────────────────────────────────────────────────────────────────┘
```

### Optimized Markdown Format

Here's what the output would look like:

```markdown
# @opentui/core Reference

## Quick Index
- [Components](#components): BoxRenderable, TextRenderable, InputRenderable...
- [Hooks](#hooks): useKeyboard, useRenderer, useOnResize...
- [Styling](#styling): fg, bg, bold, italic, t...
- [Types](#types): ColorInput, BorderStyle, FlexDirection...

---

## Components

### BoxRenderable
Container with borders, background, and flexbox layout.

**Constructor**
```ts
new BoxRenderable(ctx: RenderContext, options?: BoxOptions)
```

**Options** (BoxOptions)
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| width | number \| "auto" \| `${number}%` | "auto" | Width in cells or percentage |
| height | number \| "auto" \| `${number}%` | "auto" | Height in cells or percentage |
| border | boolean \| BorderSides[] | false | Border configuration |
| borderStyle | "single" \| "double" \| "rounded" \| "bold" \| "ascii" | "single" | Border appearance |
| borderColor | ColorInput | white | Border color |
| backgroundColor | ColorInput | transparent | Fill color |
| flexDirection | "row" \| "column" \| "row-reverse" \| "column-reverse" | "row" | Child layout direction |
| justifyContent | "flex-start" \| "center" \| "flex-end" \| "space-between" \| "space-around" | "flex-start" | Main axis alignment |
| alignItems | "flex-start" \| "center" \| "flex-end" \| "stretch" | "stretch" | Cross axis alignment |
| padding | number \| `${number}%` | 0 | Inner spacing |
| margin | number \| "auto" \| `${number}%` | 0 | Outer spacing |
| gap | number \| `${number}%` | 0 | Space between children |
| title | string | - | Text in top border |

**Example**
```tsx
// React JSX
<box border borderStyle="rounded" padding={1} flexDirection="column">
  <text>Hello</text>
</box>

// Core API
const box = new BoxRenderable(ctx, {
  width: 40,
  height: 10,
  border: true,
  borderStyle: "rounded"
})
```

---

### TextRenderable
...
```

### Key Format Decisions

1. **Inline Options Tables**
   - All props in one table, no separate interface file
   - Include defaults directly (critical for usage)

2. **Dual Examples**
   - Show both React JSX and Core API usage
   - Users can see whichever matches their use case

3. **Type Literals Expanded**
   - Instead of `BorderStyle`, show `"single" | "double" | "rounded" | "bold" | "ascii"`
   - No need to look up type aliases

4. **Grouped Sections**
   - Components, Hooks, Styling, Types, Utilities
   - Easy to navigate with markdown headers

5. **No Cross-References**
   - Self-contained descriptions
   - No "see [RenderableOptions]" links that require more reads

---

## Part 3: Implementation Script

Here's a sketch of the transformer script:

```typescript
// scripts/generate-claude-docs.ts
import { readFileSync, writeFileSync } from 'fs'

interface TypeDocJSON {
  children: TypeDocNode[]
}

interface TypeDocNode {
  name: string
  kind: number // 128=class, 256=interface, 64=function, etc.
  comment?: { summary: { text: string }[] }
  signatures?: TypeDocSignature[]
  children?: TypeDocNode[]
  type?: TypeDocType
}

const KIND = {
  CLASS: 128,
  INTERFACE: 256,
  FUNCTION: 64,
  TYPE_ALIAS: 2097152,
  ENUM: 8,
  PROPERTY: 1024,
}

async function main() {
  // Load TypeDoc JSON output
  const api: TypeDocJSON = JSON.parse(
    readFileSync('docs/.build/api.json', 'utf-8')
  )
  
  // Categorize exports
  const categories = {
    components: [] as TypeDocNode[],
    hooks: [] as TypeDocNode[],
    styling: [] as TypeDocNode[],
    types: [] as TypeDocNode[],
    utilities: [] as TypeDocNode[],
  }
  
  for (const node of api.children) {
    categorize(node, categories)
  }
  
  // Generate markdown
  let md = '# @opentui/core Reference\n\n'
  md += generateQuickIndex(categories)
  md += generateSection('Components', categories.components)
  md += generateSection('Hooks', categories.hooks)
  md += generateSection('Styling', categories.styling)
  md += generateSection('Types', categories.types)
  md += generateSection('Utilities', categories.utilities)
  
  writeFileSync('docs/claude/core-reference.md', md)
}

function generateSection(title: string, nodes: TypeDocNode[]): string {
  let md = `## ${title}\n\n`
  
  for (const node of nodes) {
    if (node.kind === KIND.CLASS) {
      md += generateClassDoc(node)
    } else if (node.kind === KIND.FUNCTION) {
      md += generateFunctionDoc(node)
    } else if (node.kind === KIND.INTERFACE) {
      md += generateInterfaceDoc(node)
    }
    // ... etc
  }
  
  return md
}

function generateClassDoc(node: TypeDocNode): string {
  let md = `### ${node.name}\n`
  md += getDescription(node) + '\n\n'
  
  // Find associated Options interface
  const optionsInterface = findOptionsInterface(node.name)
  if (optionsInterface) {
    md += '**Options**\n'
    md += generatePropsTable(optionsInterface)
  }
  
  md += generateExamples(node)
  return md + '\n---\n\n'
}

function generatePropsTable(iface: TypeDocNode): string {
  let table = '| Property | Type | Default | Description |\n'
  table += '|----------|------|---------|-------------|\n'
  
  // Flatten inherited properties
  const allProps = flattenInheritedProps(iface)
  
  for (const prop of allProps) {
    const type = formatType(prop.type) // Expand type aliases inline
    const defaultVal = extractDefault(prop)
    const desc = getDescription(prop)
    table += `| ${prop.name} | ${type} | ${defaultVal} | ${desc} |\n`
  }
  
  return table + '\n'
}

// ... helper functions
```

---

## Part 4: Build Integration

Add to `package.json`:

```json
{
  "scripts": {
    "docs": "bun run docs:json && bun run docs:transform",
    "docs:json": "typedoc --json docs/.build/api.json",
    "docs:transform": "bun scripts/generate-claude-docs.ts",
    "docs:typedoc": "typedoc",
    "docs:tsdoc": "tsdoc-markdown --src packages/core/src/index.ts --dest docs/tsdoc-markdown/core.md"
  }
}
```

---

## Part 5: Expected Benefits

| Metric | Current (both formats) | Unified |
|--------|----------------------|---------|
| Files to search | 357 | 2-3 |
| Lines to parse | ~108,000 | ~4,000 |
| Interface props visible | Partial (typedoc only) | Yes, inline |
| Cross-references needed | Many | Zero |
| Examples per component | Split | Combined |
| Typical lookup reads | 2-5 files | 1 file, 1 grep |

---

## Summary

**Top 3 Immediate Actions:**

1. **Enable `excludeProtected: true`** in typedoc.json (5 min fix, reduces noise)

2. **Create a custom transformer script** that:
   - Takes TypeDoc JSON as input
   - Outputs single-file, LLM-optimized markdown
   - Inlines inherited props, expands type aliases

3. **Add interface documentation to tsdoc-markdown** if keeping both formats:
   - Use `--types` flag with tsdoc-markdown CLI
   - Or switch fully to the unified pipeline

The unified pipeline is the recommended long-term solution - it gives you a single source of truth optimized specifically for Claude Code's strengths (grep, single-file reads) while maintaining complete type information.
