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

When merging changes from the upstream `sst/opentui:main` repository:

### Setup
```bash
# Add upstream remote (only needed once)
git remote add upstream https://github.com/sst/opentui.git

# Fetch upstream changes
git fetch upstream main
```

### Merge Process
```bash
# Start merge without auto-committing
git merge upstream/main --no-commit --no-ff

# Check what changed
git diff HEAD..upstream/main --stat packages/core packages/react
```

### Conflict Resolution
1. **Focus on managed packages**: Only review changes in `packages/core` and `packages/react`
2. **Preserve TSDoc**: All TSDoc comments (`@public`, `@remarks`, `@example`, etc.) must be preserved
3. **Accept upstream code changes**: Take upstream's functional code changes while keeping our TSDoc
4. **Remove excluded packages**: If merge includes changes to solid/vue/go:
   ```bash
   git rm -r packages/solid packages/vue packages/go
   ```

### Verification
Before committing, verify TSDoc is intact:
```bash
# Check for TSDoc tags in key files
grep -r "@public\|@remarks\|@example" packages/core/src/ | head -20
grep -r "@public\|@remarks\|@example" packages/react/src/ | head -20
```

### Complete Merge
```bash
git commit -m "Merge upstream sst/opentui:main changes

Merged upstream changes focusing on packages/core and packages/react.
Preserved all TSDoc additions while incorporating upstream fixes.

Excluded packages/solid, packages/vue, and packages/go as they are not managed in this fork."
```

## TSDoc Guidelines

When adding or updating TSDoc:
- Use `@public` for all exported APIs
- Add `@remarks` for important implementation details
- Include `@example` blocks for complex APIs
- Document all parameters with descriptions
- Mark internal/private APIs appropriately
