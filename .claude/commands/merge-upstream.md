# Merge Upstream OpenTUI Changes

Merge changes from `sst/opentui:main` while preserving and maintaining TSDoc documentation.

## Instructions

Execute the following merge process:

### 1. Fetch and Start Merge
```bash
git fetch upstream main
git merge upstream/main --no-commit --no-ff
```

### 2. Remove Excluded Directories
If present in merge, remove:
```bash
git rm -rf packages/solid packages/vue packages/go scripts .github 2>/dev/null || true
rm -rf packages/solid packages/vue packages/go scripts .github
```

### 3. Handle Simple Conflicts
For non-source files, accept upstream:
```bash
git checkout --theirs bun.lock && git add bun.lock
```

### 4. Resolve Source File Conflicts
For each conflicted `.ts`/`.tsx` file in `packages/core` and `packages/react`:

1. **Read only the conflict sections** (use `grep -B5 -A30 "<<<<<<" file.ts`)
2. **Accept upstream code changes** - take their functional implementation
3. **Preserve our TSDoc** - keep all `@public`, `@remarks`, `@example`, `@param` tags
4. **Merge TSDoc with new APIs** - if upstream adds new parameters/options, document them

### 5. Add TSDoc to New Files
For any new exported interfaces, types, or classes added by upstream:

**Interface/Type pattern:**
```typescript
/**
 * Brief description.
 *
 * @remarks
 * Additional details if needed.
 *
 * @public
 */
export interface NewInterface {
  /** Property description */
  prop?: Type
}
```

**Class pattern:**
```typescript
/**
 * Brief description.
 *
 * @remarks
 * - Feature 1
 * - Feature 2
 *
 * @example
 * ```typescript
 * const x = new Class(ctx, { ... })
 * ```
 *
 * @public
 */
export class NewClass { }
```

**Hook pattern:**
```typescript
/**
 * Hook for handling X.
 *
 * @param handler - Callback invoked on events
 * @param options - Configuration options
 *
 * @example
 * ```tsx
 * useHook((event) => console.log(event))
 * ```
 *
 * @public
 */
```

### 6. Verify TSDoc
```bash
# Count should be >= previous count
grep -r "@public\|@remarks\|@example" packages/core/src/ packages/react/src/ --include="*.ts" --include="*.tsx" | wc -l
```

### 7. Commit
```bash
git add -A
git commit -m "Merge upstream sst/opentui:main changes

Merged upstream changes focusing on packages/core and packages/react.
Preserved all TSDoc additions while incorporating upstream fixes.

[List key changes]

Excluded packages/solid, packages/vue, packages/go, scripts/, and .github/ as they are not managed in this fork."
```

## Key Rules

- **Never lose TSDoc** - Our documentation is the value-add of this fork
- **Accept upstream APIs** - Their code changes are authoritative
- **Document new exports** - Any new `export` needs `@public` and description
- **Exclude non-managed directories** - solid, vue, go, scripts, .github are upstream-only
- **Never amend merge commits** - Amending loses the second parent and breaks GitHub's "behind" tracking

## Conflict Resolution Priority

1. Use parallel agents when 3+ conflict files exist
2. Accept `--theirs` for: `bun.lock`, `package.json` (non-managed), test snapshots
3. Manual merge for: source files in `packages/core/src`, `packages/react/src`
