# OpenTUI Fork - TSDoc Documentation

This turborepo contains forks of the OpenTUI repository's `@opentui/core` and `@opentui/react` packages. The purpose of these forks is to provide TSDoc tags and comments for better documentation of these libraries. It's an ongoing WIP as upstream changes are constantly being made and we must keep or update the TSDoc tags and comments as needed.

## Managed Packages

We **only** manage and maintain TSDoc for:
- `packages/core`
- `packages/react`

## Excluded Packages

The following packages are **NOT managed** in this fork and should be ignored during merges:
- `packages/solid`
- `packages/vue`
- `packages/go`

These packages are maintained upstream and should not be included in this fork.

## Merging Upstream Changes

Use the `/merge-upstream` slash command to merge changes from `sst/opentui:main`. The command contains full instructions for the merge process.

### Quick Reference
```bash
# Setup (only needed once)
git remote add upstream https://github.com/sst/opentui.git
```

### Performance Tips

**Use parallel agents** when resolving 3+ conflict files - launch separate agents for each file to resolve simultaneously.

**Accept `--theirs` for non-TSDoc files:**
```bash
git checkout --theirs bun.lock && git add bun.lock
```

**Read only conflict sections** instead of full files:
```bash
grep -B5 -A30 "<<<<<<" file.ts
```

**Verify TSDoc count** before and after:
```bash
grep -r "@public\|@remarks\|@example" packages/core/src/ packages/react/src/ --include="*.ts" --include="*.tsx" | wc -l
```

## TSDoc Guidelines

### Required Tags
- `@public` - All exported APIs (interfaces, types, classes, functions)
- `@remarks` - Important implementation details, usage notes
- `@example` - Code examples for complex APIs
- `@param` - All function/method parameters with descriptions
- `@returns` - Return value descriptions where non-obvious

### Templates

**Interface/Options:**
```typescript
/**
 * Configuration options for {@link ComponentName}.
 *
 * @public
 */
export interface ComponentOptions {
  /** Property description. @defaultValue value */
  prop?: Type
}
```

**Class:**
```typescript
/**
 * Brief description of the class.
 *
 * @remarks
 * - Feature 1
 * - Feature 2
 *
 * @example
 * ```typescript
 * const instance = new ClassName(ctx, { option: value })
 * ```
 *
 * @public
 */
export class ClassName { }
```

**React Hook:**
```typescript
/**
 * Hook for handling X.
 *
 * @remarks
 * Additional details about behavior.
 *
 * @param handler - Callback invoked on events
 * @param options - Configuration options
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   useHook((event) => console.log(event))
 *   return <text>Example</text>
 * }
 * ```
 *
 * @public
 */
```

**Type/Union:**
```typescript
/**
 * Brief description of the type.
 *
 * @public
 */
export type ActionType = "action-a" | "action-b" | "action-c"
```

### Internal APIs
Use `@internal` for non-public exports that shouldn't be documented:
```typescript
/**
 * Internal helper function.
 * @internal
 */
```

## Documentation Generation

### Claude-Optimized Docs

The `/docs` slash command queries optimized API documentation. Generated docs are in `docs/claude/`:

| File | Contents |
|------|----------|
| `core.md` | @opentui/core - Components, styling, types, enums, functions |
| `react.md` | @opentui/react - Hooks, React components, JSX types |

### Regenerating Docs

After TSDoc changes, regenerate the documentation:

```bash
# Generate all doc formats
bun run docs

# Generate only Claude-optimized docs
bun run docs:claude
```

### Pipeline Architecture

```
TypeScript Source → TypeDoc JSON → transform-docs.ts → Optimized Markdown
```

Key files:
- `typedoc.claude.json` - TypeDoc config for JSON extraction
- `dev/scripts/transform-docs.ts` - Custom transformer script
- `.claude/commands/docs.md` - Slash command for querying docs

### Features

- **Type expansion**: Shows `"single" | "double" | "rounded"` instead of `BorderStyle`
- **Inlined options**: All component properties in tables with descriptions
- **Categorized**: Components, Hooks, Styling, Animation, Input, Types, Enums
- **Single-file search**: Use grep to find any API in one file
