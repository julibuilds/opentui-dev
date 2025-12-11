#!/usr/bin/env bun
/**
 * Transform TypeDoc JSON output into optimized markdown for Claude Code.
 *
 * Produces single-file documentation optimized for grep-based search:
 * - All interfaces expanded inline with properties
 * - Type aliases expanded to their actual types
 * - Grouped by category (Components, Hooks, Styling, Types, etc.)
 * - No cross-file references
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs"
import { join, dirname } from "path"

// TypeDoc JSON types
interface TypeDocOutput {
  schemaVersion: string
  id: number
  name: string
  children: TypeDocNode[]
}

interface TypeDocNode {
  id: number
  name: string
  variant: string
  kind: number
  flags: {
    isPublic?: boolean
    isOptional?: boolean
    isInherited?: boolean
    isReadonly?: boolean
  }
  comment?: TypeDocComment
  children?: TypeDocNode[]
  signatures?: TypeDocSignature[]
  type?: TypeDocType
  defaultValue?: string
  extendedTypes?: TypeDocType[]
  extendedBy?: TypeDocType[]
  typeParameters?: TypeDocTypeParam[]
  inheritedFrom?: TypeDocType
  sources?: { fileName: string; line: number }[]
}

interface TypeDocComment {
  summary?: { kind: string; text: string }[]
  blockTags?: { tag: string; content: { kind: string; text: string }[] }[]
}

interface TypeDocSignature {
  id: number
  name: string
  kind: number
  comment?: TypeDocComment
  parameters?: TypeDocParam[]
  type?: TypeDocType
  typeParameter?: TypeDocTypeParam[]
}

interface TypeDocParam {
  id: number
  name: string
  kind: number
  flags: { isOptional?: boolean }
  comment?: TypeDocComment
  type?: TypeDocType
  defaultValue?: string
}

interface TypeDocTypeParam {
  id: number
  name: string
  type?: TypeDocType
  default?: TypeDocType
}

interface TypeDocType {
  type: string
  name?: string
  value?: unknown
  types?: TypeDocType[]
  elementType?: TypeDocType
  declaration?: TypeDocNode
  target?: number
  typeArguments?: TypeDocType[]
  package?: string
  head?: string
  tail?: [TypeDocType, string][]
  operator?: string
  objectType?: TypeDocType
  indexType?: TypeDocType
}

// TypeDoc kind constants
const KIND = {
  PROJECT: 1,
  MODULE: 2,
  NAMESPACE: 4,
  ENUM: 8,
  ENUM_MEMBER: 16,
  VARIABLE: 32,
  FUNCTION: 64,
  CLASS: 128,
  INTERFACE: 256,
  CONSTRUCTOR: 512,
  PROPERTY: 1024,
  METHOD: 2048,
  CALL_SIGNATURE: 4096,
  INDEX_SIGNATURE: 8192,
  CONSTRUCTOR_SIGNATURE: 16384,
  PARAMETER: 32768,
  TYPE_LITERAL: 65536,
  TYPE_PARAMETER: 131072,
  ACCESSOR: 262144,
  GET_SIGNATURE: 524288,
  SET_SIGNATURE: 1048576,
  TYPE_ALIAS: 2097152,
  REFERENCE: 4194304,
}

// Category definitions for grouping
const CATEGORIES = {
  components: {
    title: "Components",
    description: "Renderable components for building terminal UIs",
    patterns: [/Renderable$/, /^Root$/, /^App$/],
  },
  hooks: {
    title: "Hooks",
    description: "React hooks for terminal interactions",
    patterns: [/^use[A-Z]/],
  },
  styling: {
    title: "Styling",
    description: "Colors, text styling, and visual utilities",
    patterns: [/^RGBA$/, /^StyledText$/, /Color/, /Style/],
  },
  animation: {
    title: "Animation",
    description: "Timeline and animation utilities",
    patterns: [/Timeline/, /Animation/, /Tween/],
  },
  input: {
    title: "Input",
    description: "Keyboard, mouse, and input handling",
    patterns: [/Key/, /Mouse/, /Input/, /Paste/],
  },
  layout: {
    title: "Layout",
    description: "Layout and positioning types",
    patterns: [/Layout/, /Position/, /Flex/, /Align/, /Justify/],
  },
  rendering: {
    title: "Rendering",
    description: "Core rendering infrastructure",
    patterns: [/Renderer/, /Buffer/, /Context/],
  },
  types: {
    title: "Types",
    description: "Type aliases and utility types",
    patterns: [/.*/], // Catch-all for remaining types
  },
  enums: {
    title: "Enums",
    description: "Enumeration values",
    patterns: [/.*/], // All enums go here
  },
  functions: {
    title: "Functions",
    description: "Utility functions",
    patterns: [/.*/], // Catch-all for remaining functions
  },
}

