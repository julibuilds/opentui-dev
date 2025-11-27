#!/bin/bash

# Create output directory
mkdir -p docs/tsdoc-markdown

# Find core package TypeScript files, excluding tests, examples, and scripts
CORE_FILES=$(find packages/core/src \
  -name "*.ts" -o -name "*.tsx" \
  | grep -v ".test.ts" \
  | grep -v ".test.tsx" \
  | grep -v "/examples/" \
  | grep -v "/scripts/" \
  | grep -v "/tests/" \
  | tr '\n' ',' \
  | sed 's/,$//')

# Find react package TypeScript files, excluding tests, examples, and scripts
REACT_FILES=$(find packages/react/src \
  -name "*.ts" -o -name "*.tsx" \
  | grep -v ".test.ts" \
  | grep -v ".test.tsx" \
  | grep -v "/examples/" \
  | grep -v "/scripts/" \
  | grep -v "/tests/" \
  | tr '\n' ',' \
  | sed 's/,$//')

# Generate docs for core package
echo "Generating documentation for core package..."
./node_modules/.bin/tsdoc --src="$CORE_FILES" --dest=docs/tsdoc-markdown/core.md

# Generate docs for react package
echo "Generating documentation for react package..."
./node_modules/.bin/tsdoc --src="$REACT_FILES" --dest=docs/tsdoc-markdown/react.md
