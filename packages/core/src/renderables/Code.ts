import { type RenderContext } from "../types"
import { StyledText } from "../lib/styled-text"
import { SyntaxStyle } from "../syntax-style"
import { getTreeSitterClient, treeSitterToStyledText, TreeSitterClient } from "../lib/tree-sitter"
import { TextBufferRenderable, type TextBufferOptions } from "./TextBufferRenderable"
import type { OptimizedBuffer } from "../buffer"
import type { SimpleHighlight } from "../lib/tree-sitter/types"
import { treeSitterToTextChunks } from "../lib/tree-sitter-styled-text"

/**
 * Configuration options for {@link CodeRenderable}.
 *
 * @public
 */
export interface CodeOptions extends TextBufferOptions {
  /** The source code content to display. */
  content?: string
  /** Programming language for syntax highlighting (e.g., "typescript", "python", "rust"). */
  filetype?: string
  /** Syntax style theme defining colors for different token types. */
  syntaxStyle: SyntaxStyle
  /** Custom Tree-sitter client for syntax highlighting. If not provided, uses global singleton. */
  treeSitterClient?: TreeSitterClient
  /**
   * Whether to enable concealing (hiding or transforming) certain syntax elements.
   * @defaultValue true
   */
  conceal?: boolean
  /**
   * Whether to show plain unstyled text before syntax highlighting completes.
   * @defaultValue true
   * @remarks
   * When false, nothing is rendered until highlighting finishes. Useful for preventing flash of unstyled content.
   */
  drawUnstyledText?: boolean
  /**
   * Whether the code is being streamed incrementally.
   * @defaultValue false
   * @remarks
   * In streaming mode, partial highlighting is applied using cached results for better performance.
   */
  streaming?: boolean
}

/**
 * A renderable for displaying syntax-highlighted source code.
 *
 * @remarks
 * CodeRenderable extends {@link TextBufferRenderable} with Tree-sitter powered syntax highlighting.
 * Key features:
 *
 * - Automatic syntax highlighting using Tree-sitter parsers
 * - Support for 40+ programming languages
 * - Customizable syntax themes via {@link SyntaxStyle}
 * - Streaming mode for incremental content updates
 * - Optional concealment of syntax elements
 * - Fallback to plain text if filetype is unknown or highlighting fails
 *
 * The highlighting process is asynchronous and non-blocking. Use `drawUnstyledText` to control
 * whether plain text is shown while highlighting is in progress.
 *
 * @example
 * Basic usage:
 * ```typescript
 * const code = new CodeRenderable(ctx, {
 *   content: 'function hello() { return "world"; }',
 *   filetype: "typescript",
 *   syntaxStyle: myTheme,
 *   fg: "#d4d4d4",
 *   bg: "#1e1e1e"
 * });
 * ```
 *
 * @example
 * Streaming mode for real-time updates:
 * ```typescript
 * const code = new CodeRenderable(ctx, {
 *   filetype: "python",
 *   syntaxStyle: theme,
 *   streaming: true,
 *   drawUnstyledText: true
 * });
 *
 * // Update content incrementally
 * code.content = "def hello():";
 * code.content = "def hello():\n    return 'world'";
 * ```
 *
 * @public
 */
export class CodeRenderable extends TextBufferRenderable {
  private _content: string
  private _filetype?: string
  private _syntaxStyle: SyntaxStyle
  /** Tracks whether highlighting is currently in progress. */
  private _isHighlighting: boolean = false
  private _treeSitterClient: TreeSitterClient
  /** Indicates if content changed and needs re-highlighting. */
  private _highlightsDirty: boolean = false
  /** Monotonically increasing ID to detect stale highlight results. */
  private _highlightSnapshotId: number = 0
  private _conceal: boolean
  private _drawUnstyledText: boolean
  /** Controls whether the text buffer should be rendered. */
  private _shouldRenderTextBuffer: boolean = true
  private _streaming: boolean
  /** Tracks if initial content was already shown in streaming mode. */
  private _hadInitialContent: boolean = false
  /** Cached highlight results for streaming mode partial updates. */
  private _lastHighlights: SimpleHighlight[] = []

