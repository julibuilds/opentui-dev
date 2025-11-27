#!/bin/bash

# Create output directory
mkdir -p docs/tsdoc-markdown

# Find all TypeScript files, excluding tests, examples, and scripts
FILES=$(find packages/core/src packages/react/src \
  -name "*.ts" -o -name "*.tsx" \
  | grep -v ".test.ts" \
  | grep -v ".test.tsx" \
  | grep -v "/examples/" \
  | grep -v "/scripts/" \
  | grep -v "/tests/" \
  | tr '\n' ',' \
  | sed 's/,$//')

# Generate docs
./node_modules/.bin/tsdoc --src="$FILES" --dest=docs/tsdoc-markdown/README.md