class DocTransformer {
  private data: TypeDocOutput
  private typeMap: Map<number, TypeDocNode> = new Map()
  private typeNameMap: Map<string, TypeDocNode> = new Map()

  constructor(jsonPath: string) {
    const content = readFileSync(jsonPath, "utf-8")
    this.data = JSON.parse(content)
    this.buildTypeIndex()
  }

  private buildTypeIndex() {
    const visit = (node: TypeDocNode) => {
      this.typeMap.set(node.id, node)
      if (node.name && !node.name.startsWith("_")) {
        this.typeNameMap.set(node.name, node)
      }
      if (node.children) {
        node.children.forEach(visit)
      }
    }
    this.data.children.forEach(visit)
  }

  private getPackageModule(packageName: string): TypeDocNode | undefined {
    return this.data.children.find((c) => c.name === packageName)
  }

  private categorize(node: TypeDocNode): string {
    // Enums always go to enums category
    if (node.kind === KIND.ENUM) return "enums"

    // Functions go to functions or hooks
    if (node.kind === KIND.FUNCTION) {
      if (/^use[A-Z]/.test(node.name)) return "hooks"
      return "functions"
    }

    // Check patterns for classes, interfaces, type aliases
    for (const [category, config] of Object.entries(CATEGORIES)) {
      if (category === "types" || category === "enums" || category === "functions") continue
      for (const pattern of config.patterns) {
        if (pattern.test(node.name)) return category
      }
    }

    // Default categorization by kind
    if (node.kind === KIND.TYPE_ALIAS) return "types"
    if (node.kind === KIND.INTERFACE) return "types"
    if (node.kind === KIND.CLASS) return "components"

    return "types"
  }

  private formatType(type: TypeDocType | undefined, depth = 0): string {
    if (!type) return "unknown"
    if (depth > 5) return "..."

    switch (type.type) {
      case "intrinsic":
        return type.name || "unknown"

      case "literal":
        if (typeof type.value === "string") return `"${type.value}"`
        return String(type.value)

      case "union":
        if (!type.types) return "unknown"
        return type.types.map((t) => this.formatType(t, depth + 1)).join(" \\| ")

      case "intersection":
        if (!type.types) return "unknown"
        return type.types.map((t) => this.formatType(t, depth + 1)).join(" & ")

      case "array":
        return `${this.formatType(type.elementType, depth + 1)}[]`

      case "reference": {
        const name = type.name || "unknown"
        // Expand simple type aliases inline if we have them
        if (type.target && this.typeMap.has(type.target)) {
          const targetNode = this.typeMap.get(type.target)!
          if (targetNode.kind === KIND.TYPE_ALIAS && targetNode.type) {
            // Only expand simple unions, not complex types
            if (targetNode.type.type === "union" && targetNode.type.types) {
              const expanded = targetNode.type.types
              if (expanded.length <= 6 && expanded.every((t) => t.type === "literal" || t.type === "intrinsic")) {
                return this.formatType(targetNode.type, depth + 1)
              }
            }
          }
        }
        if (type.typeArguments && type.typeArguments.length > 0) {
          const args = type.typeArguments.map((t) => this.formatType(t, depth + 1)).join(", ")
          return `${name}<${args}>`
        }
        return name
      }

      case "reflection":
        if (type.declaration) {
          // Handle inline object types
          if (type.declaration.children) {
            const props = type.declaration.children
              .map((p) => `${p.name}${p.flags.isOptional ? "?" : ""}: ${this.formatType(p.type, depth + 1)}`)
              .join("; ")
            return `{ ${props} }`
          }
          // Handle function types
          if (type.declaration.signatures) {
            const sig = type.declaration.signatures[0]
            const params = sig.parameters?.map((p) => `${p.name}: ${this.formatType(p.type, depth + 1)}`).join(", ") || ""
            return `(${params}) => ${this.formatType(sig.type, depth + 1)}`
          }
        }
        return "object"

      case "templateLiteral":
        if (type.head !== undefined && type.tail) {
          let result = type.head
          for (const [t, text] of type.tail) {
            result += `\${${this.formatType(t, depth + 1)}}${text}`
          }
          return `\`${result}\``
        }
        return "string"

      case "tuple":
        if (type.types) {
          return `[${type.types.map((t) => this.formatType(t, depth + 1)).join(", ")}]`
        }
        return "[]"

      case "indexedAccess":
        return `${this.formatType(type.objectType, depth + 1)}[${this.formatType(type.indexType, depth + 1)}]`

      case "typeOperator":
        return `${type.operator} ${this.formatType(type.target ? this.typeMap.get(type.target)?.type : undefined, depth + 1)}`

      default:
        return type.name || "unknown"
    }
  }