  protected _contentDefaultOptions = {
    content: "",
    conceal: true,
    drawUnstyledText: true,
    streaming: false,
  } satisfies Partial<CodeOptions>

  constructor(ctx: RenderContext, options: CodeOptions) {
    super(ctx, options)

    this._content = options.content ?? this._contentDefaultOptions.content
    this._filetype = options.filetype
    this._syntaxStyle = options.syntaxStyle
    this._treeSitterClient = options.treeSitterClient ?? getTreeSitterClient()
    this._conceal = options.conceal ?? this._contentDefaultOptions.conceal
    this._drawUnstyledText = options.drawUnstyledText ?? this._contentDefaultOptions.drawUnstyledText
    this._streaming = options.streaming ?? this._contentDefaultOptions.streaming

    // Mark as dirty if there's initial content (even without filetype, we need to show it)
    this._highlightsDirty = this._content.length > 0
  }

  /** The source code content. Setting this triggers re-highlighting. */
  get content(): string {
    return this._content
  }

  set content(value: string) {
    if (this._content !== value) {
      this._content = value
      this._highlightsDirty = true
    }
  }

  /** The programming language for syntax highlighting (e.g., "typescript", "rust"). */
  get filetype(): string | undefined {
    return this._filetype
  }

  set filetype(value: string) {
    if (this._filetype !== value) {
      this._filetype = value
      this._highlightsDirty = true
    }
  }

  /** The syntax highlighting theme. Changing this triggers re-highlighting. */
  get syntaxStyle(): SyntaxStyle {
    return this._syntaxStyle
  }

  set syntaxStyle(value: SyntaxStyle) {
    if (this._syntaxStyle !== value) {
      this._syntaxStyle = value
      this._highlightsDirty = true
    }
  }

  /** Whether syntax concealment (hiding/transforming elements) is enabled. */
  get conceal(): boolean {
    return this._conceal
  }

  set conceal(value: boolean) {
    if (this._conceal !== value) {
      this._conceal = value
      this._highlightsDirty = true
    }
  }

  /**
   * Whether to show unstyled text before highlighting completes.
   *
   * @remarks
   * When true, plain text is displayed immediately and replaced with highlighted version.
   * When false, nothing renders until highlighting finishes.
   */
  get drawUnstyledText(): boolean {
    return this._drawUnstyledText
  }

  set drawUnstyledText(value: boolean) {
    if (this._drawUnstyledText !== value) {
      this._drawUnstyledText = value
      this._highlightsDirty = true
    }
  }

  /**
   * Whether streaming mode is enabled for incremental content updates.
   *
   * @remarks
   * In streaming mode, partial highlighting uses cached results for better performance
   * when content changes frequently.
   */
  get streaming(): boolean {
    return this._streaming
  }

  set streaming(value: boolean) {
    if (this._streaming !== value) {
      this._streaming = value
      this._hadInitialContent = false
      this._lastHighlights = []
      this._highlightsDirty = true
    }
  }

  /** The Tree-sitter client used for syntax highlighting. */
  get treeSitterClient(): TreeSitterClient {
    return this._treeSitterClient
  }

  set treeSitterClient(value: TreeSitterClient) {
    if (this._treeSitterClient !== value) {
      this._treeSitterClient = value
      this._highlightsDirty = true
    }
  }

