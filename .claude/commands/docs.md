# Query OpenTUI Documentation

Search and retrieve API documentation for OpenTUI packages.

## Instructions

When asked about OpenTUI APIs, components, hooks, or usage:

### 1. Search Strategy

**For specific API lookups** (e.g., "how do I use BoxRenderable"):
```bash
grep -A 60 "^### BoxRenderable" docs/claude/core.md
```

**For finding all references to a type**:
```bash
grep -n "TypeName" docs/claude/*.md
```

**For component options/props**:
```bash
grep -A 100 "^### ComponentName" docs/claude/core.md | grep -A 50 "Options"
```

**For hooks**:
```bash
grep -A 40 "^### useHookName" docs/claude/react.md
```

### 2. Documentation Files

| File | Contents |
|------|----------|
| `docs/claude/core.md` | @opentui/core - Components, styling, types, enums, functions |
| `docs/claude/react.md` | @opentui/react - Hooks, React components, JSX types |

### 3. Quick Reference

**Core Components:**
- `BoxRenderable` - Container with borders, background, flexbox layout
- `TextRenderable` - Text display with styling
- `InputRenderable` - Text input field
- `SelectRenderable` - Selection list
- `ScrollBoxRenderable` - Scrollable container
- `CodeRenderable` - Syntax-highlighted code display

**React Hooks:**
- `useKeyboard` - Handle keyboard input
- `useRenderer` - Access CLI renderer
- `useOnResize` - Respond to terminal resize
- `useTerminalDimensions` - Get terminal size
- `useTimeline` - Animation timelines

**Styling:**
- `RGBA` - Color class
- `StyledText` - Text with inline styles
- `BorderStyle` - "single" | "double" | "rounded" | "heavy"

**Layout Props (all components):**
- `width`, `height` - Size (number, "auto", or percentage)
- `flexDirection` - "row" | "column" | "row-reverse" | "column-reverse"
- `justifyContent` - Main axis alignment
- `alignItems` - Cross axis alignment
- `padding`, `margin`, `gap` - Spacing

### 4. Response Format

When answering:
1. Quote relevant documentation sections
2. Include code examples when available
3. Show the type signature for functions/hooks
4. List important options for components

$ARGUMENTS