  private extractSummary(comment?: TypeDocComment): string {
    if (!comment?.summary) return ""
    return comment.summary.map((s) => s.text).join("")
  }

  private extractBlockTag(comment: TypeDocComment | undefined, tag: string): string {
    if (!comment?.blockTags) return ""
    const block = comment.blockTags.find((b) => b.tag === tag)
    if (!block) return ""
    return block.content.map((c) => c.text).join("")
  }

  private formatClassDoc(node: TypeDocNode): string {
    const lines: string[] = []

    // Header
    lines.push(`### ${node.name}`)
    lines.push("")

    // Description
    const summary = this.extractSummary(node.comment)
    if (summary) {
      lines.push(summary)
      lines.push("")
    }

    // Remarks
    const remarks = this.extractBlockTag(node.comment, "@remarks")
    if (remarks) {
      lines.push(remarks)
      lines.push("")
    }

    // Extends
    if (node.extendedTypes && node.extendedTypes.length > 0) {
      const parents = node.extendedTypes.map((t) => this.formatType(t)).join(", ")
      lines.push(`**Extends:** ${parents}`)
      lines.push("")
    }

    // Extended by
    if (node.extendedBy && node.extendedBy.length > 0) {
      const children = node.extendedBy.map((t) => this.formatType(t)).join(", ")
      lines.push(`**Extended by:** ${children}`)
      lines.push("")
    }

    // Constructor
    const ctor = node.children?.find((c) => c.kind === KIND.CONSTRUCTOR)
    if (ctor?.signatures?.[0]) {
      const sig = ctor.signatures[0]
      const params = sig.parameters?.map((p) => `${p.name}${p.flags.isOptional ? "?" : ""}: ${this.formatType(p.type)}`).join(", ") || ""
      lines.push("**Constructor**")
      lines.push("```typescript")
      lines.push(`new ${node.name}(${params})`)
      lines.push("```")
      lines.push("")
    }

    // Find associated Options interface
    const optionsName = `${node.name.replace(/Renderable$/, "")}Options`
    const optionsNode = this.typeNameMap.get(optionsName) || this.typeNameMap.get(`${node.name}Options`)
    if (optionsNode && optionsNode.kind === KIND.INTERFACE) {
      lines.push(this.formatOptionsTable(optionsNode))
    }

    // Example
    const example = this.extractBlockTag(node.comment, "@example")
    if (example) {
      lines.push("**Example**")
      lines.push(example.trim())
      lines.push("")
    }

    lines.push("---")
    lines.push("")

    return lines.join("\n")
  }

  private formatOptionsTable(node: TypeDocNode): string {
    const lines: string[] = []
    lines.push(`**Options** (${node.name})`)
    lines.push("")
    lines.push("| Property | Type | Description |")
    lines.push("|----------|------|-------------|")

    const props = node.children?.filter((c) => c.kind === KIND.PROPERTY && !c.name.startsWith("_")) || []

    // Sort: own properties first, then inherited
    props.sort((a, b) => {
      const aInherited = a.flags.isInherited ? 1 : 0
      const bInherited = b.flags.isInherited ? 1 : 0
      if (aInherited !== bInherited) return aInherited - bInherited
      return a.name.localeCompare(b.name)
    })

    for (const prop of props) {
      const name = prop.flags.isOptional ? `${prop.name}?` : prop.name
      const type = this.formatType(prop.type).replace(/\|/g, "\\|")
      const desc = this.extractSummary(prop.comment).replace(/\n/g, " ").slice(0, 100)
      lines.push(`| \`${name}\` | \`${type}\` | ${desc} |`)
    }

    lines.push("")
    return lines.join("\n")
  }