  private ensureVisibleTextBeforeHighlight(): void {
    const content = this._content

    // No filetype means fallback
    if (!this._filetype) {
      if (this.isDestroyed) return
      this.textBuffer.setText(content)
      this._shouldRenderTextBuffer = true
      this.updateTextInfo()
      return
    }

    // Determine if this is initial content when streaming
    const isInitialContent = this._streaming && !this._hadInitialContent

    // Handle initial fallback display
    const shouldDrawUnstyledNow = this._streaming ? isInitialContent && this._drawUnstyledText : this._drawUnstyledText

    if (this._streaming && !isInitialContent) {
      // Use cached highlights for partial styling if available
      if (this._lastHighlights.length > 0) {
        const chunks = treeSitterToTextChunks(content, this._lastHighlights, this._syntaxStyle, {
          enabled: this._conceal,
        })
        const partialStyledText = new StyledText(chunks)
        if (this.isDestroyed) return
        this.textBuffer.setStyledText(partialStyledText)
        this._shouldRenderTextBuffer = true
        this.updateTextInfo()
      } else {
        // No cached highlights, fallback to plain text
        if (this.isDestroyed) return
        this.textBuffer.setText(content)
        this._shouldRenderTextBuffer = true
        this.updateTextInfo()
      }
    } else if (shouldDrawUnstyledNow) {
      // Show plain text before highlights arrive
      if (this.isDestroyed) return
      this.textBuffer.setText(content)
      this._shouldRenderTextBuffer = true
      this.updateTextInfo()
    } else {
      // Don't show anything until highlights arrive
      if (this.isDestroyed) return
      this._shouldRenderTextBuffer = false
      this.updateTextInfo()
    }
  }

  private async startHighlight(): Promise<void> {
    // Capture snapshot of current state
    const content = this._content
    const filetype = this._filetype
    const snapshotId = ++this._highlightSnapshotId

    if (!filetype) return

    // Mark as initial content if streaming
    const isInitialContent = this._streaming && !this._hadInitialContent
    if (isInitialContent) {
      this._hadInitialContent = true
    }

    this._isHighlighting = true

    try {
      const result = await this._treeSitterClient.highlightOnce(content, filetype)

      // Check if this result is stale (newer highlight was started)
      if (snapshotId !== this._highlightSnapshotId) {
        return
      }

      if (this.isDestroyed) return

      if (result.highlights && result.highlights.length > 0) {
        if (this._streaming) {
          this._lastHighlights = result.highlights
        }

        const chunks = treeSitterToTextChunks(content, result.highlights, this._syntaxStyle, {
          enabled: this._conceal,
        })
        const styledText = new StyledText(chunks)
        this.textBuffer.setStyledText(styledText)
      } else {
        // No highlights, use plain text
        this.textBuffer.setText(content)
      }

      this._shouldRenderTextBuffer = true
      this.updateTextInfo()
      this._isHighlighting = false
      this._highlightsDirty = false
      this.requestRender()
    } catch (error) {
      // Check if this result is stale
      if (snapshotId !== this._highlightSnapshotId) {
        return
      }

      console.warn("Code highlighting failed, falling back to plain text:", error)
      if (this.isDestroyed) return
      this.textBuffer.setText(content)
      this._shouldRenderTextBuffer = true
      this.updateTextInfo()
      this._isHighlighting = false
      this._highlightsDirty = false
      this.requestRender()
    }
  }

  /**
   * Gets the syntax highlights for a specific line.
   *
   * @param lineIdx - The line index (0-based)
   * @returns Array of highlight ranges for the line
   */
  public getLineHighlights(lineIdx: number) {
    return this.textBuffer.getLineHighlights(lineIdx)
  }

  protected renderSelf(buffer: OptimizedBuffer): void {
    if (this._highlightsDirty) {
      if (this._content.length === 0) {
        if (this.isDestroyed) return
        this.textBuffer.setText("")
        this._shouldRenderTextBuffer = false
        this._highlightsDirty = false
        this.updateTextInfo()
      } else if (!this._filetype) {
        if (this.isDestroyed) return
        this.textBuffer.setText(this._content)
        this._shouldRenderTextBuffer = true
        this._highlightsDirty = false
        this.updateTextInfo()
      } else {
        this.ensureVisibleTextBeforeHighlight()
        this._highlightsDirty = false
        this.startHighlight()
      }
    }

    if (!this._shouldRenderTextBuffer) return
    super.renderSelf(buffer)
  }
}