  private formatInterfaceDoc(node: TypeDocNode): string {
    const lines: string[] = []

    lines.push(`### ${node.name}`)
    lines.push("")

    const summary = this.extractSummary(node.comment)
    if (summary) {
      lines.push(summary)
      lines.push("")
    }

    // Show interface definition for simple interfaces
    if (node.children && node.children.length <= 10) {
      lines.push("```typescript")
      lines.push(`interface ${node.name} {`)
      for (const prop of node.children) {
        if (prop.name.startsWith("_")) continue
        const opt = prop.flags.isOptional ? "?" : ""
        lines.push(`  ${prop.name}${opt}: ${this.formatType(prop.type)}`)
      }
      lines.push("}")
      lines.push("```")
      lines.push("")
    }

    // Properties table for larger interfaces
    if (node.children && node.children.length > 0) {
      lines.push(this.formatOptionsTable(node))
    }

    lines.push("---")
    lines.push("")

    return lines.join("\n")
  }

  private formatTypeAliasDoc(node: TypeDocNode): string {
    const lines: string[] = []

    lines.push(`### ${node.name}`)
    lines.push("")

    const summary = this.extractSummary(node.comment)
    if (summary) {
      lines.push(summary)
      lines.push("")
    }

    lines.push("```typescript")
    lines.push(`type ${node.name} = ${this.formatType(node.type)}`)
    lines.push("```")
    lines.push("")

    // For union types, show each option
    if (node.type?.type === "union" && node.type.types) {
      const literals = node.type.types.filter((t) => t.type === "literal")
      if (literals.length > 0 && literals.length === node.type.types.length) {
        lines.push("| Value | Description |")
        lines.push("|-------|-------------|")
        for (const lit of literals) {
          const val = typeof lit.value === "string" ? `"${lit.value}"` : String(lit.value)
          lines.push(`| \`${val}\` | - |`)
        }
        lines.push("")
      }
    }

    lines.push("---")
    lines.push("")

    return lines.join("\n")
  }

  private formatEnumDoc(node: TypeDocNode): string {
    const lines: string[] = []

    lines.push(`### ${node.name}`)
    lines.push("")

    const summary = this.extractSummary(node.comment)
    if (summary) {
      lines.push(summary)
      lines.push("")
    }

    lines.push("| Member | Value |")
    lines.push("|--------|-------|")

    for (const member of node.children || []) {
      const value = member.type?.type === "literal" ? String(member.type.value) : member.defaultValue || "-"
      lines.push(`| \`${member.name}\` | \`${value}\` |`)
    }

    lines.push("")
    lines.push("---")
    lines.push("")

    return lines.join("\n")
  }

  private formatFunctionDoc(node: TypeDocNode): string {
    const lines: string[] = []

    lines.push(`### ${node.name}`)
    lines.push("")

    const sig = node.signatures?.[0]
    if (!sig) return lines.join("\n")

    const summary = this.extractSummary(sig.comment)
    if (summary) {
      lines.push(summary)
      lines.push("")
    }

    // Signature
    const params = sig.parameters?.map((p) => `${p.name}${p.flags.isOptional ? "?" : ""}: ${this.formatType(p.type)}`).join(", ") || ""
    const returnType = this.formatType(sig.type)
    lines.push("```typescript")
    lines.push(`function ${node.name}(${params}): ${returnType}`)
    lines.push("```")
    lines.push("")

    // Parameters
    if (sig.parameters && sig.parameters.length > 0) {
      lines.push("**Parameters**")
      lines.push("")
      for (const param of sig.parameters) {
        const desc = this.extractSummary(param.comment)
        lines.push(`- \`${param.name}\` - ${desc || this.formatType(param.type)}`)
      }
      lines.push("")
    }

    // Returns
    const returns = this.extractBlockTag(sig.comment, "@returns")
    if (returns) {
      lines.push(`**Returns:** ${returns}`)
      lines.push("")
    }

    // Example
    const example = this.extractBlockTag(sig.comment, "@example")
    if (example) {
      lines.push("**Example**")
      lines.push(example.trim())
      lines.push("")
    }

    lines.push("---")
    lines.push("")

    return lines.join("\n")
  }

  private formatHookDoc(node: TypeDocNode): string {
    const lines: string[] = []

    lines.push(`### ${node.name}`)
    lines.push("")

    const sig = node.signatures?.[0]
    if (!sig) return lines.join("\n")

    const summary = this.extractSummary(sig.comment)
    if (summary) {
      lines.push(summary)
      lines.push("")
    }

    const remarks = this.extractBlockTag(sig.comment, "@remarks")
    if (remarks) {
      lines.push(remarks)
      lines.push("")
    }

    // Signature
    const params = sig.parameters?.map((p) => `${p.name}${p.flags.isOptional ? "?" : ""}: ${this.formatType(p.type)}`).join(", ") || ""
    const returnType = this.formatType(sig.type)
    lines.push("```typescript")
    lines.push(`${node.name}(${params}): ${returnType}`)
    lines.push("```")
    lines.push("")

    // Parameters with descriptions
    if (sig.parameters && sig.parameters.length > 0) {
      lines.push("**Parameters**")
      lines.push("")
      for (const param of sig.parameters) {
        const desc = this.extractSummary(param.comment) || this.extractBlockTag(sig.comment, "@param")
        lines.push(`- \`${param.name}\` - ${desc || this.formatType(param.type)}`)

        // If param is an options interface, show its properties
        if (param.type?.type === "reference" && param.type.target) {
          const optionsNode = this.typeMap.get(param.type.target)
          if (optionsNode?.kind === KIND.INTERFACE && optionsNode.children) {
            for (const prop of optionsNode.children.slice(0, 5)) {
              const propDesc = this.extractSummary(prop.comment)
              lines.push(`  - \`${prop.name}\` - ${propDesc || this.formatType(prop.type)}`)
            }
            if (optionsNode.children.length > 5) {
              lines.push(`  - ... and ${optionsNode.children.length - 5} more options`)
            }
          }
        }
      }
      lines.push("")
    }

    // Example
    const example = this.extractBlockTag(sig.comment, "@example")
    if (example) {
      lines.push("**Example**")
      lines.push(example.trim())
      lines.push("")
    }

    lines.push("---")
    lines.push("")

    return lines.join("\n")
  }

  generateMarkdown(packageName: string): string {
    const pkg = this.getPackageModule(packageName)
    if (!pkg) {
      throw new Error(`Package ${packageName} not found`)
    }

    const exports = pkg.children || []
    const isReact = packageName.includes("react")

    // Categorize all exports
    const categorized: Record<string, TypeDocNode[]> = {}
    for (const node of exports) {
      // Skip private/internal
      if (node.name.startsWith("_")) continue

      const category = this.categorize(node)
      if (!categorized[category]) categorized[category] = []
      categorized[category].push(node)
    }

    // Generate markdown
    const lines: string[] = []

    // Header
    const pkgDisplayName = isReact ? "@opentui/react" : "@opentui/core"
    lines.push(`# ${pkgDisplayName} Reference`)
    lines.push("")
    lines.push(`API documentation for ${pkgDisplayName}.`)
    lines.push("")

    // Table of contents
    lines.push("## Contents")
    lines.push("")
    for (const [category, config] of Object.entries(CATEGORIES)) {
      if (!categorized[category] || categorized[category].length === 0) continue
      lines.push(`- [${config.title}](#${config.title.toLowerCase()})`)
    }
    lines.push("")
    lines.push("---")
    lines.push("")

    // Generate each category
    for (const [category, config] of Object.entries(CATEGORIES)) {
      const nodes = categorized[category]
      if (!nodes || nodes.length === 0) continue

      lines.push(`## ${config.title}`)
      lines.push("")
      lines.push(config.description)
      lines.push("")

      // Sort nodes by name
      nodes.sort((a, b) => a.name.localeCompare(b.name))

      for (const node of nodes) {
        switch (node.kind) {
          case KIND.CLASS:
            lines.push(this.formatClassDoc(node))
            break
          case KIND.INTERFACE:
            lines.push(this.formatInterfaceDoc(node))
            break
          case KIND.TYPE_ALIAS:
            lines.push(this.formatTypeAliasDoc(node))
            break
          case KIND.ENUM:
            lines.push(this.formatEnumDoc(node))
            break
          case KIND.FUNCTION:
            if (category === "hooks") {
              lines.push(this.formatHookDoc(node))
            } else {
              lines.push(this.formatFunctionDoc(node))
            }
            break
          case KIND.VARIABLE:
            // Skip most variables, they're usually internal
            break
        }
      }
    }

    return lines.join("\n")
  }
}

// Main execution
const jsonPath = join(process.cwd(), "docs/claude/.typedoc-raw.json")
const outputDir = join(process.cwd(), "docs/claude")

console.log("Transforming TypeDoc JSON to optimized markdown...")

const transformer = new DocTransformer(jsonPath)

// Generate core docs
console.log("Generating core.md...")
const coreMd = transformer.generateMarkdown("core/src")
writeFileSync(join(outputDir, "core.md"), coreMd)
console.log(`  Written: docs/claude/core.md (${coreMd.split("\n").length} lines)`)

// Generate react docs
console.log("Generating react.md...")
const reactMd = transformer.generateMarkdown("react/src")
writeFileSync(join(outputDir, "react.md"), reactMd)
console.log(`  Written: docs/claude/react.md (${reactMd.split("\n").length} lines)`)

console.log("Done!")
