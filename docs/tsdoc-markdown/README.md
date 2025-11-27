## :toolbox: Functions

- [hexToRgb](#gear-hextorgb)
- [rgbToHex](#gear-rgbtohex)
- [hsvToRgb](#gear-hsvtorgb)
- [parseColor](#gear-parsecolor)
- [measureText](#gear-measuretext)
- [getCharacterPositions](#gear-getcharacterpositions)
- [coordinateToCharacterIndex](#gear-coordinatetocharacterindex)
- [renderFontToFrameBuffer](#gear-renderfonttoframebuffer)
- [getBorderFromSides](#gear-getborderfromsides)
- [getBorderSides](#gear-getbordersides)
- [borderCharsToArray](#gear-bordercharstoarray)
- [parseKittyKeyboard](#gear-parsekittykeyboard)
- [parseKeypress](#gear-parsekeypress)
- [ANSI.scrollDown](#gear-ansi.scrolldown)
- [hastToStyledText](#gear-hasttostyledtext)
- [parseAlign](#gear-parsealign)
- [parseBoxSizing](#gear-parseboxsizing)
- [parseDimension](#gear-parsedimension)
- [parseDirection](#gear-parsedirection)
- [parseDisplay](#gear-parsedisplay)
- [parseEdge](#gear-parseedge)
- [parseFlexDirection](#gear-parseflexdirection)
- [parseGutter](#gear-parsegutter)
- [parseJustify](#gear-parsejustify)
- [parseLogLevel](#gear-parseloglevel)
- [parseMeasureMode](#gear-parsemeasuremode)
- [parseOverflow](#gear-parseoverflow)
- [parsePositionType](#gear-parsepositiontype)
- [parseUnit](#gear-parseunit)
- [parseWrap](#gear-parsewrap)
- [singleton](#gear-singleton)
- [destroySingleton](#gear-destroysingleton)
- [hasSingleton](#gear-hassingleton)
- [registerEnvVar](#gear-registerenvvar)
- [clearEnvCache](#gear-clearenvcache)
- [generateEnvMarkdown](#gear-generateenvmarkdown)
- [generateEnvColored](#gear-generateenvcolored)
- [env.get](#gear-env.get)
- [createDebounce](#gear-createdebounce)
- [clearDebounceScope](#gear-cleardebouncescope)
- [clearAllDebounces](#gear-clearalldebounces)
- [getParsers](#gear-getparsers)
- [addDefaultParsers](#gear-adddefaultparsers)
- [createTextAttributes](#gear-createtextattributes)
- [visualizeRenderableTree](#gear-visualizerenderabletree)
- [treeSitterToTextChunks](#gear-treesittertotextchunks)
- [treeSitterToStyledText](#gear-treesittertostyledtext)
- [isValidDirectoryName](#gear-isvaliddirectoryname)
- [getDataPaths](#gear-getdatapaths)
- [extToFiletype](#gear-exttofiletype)
- [pathToFiletype](#gear-pathtofiletype)
- [getTreeSitterClient](#gear-gettreesitterclient)
- [createExtmarksController](#gear-createextmarkscontroller)
- [createTerminalPalette](#gear-createterminalpalette)
- [validateOptions](#gear-validateoptions)
- [isValidPercentage](#gear-isvalidpercentage)
- [isMarginType](#gear-ismargintype)
- [isPaddingType](#gear-ispaddingtype)
- [isPositionType](#gear-ispositiontype)
- [isPositionTypeType](#gear-ispositiontypetype)
- [isOverflowType](#gear-isoverflowtype)
- [isDimensionType](#gear-isdimensiontype)
- [isFlexBasisType](#gear-isflexbasistype)
- [isSizeType](#gear-issizetype)
- [h](#gear-h)
- [h](#gear-h)
- [h](#gear-h)
- [h](#gear-h)
- [isVNode](#gear-isvnode)
- [maybeMakeRenderable](#gear-maybemakerenderable)
- [wrapWithDelegates](#gear-wrapwithdelegates)
- [instantiate](#gear-instantiate)
- [delegate](#gear-delegate)
- [delegate](#gear-delegate)
- [delegate](#gear-delegate)
- [delegate](#gear-delegate)
- [Generic](#gear-generic)
- [Box](#gear-box)
- [Text](#gear-text)
- [ASCIIFont](#gear-asciifont)
- [Input](#gear-input)
- [Select](#gear-select)
- [TabSelect](#gear-tabselect)
- [FrameBuffer](#gear-framebuffer)
- [vstyles.bold](#gear-vstyles.bold)
- [getObjectsInViewport](#gear-getobjectsinviewport)
- [isCapabilityResponse](#gear-iscapabilityresponse)
- [isPixelResolutionResponse](#gear-ispixelresolutionresponse)
- [parsePixelResolution](#gear-parsepixelresolution)
- [createCliRenderer](#gear-createclirenderer)
- [mergeKeyBindings](#gear-mergekeybindings)
- [getKeyBindingKey](#gear-getkeybindingkey)
- [buildKeyBindingsMap](#gear-buildkeybindingsmap)
- [isTextNodeRenderable](#gear-istextnoderenderable)
- [isStyledText](#gear-isstyledtext)
- [stringToStyledText](#gear-stringtostyledtext)
- [black](#gear-black)
- [red](#gear-red)
- [green](#gear-green)
- [yellow](#gear-yellow)
- [blue](#gear-blue)
- [magenta](#gear-magenta)
- [cyan](#gear-cyan)
- [white](#gear-white)
- [brightBlack](#gear-brightblack)
- [brightRed](#gear-brightred)
- [brightGreen](#gear-brightgreen)
- [brightYellow](#gear-brightyellow)
- [brightBlue](#gear-brightblue)
- [brightMagenta](#gear-brightmagenta)
- [brightCyan](#gear-brightcyan)
- [brightWhite](#gear-brightwhite)
- [bgBlack](#gear-bgblack)
- [bgRed](#gear-bgred)
- [bgGreen](#gear-bggreen)
- [bgYellow](#gear-bgyellow)
- [bgBlue](#gear-bgblue)
- [bgMagenta](#gear-bgmagenta)
- [bgCyan](#gear-bgcyan)
- [bgWhite](#gear-bgwhite)
- [bold](#gear-bold)
- [italic](#gear-italic)
- [underline](#gear-underline)
- [strikethrough](#gear-strikethrough)
- [dim](#gear-dim)
- [reverse](#gear-reverse)
- [blink](#gear-blink)
- [fg](#gear-fg)
- [bg](#gear-bg)
- [t](#gear-t)
- [isRenderable](#gear-isrenderable)
- [applyScanlines](#gear-applyscanlines)
- [applyGrayscale](#gear-applygrayscale)
- [applySepia](#gear-applysepia)
- [applyInvert](#gear-applyinvert)
- [applyNoise](#gear-applynoise)
- [applyChromaticAberration](#gear-applychromaticaberration)
- [applyAsciiArt](#gear-applyasciiart)
- [createTimeline](#gear-createtimeline)
- [convertGlobalToLocalSelection](#gear-convertglobaltolocalselection)
- [setRenderLibPath](#gear-setrenderlibpath)
- [resolveRenderLib](#gear-resolverenderlib)
- [convertThemeToStyles](#gear-convertthemetostyles)
- [DEFAULT_PHYSICS_EXPLOSION_PARAMETERS.materialFactory](#gear-default_physics_explosion_parameters.materialfactory)
- [DEFAULT_EXPLOSION_PARAMETERS.materialFactory](#gear-default_explosion_parameters.materialfactory)
- [createMockKeys](#gear-createmockkeys)
- [createMockMouse](#gear-createmockmouse)
- [createTestRenderer](#gear-createtestrenderer)
- [createTextareaRenderable](#gear-createtextarearenderable)
- [createSpy](#gear-createspy)
- [extend](#gear-extend)
- [getComponentCatalogue](#gear-getcomponentcatalogue)
- [setInitialProperties](#gear-setinitialproperties)
- [updateProperties](#gear-updateproperties)
- [getNextId](#gear-getnextid)
- [_render](#gear-_render)
- [createRoot](#gear-createroot)
- [testRender](#gear-testrender)
- [useAppContext](#gear-useappcontext)
- [useEffectEvent](#gear-useeffectevent)
- [useKeyboard](#gear-usekeyboard)
- [useRenderer](#gear-userenderer)
- [useOnResize](#gear-useonresize)
- [useTerminalDimensions](#gear-useterminaldimensions)
- [useTimeline](#gear-usetimeline)

### :gear: hexToRgb

Converts a hexadecimal color string to an RGBA instance.

| Function | Type |
| ---------- | ---------- |
| `hexToRgb` | `(hex: string) => RGBA` |

Parameters:

* `hex`: - Hex color string (supports #RGB, #RGBA, #RRGGBB, #RRGGBBAA formats)


Returns:

An RGBA color instance

Examples:

```ts
const red = hexToRgb("#ff0000")
const shortGreen = hexToRgb("#0f0")
const withAlpha = hexToRgb("#ff0000cc")
```


### :gear: rgbToHex

| Function | Type |
| ---------- | ---------- |
| `rgbToHex` | `(rgb: RGBA) => string` |

### :gear: hsvToRgb

| Function | Type |
| ---------- | ---------- |
| `hsvToRgb` | `(h: number, s: number, v: number) => RGBA` |

### :gear: parseColor

Parses a color input string or returns an existing RGBA instance.
Supports CSS color names, hex strings, and "transparent".

| Function | Type |
| ---------- | ---------- |
| `parseColor` | `(color: ColorInput) => RGBA` |

Parameters:

* `color`: - Color string (CSS name, hex, or "transparent") or RGBA instance


Returns:

An RGBA color instance

Examples:

```ts
// CSS color names
const red = parseColor("red")
const brightBlue = parseColor("brightblue")

// Hex strings
const custom = parseColor("#ff6600")

// Transparent
const transparent = parseColor("transparent")

// Pass-through RGBA
const existing = RGBA.fromValues(1, 0, 0, 1)
const same = parseColor(existing)  // Returns the same instance
```


### :gear: measureText

| Function | Type |
| ---------- | ---------- |
| `measureText` | `({ text, font }: { text: string; font?: "tiny" or "block" or "shade" or "slick" or "huge" or "grid" or "pallet" or undefined; }) => { width: number; height: number; }` |

### :gear: getCharacterPositions

| Function | Type |
| ---------- | ---------- |
| `getCharacterPositions` | `(text: string, font?: "tiny" or "block" or "shade" or "slick" or "huge" or "grid" or "pallet") => number[]` |

### :gear: coordinateToCharacterIndex

| Function | Type |
| ---------- | ---------- |
| `coordinateToCharacterIndex` | `(x: number, text: string, font?: "tiny" or "block" or "shade" or "slick" or "huge" or "grid" or "pallet") => number` |

### :gear: renderFontToFrameBuffer

| Function | Type |
| ---------- | ---------- |
| `renderFontToFrameBuffer` | `(buffer: OptimizedBuffer, { text, x, y, color, backgroundColor, font, }: { text: string; x?: number or undefined; y?: number or undefined; color?: ColorInput or ColorInput[] or undefined; backgroundColor?: ColorInput or undefined; font?: "tiny" or ... 6 more ... or undefined; }) => { ...; }` |

### :gear: getBorderFromSides

| Function | Type |
| ---------- | ---------- |
| `getBorderFromSides` | `(sides: BorderSidesConfig) => boolean or BorderSides[]` |

### :gear: getBorderSides

| Function | Type |
| ---------- | ---------- |
| `getBorderSides` | `(border: boolean or BorderSides[]) => BorderSidesConfig` |

### :gear: borderCharsToArray

| Function | Type |
| ---------- | ---------- |
| `borderCharsToArray` | `(chars: BorderCharacters) => Uint32Array<ArrayBufferLike>` |

### :gear: parseKittyKeyboard

| Function | Type |
| ---------- | ---------- |
| `parseKittyKeyboard` | `(sequence: string) => ParsedKey or null` |

### :gear: parseKeypress

| Function | Type |
| ---------- | ---------- |
| `parseKeypress` | `(s?: string or Buffer<ArrayBufferLike>, options?: ParseKeypressOptions) => ParsedKey or null` |

### :gear: ANSI.scrollDown

| Function | Type |
| ---------- | ---------- |
| `ANSI.scrollDown` | `(lines: number) => string` |

### :gear: hastToStyledText

| Function | Type |
| ---------- | ---------- |
| `hastToStyledText` | `(hast: HASTNode, syntaxStyle: SyntaxStyle) => StyledText` |

### :gear: parseAlign

| Function | Type |
| ---------- | ---------- |
| `parseAlign` | `(value: string or null or undefined) => Align` |

### :gear: parseBoxSizing

| Function | Type |
| ---------- | ---------- |
| `parseBoxSizing` | `(value: string) => BoxSizing` |

### :gear: parseDimension

| Function | Type |
| ---------- | ---------- |
| `parseDimension` | `(value: string) => Dimension` |

### :gear: parseDirection

| Function | Type |
| ---------- | ---------- |
| `parseDirection` | `(value: string) => Direction` |

### :gear: parseDisplay

| Function | Type |
| ---------- | ---------- |
| `parseDisplay` | `(value: string) => Display` |

### :gear: parseEdge

| Function | Type |
| ---------- | ---------- |
| `parseEdge` | `(value: string) => Edge` |

### :gear: parseFlexDirection

| Function | Type |
| ---------- | ---------- |
| `parseFlexDirection` | `(value: string or null or undefined) => FlexDirection` |

### :gear: parseGutter

| Function | Type |
| ---------- | ---------- |
| `parseGutter` | `(value: string) => Gutter` |

### :gear: parseJustify

| Function | Type |
| ---------- | ---------- |
| `parseJustify` | `(value: string or null or undefined) => Justify` |

### :gear: parseLogLevel

| Function | Type |
| ---------- | ---------- |
| `parseLogLevel` | `(value: string) => LogLevel` |

### :gear: parseMeasureMode

| Function | Type |
| ---------- | ---------- |
| `parseMeasureMode` | `(value: string) => MeasureMode` |

### :gear: parseOverflow

| Function | Type |
| ---------- | ---------- |
| `parseOverflow` | `(value: string or null or undefined) => Overflow` |

### :gear: parsePositionType

| Function | Type |
| ---------- | ---------- |
| `parsePositionType` | `(value: string or null or undefined) => PositionType` |

### :gear: parseUnit

| Function | Type |
| ---------- | ---------- |
| `parseUnit` | `(value: string) => Unit` |

### :gear: parseWrap

| Function | Type |
| ---------- | ---------- |
| `parseWrap` | `(value: string or null or undefined) => Wrap` |

### :gear: singleton

Ensures a value is initialized once per process,
persists across Bun hot reloads, and is type-safe.

| Function | Type |
| ---------- | ---------- |
| `singleton` | `<T>(key: string, factory: () => T) => T` |

### :gear: destroySingleton

| Function | Type |
| ---------- | ---------- |
| `destroySingleton` | `(key: string) => void` |

### :gear: hasSingleton

| Function | Type |
| ---------- | ---------- |
| `hasSingleton` | `(key: string) => boolean` |

### :gear: registerEnvVar

| Function | Type |
| ---------- | ---------- |
| `registerEnvVar` | `(config: EnvVarConfig) => void` |

### :gear: clearEnvCache

| Function | Type |
| ---------- | ---------- |
| `clearEnvCache` | `() => void` |

### :gear: generateEnvMarkdown

| Function | Type |
| ---------- | ---------- |
| `generateEnvMarkdown` | `() => string` |

### :gear: generateEnvColored

| Function | Type |
| ---------- | ---------- |
| `generateEnvColored` | `() => string` |

### :gear: env.get

| Function | Type |
| ---------- | ---------- |
| `env.get` | `() => any` |

### :gear: createDebounce

Creates a new debounce controller for a specific scope

| Function | Type |
| ---------- | ---------- |
| `createDebounce` | `(scopeId: string or number) => DebounceController` |

Parameters:

* `scopeId`: Unique identifier for this debounce scope


Returns:

A DebounceController for the specified scope

### :gear: clearDebounceScope

Clears all debounce timers for a specific scope

| Function | Type |
| ---------- | ---------- |
| `clearDebounceScope` | `(scopeId: string or number) => void` |

Parameters:

* `scopeId`: The scope identifier


### :gear: clearAllDebounces

Clears all active debounce timers across all scopes

| Function | Type |
| ---------- | ---------- |
| `clearAllDebounces` | `() => void` |

### :gear: getParsers

| Function | Type |
| ---------- | ---------- |
| `getParsers` | `() => FiletypeParserOptions[]` |

### :gear: addDefaultParsers

| Function | Type |
| ---------- | ---------- |
| `addDefaultParsers` | `(parsers: FiletypeParserOptions[]) => void` |

### :gear: createTextAttributes

| Function | Type |
| ---------- | ---------- |
| `createTextAttributes` | `({ bold, italic, underline, dim, blink, inverse, hidden, strikethrough, }?: { bold?: boolean or undefined; italic?: boolean or undefined; underline?: boolean or undefined; dim?: boolean or undefined; blink?: boolean or undefined; inverse?: boolean or undefined; hidden?: boolean or undefined; strikethrough?: boolean or undef...` |

### :gear: visualizeRenderableTree

| Function | Type |
| ---------- | ---------- |
| `visualizeRenderableTree` | `(renderable: Renderable, maxDepth?: number) => void` |

### :gear: treeSitterToTextChunks

| Function | Type |
| ---------- | ---------- |
| `treeSitterToTextChunks` | `(content: string, highlights: SimpleHighlight[], syntaxStyle: SyntaxStyle, options?: ConcealOptions or undefined) => TextChunk[]` |

### :gear: treeSitterToStyledText

| Function | Type |
| ---------- | ---------- |
| `treeSitterToStyledText` | `(content: string, filetype: string, syntaxStyle: SyntaxStyle, client: TreeSitterClient, options?: TreeSitterToStyledTextOptions or undefined) => Promise<...>` |

### :gear: isValidDirectoryName

| Function | Type |
| ---------- | ---------- |
| `isValidDirectoryName` | `(name: string) => boolean` |

### :gear: getDataPaths

| Function | Type |
| ---------- | ---------- |
| `getDataPaths` | `() => DataPathsManager` |

### :gear: extToFiletype

| Function | Type |
| ---------- | ---------- |
| `extToFiletype` | `(extension: string) => string or undefined` |

### :gear: pathToFiletype

| Function | Type |
| ---------- | ---------- |
| `pathToFiletype` | `(path: string) => string or undefined` |

### :gear: getTreeSitterClient

| Function | Type |
| ---------- | ---------- |
| `getTreeSitterClient` | `() => TreeSitterClient` |

### :gear: createExtmarksController

| Function | Type |
| ---------- | ---------- |
| `createExtmarksController` | `(editBuffer: EditBuffer, editorView: EditorView) => ExtmarksController` |

### :gear: createTerminalPalette

| Function | Type |
| ---------- | ---------- |
| `createTerminalPalette` | `(stdin: ReadStream, stdout: WriteStream, writeFn?: WriteFunction or undefined) => TerminalPaletteDetector` |

### :gear: validateOptions

| Function | Type |
| ---------- | ---------- |
| `validateOptions` | `(id: string, options: RenderableOptions<Renderable>) => void` |

### :gear: isValidPercentage

| Function | Type |
| ---------- | ---------- |
| `isValidPercentage` | `(value: any) => value is `${number}%`` |

### :gear: isMarginType

| Function | Type |
| ---------- | ---------- |
| `isMarginType` | `(value: any) => value is number or `${number}%` or "auto"` |

### :gear: isPaddingType

| Function | Type |
| ---------- | ---------- |
| `isPaddingType` | `(value: any) => value is number or `${number}%`` |

### :gear: isPositionType

| Function | Type |
| ---------- | ---------- |
| `isPositionType` | `(value: any) => value is number or `${number}%` or "auto"` |

### :gear: isPositionTypeType

| Function | Type |
| ---------- | ---------- |
| `isPositionTypeType` | `(value: any) => value is PositionTypeString` |

### :gear: isOverflowType

| Function | Type |
| ---------- | ---------- |
| `isOverflowType` | `(value: any) => value is OverflowString` |

### :gear: isDimensionType

| Function | Type |
| ---------- | ---------- |
| `isDimensionType` | `(value: any) => value is number or `${number}%` or "auto"` |

### :gear: isFlexBasisType

| Function | Type |
| ---------- | ---------- |
| `isFlexBasisType` | `(value: any) => value is number or "auto" or undefined` |

### :gear: isSizeType

| Function | Type |
| ---------- | ---------- |
| `isSizeType` | `(value: any) => value is number or `${number}%` or undefined` |

### :gear: h

| Function | Type |
| ---------- | ---------- |
| `h` | `{ <TCtor extends RenderableConstructor<any>>(type: TCtor, props?: (TCtor extends RenderableConstructor<infer P extends RenderableOptions<any>> ? P : never) or undefined, ...children: VChild[]): ProxiedVNode<...>; <P>(type: FunctionalConstruct<...>, props?: P or undefined, ...children: VChild[]): VNode<...>; <P>(type: ...` |

### :gear: h

| Function | Type |
| ---------- | ---------- |
| `h` | `{ <TCtor extends RenderableConstructor<any>>(type: TCtor, props?: (TCtor extends RenderableConstructor<infer P extends RenderableOptions<any>> ? P : never) or undefined, ...children: VChild[]): ProxiedVNode<...>; <P>(type: FunctionalConstruct<...>, props?: P or undefined, ...children: VChild[]): VNode<...>; <P>(type: ...` |

### :gear: h

| Function | Type |
| ---------- | ---------- |
| `h` | `{ <TCtor extends RenderableConstructor<any>>(type: TCtor, props?: (TCtor extends RenderableConstructor<infer P extends RenderableOptions<any>> ? P : never) or undefined, ...children: VChild[]): ProxiedVNode<...>; <P>(type: FunctionalConstruct<...>, props?: P or undefined, ...children: VChild[]): VNode<...>; <P>(type: ...` |

### :gear: h

| Function | Type |
| ---------- | ---------- |
| `h` | `{ <TCtor extends RenderableConstructor<any>>(type: TCtor, props?: (TCtor extends RenderableConstructor<infer P extends RenderableOptions<any>> ? P : never) or undefined, ...children: VChild[]): ProxiedVNode<...>; <P>(type: FunctionalConstruct<...>, props?: P or undefined, ...children: VChild[]): VNode<...>; <P>(type: ...` |

### :gear: isVNode

| Function | Type |
| ---------- | ---------- |
| `isVNode` | `(node: any) => node is VNode<any, VChild[]>` |

### :gear: maybeMakeRenderable

| Function | Type |
| ---------- | ---------- |
| `maybeMakeRenderable` | `(ctx: RenderContext, node: unknown) => Renderable or null` |

### :gear: wrapWithDelegates

| Function | Type |
| ---------- | ---------- |
| `wrapWithDelegates` | `<T extends InstanceType<RenderableConstructor>>(instance: T, delegateMap: Record<string, string> or undefined) => T` |

### :gear: instantiate

| Function | Type |
| ---------- | ---------- |
| `instantiate` | `<NodeType extends VNode or Renderable>(ctx: RenderContext, node: NodeType) => InstantiateFn<NodeType>` |

### :gear: delegate

Controlled delegation that routes selected properties/methods
to a descendant renderable identified by ID.

| Function | Type |
| ---------- | ---------- |
| `delegate` | `{ <Factory extends InstantiateFn<any>, InnerNode extends InferNode<Factory>, TargetMap extends Record<keyof InnerNode, string>, const Mapping extends Partial<TargetMap>>(mapping: ValidateShape<Mapping, TargetMap>, vnode: Factory): Renderable; <ConstructorType extends RenderableConstructor<any>, TargetMap extends Rec...` |

### :gear: delegate

Controlled delegation that routes selected properties/methods
to a descendant renderable identified by ID.

| Function | Type |
| ---------- | ---------- |
| `delegate` | `{ <Factory extends InstantiateFn<any>, InnerNode extends InferNode<Factory>, TargetMap extends Record<keyof InnerNode, string>, const Mapping extends Partial<TargetMap>>(mapping: ValidateShape<Mapping, TargetMap>, vnode: Factory): Renderable; <ConstructorType extends RenderableConstructor<any>, TargetMap extends Rec...` |

### :gear: delegate

Controlled delegation that routes selected properties/methods
to a descendant renderable identified by ID.

| Function | Type |
| ---------- | ---------- |
| `delegate` | `{ <Factory extends InstantiateFn<any>, InnerNode extends InferNode<Factory>, TargetMap extends Record<keyof InnerNode, string>, const Mapping extends Partial<TargetMap>>(mapping: ValidateShape<Mapping, TargetMap>, vnode: Factory): Renderable; <ConstructorType extends RenderableConstructor<any>, TargetMap extends Rec...` |

### :gear: delegate

Controlled delegation that routes selected properties/methods
to a descendant renderable identified by ID.

| Function | Type |
| ---------- | ---------- |
| `delegate` | `{ <Factory extends InstantiateFn<any>, InnerNode extends InferNode<Factory>, TargetMap extends Record<keyof InnerNode, string>, const Mapping extends Partial<TargetMap>>(mapping: ValidateShape<Mapping, TargetMap>, vnode: Factory): Renderable; <ConstructorType extends RenderableConstructor<any>, TargetMap extends Rec...` |

### :gear: Generic

| Function | Type |
| ---------- | ---------- |
| `Generic` | `(props?: VRenderableOptions or undefined, ...children: VChild[]) => ProxiedVNode<typeof VRenderable>` |

### :gear: Box

| Function | Type |
| ---------- | ---------- |
| `Box` | `(props?: BoxOptions<BoxRenderable> or undefined, ...children: VChild[]) => ProxiedVNode<typeof BoxRenderable>` |

### :gear: Text

| Function | Type |
| ---------- | ---------- |
| `Text` | `(props?: (TextOptions and { content?: any; }) or undefined, ...children: VChild[] or TextNodeRenderable[]) => ProxiedVNode<typeof TextRenderable>` |

### :gear: ASCIIFont

| Function | Type |
| ---------- | ---------- |
| `ASCIIFont` | `(props?: ASCIIFontOptions or undefined, ...children: VChild[]) => ProxiedVNode<typeof ASCIIFontRenderable>` |

### :gear: Input

| Function | Type |
| ---------- | ---------- |
| `Input` | `(props?: InputRenderableOptions or undefined, ...children: VChild[]) => ProxiedVNode<typeof InputRenderable>` |

### :gear: Select

| Function | Type |
| ---------- | ---------- |
| `Select` | `(props?: SelectRenderableOptions or undefined, ...children: VChild[]) => ProxiedVNode<typeof SelectRenderable>` |

### :gear: TabSelect

| Function | Type |
| ---------- | ---------- |
| `TabSelect` | `(props?: TabSelectRenderableOptions or undefined, ...children: VChild[]) => ProxiedVNode<typeof TabSelectRenderable>` |

### :gear: FrameBuffer

| Function | Type |
| ---------- | ---------- |
| `FrameBuffer` | `(props: FrameBufferOptions, ...children: VChild[]) => ProxiedVNode<typeof FrameBufferRenderable>` |

### :gear: vstyles.bold

| Function | Type |
| ---------- | ---------- |
| `vstyles.bold` | `(...children: (string or TextNodeRenderable)[]) => TextNodeRenderable` |

### :gear: getObjectsInViewport

Returns objects that overlap with the viewport bounds.

| Function | Type |
| ---------- | ---------- |
| `getObjectsInViewport` | `<T extends ViewportObject>(viewport: ViewportBounds, objects: T[], direction?: "row" or "column", padding?: number, minTriggerSize?: number) => T[]` |

Parameters:

* `viewport`: - The viewport bounds to check against
* `objects`: - Array of objects MUST be sorted by position (y for column, x for row direction)
* `direction`: - Primary scroll direction: "column" (vertical) or "row" (horizontal)
* `padding`: - Extra padding around viewport to include nearby objects
* `minTriggerSize`: - Minimum array size to use binary search optimization


Returns:

Array of visible objects sorted by zIndex

### :gear: isCapabilityResponse

Check if a sequence is a terminal capability response.
Returns true if the sequence matches any known capability response pattern.

| Function | Type |
| ---------- | ---------- |
| `isCapabilityResponse` | `(sequence: string) => boolean` |

### :gear: isPixelResolutionResponse

Check if a sequence is a pixel resolution response.
Format: ESC[4;height;widtht

| Function | Type |
| ---------- | ---------- |
| `isPixelResolutionResponse` | `(sequence: string) => boolean` |

### :gear: parsePixelResolution

Parse pixel resolution from response sequence.
Returns { width, height } or null if not a valid resolution response.

| Function | Type |
| ---------- | ---------- |
| `parsePixelResolution` | `(sequence: string) => { width: number; height: number; } or null` |

### :gear: createCliRenderer

Creates and initializes a CLI renderer instance.

| Function | Type |
| ---------- | ---------- |
| `createCliRenderer` | `(config?: CliRendererConfig) => Promise<CliRenderer>` |

Parameters:

* `config`: - Configuration options for the renderer


Returns:

A promise that resolves to an initialized CliRenderer instance

Examples:

```ts
import { createCliRenderer, BoxRenderable } from "@opentui/core"

// Create a basic renderer
const renderer = await createCliRenderer({
  exitOnCtrlC: true,
  targetFps: 60
})

// Add UI components
const box = new BoxRenderable(renderer, {
  width: 20,
  height: 10,
  backgroundColor: "#FF6B6B"
})
renderer.root.add(box)

// Start the render loop
renderer.start()
```


### :gear: mergeKeyBindings

| Function | Type |
| ---------- | ---------- |
| `mergeKeyBindings` | `<Action extends string>(defaults: KeyBinding<Action>[], custom: KeyBinding<Action>[]) => KeyBinding<Action>[]` |

### :gear: getKeyBindingKey

| Function | Type |
| ---------- | ---------- |
| `getKeyBindingKey` | `<Action extends string>(binding: KeyBinding<Action>) => string` |

### :gear: buildKeyBindingsMap

| Function | Type |
| ---------- | ---------- |
| `buildKeyBindingsMap` | `<Action extends string>(bindings: KeyBinding<Action>[]) => Map<string, Action>` |

### :gear: isTextNodeRenderable

Type guard to check if an object is a TextNodeRenderable.

| Function | Type |
| ---------- | ---------- |
| `isTextNodeRenderable` | `(obj: any) => obj is TextNodeRenderable` |

Parameters:

* `obj`: - The object to check


Returns:

`true` if obj is a TextNodeRenderable

### :gear: isStyledText

Type guard to check if an object is a StyledText instance.

| Function | Type |
| ---------- | ---------- |
| `isStyledText` | `(obj: any) => obj is StyledText` |

Parameters:

* `obj`: - Object to check


Returns:

True if the object is StyledText

### :gear: stringToStyledText

| Function | Type |
| ---------- | ---------- |
| `stringToStyledText` | `(content: string) => StyledText` |

### :gear: black

Foreground color functions - apply standard colors to text.

| Function | Type |
| ---------- | ---------- |
| `black` | `(input: StylableInput) => TextChunk` |

### :gear: red

| Function | Type |
| ---------- | ---------- |
| `red` | `(input: StylableInput) => TextChunk` |

### :gear: green

| Function | Type |
| ---------- | ---------- |
| `green` | `(input: StylableInput) => TextChunk` |

### :gear: yellow

| Function | Type |
| ---------- | ---------- |
| `yellow` | `(input: StylableInput) => TextChunk` |

### :gear: blue

| Function | Type |
| ---------- | ---------- |
| `blue` | `(input: StylableInput) => TextChunk` |

### :gear: magenta

| Function | Type |
| ---------- | ---------- |
| `magenta` | `(input: StylableInput) => TextChunk` |

### :gear: cyan

| Function | Type |
| ---------- | ---------- |
| `cyan` | `(input: StylableInput) => TextChunk` |

### :gear: white

| Function | Type |
| ---------- | ---------- |
| `white` | `(input: StylableInput) => TextChunk` |

### :gear: brightBlack

| Function | Type |
| ---------- | ---------- |
| `brightBlack` | `(input: StylableInput) => TextChunk` |

### :gear: brightRed

| Function | Type |
| ---------- | ---------- |
| `brightRed` | `(input: StylableInput) => TextChunk` |

### :gear: brightGreen

| Function | Type |
| ---------- | ---------- |
| `brightGreen` | `(input: StylableInput) => TextChunk` |

### :gear: brightYellow

| Function | Type |
| ---------- | ---------- |
| `brightYellow` | `(input: StylableInput) => TextChunk` |

### :gear: brightBlue

| Function | Type |
| ---------- | ---------- |
| `brightBlue` | `(input: StylableInput) => TextChunk` |

### :gear: brightMagenta

| Function | Type |
| ---------- | ---------- |
| `brightMagenta` | `(input: StylableInput) => TextChunk` |

### :gear: brightCyan

| Function | Type |
| ---------- | ---------- |
| `brightCyan` | `(input: StylableInput) => TextChunk` |

### :gear: brightWhite

| Function | Type |
| ---------- | ---------- |
| `brightWhite` | `(input: StylableInput) => TextChunk` |

### :gear: bgBlack

| Function | Type |
| ---------- | ---------- |
| `bgBlack` | `(input: StylableInput) => TextChunk` |

### :gear: bgRed

| Function | Type |
| ---------- | ---------- |
| `bgRed` | `(input: StylableInput) => TextChunk` |

### :gear: bgGreen

| Function | Type |
| ---------- | ---------- |
| `bgGreen` | `(input: StylableInput) => TextChunk` |

### :gear: bgYellow

| Function | Type |
| ---------- | ---------- |
| `bgYellow` | `(input: StylableInput) => TextChunk` |

### :gear: bgBlue

| Function | Type |
| ---------- | ---------- |
| `bgBlue` | `(input: StylableInput) => TextChunk` |

### :gear: bgMagenta

| Function | Type |
| ---------- | ---------- |
| `bgMagenta` | `(input: StylableInput) => TextChunk` |

### :gear: bgCyan

| Function | Type |
| ---------- | ---------- |
| `bgCyan` | `(input: StylableInput) => TextChunk` |

### :gear: bgWhite

| Function | Type |
| ---------- | ---------- |
| `bgWhite` | `(input: StylableInput) => TextChunk` |

### :gear: bold

Text style functions - apply formatting attributes to text.

| Function | Type |
| ---------- | ---------- |
| `bold` | `(input: StylableInput) => TextChunk` |

Examples:

```ts
const text = t`${bold("Important")} ${italic("note")}`
```


### :gear: italic

| Function | Type |
| ---------- | ---------- |
| `italic` | `(input: StylableInput) => TextChunk` |

### :gear: underline

| Function | Type |
| ---------- | ---------- |
| `underline` | `(input: StylableInput) => TextChunk` |

### :gear: strikethrough

| Function | Type |
| ---------- | ---------- |
| `strikethrough` | `(input: StylableInput) => TextChunk` |

### :gear: dim

| Function | Type |
| ---------- | ---------- |
| `dim` | `(input: StylableInput) => TextChunk` |

### :gear: reverse

| Function | Type |
| ---------- | ---------- |
| `reverse` | `(input: StylableInput) => TextChunk` |

### :gear: blink

| Function | Type |
| ---------- | ---------- |
| `blink` | `(input: StylableInput) => TextChunk` |

### :gear: fg

Creates a foreground color function with a custom color.

| Function | Type |
| ---------- | ---------- |
| `fg` | `(color: ColorInput) => (input: StylableInput) => TextChunk` |

Parameters:

* `color`: - The color to apply (CSS name, hex, or RGBA instance)


Returns:

A function that applies the foreground color to text

Examples:

```ts
const orange = fg("#ff6600")
const text = t`${orange("Custom color")} text`
```


### :gear: bg

Creates a background color function with a custom color.

| Function | Type |
| ---------- | ---------- |
| `bg` | `(color: ColorInput) => (input: StylableInput) => TextChunk` |

Parameters:

* `color`: - The color to apply (CSS name, hex, or RGBA instance)


Returns:

A function that applies the background color to text

Examples:

```ts
const highlight = bg("#ffff00")
const text = t`${highlight("Highlighted")} text`
```


### :gear: t

Template literal tag function for creating styled text.
Allows composing text with inline color and style formatting.

| Function | Type |
| ---------- | ---------- |
| `t` | `(strings: TemplateStringsArray, ...values: StylableInput[]) => StyledText` |

Parameters:

* `strings`: - Template string parts
* `values`: - Interpolated values (strings, numbers, or styled chunks)


Returns:

A StyledText object containing all text chunks

Examples:

```ts
import { t, red, bold, green, bgBlue } from "@opentui/core"

// Simple colored text
const text1 = t`Hello ${red("World")}!`

// Combining styles
const text2 = t`${bold(red("Error"))}: File not found`

// Multiple styles in one line
const text3 = t`${green("✓")} Success ${red("✗")} Failed`

// Background colors
const text4 = t`${bgBlue(white("Highlighted"))} normal text`

// Using with components
const label = new TextRenderable(ctx, {
  content: t`Status: ${green("Online")}`
})
```


### :gear: isRenderable

Type guard to check if an object is a Renderable.

| Function | Type |
| ---------- | ---------- |
| `isRenderable` | `(obj: any) => obj is Renderable` |

Parameters:

* `obj`: - Object to check


Returns:

True if the object is a Renderable

### :gear: applyScanlines

Applies a scanline effect by darkening every nth row.

| Function | Type |
| ---------- | ---------- |
| `applyScanlines` | `(buffer: OptimizedBuffer, strength?: number, step?: number) => void` |

### :gear: applyGrayscale

Converts the buffer colors to grayscale.

| Function | Type |
| ---------- | ---------- |
| `applyGrayscale` | `(buffer: OptimizedBuffer) => void` |

### :gear: applySepia

Applies a sepia tone to the buffer.

| Function | Type |
| ---------- | ---------- |
| `applySepia` | `(buffer: OptimizedBuffer) => void` |

### :gear: applyInvert

Inverts the colors in the buffer.

| Function | Type |
| ---------- | ---------- |
| `applyInvert` | `(buffer: OptimizedBuffer) => void` |

### :gear: applyNoise

Adds random noise to the buffer colors.

| Function | Type |
| ---------- | ---------- |
| `applyNoise` | `(buffer: OptimizedBuffer, strength?: number) => void` |

### :gear: applyChromaticAberration

Applies a simplified chromatic aberration effect.

| Function | Type |
| ---------- | ---------- |
| `applyChromaticAberration` | `(buffer: OptimizedBuffer, strength?: number) => void` |

### :gear: applyAsciiArt

Converts the buffer to ASCII art based on background brightness.

| Function | Type |
| ---------- | ---------- |
| `applyAsciiArt` | `(buffer: OptimizedBuffer, ramp?: string) => void` |

### :gear: createTimeline

Creates a new timeline for orchestrating animations.

| Function | Type |
| ---------- | ---------- |
| `createTimeline` | `(options?: TimelineOptions) => Timeline` |

Parameters:

* `options`: - Configuration options for the timeline


Returns:

A Timeline instance ready for adding animations

Examples:

```ts
// Simple timeline with one animation
const timeline = createTimeline({ duration: 2000 })
timeline.add(box, { x: 100, y: 50, duration: 2000 })

// Timeline with multiple sequential animations
const sequence = createTimeline({ duration: 5000 })
sequence.add(box, { x: 100, duration: 1000 }, 0)     // Start at 0ms
sequence.add(box, { y: 50, duration: 1000 }, 1000)   // Start at 1000ms
sequence.add(box, { x: 0, y: 0, duration: 1000 }, 2000) // Start at 2000ms

// Looping timeline
const loop = createTimeline({
  duration: 3000,
  loop: true,
  onComplete: () => console.log("Loop iteration complete")
})
loop.add(box, {
  rotation: Math.PI * 2,
  duration: 3000,
  ease: "linear"
})

// Update timeline in render loop
renderer.setFrameCallback(async (deltaTime) => {
  timeline.update(deltaTime)
})
```


### :gear: convertGlobalToLocalSelection

| Function | Type |
| ---------- | ---------- |
| `convertGlobalToLocalSelection` | `(globalSelection: Selection or null, localX: number, localY: number) => LocalSelectionBounds or null` |

### :gear: setRenderLibPath

| Function | Type |
| ---------- | ---------- |
| `setRenderLibPath` | `(libPath: string) => void` |

### :gear: resolveRenderLib

| Function | Type |
| ---------- | ---------- |
| `resolveRenderLib` | `() => RenderLib` |

### :gear: convertThemeToStyles

| Function | Type |
| ---------- | ---------- |
| `convertThemeToStyles` | `(theme: ThemeTokenStyle[]) => Record<string, StyleDefinition>` |

### :gear: DEFAULT_PHYSICS_EXPLOSION_PARAMETERS.materialFactory

| Function | Type |
| ---------- | ---------- |
| `DEFAULT_PHYSICS_EXPLOSION_PARAMETERS.materialFactory` | `() => any` |

### :gear: DEFAULT_EXPLOSION_PARAMETERS.materialFactory

| Function | Type |
| ---------- | ---------- |
| `DEFAULT_EXPLOSION_PARAMETERS.materialFactory` | `() => any` |

### :gear: createMockKeys

| Function | Type |
| ---------- | ---------- |
| `createMockKeys` | `(renderer: CliRenderer, options?: MockKeysOptions or undefined) => { pressKeys: (keys: string[], delayMs?: number) => Promise<void>; pressKey: (key: string, modifiers?: { ...; } or undefined) => void; ... 7 more ...; pasteBracketedText: (text: string) => Promise<...>; }` |

### :gear: createMockMouse

| Function | Type |
| ---------- | ---------- |
| `createMockMouse` | `(renderer: CliRenderer) => { moveTo: (x: number, y: number, options?: MouseEventOptions) => Promise<void>; click: (x: number, y: number, button?: MouseButton, options?: MouseEventOptions) => Promise<...>; ... 7 more ...; emitMouseEvent: (type: MouseEventType, x: number, y: number, button?: MouseButton, options?: Omi...` |

### :gear: createTestRenderer

| Function | Type |
| ---------- | ---------- |
| `createTestRenderer` | `(options: TestRendererOptions) => Promise<{ renderer: TestRenderer; mockInput: { pressKeys: (keys: string[], delayMs?: number) => Promise<void>; ... 8 more ...; pasteBracketedText: (text: string) => Promise<...>; }; mockMouse: { ...; }; renderOnce: () => Promise<...>; captureCharFrame: () => string; resize: (width: ...` |

### :gear: createTextareaRenderable

| Function | Type |
| ---------- | ---------- |
| `createTextareaRenderable` | `(renderer: TestRenderer, renderOnce: () => Promise<void>, options: TextareaOptions) => Promise<{ textarea: TextareaRenderable; root: any; }>` |

### :gear: createSpy

| Function | Type |
| ---------- | ---------- |
| `createSpy` | `() => { (...args: any[]): void; calls: any[][]; callCount(): number; calledWith(...expected: any[]): boolean; reset(): number; }` |

### :gear: extend

Extends the component catalogue with custom renderable components.

This function allows you to register custom renderable classes so they can be used
as JSX elements in your React components. After extending, you should also use
TypeScript module augmentation to add type definitions for the new components.

| Function | Type |
| ---------- | ---------- |
| `extend` | `<T extends ComponentCatalogue>(objects: T) => void` |

Parameters:

* `objects`: - Object mapping component names to their renderable constructors


Examples:

```tsx
// Define a custom renderable
class CustomButtonRenderable extends BaseRenderable {
  // ... implementation
}

// Extend the catalogue
extend({
  'custom-button': CustomButtonRenderable,
  'special-box': SpecialBoxRenderable
})

// Add TypeScript types (in a .d.ts file)
declare module '@opentui/react' {
  interface OpenTUIComponents {
    'custom-button': typeof CustomButtonRenderable
  }
}

// Now use in JSX
function App() {
  return <custom-button>Click me</custom-button>
}
```


### :gear: getComponentCatalogue

Returns the current component catalogue.

Provides access to the internal mapping of component names to their renderable constructors.
This includes both built-in components and any custom components added via `extend()`.

| Function | Type |
| ---------- | ---------- |
| `getComponentCatalogue` | `() => ComponentCatalogue` |

Returns:

Object containing all registered component constructors

Examples:

```tsx
const catalogue = getComponentCatalogue()
console.log(Object.keys(catalogue)) // ['box', 'text', 'input', ...]
```


### :gear: setInitialProperties

| Function | Type |
| ---------- | ---------- |
| `setInitialProperties` | `(instance: BaseRenderable, type: "text" or "span" or "b" or "strong" or "i" or "em" or "u" or "br" or "box" or "code" or "input" or "select" or "textarea" or "scrollbox" or "ascii-font" or "tab-select", props: Props) => void` |

### :gear: updateProperties

| Function | Type |
| ---------- | ---------- |
| `updateProperties` | `(instance: BaseRenderable, type: "text" or "span" or "b" or "strong" or "i" or "em" or "u" or "br" or "box" or "code" or "input" or "select" or "textarea" or "scrollbox" or "ascii-font" or "tab-select", oldProps: Props, newProps: Props) => void` |

### :gear: getNextId

| Function | Type |
| ---------- | ---------- |
| `getNextId` | `(type: "text" or "span" or "b" or "strong" or "i" or "em" or "u" or "br" or "box" or "code" or "input" or "select" or "textarea" or "scrollbox" or "ascii-font" or "tab-select") => string` |

### :gear: _render

| Function | Type |
| ---------- | ---------- |
| `_render` | `(element: React.ReactNode, root: RootRenderable) => any` |

### :gear: createRoot

Creates a root for rendering a React tree in the terminal.

This is the main entry point for rendering OpenTUI React applications. It creates a root
that manages the React component tree and connects it to the CLI renderer for terminal output.
The root provides methods to render components and clean up when done.

| Function | Type |
| ---------- | ---------- |
| `createRoot` | `(renderer: CliRenderer) => Root` |

Parameters:

* `renderer`: - The CLI renderer instance to use for drawing to the terminal


Returns:

A root object with `render` and `unmount` methods

Examples:

```tsx
import { createCliRenderer } from '@opentui/core'
import { createRoot } from '@opentui/react'

const renderer = await createCliRenderer()
const root = createRoot(renderer)

root.render(<App />)

// Later, to clean up
root.unmount()
```
```tsx
// Typical usage in an application entry point
async function main() {
  const renderer = await createCliRenderer()
  const root = createRoot(renderer)

  root.render(
    <box>
      <text>Hello OpenTUI!</text>
    </box>
  )
}

main()
```


### :gear: testRender

| Function | Type |
| ---------- | ---------- |
| `testRender` | `(node: ReactNode, testRendererOptions: TestRendererOptions) => Promise<any>` |

### :gear: useAppContext

Hook for accessing the OpenTUI application context.

Returns the context containing the CLI renderer and keyboard handler instances.
This is a low-level hook - most users should use `useRenderer()` or `useKeyboard()` instead.

| Function | Type |
| ---------- | ---------- |
| `useAppContext` | `() => AppContext` |

Returns:

The application context with renderer and keyHandler

Examples:

```tsx
function MyComponent() {
  const { renderer, keyHandler } = useAppContext()

  // Direct access to renderer and keyboard handler
  console.log('Has renderer:', !!renderer)

  return <text>Context available</text>
}
```


### :gear: useEffectEvent

Returns a stable callback that always calls the latest version of the provided handler.
This prevents unnecessary re-renders and effect re-runs while ensuring the callback
always has access to the latest props and state.

Useful for event handlers that need to be passed to effects with empty dependency arrays
or memoized child components.

| Function | Type |
| ---------- | ---------- |
| `useEffectEvent` | `<T extends (...args: any[]) => any>(handler: T) => T` |

### :gear: useKeyboard

Hook for handling keyboard input events in the terminal.

Registers a handler for keypress events that is automatically cleaned up when the component unmounts.
The handler receives a KeyEvent object containing information about the pressed key.

| Function | Type |
| ---------- | ---------- |
| `useKeyboard` | `(handler: (key: KeyEvent) => void) => void` |

Parameters:

* `handler`: - Callback function invoked on each keypress event


Examples:

```tsx
function MyComponent() {
  useKeyboard((key) => {
    if (key.key === 'q') {
      process.exit(0)
    }
    console.log('Key pressed:', key.key)
  })

  return <text>Press any key...</text>
}
```


### :gear: useRenderer

Hook for accessing the CLI renderer instance.

Returns the active CLI renderer that is responsible for drawing the terminal UI.
This hook must be used within a component rendered by createRoot.

| Function | Type |
| ---------- | ---------- |
| `useRenderer` | `() => CliRenderer` |

Returns:

The CLI renderer instance

Examples:

```tsx
function MyComponent() {
  const renderer = useRenderer()

  // Access renderer properties
  console.log('Terminal size:', renderer.width, renderer.height)

  return <text>Renderer ready</text>
}
```


### :gear: useOnResize

Hook for responding to terminal resize events.

Registers a callback that is invoked whenever the terminal window is resized.
The callback receives the new width and height dimensions. The handler is automatically
cleaned up when the component unmounts.

| Function | Type |
| ---------- | ---------- |
| `useOnResize` | `(callback: (width: number, height: number) => void) => CliRenderer` |

Parameters:

* `callback`: - Function called with new dimensions when terminal is resized


Returns:

The CLI renderer instance

Examples:

```tsx
function MyComponent() {
  useOnResize((width, height) => {
    console.log('Terminal resized to:', width, 'x', height)
  })

  return <text>Resize the terminal to see updates</text>
}
```


### :gear: useTerminalDimensions

Hook for tracking terminal dimensions with automatic updates on resize.

Returns an object containing the current width and height of the terminal.
The dimensions are automatically updated when the terminal is resized, triggering
a re-render of the component.

| Function | Type |
| ---------- | ---------- |
| `useTerminalDimensions` | `() => { width: number; height: number; }` |

Returns:

Object containing current terminal width and height

Examples:

```tsx
function MyComponent() {
  const { width, height } = useTerminalDimensions()

  return (
    <box>
      <text>Terminal size: {width} x {height}</text>
    </box>
  )
}
```


### :gear: useTimeline

Hook for creating and managing animation timelines.

Creates a Timeline instance that is automatically registered with the animation engine
and cleaned up when the component unmounts. Timelines are used to orchestrate animations
and can control the timing of multiple animated properties.

| Function | Type |
| ---------- | ---------- |
| `useTimeline` | `(options?: TimelineOptions) => Timeline` |

Parameters:

* `options`: - Configuration options for the timeline (duration, easing, autoplay, etc.)


Returns:

A Timeline instance for controlling animations

Examples:

```tsx
function AnimatedComponent() {
  const timeline = useTimeline({ duration: 1000 })
  const boxRef = useRef<BoxRenderable>(null)

  useEffect(() => {
    if (boxRef.current) {
      timeline.animate(boxRef.current, { x: 10 }, { x: 50 })
    }
  }, [])

  return <box ref={boxRef}>Animating...</box>
}
```



## :wrench: Constants

- [fonts](#gear-fonts)
- [BorderChars](#gear-borderchars)
- [BorderCharArrays](#gear-borderchararrays)
- [nonAlphanumericKeys](#gear-nonalphanumerickeys)
- [envRegistry](#gear-envregistry)
- [capture](#gear-capture)
- [engine](#gear-engine)
- [TextAttributes](#gear-textattributes)
- [StyledChunkStruct](#gear-styledchunkstruct)
- [HighlightStruct](#gear-highlightstruct)
- [LogicalCursorStruct](#gear-logicalcursorstruct)
- [VisualCursorStruct](#gear-visualcursorstruct)
- [TerminalCapabilitiesStruct](#gear-terminalcapabilitiesstruct)
- [EncodedCharStruct](#gear-encodedcharstruct)
- [LineInfoStruct](#gear-lineinfostruct)
- [MeasureResultStruct](#gear-measureresultstruct)
- [KeyCodes](#gear-keycodes)
- [MouseButtons](#gear-mousebuttons)
- [textNodeKeys](#gear-textnodekeys)
- [baseComponents](#gear-basecomponents)
- [componentCatalogue](#gear-componentcatalogue)
- [hostConfig](#gear-hostconfig)
- [reconciler](#gear-reconciler)
- [AppContext](#gear-appcontext)

### :gear: fonts

| Constant | Type |
| ---------- | ---------- |
| `fonts` | `{ tiny: any; block: any; shade: any; slick: any; huge: any; grid: any; pallet: any; }` |

### :gear: BorderChars

| Constant | Type |
| ---------- | ---------- |
| `BorderChars` | `Record<BorderStyle, BorderCharacters>` |

### :gear: BorderCharArrays

| Constant | Type |
| ---------- | ---------- |
| `BorderCharArrays` | `Record<BorderStyle, Uint32Array<ArrayBufferLike>>` |

### :gear: nonAlphanumericKeys

| Constant | Type |
| ---------- | ---------- |
| `nonAlphanumericKeys` | `string[]` |

### :gear: envRegistry

| Constant | Type |
| ---------- | ---------- |
| `envRegistry` | `Record<string, EnvVarConfig>` |

### :gear: capture

| Constant | Type |
| ---------- | ---------- |
| `capture` | `Capture` |

### :gear: engine

| Constant | Type |
| ---------- | ---------- |
| `engine` | `TimelineEngine` |

### :gear: TextAttributes

| Constant | Type |
| ---------- | ---------- |
| `TextAttributes` | `{ NONE: number; BOLD: number; DIM: number; ITALIC: number; UNDERLINE: number; BLINK: number; INVERSE: number; HIDDEN: number; STRIKETHROUGH: number; }` |

### :gear: StyledChunkStruct

| Constant | Type |
| ---------- | ---------- |
| `StyledChunkStruct` | `DefineStructReturnType<[readonly ["text", "char*"], readonly ["text_len", "u64", { readonly lengthOf: "text"; }], readonly ["fg", "pointer", { readonly optional: true; readonly packTransform: (rgba?: RGBA or undefined) => Pointer or null; readonly unpackTransform: (ptr?: Pointer or undefined) => RGBA or undefined; }], r...` |

### :gear: HighlightStruct

| Constant | Type |
| ---------- | ---------- |
| `HighlightStruct` | `DefineStructReturnType<[readonly ["start", "u32"], readonly ["end", "u32"], readonly ["styleId", "u32"], readonly ["priority", "u8", { readonly default: 0; }], readonly ["hlRef", "u16", { readonly default: 0; }]], {}>` |

### :gear: LogicalCursorStruct

| Constant | Type |
| ---------- | ---------- |
| `LogicalCursorStruct` | `DefineStructReturnType<[readonly ["row", "u32"], readonly ["col", "u32"], readonly ["offset", "u32"]], {}>` |

### :gear: VisualCursorStruct

| Constant | Type |
| ---------- | ---------- |
| `VisualCursorStruct` | `DefineStructReturnType<[readonly ["visualRow", "u32"], readonly ["visualCol", "u32"], readonly ["logicalRow", "u32"], readonly ["logicalCol", "u32"], readonly ["offset", "u32"]], {}>` |

### :gear: TerminalCapabilitiesStruct

| Constant | Type |
| ---------- | ---------- |
| `TerminalCapabilitiesStruct` | `DefineStructReturnType<[readonly ["kitty_keyboard", "bool_u8"], readonly ["kitty_graphics", "bool_u8"], readonly ["rgb", "bool_u8"], readonly ["unicode", EnumDef<{ wcwidth: number; unicode: number; }>], readonly ["sgr_pixels", "bool_u8"], ... 12 more ..., readonly [...]], {}>` |

### :gear: EncodedCharStruct

| Constant | Type |
| ---------- | ---------- |
| `EncodedCharStruct` | `DefineStructReturnType<[readonly ["width", "u8"], readonly ["char", "u32"]], {}>` |

### :gear: LineInfoStruct

| Constant | Type |
| ---------- | ---------- |
| `LineInfoStruct` | `DefineStructReturnType<[readonly ["starts", readonly ["u32"]], readonly ["startsLen", "u32", { readonly lengthOf: "starts"; }], readonly ["widths", readonly ["u32"]], readonly ["widthsLen", "u32", { readonly lengthOf: "widths"; }], readonly ["sources", readonly [...]], readonly [...], readonly [...], readonly [...],...` |

### :gear: MeasureResultStruct

| Constant | Type |
| ---------- | ---------- |
| `MeasureResultStruct` | `DefineStructReturnType<[readonly ["lineCount", "u32"], readonly ["maxWidth", "u32"]], {}>` |

### :gear: KeyCodes

| Constant | Type |
| ---------- | ---------- |
| `KeyCodes` | `{ readonly RETURN: "\r"; readonly LINEFEED: "\n"; readonly TAB: "\t"; readonly BACKSPACE: "\b"; readonly DELETE: "\u001B[3~"; readonly HOME: "\u001B[H"; readonly END: "\u001B[F"; readonly ESCAPE: "\u001B"; readonly ARROW_UP: "\u001B[A"; ... 14 more ...; readonly F12: "\u001B[24~"; }` |

### :gear: MouseButtons

| Constant | Type |
| ---------- | ---------- |
| `MouseButtons` | `{ readonly LEFT: 0; readonly MIDDLE: 1; readonly RIGHT: 2; readonly WHEEL_UP: 64; readonly WHEEL_DOWN: 65; readonly WHEEL_LEFT: 66; readonly WHEEL_RIGHT: 67; }` |

### :gear: textNodeKeys

Array of supported text node element types.

| Constant | Type |
| ---------- | ---------- |
| `textNodeKeys` | `readonly ["span", "b", "strong", "i", "em", "u", "br"]` |

### :gear: baseComponents

| Constant | Type |
| ---------- | ---------- |
| `baseComponents` | `{ box: typeof BoxRenderable; text: typeof TextRenderable; code: typeof CodeRenderable; input: typeof InputRenderable; select: typeof SelectRenderable; ... 10 more ...; u: typeof UnderlineSpanRenderable; }` |

### :gear: componentCatalogue

| Constant | Type |
| ---------- | ---------- |
| `componentCatalogue` | `ComponentCatalogue` |

### :gear: hostConfig

| Constant | Type |
| ---------- | ---------- |
| `hostConfig` | `HostConfig<"text" or "span" or "b" or "strong" or "i" or "em" or "u" or "br" or "box" or "code" or "input" or "select" or "textarea" or "scrollbox" or "ascii-font" or "tab-select", Props, RootRenderable, ... 10 more ..., unknown>` |

### :gear: reconciler

| Constant | Type |
| ---------- | ---------- |
| `reconciler` | `any` |

### :gear: AppContext

React context providing access to the CLI renderer and keyboard handler.

This context is automatically set up by `createRoot` and provides the infrastructure
needed by OpenTUI hooks like `useRenderer` and `useKeyboard`.

| Constant | Type |
| ---------- | ---------- |
| `AppContext` | `Context<AppContext>` |


## :factory: RGBA

Represents an RGBA color with values stored as floats (0.0 to 1.0).
This is the primary color type used throughout OpenTUI.

Examples:

```ts
// Create colors using various methods
const red = RGBA.fromValues(1, 0, 0, 1)
const blue = RGBA.fromInts(0, 0, 255)
const green = RGBA.fromHex("#00ff00")
const semi = RGBA.fromValues(1, 1, 1, 0.5)  // Semi-transparent white

// Modify color components
const color = RGBA.fromValues(1, 0, 0, 1)
color.a = 0.5  // Make it semi-transparent

// Convert to different formats
const [r, g, b, a] = color.toInts()  // Get as 0-255 integers
```


### Static Methods

- [fromArray](#gear-fromarray)
- [fromValues](#gear-fromvalues)
- [fromInts](#gear-fromints)
- [fromHex](#gear-fromhex)

#### :gear: fromArray

Creates an RGBA color from a Float32Array buffer.

| Method | Type |
| ---------- | ---------- |
| `fromArray` | `(array: Float32Array<ArrayBufferLike>) => RGBA` |

Parameters:

* `array`: - Float32Array containing [r, g, b, a] values (0.0-1.0)


Returns:

A new RGBA instance

#### :gear: fromValues

Creates an RGBA color from normalized float values (0.0 to 1.0).

| Method | Type |
| ---------- | ---------- |
| `fromValues` | `(r: number, g: number, b: number, a?: number) => RGBA` |

Parameters:

* `r`: - Red component (0.0 to 1.0)
* `g`: - Green component (0.0 to 1.0)
* `b`: - Blue component (0.0 to 1.0)
* `a`: - Alpha component (0.0 to 1.0, default: 1.0 = opaque)


Returns:

A new RGBA instance

Examples:

```ts
const red = RGBA.fromValues(1, 0, 0, 1)
const semiTransparentBlue = RGBA.fromValues(0, 0, 1, 0.5)
```


#### :gear: fromInts

Creates an RGBA color from integer values (0 to 255).

| Method | Type |
| ---------- | ---------- |
| `fromInts` | `(r: number, g: number, b: number, a?: number) => RGBA` |

Parameters:

* `r`: - Red component (0 to 255)
* `g`: - Green component (0 to 255)
* `b`: - Blue component (0 to 255)
* `a`: - Alpha component (0 to 255, default: 255 = opaque)


Returns:

A new RGBA instance

Examples:

```ts
const red = RGBA.fromInts(255, 0, 0)
const semiTransparent = RGBA.fromInts(128, 128, 128, 128)
```


#### :gear: fromHex

Creates an RGBA color from a hexadecimal string.

| Method | Type |
| ---------- | ---------- |
| `fromHex` | `(hex: string) => RGBA` |

Parameters:

* `hex`: - Hex color string (with or without #, supports 3, 4, 6, or 8 digit formats)


Returns:

A new RGBA instance

Examples:

```ts
const red = RGBA.fromHex("#ff0000")
const shortRed = RGBA.fromHex("#f00")
const withAlpha = RGBA.fromHex("#ff0000cc")
```


### Methods

- [toInts](#gear-toints)
- [map](#gear-map)
- [toString](#gear-tostring)

#### :gear: toInts

| Method | Type |
| ---------- | ---------- |
| `toInts` | `() => [number, number, number, number]` |

#### :gear: map

| Method | Type |
| ---------- | ---------- |
| `map` | `<R>(fn: (value: number) => R) => R[]` |

#### :gear: toString

| Method | Type |
| ---------- | ---------- |
| `toString` | `() => string` |

### Properties

- [buffer](#gear-buffer)

#### :gear: buffer

Internal buffer storing [r, g, b, a] as floats

| Property | Type |
| ---------- | ---------- |
| `buffer` | `Float32Array<ArrayBufferLike>` |

## :factory: FrameBufferRenderable

A renderable that owns an off-screen rendering buffer (framebuffer).

Examples:

```typescript
class CustomGraphic extends FrameBufferRenderable {
  constructor(ctx: RenderContext) {
    super(ctx, { width: 40, height: 20, respectAlpha: true });
    this.drawCustomContent();
  }

  private drawCustomContent() {
    // Draw directly to this.frameBuffer
    this.frameBuffer.drawText("Hello", 0, 0, RGBA.white(), RGBA.black());
    this.frameBuffer.fillRect(0, 1, 10, 5, RGBA.fromHex("#ff0000"));
  }
}
```


### Properties

- [frameBuffer](#gear-framebuffer)

#### :gear: frameBuffer

The off-screen buffer owned by this renderable.

| Property | Type |
| ---------- | ---------- |
| `frameBuffer` | `OptimizedBuffer` |

## :factory: ASCIIFontRenderable

A renderable that displays text using large ASCII art fonts.

Examples:

Basic usage:
```typescript
const title = new ASCIIFontRenderable(ctx, {
  text: "OpenTUI",
  font: "banner",
  color: "#00ff00"
});
```
Gradient colors:
```typescript
const rainbow = new ASCIIFontRenderable(ctx, {
  text: "Rainbow",
  font: "block",
  color: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]
});
```


### Methods

- [shouldStartSelection](#gear-shouldstartselection)
- [onSelectionChanged](#gear-onselectionchanged)
- [getSelectedText](#gear-getselectedtext)
- [hasSelection](#gear-hasselection)

#### :gear: shouldStartSelection

| Method | Type |
| ---------- | ---------- |
| `shouldStartSelection` | `(x: number, y: number) => boolean` |

#### :gear: onSelectionChanged

| Method | Type |
| ---------- | ---------- |
| `onSelectionChanged` | `(selection: Selection or null) => boolean` |

#### :gear: getSelectedText

| Method | Type |
| ---------- | ---------- |
| `getSelectedText` | `() => string` |

#### :gear: hasSelection

| Method | Type |
| ---------- | ---------- |
| `hasSelection` | `() => boolean` |

### Properties

- [selectable](#gear-selectable)

#### :gear: selectable

Whether text can be selected.

| Property | Type |
| ---------- | ---------- |
| `selectable` | `boolean` |

## :factory: KeyEvent

### Methods

- [preventDefault](#gear-preventdefault)

#### :gear: preventDefault

| Method | Type |
| ---------- | ---------- |
| `preventDefault` | `() => void` |

### Properties

- [name](#gear-name)
- [ctrl](#gear-ctrl)
- [meta](#gear-meta)
- [shift](#gear-shift)
- [option](#gear-option)
- [sequence](#gear-sequence)
- [number](#gear-number)
- [raw](#gear-raw)
- [eventType](#gear-eventtype)
- [source](#gear-source)
- [code](#gear-code)
- [super](#gear-super)
- [hyper](#gear-hyper)
- [capsLock](#gear-capslock)
- [numLock](#gear-numlock)
- [baseCode](#gear-basecode)

#### :gear: name

| Property | Type |
| ---------- | ---------- |
| `name` | `string` |

#### :gear: ctrl

| Property | Type |
| ---------- | ---------- |
| `ctrl` | `boolean` |

#### :gear: meta

| Property | Type |
| ---------- | ---------- |
| `meta` | `boolean` |

#### :gear: shift

| Property | Type |
| ---------- | ---------- |
| `shift` | `boolean` |

#### :gear: option

| Property | Type |
| ---------- | ---------- |
| `option` | `boolean` |

#### :gear: sequence

| Property | Type |
| ---------- | ---------- |
| `sequence` | `string` |

#### :gear: number

| Property | Type |
| ---------- | ---------- |
| `number` | `boolean` |

#### :gear: raw

| Property | Type |
| ---------- | ---------- |
| `raw` | `string` |

#### :gear: eventType

| Property | Type |
| ---------- | ---------- |
| `eventType` | `KeyEventType` |

#### :gear: source

| Property | Type |
| ---------- | ---------- |
| `source` | `"raw" or "kitty"` |

#### :gear: code

| Property | Type |
| ---------- | ---------- |
| `code` | `string or undefined` |

#### :gear: super

| Property | Type |
| ---------- | ---------- |
| `super` | `boolean or undefined` |

#### :gear: hyper

| Property | Type |
| ---------- | ---------- |
| `hyper` | `boolean or undefined` |

#### :gear: capsLock

| Property | Type |
| ---------- | ---------- |
| `capsLock` | `boolean or undefined` |

#### :gear: numLock

| Property | Type |
| ---------- | ---------- |
| `numLock` | `boolean or undefined` |

#### :gear: baseCode

| Property | Type |
| ---------- | ---------- |
| `baseCode` | `number or undefined` |

## :factory: PasteEvent

### Methods

- [preventDefault](#gear-preventdefault)

#### :gear: preventDefault

| Method | Type |
| ---------- | ---------- |
| `preventDefault` | `() => void` |

### Properties

- [text](#gear-text)

#### :gear: text

| Property | Type |
| ---------- | ---------- |
| `text` | `string` |

## :factory: KeyHandler

### Methods

- [processInput](#gear-processinput)
- [processPaste](#gear-processpaste)

#### :gear: processInput

| Method | Type |
| ---------- | ---------- |
| `processInput` | `(data: string) => boolean` |

#### :gear: processPaste

| Method | Type |
| ---------- | ---------- |
| `processPaste` | `(data: string) => void` |

## :factory: InternalKeyHandler

This class is used internally by the renderer to ensure global handlers
can preventDefault before renderable handlers process events.

### Methods

- [emit](#gear-emit)
- [onInternal](#gear-oninternal)
- [offInternal](#gear-offinternal)

#### :gear: emit

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

| Method | Type |
| ---------- | ---------- |
| `emit` | `<K extends keyof KeyHandlerEventMap>(event: K, ...args: KeyHandlerEventMap[K]) => boolean` |

#### :gear: onInternal

| Method | Type |
| ---------- | ---------- |
| `onInternal` | `<K extends keyof KeyHandlerEventMap>(event: K, handler: (...args: KeyHandlerEventMap[K]) => void) => void` |

#### :gear: offInternal

| Method | Type |
| ---------- | ---------- |
| `offInternal` | `<K extends keyof KeyHandlerEventMap>(event: K, handler: (...args: KeyHandlerEventMap[K]) => void) => void` |

## :factory: LinearScrollAccel

### Methods

- [tick](#gear-tick)
- [reset](#gear-reset)

#### :gear: tick

| Method | Type |
| ---------- | ---------- |
| `tick` | `(_now?: number or undefined) => number` |

#### :gear: reset

| Method | Type |
| ---------- | ---------- |
| `reset` | `() => void` |

## :factory: MacOSScrollAccel

macOS-inspired scroll acceleration.

The class measures the time between consecutive scroll events and keeps a short
moving window of the latest intervals. The average interval determines which
multiplier to apply so that quick bursts accelerate and slower gestures stay precise.

For intuition, treat the streak as a continuous timeline and compare it with the
exponential distance curve from the pointer-acceleration research post:
  d(t) = v₀ * ( t + A * (exp(t/τ) - 1 - t/τ) ).
Small t stays near the base multiplier, medium streaks settle on multiplier1, and
sustained bursts reach multiplier2, mirroring how the exponential curve bends up.

Options:
- threshold1: upper bound (ms) of the "medium" band. Raise to delay the ramp.
- threshold2: upper bound (ms) of the "fast" band. Lower to demand tighter bursts.
- multiplier1: scale for medium speed streaks.
- multiplier2: scale for sustained fast streaks.
- baseMultiplier: scale for relaxed scrolling; set to 1 for linear behaviour.

### Methods

- [tick](#gear-tick)
- [reset](#gear-reset)

#### :gear: tick

| Method | Type |
| ---------- | ---------- |
| `tick` | `(now?: number) => number` |

#### :gear: reset

| Method | Type |
| ---------- | ---------- |
| `reset` | `() => void` |

## :factory: StdinBuffer

Buffers stdin input and emits complete sequences via the 'data' event.
Handles partial escape sequences that arrive across multiple chunks.

### Methods

- [process](#gear-process)
- [flush](#gear-flush)
- [clear](#gear-clear)
- [getBuffer](#gear-getbuffer)
- [destroy](#gear-destroy)

#### :gear: process

| Method | Type |
| ---------- | ---------- |
| `process` | `(data: string or Buffer<ArrayBufferLike>) => void` |

#### :gear: flush

| Method | Type |
| ---------- | ---------- |
| `flush` | `() => string[]` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: getBuffer

| Method | Type |
| ---------- | ---------- |
| `getBuffer` | `() => string` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

## :factory: MouseParser

### Methods

- [reset](#gear-reset)
- [parseMouseEvent](#gear-parsemouseevent)

#### :gear: reset

| Method | Type |
| ---------- | ---------- |
| `reset` | `() => void` |

#### :gear: parseMouseEvent

| Method | Type |
| ---------- | ---------- |
| `parseMouseEvent` | `(data: Buffer<ArrayBufferLike>) => RawMouseEvent or null` |

## :factory: DebounceController

Debounce controller that manages debounce instances for a specific scope

### Methods

- [debounce](#gear-debounce)
- [clearDebounce](#gear-cleardebounce)
- [clear](#gear-clear)

#### :gear: debounce

Debounces the provided function with the given ID

| Method | Type |
| ---------- | ---------- |
| `debounce` | `<R>(id: string or number, ms: number, fn: () => Promise<R>) => Promise<R>` |

Parameters:

* `id`: Unique identifier within this scope
* `ms`: Milliseconds to wait before executing
* `fn`: Function to execute


#### :gear: clearDebounce

Clear a specific debounce timer in this scope

| Method | Type |
| ---------- | ---------- |
| `clearDebounce` | `(id: string or number) => void` |

Parameters:

* `id`: The debounce ID to clear


#### :gear: clear

Clear all debounce timers in this scope

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

## :factory: ProcessQueue

Generic processing queue that handles asynchronous job processing

### Methods

- [enqueue](#gear-enqueue)
- [clear](#gear-clear)
- [isProcessing](#gear-isprocessing)
- [size](#gear-size)

#### :gear: enqueue

| Method | Type |
| ---------- | ---------- |
| `enqueue` | `(item: T) => void` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: isProcessing

| Method | Type |
| ---------- | ---------- |
| `isProcessing` | `() => boolean` |

#### :gear: size

| Method | Type |
| ---------- | ---------- |
| `size` | `() => number` |

## :factory: TreeSitterClient

### Methods

- [addFiletypeParser](#gear-addfiletypeparser)
- [getPerformance](#gear-getperformance)
- [highlightOnce](#gear-highlightonce)
- [preloadParser](#gear-preloadparser)
- [createBuffer](#gear-createbuffer)
- [updateBuffer](#gear-updatebuffer)
- [removeBuffer](#gear-removebuffer)
- [destroy](#gear-destroy)
- [resetBuffer](#gear-resetbuffer)
- [getBuffer](#gear-getbuffer)
- [getAllBuffers](#gear-getallbuffers)
- [isInitialized](#gear-isinitialized)
- [setDataPath](#gear-setdatapath)
- [clearCache](#gear-clearcache)

#### :gear: addFiletypeParser

| Method | Type |
| ---------- | ---------- |
| `addFiletypeParser` | `(filetypeParser: FiletypeParserOptions) => void` |

#### :gear: getPerformance

| Method | Type |
| ---------- | ---------- |
| `getPerformance` | `() => Promise<PerformanceStats>` |

#### :gear: highlightOnce

| Method | Type |
| ---------- | ---------- |
| `highlightOnce` | `(content: string, filetype: string) => Promise<{ highlights?: SimpleHighlight[] or undefined; warning?: string or undefined; error?: string or undefined; }>` |

#### :gear: preloadParser

| Method | Type |
| ---------- | ---------- |
| `preloadParser` | `(filetype: string) => Promise<boolean>` |

#### :gear: createBuffer

| Method | Type |
| ---------- | ---------- |
| `createBuffer` | `(id: number, content: string, filetype: string, version?: number, autoInitialize?: boolean) => Promise<boolean>` |

#### :gear: updateBuffer

| Method | Type |
| ---------- | ---------- |
| `updateBuffer` | `(id: number, edits: Edit[], newContent: string, version: number) => Promise<void>` |

#### :gear: removeBuffer

| Method | Type |
| ---------- | ---------- |
| `removeBuffer` | `(bufferId: number) => Promise<void>` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => Promise<void>` |

#### :gear: resetBuffer

| Method | Type |
| ---------- | ---------- |
| `resetBuffer` | `(bufferId: number, version: number, content: string) => Promise<void>` |

#### :gear: getBuffer

| Method | Type |
| ---------- | ---------- |
| `getBuffer` | `(bufferId: number) => BufferState or undefined` |

#### :gear: getAllBuffers

| Method | Type |
| ---------- | ---------- |
| `getAllBuffers` | `() => BufferState[]` |

#### :gear: isInitialized

| Method | Type |
| ---------- | ---------- |
| `isInitialized` | `() => boolean` |

#### :gear: setDataPath

| Method | Type |
| ---------- | ---------- |
| `setDataPath` | `(dataPath: string) => Promise<void>` |

#### :gear: clearCache

| Method | Type |
| ---------- | ---------- |
| `clearCache` | `() => Promise<void>` |

## :factory: DataPathsManager

### Methods

- [toObject](#gear-toobject)

#### :gear: toObject

| Method | Type |
| ---------- | ---------- |
| `toObject` | `() => DataPaths` |

## :factory: DownloadUtils

## :factory: EditBuffer

EditBuffer provides a text editing buffer with cursor management,
incremental editing, and grapheme-aware operations.

### Static Methods

- [create](#gear-create)

#### :gear: create

| Method | Type |
| ---------- | ---------- |
| `create` | `(widthMethod: WidthMethod) => EditBuffer` |

### Methods

- [setText](#gear-settext)
- [setTextOwned](#gear-settextowned)
- [getLineCount](#gear-getlinecount)
- [getText](#gear-gettext)
- [insertChar](#gear-insertchar)
- [insertText](#gear-inserttext)
- [deleteChar](#gear-deletechar)
- [deleteCharBackward](#gear-deletecharbackward)
- [deleteRange](#gear-deleterange)
- [newLine](#gear-newline)
- [deleteLine](#gear-deleteline)
- [moveCursorLeft](#gear-movecursorleft)
- [moveCursorRight](#gear-movecursorright)
- [moveCursorUp](#gear-movecursorup)
- [moveCursorDown](#gear-movecursordown)
- [gotoLine](#gear-gotoline)
- [setCursor](#gear-setcursor)
- [setCursorToLineCol](#gear-setcursortolinecol)
- [setCursorByOffset](#gear-setcursorbyoffset)
- [getCursorPosition](#gear-getcursorposition)
- [getNextWordBoundary](#gear-getnextwordboundary)
- [getPrevWordBoundary](#gear-getprevwordboundary)
- [getEOL](#gear-geteol)
- [offsetToPosition](#gear-offsettoposition)
- [positionToOffset](#gear-positiontooffset)
- [getLineStartOffset](#gear-getlinestartoffset)
- [getTextRange](#gear-gettextrange)
- [getTextRangeByCoords](#gear-gettextrangebycoords)
- [debugLogRope](#gear-debuglogrope)
- [undo](#gear-undo)
- [redo](#gear-redo)
- [canUndo](#gear-canundo)
- [canRedo](#gear-canredo)
- [clearHistory](#gear-clearhistory)
- [setDefaultFg](#gear-setdefaultfg)
- [setDefaultBg](#gear-setdefaultbg)
- [setDefaultAttributes](#gear-setdefaultattributes)
- [resetDefaults](#gear-resetdefaults)
- [setSyntaxStyle](#gear-setsyntaxstyle)
- [getSyntaxStyle](#gear-getsyntaxstyle)
- [addHighlight](#gear-addhighlight)
- [addHighlightByCharRange](#gear-addhighlightbycharrange)
- [removeHighlightsByRef](#gear-removehighlightsbyref)
- [clearLineHighlights](#gear-clearlinehighlights)
- [clearAllHighlights](#gear-clearallhighlights)
- [getLineHighlights](#gear-getlinehighlights)
- [clear](#gear-clear)
- [destroy](#gear-destroy)

#### :gear: setText

| Method | Type |
| ---------- | ---------- |
| `setText` | `(text: string, opts?: { history?: boolean or undefined; } or undefined) => void` |

#### :gear: setTextOwned

| Method | Type |
| ---------- | ---------- |
| `setTextOwned` | `(text: string, opts?: { history?: boolean or undefined; } or undefined) => void` |

#### :gear: getLineCount

| Method | Type |
| ---------- | ---------- |
| `getLineCount` | `() => number` |

#### :gear: getText

| Method | Type |
| ---------- | ---------- |
| `getText` | `() => string` |

#### :gear: insertChar

| Method | Type |
| ---------- | ---------- |
| `insertChar` | `(char: string) => void` |

#### :gear: insertText

| Method | Type |
| ---------- | ---------- |
| `insertText` | `(text: string) => void` |

#### :gear: deleteChar

| Method | Type |
| ---------- | ---------- |
| `deleteChar` | `() => void` |

#### :gear: deleteCharBackward

| Method | Type |
| ---------- | ---------- |
| `deleteCharBackward` | `() => void` |

#### :gear: deleteRange

| Method | Type |
| ---------- | ---------- |
| `deleteRange` | `(startLine: number, startCol: number, endLine: number, endCol: number) => void` |

#### :gear: newLine

| Method | Type |
| ---------- | ---------- |
| `newLine` | `() => void` |

#### :gear: deleteLine

| Method | Type |
| ---------- | ---------- |
| `deleteLine` | `() => void` |

#### :gear: moveCursorLeft

| Method | Type |
| ---------- | ---------- |
| `moveCursorLeft` | `() => void` |

#### :gear: moveCursorRight

| Method | Type |
| ---------- | ---------- |
| `moveCursorRight` | `() => void` |

#### :gear: moveCursorUp

| Method | Type |
| ---------- | ---------- |
| `moveCursorUp` | `() => void` |

#### :gear: moveCursorDown

| Method | Type |
| ---------- | ---------- |
| `moveCursorDown` | `() => void` |

#### :gear: gotoLine

| Method | Type |
| ---------- | ---------- |
| `gotoLine` | `(line: number) => void` |

#### :gear: setCursor

| Method | Type |
| ---------- | ---------- |
| `setCursor` | `(line: number, col: number) => void` |

#### :gear: setCursorToLineCol

| Method | Type |
| ---------- | ---------- |
| `setCursorToLineCol` | `(line: number, col: number) => void` |

#### :gear: setCursorByOffset

| Method | Type |
| ---------- | ---------- |
| `setCursorByOffset` | `(offset: number) => void` |

#### :gear: getCursorPosition

| Method | Type |
| ---------- | ---------- |
| `getCursorPosition` | `() => LogicalCursor` |

#### :gear: getNextWordBoundary

| Method | Type |
| ---------- | ---------- |
| `getNextWordBoundary` | `() => LogicalCursor` |

#### :gear: getPrevWordBoundary

| Method | Type |
| ---------- | ---------- |
| `getPrevWordBoundary` | `() => LogicalCursor` |

#### :gear: getEOL

| Method | Type |
| ---------- | ---------- |
| `getEOL` | `() => LogicalCursor` |

#### :gear: offsetToPosition

| Method | Type |
| ---------- | ---------- |
| `offsetToPosition` | `(offset: number) => { row: number; col: number; } or null` |

#### :gear: positionToOffset

| Method | Type |
| ---------- | ---------- |
| `positionToOffset` | `(row: number, col: number) => number` |

#### :gear: getLineStartOffset

| Method | Type |
| ---------- | ---------- |
| `getLineStartOffset` | `(row: number) => number` |

#### :gear: getTextRange

| Method | Type |
| ---------- | ---------- |
| `getTextRange` | `(startOffset: number, endOffset: number) => string` |

#### :gear: getTextRangeByCoords

| Method | Type |
| ---------- | ---------- |
| `getTextRangeByCoords` | `(startRow: number, startCol: number, endRow: number, endCol: number) => string` |

#### :gear: debugLogRope

| Method | Type |
| ---------- | ---------- |
| `debugLogRope` | `() => void` |

#### :gear: undo

| Method | Type |
| ---------- | ---------- |
| `undo` | `() => string or null` |

#### :gear: redo

| Method | Type |
| ---------- | ---------- |
| `redo` | `() => string or null` |

#### :gear: canUndo

| Method | Type |
| ---------- | ---------- |
| `canUndo` | `() => boolean` |

#### :gear: canRedo

| Method | Type |
| ---------- | ---------- |
| `canRedo` | `() => boolean` |

#### :gear: clearHistory

| Method | Type |
| ---------- | ---------- |
| `clearHistory` | `() => void` |

#### :gear: setDefaultFg

| Method | Type |
| ---------- | ---------- |
| `setDefaultFg` | `(fg: RGBA or null) => void` |

#### :gear: setDefaultBg

| Method | Type |
| ---------- | ---------- |
| `setDefaultBg` | `(bg: RGBA or null) => void` |

#### :gear: setDefaultAttributes

| Method | Type |
| ---------- | ---------- |
| `setDefaultAttributes` | `(attributes: number or null) => void` |

#### :gear: resetDefaults

| Method | Type |
| ---------- | ---------- |
| `resetDefaults` | `() => void` |

#### :gear: setSyntaxStyle

| Method | Type |
| ---------- | ---------- |
| `setSyntaxStyle` | `(style: SyntaxStyle or null) => void` |

#### :gear: getSyntaxStyle

| Method | Type |
| ---------- | ---------- |
| `getSyntaxStyle` | `() => SyntaxStyle or null` |

#### :gear: addHighlight

| Method | Type |
| ---------- | ---------- |
| `addHighlight` | `(lineIdx: number, highlight: Highlight) => void` |

#### :gear: addHighlightByCharRange

| Method | Type |
| ---------- | ---------- |
| `addHighlightByCharRange` | `(highlight: Highlight) => void` |

#### :gear: removeHighlightsByRef

| Method | Type |
| ---------- | ---------- |
| `removeHighlightsByRef` | `(hlRef: number) => void` |

#### :gear: clearLineHighlights

| Method | Type |
| ---------- | ---------- |
| `clearLineHighlights` | `(lineIdx: number) => void` |

#### :gear: clearAllHighlights

| Method | Type |
| ---------- | ---------- |
| `clearAllHighlights` | `() => void` |

#### :gear: getLineHighlights

| Method | Type |
| ---------- | ---------- |
| `getLineHighlights` | `(lineIdx: number) => Highlight[]` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

### Properties

- [id](#gear-id)

#### :gear: id

| Property | Type |
| ---------- | ---------- |
| `id` | `number` |

## :factory: EditorView

### Static Methods

- [create](#gear-create)

#### :gear: create

| Method | Type |
| ---------- | ---------- |
| `create` | `(editBuffer: EditBuffer, viewportWidth: number, viewportHeight: number) => EditorView` |

### Methods

- [setViewportSize](#gear-setviewportsize)
- [getViewport](#gear-getviewport)
- [setScrollMargin](#gear-setscrollmargin)
- [setWrapMode](#gear-setwrapmode)
- [getVirtualLineCount](#gear-getvirtuallinecount)
- [getTotalVirtualLineCount](#gear-gettotalvirtuallinecount)
- [setSelection](#gear-setselection)
- [resetSelection](#gear-resetselection)
- [getSelection](#gear-getselection)
- [hasSelection](#gear-hasselection)
- [setLocalSelection](#gear-setlocalselection)
- [resetLocalSelection](#gear-resetlocalselection)
- [getSelectedText](#gear-getselectedtext)
- [getCursor](#gear-getcursor)
- [getText](#gear-gettext)
- [getVisualCursor](#gear-getvisualcursor)
- [moveUpVisual](#gear-moveupvisual)
- [moveDownVisual](#gear-movedownvisual)
- [deleteSelectedText](#gear-deleteselectedtext)
- [setCursorByOffset](#gear-setcursorbyoffset)
- [getNextWordBoundary](#gear-getnextwordboundary)
- [getPrevWordBoundary](#gear-getprevwordboundary)
- [getEOL](#gear-geteol)
- [getLineInfo](#gear-getlineinfo)
- [getLogicalLineInfo](#gear-getlogicallineinfo)
- [setPlaceholderStyledText](#gear-setplaceholderstyledtext)
- [setTabIndicator](#gear-settabindicator)
- [setTabIndicatorColor](#gear-settabindicatorcolor)
- [measureForDimensions](#gear-measurefordimensions)
- [destroy](#gear-destroy)

#### :gear: setViewportSize

| Method | Type |
| ---------- | ---------- |
| `setViewportSize` | `(width: number, height: number) => void` |

#### :gear: getViewport

| Method | Type |
| ---------- | ---------- |
| `getViewport` | `() => Viewport` |

#### :gear: setScrollMargin

| Method | Type |
| ---------- | ---------- |
| `setScrollMargin` | `(margin: number) => void` |

#### :gear: setWrapMode

| Method | Type |
| ---------- | ---------- |
| `setWrapMode` | `(mode: "none" or "char" or "word") => void` |

#### :gear: getVirtualLineCount

| Method | Type |
| ---------- | ---------- |
| `getVirtualLineCount` | `() => number` |

#### :gear: getTotalVirtualLineCount

| Method | Type |
| ---------- | ---------- |
| `getTotalVirtualLineCount` | `() => number` |

#### :gear: setSelection

| Method | Type |
| ---------- | ---------- |
| `setSelection` | `(start: number, end: number, bgColor?: RGBA or undefined, fgColor?: RGBA or undefined) => void` |

#### :gear: resetSelection

| Method | Type |
| ---------- | ---------- |
| `resetSelection` | `() => void` |

#### :gear: getSelection

| Method | Type |
| ---------- | ---------- |
| `getSelection` | `() => { start: number; end: number; } or null` |

#### :gear: hasSelection

| Method | Type |
| ---------- | ---------- |
| `hasSelection` | `() => boolean` |

#### :gear: setLocalSelection

| Method | Type |
| ---------- | ---------- |
| `setLocalSelection` | `(anchorX: number, anchorY: number, focusX: number, focusY: number, bgColor?: RGBA or undefined, fgColor?: RGBA or undefined) => boolean` |

#### :gear: resetLocalSelection

| Method | Type |
| ---------- | ---------- |
| `resetLocalSelection` | `() => void` |

#### :gear: getSelectedText

| Method | Type |
| ---------- | ---------- |
| `getSelectedText` | `() => string` |

#### :gear: getCursor

| Method | Type |
| ---------- | ---------- |
| `getCursor` | `() => { row: number; col: number; }` |

#### :gear: getText

| Method | Type |
| ---------- | ---------- |
| `getText` | `() => string` |

#### :gear: getVisualCursor

| Method | Type |
| ---------- | ---------- |
| `getVisualCursor` | `() => VisualCursor` |

#### :gear: moveUpVisual

| Method | Type |
| ---------- | ---------- |
| `moveUpVisual` | `() => void` |

#### :gear: moveDownVisual

| Method | Type |
| ---------- | ---------- |
| `moveDownVisual` | `() => void` |

#### :gear: deleteSelectedText

| Method | Type |
| ---------- | ---------- |
| `deleteSelectedText` | `() => void` |

#### :gear: setCursorByOffset

| Method | Type |
| ---------- | ---------- |
| `setCursorByOffset` | `(offset: number) => void` |

#### :gear: getNextWordBoundary

| Method | Type |
| ---------- | ---------- |
| `getNextWordBoundary` | `() => VisualCursor` |

#### :gear: getPrevWordBoundary

| Method | Type |
| ---------- | ---------- |
| `getPrevWordBoundary` | `() => VisualCursor` |

#### :gear: getEOL

| Method | Type |
| ---------- | ---------- |
| `getEOL` | `() => VisualCursor` |

#### :gear: getLineInfo

| Method | Type |
| ---------- | ---------- |
| `getLineInfo` | `() => LineInfo` |

#### :gear: getLogicalLineInfo

| Method | Type |
| ---------- | ---------- |
| `getLogicalLineInfo` | `() => LineInfo` |

#### :gear: setPlaceholderStyledText

| Method | Type |
| ---------- | ---------- |
| `setPlaceholderStyledText` | `(chunks: { text: string; fg?: RGBA or undefined; bg?: RGBA or undefined; attributes?: number or undefined; }[]) => void` |

#### :gear: setTabIndicator

| Method | Type |
| ---------- | ---------- |
| `setTabIndicator` | `(indicator: string or number) => void` |

#### :gear: setTabIndicatorColor

| Method | Type |
| ---------- | ---------- |
| `setTabIndicatorColor` | `(color: RGBA) => void` |

#### :gear: measureForDimensions

| Method | Type |
| ---------- | ---------- |
| `measureForDimensions` | `(width: number, height: number) => { lineCount: number; maxWidth: number; } or null` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

## :factory: ExtmarksHistory

### Methods

- [saveSnapshot](#gear-savesnapshot)
- [undo](#gear-undo)
- [redo](#gear-redo)
- [pushRedo](#gear-pushredo)
- [pushUndo](#gear-pushundo)
- [clear](#gear-clear)
- [canUndo](#gear-canundo)
- [canRedo](#gear-canredo)

#### :gear: saveSnapshot

| Method | Type |
| ---------- | ---------- |
| `saveSnapshot` | `(extmarks: Map<number, Extmark>, nextId: number) => void` |

#### :gear: undo

| Method | Type |
| ---------- | ---------- |
| `undo` | `() => ExtmarksSnapshot or null` |

#### :gear: redo

| Method | Type |
| ---------- | ---------- |
| `redo` | `() => ExtmarksSnapshot or null` |

#### :gear: pushRedo

| Method | Type |
| ---------- | ---------- |
| `pushRedo` | `(snapshot: ExtmarksSnapshot) => void` |

#### :gear: pushUndo

| Method | Type |
| ---------- | ---------- |
| `pushUndo` | `(snapshot: ExtmarksSnapshot) => void` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: canUndo

| Method | Type |
| ---------- | ---------- |
| `canUndo` | `() => boolean` |

#### :gear: canRedo

| Method | Type |
| ---------- | ---------- |
| `canRedo` | `() => boolean` |

## :factory: ExtmarksController

WARNING: This is simulating extmarks in the edit buffer
and will move to a real native implementation in the future.
Use with caution.

### Methods

- [adjustExtmarksAfterDeletion](#gear-adjustextmarksafterdeletion)
- [create](#gear-create)
- [delete](#gear-delete)
- [get](#gear-get)
- [getAll](#gear-getall)
- [getVirtual](#gear-getvirtual)
- [getAtOffset](#gear-getatoffset)
- [getAllForTypeId](#gear-getallfortypeid)
- [clear](#gear-clear)
- [registerType](#gear-registertype)
- [getTypeId](#gear-gettypeid)
- [getTypeName](#gear-gettypename)
- [getMetadataFor](#gear-getmetadatafor)
- [destroy](#gear-destroy)

#### :gear: adjustExtmarksAfterDeletion

| Method | Type |
| ---------- | ---------- |
| `adjustExtmarksAfterDeletion` | `(deleteOffset: number, length: number) => void` |

#### :gear: create

| Method | Type |
| ---------- | ---------- |
| `create` | `(options: ExtmarkOptions) => number` |

#### :gear: delete

| Method | Type |
| ---------- | ---------- |
| `delete` | `(id: number) => boolean` |

#### :gear: get

| Method | Type |
| ---------- | ---------- |
| `get` | `(id: number) => Extmark or null` |

#### :gear: getAll

| Method | Type |
| ---------- | ---------- |
| `getAll` | `() => Extmark[]` |

#### :gear: getVirtual

| Method | Type |
| ---------- | ---------- |
| `getVirtual` | `() => Extmark[]` |

#### :gear: getAtOffset

| Method | Type |
| ---------- | ---------- |
| `getAtOffset` | `(offset: number) => Extmark[]` |

#### :gear: getAllForTypeId

| Method | Type |
| ---------- | ---------- |
| `getAllForTypeId` | `(typeId: number) => Extmark[]` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: registerType

| Method | Type |
| ---------- | ---------- |
| `registerType` | `(typeName: string) => number` |

#### :gear: getTypeId

| Method | Type |
| ---------- | ---------- |
| `getTypeId` | `(typeName: string) => number or null` |

#### :gear: getTypeName

| Method | Type |
| ---------- | ---------- |
| `getTypeName` | `(typeId: number) => string or null` |

#### :gear: getMetadataFor

| Method | Type |
| ---------- | ---------- |
| `getMetadataFor` | `(extmarkId: number) => any` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

## :factory: TerminalPalette

### Methods

- [cleanup](#gear-cleanup)

#### :gear: cleanup

| Method | Type |
| ---------- | ---------- |
| `cleanup` | `() => void` |

## :factory: BoxRenderable

A container renderable that displays a box with optional borders, background, and title.
This is the most commonly used layout component in OpenTUI.

Examples:

```ts
// Simple box with border
const box = new BoxRenderable(ctx, {
  width: 40,
  height: 10,
  border: true,
  borderStyle: "rounded",
  borderColor: "cyan",
  backgroundColor: "black"
})

// Box with title and children
const panel = new BoxRenderable(ctx, {
  width: "50%",
  height: "100%",
  border: ["top", "bottom", "left", "right"],
  title: "My Panel",
  titleAlignment: "center",
  flexDirection: "column",
  padding: 2,
  gap: 1
})

// Add child components
panel.add(new TextRenderable(ctx, { content: "Hello!" }))
```


### Properties

- [shouldFill](#gear-shouldfill)

#### :gear: shouldFill

| Property | Type |
| ---------- | ---------- |
| `shouldFill` | `boolean` |

## :factory: TextBufferView

### Static Methods

- [create](#gear-create)

#### :gear: create

| Method | Type |
| ---------- | ---------- |
| `create` | `(textBuffer: TextBuffer) => TextBufferView` |

### Methods

- [setSelection](#gear-setselection)
- [resetSelection](#gear-resetselection)
- [getSelection](#gear-getselection)
- [hasSelection](#gear-hasselection)
- [setLocalSelection](#gear-setlocalselection)
- [resetLocalSelection](#gear-resetlocalselection)
- [setWrapWidth](#gear-setwrapwidth)
- [setWrapMode](#gear-setwrapmode)
- [setViewportSize](#gear-setviewportsize)
- [getSelectedText](#gear-getselectedtext)
- [getPlainText](#gear-getplaintext)
- [setTabIndicator](#gear-settabindicator)
- [setTabIndicatorColor](#gear-settabindicatorcolor)
- [measureForDimensions](#gear-measurefordimensions)
- [destroy](#gear-destroy)

#### :gear: setSelection

| Method | Type |
| ---------- | ---------- |
| `setSelection` | `(start: number, end: number, bgColor?: RGBA or undefined, fgColor?: RGBA or undefined) => void` |

#### :gear: resetSelection

| Method | Type |
| ---------- | ---------- |
| `resetSelection` | `() => void` |

#### :gear: getSelection

| Method | Type |
| ---------- | ---------- |
| `getSelection` | `() => { start: number; end: number; } or null` |

#### :gear: hasSelection

| Method | Type |
| ---------- | ---------- |
| `hasSelection` | `() => boolean` |

#### :gear: setLocalSelection

| Method | Type |
| ---------- | ---------- |
| `setLocalSelection` | `(anchorX: number, anchorY: number, focusX: number, focusY: number, bgColor?: RGBA or undefined, fgColor?: RGBA or undefined) => boolean` |

#### :gear: resetLocalSelection

| Method | Type |
| ---------- | ---------- |
| `resetLocalSelection` | `() => void` |

#### :gear: setWrapWidth

| Method | Type |
| ---------- | ---------- |
| `setWrapWidth` | `(width: number or null) => void` |

#### :gear: setWrapMode

| Method | Type |
| ---------- | ---------- |
| `setWrapMode` | `(mode: "none" or "char" or "word") => void` |

#### :gear: setViewportSize

| Method | Type |
| ---------- | ---------- |
| `setViewportSize` | `(width: number, height: number) => void` |

#### :gear: getSelectedText

| Method | Type |
| ---------- | ---------- |
| `getSelectedText` | `() => string` |

#### :gear: getPlainText

| Method | Type |
| ---------- | ---------- |
| `getPlainText` | `() => string` |

#### :gear: setTabIndicator

| Method | Type |
| ---------- | ---------- |
| `setTabIndicator` | `(indicator: string or number) => void` |

#### :gear: setTabIndicatorColor

| Method | Type |
| ---------- | ---------- |
| `setTabIndicatorColor` | `(color: RGBA) => void` |

#### :gear: measureForDimensions

| Method | Type |
| ---------- | ---------- |
| `measureForDimensions` | `(width: number, height: number) => { lineCount: number; maxWidth: number; } or null` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

## :factory: TextBufferRenderable

Abstract base class for renderables that display read-only text using a TextBuffer.

Examples:

```typescript
class MyTextDisplay extends TextBufferRenderable {
  constructor(ctx: RenderContext) {
    super(ctx, { fg: "white", bg: "black", wrapMode: "word" });
  }
}
```


### Methods

- [shouldStartSelection](#gear-shouldstartselection)
- [onSelectionChanged](#gear-onselectionchanged)
- [getSelectedText](#gear-getselectedtext)
- [hasSelection](#gear-hasselection)
- [getSelection](#gear-getselection)
- [render](#gear-render)
- [destroy](#gear-destroy)

#### :gear: shouldStartSelection

Determines if a selection gesture should start at the given coordinates.

| Method | Type |
| ---------- | ---------- |
| `shouldStartSelection` | `(x: number, y: number) => boolean` |

Parameters:

* `x`: - Global X coordinate
* `y`: - Global Y coordinate


Returns:

`true` if the coordinates are within this renderable's bounds and it's selectable

#### :gear: onSelectionChanged

Handles selection changes from the global selection system.

| Method | Type |
| ---------- | ---------- |
| `onSelectionChanged` | `(selection: Selection or null) => boolean` |

Parameters:

* `selection`: - The new global selection state, or null to clear


Returns:

`true` if this renderable has an active selection after the change

#### :gear: getSelectedText

Gets the currently selected text as a plain string.

| Method | Type |
| ---------- | ---------- |
| `getSelectedText` | `() => string` |

Returns:

The selected text, or empty string if no selection

#### :gear: hasSelection

Checks if any text is currently selected.

| Method | Type |
| ---------- | ---------- |
| `hasSelection` | `() => boolean` |

Returns:

`true` if there is an active selection

#### :gear: getSelection

Gets the current selection range as character offsets.

| Method | Type |
| ---------- | ---------- |
| `getSelection` | `() => { start: number; end: number; } or null` |

Returns:

Object with `start` and `end` offsets, or null if no selection

#### :gear: render

| Method | Type |
| ---------- | ---------- |
| `render` | `(buffer: OptimizedBuffer, deltaTime: number) => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

### Properties

- [selectable](#gear-selectable)

#### :gear: selectable

Whether this renderable can be selected.

| Property | Type |
| ---------- | ---------- |
| `selectable` | `boolean` |

## :factory: CodeRenderable

A renderable for displaying syntax-highlighted source code.

Examples:

Basic usage:
```typescript
const code = new CodeRenderable(ctx, {
  content: 'function hello() { return "world"; }',
  filetype: "typescript",
  syntaxStyle: myTheme,
  fg: "#d4d4d4",
  bg: "#1e1e1e"
});
```
Streaming mode for real-time updates:
```typescript
const code = new CodeRenderable(ctx, {
  filetype: "python",
  syntaxStyle: theme,
  streaming: true,
  drawUnstyledText: true
});

// Update content incrementally
code.content = "def hello():";
code.content = "def hello():\n    return 'world'";
```


### Methods

- [getLineHighlights](#gear-getlinehighlights)

#### :gear: getLineHighlights

Gets the syntax highlights for a specific line.

| Method | Type |
| ---------- | ---------- |
| `getLineHighlights` | `(lineIdx: number) => Highlight[]` |

Parameters:

* `lineIdx`: - The line index (0-based)


Returns:

Array of highlight ranges for the line

## :factory: VRenderable

A generic renderable that accepts a custom render function as a prop.
This allows functional constructs to specify custom rendering behavior
without needing to subclass Renderable.

## :factory: InputRenderable

A single-line text input component with cursor and keyboard support.

Examples:

```ts
// Basic input
const input = new InputRenderable(ctx, {
  width: 40,
  height: 1,
  placeholder: "Enter your name...",
  value: ""
})

// Styled input with event handling
const emailInput = new InputRenderable(ctx, {
  width: 50,
  placeholder: "email@example.com",
  backgroundColor: "#1a1a1a",
  textColor: "white",
  focusedBackgroundColor: "#2a2a2a",
  maxLength: 100
})

emailInput.on(InputRenderableEvents.ENTER, () => {
  console.log("Submitted:", emailInput.value)
})

emailInput.on(InputRenderableEvents.INPUT, () => {
  console.log("Value changed:", emailInput.value)
})
```


### Methods

- [focus](#gear-focus)
- [blur](#gear-blur)
- [insertText](#gear-inserttext)
- [deleteCharacter](#gear-deletecharacter)
- [handleKeyPress](#gear-handlekeypress)
- [updateFromLayout](#gear-updatefromlayout)

#### :gear: focus

| Method | Type |
| ---------- | ---------- |
| `focus` | `() => void` |

#### :gear: blur

| Method | Type |
| ---------- | ---------- |
| `blur` | `() => void` |

#### :gear: insertText

| Method | Type |
| ---------- | ---------- |
| `insertText` | `(text: string) => void` |

#### :gear: deleteCharacter

| Method | Type |
| ---------- | ---------- |
| `deleteCharacter` | `(direction: "backward" or "forward") => void` |

#### :gear: handleKeyPress

| Method | Type |
| ---------- | ---------- |
| `handleKeyPress` | `(key: string or KeyEvent) => boolean` |

#### :gear: updateFromLayout

| Method | Type |
| ---------- | ---------- |
| `updateFromLayout` | `() => void` |

## :factory: LineNumberRenderable

A renderable that displays line numbers in a gutter next to text content.

Examples:

```typescript
const lineNumbers = new LineNumberRenderable(ctx, {
  fg: "#888888",
  bg: "#1e1e1e",
  minWidth: 4
});

const code = new Code(ctx, {
  content: "function main() {\n  return 42;\n}",
  filetype: "typescript"
});

lineNumbers.add(code); // Add code as target

// Highlight line 2
lineNumbers.setLineColor(1, "#264f78");

// Add error marker on line 2
lineNumbers.setLineSign(1, {
  after: "●",
  afterColor: "#ff0000"
});
```


### Methods

- [add](#gear-add)
- [remove](#gear-remove)
- [destroyRecursively](#gear-destroyrecursively)
- [clearTarget](#gear-cleartarget)
- [setLineColor](#gear-setlinecolor)
- [clearLineColor](#gear-clearlinecolor)
- [clearAllLineColors](#gear-clearalllinecolors)
- [setLineColors](#gear-setlinecolors)
- [getLineColors](#gear-getlinecolors)
- [setLineSign](#gear-setlinesign)
- [clearLineSign](#gear-clearlinesign)
- [clearAllLineSigns](#gear-clearalllinesigns)
- [setLineSigns](#gear-setlinesigns)
- [getLineSigns](#gear-getlinesigns)

#### :gear: add

| Method | Type |
| ---------- | ---------- |
| `add` | `(child: Renderable) => number` |

#### :gear: remove

| Method | Type |
| ---------- | ---------- |
| `remove` | `(id: string) => void` |

#### :gear: destroyRecursively

| Method | Type |
| ---------- | ---------- |
| `destroyRecursively` | `() => void` |

#### :gear: clearTarget

| Method | Type |
| ---------- | ---------- |
| `clearTarget` | `() => void` |

#### :gear: setLineColor

Sets a background color for a specific line (0-indexed).

| Method | Type |
| ---------- | ---------- |
| `setLineColor` | `(line: number, color: string or RGBA) => void` |

Parameters:

* `line`: - The line index (0-based)
* `color`: - The background color to apply


#### :gear: clearLineColor

Removes the background color from a specific line.

| Method | Type |
| ---------- | ---------- |
| `clearLineColor` | `(line: number) => void` |

Parameters:

* `line`: - The line index (0-based)


#### :gear: clearAllLineColors

Clears all custom line background colors.

| Method | Type |
| ---------- | ---------- |
| `clearAllLineColors` | `() => void` |

#### :gear: setLineColors

Sets multiple line colors at once, replacing existing ones.

| Method | Type |
| ---------- | ---------- |
| `setLineColors` | `(lineColors: Map<number, string or RGBA>) => void` |

Parameters:

* `lineColors`: - Map of line indices to colors


#### :gear: getLineColors

Gets the current map of line colors.

| Method | Type |
| ---------- | ---------- |
| `getLineColors` | `() => Map<number, RGBA>` |

#### :gear: setLineSign

Sets a decorative sign for a specific line.

| Method | Type |
| ---------- | ---------- |
| `setLineSign` | `(line: number, sign: LineSign) => void` |

Parameters:

* `line`: - The line index (0-based)
* `sign`: - The sign configuration


Examples:

```typescript
// Add a breakpoint indicator
lineNumbers.setLineSign(10, {
  before: "●",
  beforeColor: "#ff0000"
});
```


#### :gear: clearLineSign

Removes the sign from a specific line.

| Method | Type |
| ---------- | ---------- |
| `clearLineSign` | `(line: number) => void` |

Parameters:

* `line`: - The line index (0-based)


#### :gear: clearAllLineSigns

Clears all line signs.

| Method | Type |
| ---------- | ---------- |
| `clearAllLineSigns` | `() => void` |

#### :gear: setLineSigns

Sets multiple line signs at once, replacing existing ones.

| Method | Type |
| ---------- | ---------- |
| `setLineSigns` | `(lineSigns: Map<number, LineSign>) => void` |

Parameters:

* `lineSigns`: - Map of line indices to signs


#### :gear: getLineSigns

Gets the current map of line signs.

| Method | Type |
| ---------- | ---------- |
| `getLineSigns` | `() => Map<number, LineSign>` |

## :factory: SliderRenderable

A draggable slider component with sub-pixel precision rendering.

Examples:

```typescript
const slider = new SliderRenderable(ctx, {
  orientation: "horizontal",
  width: 20,
  height: 1,
  min: 0,
  max: 100,
  value: 50,
  onChange: (value) => {
    console.log("Slider value:", value);
  }
});
```


### Properties

- [orientation](#gear-orientation)

#### :gear: orientation

| Property | Type |
| ---------- | ---------- |
| `orientation` | `"vertical" or "horizontal"` |

## :factory: ScrollBarRenderable

A scrollbar component with integrated slider and optional arrow buttons.

Examples:

```typescript
const scrollbar = new ScrollBarRenderable(ctx, {
  orientation: "vertical",
  showArrows: true,
  onChange: (position) => {
    console.log("Scrolled to:", position);
  }
});

// Configure scrollbar for content
scrollbar.scrollSize = 1000;
scrollbar.viewportSize = 100;
scrollbar.scrollPosition = 0;

// Scroll programmatically
scrollbar.scrollBy(10); // Scroll by 10 pixels
scrollbar.scrollBy(0.5, "viewport"); // Scroll by half viewport
```


### Methods

- [resetVisibilityControl](#gear-resetvisibilitycontrol)
- [onChange](#gear-onchange)
- [scrollBy](#gear-scrollby)
- [handleKeyPress](#gear-handlekeypress)

#### :gear: resetVisibilityControl

| Method | Type |
| ---------- | ---------- |
| `resetVisibilityControl` | `() => void` |

#### :gear: onChange

| Method | Type |
| ---------- | ---------- |
| `onChange` | `(value: number) => void` |

#### :gear: scrollBy

| Method | Type |
| ---------- | ---------- |
| `scrollBy` | `(delta: number, unit?: ScrollUnit) => void` |

#### :gear: handleKeyPress

| Method | Type |
| ---------- | ---------- |
| `handleKeyPress` | `(key: string or KeyEvent) => boolean` |

### Properties

- [slider](#gear-slider)
- [startArrow](#gear-startarrow)
- [endArrow](#gear-endarrow)
- [orientation](#gear-orientation)
- [scrollStep](#gear-scrollstep)

#### :gear: slider

| Property | Type |
| ---------- | ---------- |
| `slider` | `SliderRenderable` |

#### :gear: startArrow

| Property | Type |
| ---------- | ---------- |
| `startArrow` | `ArrowRenderable` |

#### :gear: endArrow

| Property | Type |
| ---------- | ---------- |
| `endArrow` | `ArrowRenderable` |

#### :gear: orientation

| Property | Type |
| ---------- | ---------- |
| `orientation` | `"vertical" or "horizontal"` |

#### :gear: scrollStep

| Property | Type |
| ---------- | ---------- |
| `scrollStep` | `number or null or undefined` |

## :factory: ArrowRenderable

## :factory: Capture

### Methods

- [write](#gear-write)
- [claimOutput](#gear-claimoutput)

#### :gear: write

| Method | Type |
| ---------- | ---------- |
| `write` | `(stream: "stdout" or "stderr", data: string) => void` |

#### :gear: claimOutput

| Method | Type |
| ---------- | ---------- |
| `claimOutput` | `() => string` |

## :factory: CapturedWritableStream

### Methods

- [_write](#gear-_write)
- [getColorDepth](#gear-getcolordepth)

#### :gear: _write

| Method | Type |
| ---------- | ---------- |
| `_write` | `(chunk: any, encoding: BufferEncoding, callback: (error?: Error or null or undefined) => void) => void` |

#### :gear: getColorDepth

| Method | Type |
| ---------- | ---------- |
| `getColorDepth` | `() => number` |

### Properties

- [isTTY](#gear-istty)
- [columns](#gear-columns)
- [rows](#gear-rows)

#### :gear: isTTY

| Property | Type |
| ---------- | ---------- |
| `isTTY` | `boolean` |

#### :gear: columns

| Property | Type |
| ---------- | ---------- |
| `columns` | `number` |

#### :gear: rows

| Property | Type |
| ---------- | ---------- |
| `rows` | `number` |

## :factory: TerminalConsole

### Methods

- [activate](#gear-activate)
- [deactivate](#gear-deactivate)
- [resize](#gear-resize)
- [clear](#gear-clear)
- [toggle](#gear-toggle)
- [focus](#gear-focus)
- [blur](#gear-blur)
- [show](#gear-show)
- [hide](#gear-hide)
- [destroy](#gear-destroy)
- [getCachedLogs](#gear-getcachedlogs)
- [renderToBuffer](#gear-rendertobuffer)
- [setDebugMode](#gear-setdebugmode)
- [toggleDebugMode](#gear-toggledebugmode)

#### :gear: activate

| Method | Type |
| ---------- | ---------- |
| `activate` | `() => void` |

#### :gear: deactivate

| Method | Type |
| ---------- | ---------- |
| `deactivate` | `() => void` |

#### :gear: resize

| Method | Type |
| ---------- | ---------- |
| `resize` | `(width: number, height: number) => void` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: toggle

| Method | Type |
| ---------- | ---------- |
| `toggle` | `() => void` |

#### :gear: focus

| Method | Type |
| ---------- | ---------- |
| `focus` | `() => void` |

#### :gear: blur

| Method | Type |
| ---------- | ---------- |
| `blur` | `() => void` |

#### :gear: show

| Method | Type |
| ---------- | ---------- |
| `show` | `() => void` |

#### :gear: hide

| Method | Type |
| ---------- | ---------- |
| `hide` | `() => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

#### :gear: getCachedLogs

| Method | Type |
| ---------- | ---------- |
| `getCachedLogs` | `() => string` |

#### :gear: renderToBuffer

| Method | Type |
| ---------- | ---------- |
| `renderToBuffer` | `(buffer: OptimizedBuffer) => void` |

#### :gear: setDebugMode

| Method | Type |
| ---------- | ---------- |
| `setDebugMode` | `(enabled: boolean) => void` |

#### :gear: toggleDebugMode

| Method | Type |
| ---------- | ---------- |
| `toggleDebugMode` | `() => void` |

## :factory: MouseEvent

Represents a mouse event in the terminal.

### Methods

- [stopPropagation](#gear-stoppropagation)
- [preventDefault](#gear-preventdefault)

#### :gear: stopPropagation

| Method | Type |
| ---------- | ---------- |
| `stopPropagation` | `() => void` |

#### :gear: preventDefault

| Method | Type |
| ---------- | ---------- |
| `preventDefault` | `() => void` |

### Properties

- [type](#gear-type)
- [button](#gear-button)
- [x](#gear-x)
- [y](#gear-y)
- [source](#gear-source)
- [modifiers](#gear-modifiers)
- [scroll](#gear-scroll)
- [target](#gear-target)
- [isSelecting](#gear-isselecting)

#### :gear: type

Type of mouse event (e.g., "down", "up", "move", "drag", "scroll")

| Property | Type |
| ---------- | ---------- |
| `type` | `MouseEventType` |

#### :gear: button

Mouse button that was pressed (0=left, 1=middle, 2=right)

| Property | Type |
| ---------- | ---------- |
| `button` | `number` |

#### :gear: x

X coordinate in terminal cells

| Property | Type |
| ---------- | ---------- |
| `x` | `number` |

#### :gear: y

Y coordinate in terminal cells

| Property | Type |
| ---------- | ---------- |
| `y` | `number` |

#### :gear: source

The renderable that is the source of a drag operation

| Property | Type |
| ---------- | ---------- |
| `source` | `Renderable or undefined` |

#### :gear: modifiers

Keyboard modifiers active during the event

| Property | Type |
| ---------- | ---------- |
| `modifiers` | `{ shift: boolean; alt: boolean; ctrl: boolean; }` |

#### :gear: scroll

| Property | Type |
| ---------- | ---------- |
| `scroll` | `ScrollInfo or undefined` |

#### :gear: target

| Property | Type |
| ---------- | ---------- |
| `target` | `Renderable or null` |

#### :gear: isSelecting

| Property | Type |
| ---------- | ---------- |
| `isSelecting` | `boolean or undefined` |

## :factory: CliRenderer

The main renderer class for terminal UI applications.

Examples:

```ts
import { createCliRenderer, TextRenderable } from "@opentui/core"

const renderer = await createCliRenderer()

// Add components to the root
const text = new TextRenderable(renderer, {
  content: "Hello, World!",
  fg: "#00FF00"
})
renderer.root.add(text)

// Set up keyboard handler
renderer.keyInput.on("keypress", (key) => {
  if (key.name === "q") {
    renderer.destroy()
  }
})

// Start the render loop
renderer.start()
```


### Static Methods

- [setCursorPosition](#gear-setcursorposition)
- [setCursorStyle](#gear-setcursorstyle)
- [setCursorColor](#gear-setcursorcolor)

#### :gear: setCursorPosition

| Method | Type |
| ---------- | ---------- |
| `setCursorPosition` | `(renderer: CliRenderer, x: number, y: number, visible?: boolean) => void` |

#### :gear: setCursorStyle

| Method | Type |
| ---------- | ---------- |
| `setCursorStyle` | `(renderer: CliRenderer, style: CursorStyle, blinking?: boolean, color?: RGBA or undefined) => void` |

#### :gear: setCursorColor

| Method | Type |
| ---------- | ---------- |
| `setCursorColor` | `(renderer: CliRenderer, color: RGBA) => void` |

### Methods

- [registerLifecyclePass](#gear-registerlifecyclepass)
- [unregisterLifecyclePass](#gear-unregisterlifecyclepass)
- [getLifecyclePasses](#gear-getlifecyclepasses)
- [focusRenderable](#gear-focusrenderable)
- [addToHitGrid](#gear-addtohitgrid)
- [requestRender](#gear-requestrender)
- [disableStdoutInterception](#gear-disablestdoutinterception)
- [enableKittyKeyboard](#gear-enablekittykeyboard)
- [disableKittyKeyboard](#gear-disablekittykeyboard)
- [setupTerminal](#gear-setupterminal)
- [addInputHandler](#gear-addinputhandler)
- [prependInputHandler](#gear-prependinputhandler)
- [removeInputHandler](#gear-removeinputhandler)
- [setMemorySnapshotInterval](#gear-setmemorysnapshotinterval)
- [setBackgroundColor](#gear-setbackgroundcolor)
- [toggleDebugOverlay](#gear-toggledebugoverlay)
- [configureDebugOverlay](#gear-configuredebugoverlay)
- [setTerminalTitle](#gear-setterminaltitle)
- [dumpHitGrid](#gear-dumphitgrid)
- [dumpBuffers](#gear-dumpbuffers)
- [dumpStdoutBuffer](#gear-dumpstdoutbuffer)
- [setCursorPosition](#gear-setcursorposition)
- [setCursorStyle](#gear-setcursorstyle)
- [setCursorColor](#gear-setcursorcolor)
- [addPostProcessFn](#gear-addpostprocessfn)
- [removePostProcessFn](#gear-removepostprocessfn)
- [clearPostProcessFns](#gear-clearpostprocessfns)
- [setFrameCallback](#gear-setframecallback)
- [removeFrameCallback](#gear-removeframecallback)
- [clearFrameCallbacks](#gear-clearframecallbacks)
- [requestLive](#gear-requestlive)
- [dropLive](#gear-droplive)
- [start](#gear-start)
- [auto](#gear-auto)
- [pause](#gear-pause)
- [suspend](#gear-suspend)
- [resume](#gear-resume)
- [stop](#gear-stop)
- [destroy](#gear-destroy)
- [intermediateRender](#gear-intermediaterender)
- [getStats](#gear-getstats)
- [resetStats](#gear-resetstats)
- [setGatherStats](#gear-setgatherstats)
- [getSelection](#gear-getselection)
- [getSelectionContainer](#gear-getselectioncontainer)
- [clearSelection](#gear-clearselection)
- [startSelection](#gear-startselection)
- [updateSelection](#gear-updateselection)
- [requestSelectionUpdate](#gear-requestselectionupdate)
- [clearPaletteCache](#gear-clearpalettecache)
- [getPalette](#gear-getpalette)

#### :gear: registerLifecyclePass

| Method | Type |
| ---------- | ---------- |
| `registerLifecyclePass` | `(renderable: Renderable) => void` |

#### :gear: unregisterLifecyclePass

| Method | Type |
| ---------- | ---------- |
| `unregisterLifecyclePass` | `(renderable: Renderable) => void` |

#### :gear: getLifecyclePasses

| Method | Type |
| ---------- | ---------- |
| `getLifecyclePasses` | `() => Set<Renderable>` |

#### :gear: focusRenderable

| Method | Type |
| ---------- | ---------- |
| `focusRenderable` | `(renderable: Renderable) => void` |

#### :gear: addToHitGrid

| Method | Type |
| ---------- | ---------- |
| `addToHitGrid` | `(x: number, y: number, width: number, height: number, id: number) => void` |

#### :gear: requestRender

Requests a single render frame to be scheduled.

| Method | Type |
| ---------- | ---------- |
| `requestRender` | `() => void` |

Examples:

```ts
// Update UI without starting render loop
box.backgroundColor = "red"
renderer.requestRender()
```


#### :gear: disableStdoutInterception

| Method | Type |
| ---------- | ---------- |
| `disableStdoutInterception` | `() => void` |

#### :gear: enableKittyKeyboard

| Method | Type |
| ---------- | ---------- |
| `enableKittyKeyboard` | `(flags?: number) => void` |

#### :gear: disableKittyKeyboard

| Method | Type |
| ---------- | ---------- |
| `disableKittyKeyboard` | `() => void` |

#### :gear: setupTerminal

| Method | Type |
| ---------- | ---------- |
| `setupTerminal` | `() => Promise<void>` |

#### :gear: addInputHandler

| Method | Type |
| ---------- | ---------- |
| `addInputHandler` | `(handler: (sequence: string) => boolean) => void` |

#### :gear: prependInputHandler

| Method | Type |
| ---------- | ---------- |
| `prependInputHandler` | `(handler: (sequence: string) => boolean) => void` |

#### :gear: removeInputHandler

| Method | Type |
| ---------- | ---------- |
| `removeInputHandler` | `(handler: (sequence: string) => boolean) => void` |

#### :gear: setMemorySnapshotInterval

| Method | Type |
| ---------- | ---------- |
| `setMemorySnapshotInterval` | `(interval: number) => void` |

#### :gear: setBackgroundColor

Sets the background color for the entire terminal canvas.

| Method | Type |
| ---------- | ---------- |
| `setBackgroundColor` | `(color: ColorInput) => void` |

Parameters:

* `color`: - Color value (hex string, color name, or RGBA object)


Examples:

```ts
// Using hex color
renderer.setBackgroundColor("#1a1b26")

// Using color name
renderer.setBackgroundColor("black")

// Using RGBA object
renderer.setBackgroundColor(RGBA.fromInts(26, 27, 38, 255))
```


#### :gear: toggleDebugOverlay

| Method | Type |
| ---------- | ---------- |
| `toggleDebugOverlay` | `() => void` |

#### :gear: configureDebugOverlay

| Method | Type |
| ---------- | ---------- |
| `configureDebugOverlay` | `(options: { enabled?: boolean or undefined; corner?: DebugOverlayCorner or undefined; }) => void` |

#### :gear: setTerminalTitle

| Method | Type |
| ---------- | ---------- |
| `setTerminalTitle` | `(title: string) => void` |

#### :gear: dumpHitGrid

| Method | Type |
| ---------- | ---------- |
| `dumpHitGrid` | `() => void` |

#### :gear: dumpBuffers

| Method | Type |
| ---------- | ---------- |
| `dumpBuffers` | `(timestamp?: number or undefined) => void` |

#### :gear: dumpStdoutBuffer

| Method | Type |
| ---------- | ---------- |
| `dumpStdoutBuffer` | `(timestamp?: number or undefined) => void` |

#### :gear: setCursorPosition

| Method | Type |
| ---------- | ---------- |
| `setCursorPosition` | `(x: number, y: number, visible?: boolean) => void` |

#### :gear: setCursorStyle

| Method | Type |
| ---------- | ---------- |
| `setCursorStyle` | `(style: CursorStyle, blinking?: boolean, color?: RGBA or undefined) => void` |

#### :gear: setCursorColor

| Method | Type |
| ---------- | ---------- |
| `setCursorColor` | `(color: RGBA) => void` |

#### :gear: addPostProcessFn

| Method | Type |
| ---------- | ---------- |
| `addPostProcessFn` | `(processFn: (buffer: OptimizedBuffer, deltaTime: number) => void) => void` |

#### :gear: removePostProcessFn

| Method | Type |
| ---------- | ---------- |
| `removePostProcessFn` | `(processFn: (buffer: OptimizedBuffer, deltaTime: number) => void) => void` |

#### :gear: clearPostProcessFns

| Method | Type |
| ---------- | ---------- |
| `clearPostProcessFns` | `() => void` |

#### :gear: setFrameCallback

Registers a callback to be invoked on every render frame.

| Method | Type |
| ---------- | ---------- |
| `setFrameCallback` | `(callback: (deltaTime: number) => Promise<void>) => void` |

Parameters:

* `callback`: - Async function that receives deltaTime in milliseconds


Examples:

```ts
let rotation = 0
renderer.setFrameCallback(async (deltaTime) => {
  rotation += deltaTime * 0.001
  box.transform.rotation = rotation
})
```


#### :gear: removeFrameCallback

Removes a previously registered frame callback.

| Method | Type |
| ---------- | ---------- |
| `removeFrameCallback` | `(callback: (deltaTime: number) => Promise<void>) => void` |

Parameters:

* `callback`: - The callback function to remove


#### :gear: clearFrameCallbacks

Removes all registered frame callbacks.

| Method | Type |
| ---------- | ---------- |
| `clearFrameCallbacks` | `() => void` |

#### :gear: requestLive

| Method | Type |
| ---------- | ---------- |
| `requestLive` | `() => void` |

#### :gear: dropLive

| Method | Type |
| ---------- | ---------- |
| `dropLive` | `() => void` |

#### :gear: start

Starts the continuous render loop.

| Method | Type |
| ---------- | ---------- |
| `start` | `() => void` |

Examples:

```ts
const renderer = await createCliRenderer({ targetFps: 60 })

// Set up your UI
const box = new BoxRenderable(renderer, { width: 10, height: 5 })
renderer.root.add(box)

// Start the render loop
renderer.start()
```


#### :gear: auto

| Method | Type |
| ---------- | ---------- |
| `auto` | `() => void` |

#### :gear: pause

| Method | Type |
| ---------- | ---------- |
| `pause` | `() => void` |

#### :gear: suspend

| Method | Type |
| ---------- | ---------- |
| `suspend` | `() => void` |

#### :gear: resume

| Method | Type |
| ---------- | ---------- |
| `resume` | `() => void` |

#### :gear: stop

Stops the continuous render loop.

| Method | Type |
| ---------- | ---------- |
| `stop` | `() => void` |

Examples:

```ts
// Stop rendering when done with animation
renderer.stop()

// Later, restart if needed
renderer.start()
```


#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

#### :gear: intermediateRender

| Method | Type |
| ---------- | ---------- |
| `intermediateRender` | `() => void` |

#### :gear: getStats

| Method | Type |
| ---------- | ---------- |
| `getStats` | `() => { fps: number; frameCount: number; frameTimes: number[]; averageFrameTime: number; minFrameTime: number; maxFrameTime: number; }` |

#### :gear: resetStats

| Method | Type |
| ---------- | ---------- |
| `resetStats` | `() => void` |

#### :gear: setGatherStats

| Method | Type |
| ---------- | ---------- |
| `setGatherStats` | `(enabled: boolean) => void` |

#### :gear: getSelection

| Method | Type |
| ---------- | ---------- |
| `getSelection` | `() => Selection or null` |

#### :gear: getSelectionContainer

| Method | Type |
| ---------- | ---------- |
| `getSelectionContainer` | `() => Renderable or null` |

#### :gear: clearSelection

| Method | Type |
| ---------- | ---------- |
| `clearSelection` | `() => void` |

#### :gear: startSelection

Start a new selection at the given coordinates.
Used by both mouse and keyboard selection.

| Method | Type |
| ---------- | ---------- |
| `startSelection` | `(renderable: Renderable, x: number, y: number) => void` |

#### :gear: updateSelection

| Method | Type |
| ---------- | ---------- |
| `updateSelection` | `(currentRenderable: Renderable or undefined, x: number, y: number) => void` |

#### :gear: requestSelectionUpdate

| Method | Type |
| ---------- | ---------- |
| `requestSelectionUpdate` | `() => void` |

#### :gear: clearPaletteCache

| Method | Type |
| ---------- | ---------- |
| `clearPaletteCache` | `() => void` |

#### :gear: getPalette

Detects the terminal's color palette

| Method | Type |
| ---------- | ---------- |
| `getPalette` | `(options?: GetPaletteOptions or undefined) => Promise<TerminalColors>` |

Returns:

Promise resolving to TerminalColors object containing palette and special colors

### Properties

- [rendererPtr](#gear-rendererptr)
- [stdin](#gear-stdin)
- [nextRenderBuffer](#gear-nextrenderbuffer)
- [currentRenderBuffer](#gear-currentrenderbuffer)
- [root](#gear-root)
- [width](#gear-width)
- [height](#gear-height)
- [debugOverlay](#gear-debugoverlay)

#### :gear: rendererPtr

| Property | Type |
| ---------- | ---------- |
| `rendererPtr` | `Pointer` |

#### :gear: stdin

| Property | Type |
| ---------- | ---------- |
| `stdin` | `ReadStream` |

#### :gear: nextRenderBuffer

| Property | Type |
| ---------- | ---------- |
| `nextRenderBuffer` | `OptimizedBuffer` |

#### :gear: currentRenderBuffer

| Property | Type |
| ---------- | ---------- |
| `currentRenderBuffer` | `OptimizedBuffer` |

#### :gear: root

| Property | Type |
| ---------- | ---------- |
| `root` | `RootRenderable` |

#### :gear: width

| Property | Type |
| ---------- | ---------- |
| `width` | `number` |

#### :gear: height

| Property | Type |
| ---------- | ---------- |
| `height` | `number` |

#### :gear: debugOverlay

| Property | Type |
| ---------- | ---------- |
| `debugOverlay` | `{ enabled: boolean; corner: DebugOverlayCorner; }` |

## :factory: ScrollBoxRenderable

A scrollable container component with vertical and horizontal scrollbars.

Examples:

```typescript
const scrollBox = new ScrollBoxRenderable(ctx, {
  width: 40,
  height: 20,
  scrollY: true,
  scrollX: true,
  stickyScroll: true,
  stickyStart: "bottom",
  viewportCulling: true
});

// Add content
for (let i = 0; i < 100; i++) {
  scrollBox.add(new TextRenderable(ctx, {
    content: `Line ${i}`
  }));
}

// Programmatic scrolling
scrollBox.scrollTo(100); // Scroll to position 100
scrollBox.scrollBy(10); // Scroll down by 10 pixels
```


### Methods

- [onSizeChange](#gear-onsizechange)
- [scrollBy](#gear-scrollby)
- [scrollTo](#gear-scrollto)
- [add](#gear-add)
- [insertBefore](#gear-insertbefore)
- [remove](#gear-remove)
- [getChildren](#gear-getchildren)
- [handleKeyPress](#gear-handlekeypress)
- [startAutoScroll](#gear-startautoscroll)
- [updateAutoScroll](#gear-updateautoscroll)
- [stopAutoScroll](#gear-stopautoscroll)

#### :gear: onSizeChange

| Method | Type |
| ---------- | ---------- |
| `onSizeChange` | `() => void` |

#### :gear: scrollBy

Scrolls the content by a relative amount.

| Method | Type |
| ---------- | ---------- |
| `scrollBy` | `(delta: number or { x: number; y: number; }, unit?: ScrollUnit) => void` |

Parameters:

* `delta`: - The amount to scroll (number for vertical, object for both axes)
* `unit`: - The unit of measurement for the delta value


Examples:

```typescript
// Scroll down by 10 pixels
scrollBox.scrollBy(10);

// Scroll by half a viewport
scrollBox.scrollBy(0.5, "viewport");

// Scroll both axes
scrollBox.scrollBy({ x: 10, y: 20 });
```


#### :gear: scrollTo

Scrolls to an absolute position.

| Method | Type |
| ---------- | ---------- |
| `scrollTo` | `(position: number or { x: number; y: number; }) => void` |

Parameters:

* `position`: - The position to scroll to (number for vertical, object for both axes)


Examples:

```typescript
// Scroll to top
scrollBox.scrollTo(0);

// Scroll to specific position
scrollBox.scrollTo({ x: 100, y: 200 });
```


#### :gear: add

| Method | Type |
| ---------- | ---------- |
| `add` | `(obj: Renderable or VNode<any, any[]>, index?: number or undefined) => number` |

#### :gear: insertBefore

| Method | Type |
| ---------- | ---------- |
| `insertBefore` | `(obj: unknown, anchor?: unknown) => number` |

#### :gear: remove

| Method | Type |
| ---------- | ---------- |
| `remove` | `(id: string) => void` |

#### :gear: getChildren

| Method | Type |
| ---------- | ---------- |
| `getChildren` | `() => Renderable[]` |

#### :gear: handleKeyPress

| Method | Type |
| ---------- | ---------- |
| `handleKeyPress` | `(key: string or KeyEvent) => boolean` |

#### :gear: startAutoScroll

| Method | Type |
| ---------- | ---------- |
| `startAutoScroll` | `(mouseX: number, mouseY: number) => void` |

#### :gear: updateAutoScroll

| Method | Type |
| ---------- | ---------- |
| `updateAutoScroll` | `(mouseX: number, mouseY: number) => void` |

#### :gear: stopAutoScroll

| Method | Type |
| ---------- | ---------- |
| `stopAutoScroll` | `() => void` |

### Static Properties

- [idCounter](#gear-idcounter)

#### :gear: idCounter

| Property | Type |
| ---------- | ---------- |
| `idCounter` | `number` |

### Properties

- [wrapper](#gear-wrapper)
- [viewport](#gear-viewport)
- [content](#gear-content)
- [horizontalScrollBar](#gear-horizontalscrollbar)
- [verticalScrollBar](#gear-verticalscrollbar)

#### :gear: wrapper

The wrapper element that contains the viewport and horizontal scrollbar

| Property | Type |
| ---------- | ---------- |
| `wrapper` | `BoxRenderable` |

#### :gear: viewport

The viewport element that clips the content to the visible area

| Property | Type |
| ---------- | ---------- |
| `viewport` | `BoxRenderable` |

#### :gear: content

The content container that holds all child elements

| Property | Type |
| ---------- | ---------- |
| `content` | `ContentRenderable` |

#### :gear: horizontalScrollBar

The horizontal scrollbar

| Property | Type |
| ---------- | ---------- |
| `horizontalScrollBar` | `ScrollBarRenderable` |

#### :gear: verticalScrollBar

The vertical scrollbar

| Property | Type |
| ---------- | ---------- |
| `verticalScrollBar` | `ScrollBarRenderable` |

## :factory: SelectRenderable

A vertical list selector component with keyboard navigation and scrolling.

Examples:

```typescript
const select = new SelectRenderable(ctx, {
  width: 40,
  height: 15,
  options: [
    { name: "Option 1", description: "First choice" },
    { name: "Option 2", description: "Second choice" },
    { name: "Option 3", description: "Third choice" }
  ],
  selectedBackgroundColor: "#3344ff",
  showScrollIndicator: true,
  wrapSelection: true
});

select.on(SelectRenderableEvents.ITEM_SELECTED, (index, option) => {
  console.log("Selected:", option.name);
});
```


### Methods

- [getSelectedOption](#gear-getselectedoption)
- [getSelectedIndex](#gear-getselectedindex)
- [moveUp](#gear-moveup)
- [moveDown](#gear-movedown)
- [selectCurrent](#gear-selectcurrent)
- [setSelectedIndex](#gear-setselectedindex)
- [handleKeyPress](#gear-handlekeypress)

#### :gear: getSelectedOption

| Method | Type |
| ---------- | ---------- |
| `getSelectedOption` | `() => SelectOption or null` |

#### :gear: getSelectedIndex

| Method | Type |
| ---------- | ---------- |
| `getSelectedIndex` | `() => number` |

#### :gear: moveUp

| Method | Type |
| ---------- | ---------- |
| `moveUp` | `(steps?: number) => void` |

#### :gear: moveDown

| Method | Type |
| ---------- | ---------- |
| `moveDown` | `(steps?: number) => void` |

#### :gear: selectCurrent

| Method | Type |
| ---------- | ---------- |
| `selectCurrent` | `() => void` |

#### :gear: setSelectedIndex

| Method | Type |
| ---------- | ---------- |
| `setSelectedIndex` | `(index: number) => void` |

#### :gear: handleKeyPress

| Method | Type |
| ---------- | ---------- |
| `handleKeyPress` | `(key: string or KeyEvent) => boolean` |

## :factory: TabSelectRenderable

A horizontal tab selector component with keyboard navigation.

Examples:

```typescript
const tabs = new TabSelectRenderable(ctx, {
  width: 60,
  tabWidth: 15,
  options: [
    { name: "Home", description: "Home screen" },
    { name: "Settings", description: "Application settings" },
    { name: "About", description: "About this app" }
  ],
  showUnderline: true,
  showDescription: true,
  selectedBackgroundColor: "#3344ff"
});

tabs.on(TabSelectRenderableEvents.ITEM_SELECTED, (index, option) => {
  console.log("Tab selected:", option.name);
});
```


### Methods

- [setOptions](#gear-setoptions)
- [getSelectedOption](#gear-getselectedoption)
- [getSelectedIndex](#gear-getselectedindex)
- [moveLeft](#gear-moveleft)
- [moveRight](#gear-moveright)
- [selectCurrent](#gear-selectcurrent)
- [setSelectedIndex](#gear-setselectedindex)
- [setTabWidth](#gear-settabwidth)
- [getTabWidth](#gear-gettabwidth)
- [handleKeyPress](#gear-handlekeypress)

#### :gear: setOptions

| Method | Type |
| ---------- | ---------- |
| `setOptions` | `(options: TabSelectOption[]) => void` |

#### :gear: getSelectedOption

| Method | Type |
| ---------- | ---------- |
| `getSelectedOption` | `() => TabSelectOption or null` |

#### :gear: getSelectedIndex

| Method | Type |
| ---------- | ---------- |
| `getSelectedIndex` | `() => number` |

#### :gear: moveLeft

| Method | Type |
| ---------- | ---------- |
| `moveLeft` | `() => void` |

#### :gear: moveRight

| Method | Type |
| ---------- | ---------- |
| `moveRight` | `() => void` |

#### :gear: selectCurrent

| Method | Type |
| ---------- | ---------- |
| `selectCurrent` | `() => void` |

#### :gear: setSelectedIndex

| Method | Type |
| ---------- | ---------- |
| `setSelectedIndex` | `(index: number) => void` |

#### :gear: setTabWidth

| Method | Type |
| ---------- | ---------- |
| `setTabWidth` | `(tabWidth: number) => void` |

#### :gear: getTabWidth

| Method | Type |
| ---------- | ---------- |
| `getTabWidth` | `() => number` |

#### :gear: handleKeyPress

| Method | Type |
| ---------- | ---------- |
| `handleKeyPress` | `(key: string or KeyEvent) => boolean` |

## :factory: EditBufferRenderable

Abstract base class for editable text components with cursor navigation.

Examples:

```typescript
class MyEditor extends EditBufferRenderable {
  constructor(ctx: RenderContext) {
    super(ctx, {
      textColor: "#d4d4d4",
      backgroundColor: "#1e1e1e",
      wrapMode: "word",
      scrollMargin: 0.2,
      onContentChange: (e) => console.log("Content changed"),
      onCursorChange: (e) => console.log(`Cursor at ${e.line}:${e.visualColumn}`)
    });
  }
}
```


### Methods

- [shouldStartSelection](#gear-shouldstartselection)
- [onSelectionChanged](#gear-onselectionchanged)
- [getSelectedText](#gear-getselectedtext)
- [hasSelection](#gear-hasselection)
- [getSelection](#gear-getselection)
- [render](#gear-render)
- [focus](#gear-focus)
- [blur](#gear-blur)
- [destroy](#gear-destroy)
- [addHighlight](#gear-addhighlight)
- [addHighlightByCharRange](#gear-addhighlightbycharrange)
- [removeHighlightsByRef](#gear-removehighlightsbyref)
- [clearLineHighlights](#gear-clearlinehighlights)
- [clearAllHighlights](#gear-clearallhighlights)
- [getLineHighlights](#gear-getlinehighlights)
- [setText](#gear-settext)
- [clear](#gear-clear)
- [deleteRange](#gear-deleterange)
- [insertText](#gear-inserttext)
- [getTextRange](#gear-gettextrange)
- [getTextRangeByCoords](#gear-gettextrangebycoords)

#### :gear: shouldStartSelection

| Method | Type |
| ---------- | ---------- |
| `shouldStartSelection` | `(x: number, y: number) => boolean` |

#### :gear: onSelectionChanged

| Method | Type |
| ---------- | ---------- |
| `onSelectionChanged` | `(selection: Selection or null) => boolean` |

#### :gear: getSelectedText

| Method | Type |
| ---------- | ---------- |
| `getSelectedText` | `() => string` |

#### :gear: hasSelection

| Method | Type |
| ---------- | ---------- |
| `hasSelection` | `() => boolean` |

#### :gear: getSelection

| Method | Type |
| ---------- | ---------- |
| `getSelection` | `() => { start: number; end: number; } or null` |

#### :gear: render

| Method | Type |
| ---------- | ---------- |
| `render` | `(buffer: OptimizedBuffer, deltaTime: number) => void` |

#### :gear: focus

| Method | Type |
| ---------- | ---------- |
| `focus` | `() => void` |

#### :gear: blur

| Method | Type |
| ---------- | ---------- |
| `blur` | `() => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

#### :gear: addHighlight

| Method | Type |
| ---------- | ---------- |
| `addHighlight` | `(lineIdx: number, highlight: Highlight) => void` |

#### :gear: addHighlightByCharRange

| Method | Type |
| ---------- | ---------- |
| `addHighlightByCharRange` | `(highlight: Highlight) => void` |

#### :gear: removeHighlightsByRef

| Method | Type |
| ---------- | ---------- |
| `removeHighlightsByRef` | `(hlRef: number) => void` |

#### :gear: clearLineHighlights

| Method | Type |
| ---------- | ---------- |
| `clearLineHighlights` | `(lineIdx: number) => void` |

#### :gear: clearAllHighlights

| Method | Type |
| ---------- | ---------- |
| `clearAllHighlights` | `() => void` |

#### :gear: getLineHighlights

| Method | Type |
| ---------- | ---------- |
| `getLineHighlights` | `(lineIdx: number) => Highlight[]` |

#### :gear: setText

Sets the entire text content.

| Method | Type |
| ---------- | ---------- |
| `setText` | `(text: string, opts?: { history?: boolean or undefined; } or undefined) => void` |

Parameters:

* `text`: - The new text content
* `opts`: - Options controlling undo history
* `opts.history`: - If true, adds to undo history; if false, replaces without history.


#### :gear: clear

Clears all text content and highlights.

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: deleteRange

Deletes a range of text specified by line and column coordinates.

| Method | Type |
| ---------- | ---------- |
| `deleteRange` | `(startLine: number, startCol: number, endLine: number, endCol: number) => void` |

Parameters:

* `startLine`: - Starting line (0-based)
* `startCol`: - Starting column (0-based)
* `endLine`: - Ending line (0-based)
* `endCol`: - Ending column (0-based)


#### :gear: insertText

Inserts text at the current cursor position.

| Method | Type |
| ---------- | ---------- |
| `insertText` | `(text: string) => void` |

Parameters:

* `text`: - The text to insert


#### :gear: getTextRange

Gets a substring of the text by character offsets.

| Method | Type |
| ---------- | ---------- |
| `getTextRange` | `(startOffset: number, endOffset: number) => string` |

Parameters:

* `startOffset`: - Starting character offset (0-based)
* `endOffset`: - Ending character offset (0-based, exclusive)


Returns:

The substring

#### :gear: getTextRangeByCoords

Gets a substring of the text by line and column coordinates.

| Method | Type |
| ---------- | ---------- |
| `getTextRangeByCoords` | `(startRow: number, startCol: number, endRow: number, endCol: number) => string` |

Parameters:

* `startRow`: - Starting line (0-based)
* `startCol`: - Starting column (0-based)
* `endRow`: - Ending line (0-based)
* `endCol`: - Ending column (0-based)


Returns:

The substring

### Properties

- [selectable](#gear-selectable)
- [editBuffer](#gear-editbuffer)
- [editorView](#gear-editorview)

#### :gear: selectable

Whether text can be selected.

| Property | Type |
| ---------- | ---------- |
| `selectable` | `boolean` |

#### :gear: editBuffer

The underlying text buffer managing content and editing operations.

| Property | Type |
| ---------- | ---------- |
| `editBuffer` | `EditBuffer` |

#### :gear: editorView

The view layer managing layout, wrapping, and viewport.

| Property | Type |
| ---------- | ---------- |
| `editorView` | `EditorView` |

## :factory: TextareaRenderable

A multi-line text input component with comprehensive editing capabilities.

Examples:

```typescript
const textarea = new TextareaRenderable(ctx, {
  width: "100%",
  height: 10,
  placeholder: "Enter your message...",
  backgroundColor: "#1e1e1e",
  textColor: "#d4d4d4",
  focusedBackgroundColor: "#252526",
  onSubmit: (event) => {
    console.log("Submitted:", textarea.getText());
  }
});

// Listen for text changes
textarea.on("change", () => {
  console.log("Text changed:", textarea.getText());
});
```


### Methods

- [handlePaste](#gear-handlepaste)
- [handleKeyPress](#gear-handlekeypress)
- [insertChar](#gear-insertchar)
- [insertText](#gear-inserttext)
- [deleteChar](#gear-deletechar)
- [deleteCharBackward](#gear-deletecharbackward)
- [newLine](#gear-newline)
- [deleteLine](#gear-deleteline)
- [moveCursorLeft](#gear-movecursorleft)
- [moveCursorRight](#gear-movecursorright)
- [moveCursorUp](#gear-movecursorup)
- [moveCursorDown](#gear-movecursordown)
- [gotoLine](#gear-gotoline)
- [gotoLineHome](#gear-gotolinehome)
- [gotoLineEnd](#gear-gotolineend)
- [gotoBufferHome](#gear-gotobufferhome)
- [gotoBufferEnd](#gear-gotobufferend)
- [deleteToLineEnd](#gear-deletetolineend)
- [deleteToLineStart](#gear-deletetolinestart)
- [undo](#gear-undo)
- [redo](#gear-redo)
- [moveWordForward](#gear-movewordforward)
- [moveWordBackward](#gear-movewordbackward)
- [deleteWordForward](#gear-deletewordforward)
- [deleteWordBackward](#gear-deletewordbackward)
- [focus](#gear-focus)
- [blur](#gear-blur)
- [submit](#gear-submit)

#### :gear: handlePaste

| Method | Type |
| ---------- | ---------- |
| `handlePaste` | `(event: PasteEvent) => void` |

#### :gear: handleKeyPress

| Method | Type |
| ---------- | ---------- |
| `handleKeyPress` | `(key: string or KeyEvent) => boolean` |

#### :gear: insertChar

| Method | Type |
| ---------- | ---------- |
| `insertChar` | `(char: string) => void` |

#### :gear: insertText

Inserts text at the current cursor position.

| Method | Type |
| ---------- | ---------- |
| `insertText` | `(text: string) => void` |

#### :gear: deleteChar

| Method | Type |
| ---------- | ---------- |
| `deleteChar` | `() => boolean` |

#### :gear: deleteCharBackward

| Method | Type |
| ---------- | ---------- |
| `deleteCharBackward` | `() => boolean` |

#### :gear: newLine

| Method | Type |
| ---------- | ---------- |
| `newLine` | `() => boolean` |

#### :gear: deleteLine

| Method | Type |
| ---------- | ---------- |
| `deleteLine` | `() => boolean` |

#### :gear: moveCursorLeft

| Method | Type |
| ---------- | ---------- |
| `moveCursorLeft` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: moveCursorRight

| Method | Type |
| ---------- | ---------- |
| `moveCursorRight` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: moveCursorUp

| Method | Type |
| ---------- | ---------- |
| `moveCursorUp` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: moveCursorDown

| Method | Type |
| ---------- | ---------- |
| `moveCursorDown` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: gotoLine

| Method | Type |
| ---------- | ---------- |
| `gotoLine` | `(line: number) => void` |

#### :gear: gotoLineHome

| Method | Type |
| ---------- | ---------- |
| `gotoLineHome` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: gotoLineEnd

| Method | Type |
| ---------- | ---------- |
| `gotoLineEnd` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: gotoBufferHome

| Method | Type |
| ---------- | ---------- |
| `gotoBufferHome` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: gotoBufferEnd

| Method | Type |
| ---------- | ---------- |
| `gotoBufferEnd` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: deleteToLineEnd

| Method | Type |
| ---------- | ---------- |
| `deleteToLineEnd` | `() => boolean` |

#### :gear: deleteToLineStart

| Method | Type |
| ---------- | ---------- |
| `deleteToLineStart` | `() => boolean` |

#### :gear: undo

| Method | Type |
| ---------- | ---------- |
| `undo` | `() => boolean` |

#### :gear: redo

| Method | Type |
| ---------- | ---------- |
| `redo` | `() => boolean` |

#### :gear: moveWordForward

| Method | Type |
| ---------- | ---------- |
| `moveWordForward` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: moveWordBackward

| Method | Type |
| ---------- | ---------- |
| `moveWordBackward` | `(options?: { select?: boolean or undefined; } or undefined) => boolean` |

#### :gear: deleteWordForward

| Method | Type |
| ---------- | ---------- |
| `deleteWordForward` | `() => boolean` |

#### :gear: deleteWordBackward

| Method | Type |
| ---------- | ---------- |
| `deleteWordBackward` | `() => boolean` |

#### :gear: focus

| Method | Type |
| ---------- | ---------- |
| `focus` | `() => void` |

#### :gear: blur

| Method | Type |
| ---------- | ---------- |
| `blur` | `() => void` |

#### :gear: submit

| Method | Type |
| ---------- | ---------- |
| `submit` | `() => boolean` |

## :factory: TextNodeRenderable

A lightweight node for building styled text hierarchies.

Examples:

Building styled text:
```typescript
const root = new TextNodeRenderable({ fg: "white" });
root.add("Hello ");

const bold = new TextNodeRenderable({ attributes: BOLD });
bold.add("world");
root.add(bold);

root.add("!");
// Renders as: "Hello world!" with "world" in bold
```
Style inheritance:
```typescript
const outer = new TextNodeRenderable({ fg: "red" });
const inner = new TextNodeRenderable({ attributes: BOLD });
inner.add("Bold Red");
outer.add(inner);
// "Bold Red" is both red (inherited) and bold
```


### Static Methods

- [fromString](#gear-fromstring)
- [fromNodes](#gear-fromnodes)

#### :gear: fromString

Creates a TextNodeRenderable from a plain string.

| Method | Type |
| ---------- | ---------- |
| `fromString` | `(text: string, options?: Partial<TextNodeOptions>) => TextNodeRenderable` |

Parameters:

* `text`: - The text content
* `options`: - Optional style configuration


Returns:

A new TextNodeRenderable containing the text

Examples:

```typescript
const node = TextNodeRenderable.fromString("Hello", { fg: "red" });
```


#### :gear: fromNodes

Creates a TextNodeRenderable containing multiple child nodes.

| Method | Type |
| ---------- | ---------- |
| `fromNodes` | `(nodes: TextNodeRenderable[], options?: Partial<TextNodeOptions>) => TextNodeRenderable` |

Parameters:

* `nodes`: - Child nodes to add
* `options`: - Optional style configuration for the parent


Returns:

A new TextNodeRenderable wrapping the children

### Methods

- [requestRender](#gear-requestrender)
- [add](#gear-add)
- [replace](#gear-replace)
- [insertBefore](#gear-insertbefore)
- [remove](#gear-remove)
- [clear](#gear-clear)
- [mergeStyles](#gear-mergestyles)
- [gatherWithInheritedStyle](#gear-gatherwithinheritedstyle)
- [toChunks](#gear-tochunks)
- [getChildren](#gear-getchildren)
- [getChildrenCount](#gear-getchildrencount)
- [getRenderable](#gear-getrenderable)
- [getRenderableIndex](#gear-getrenderableindex)
- [findDescendantById](#gear-finddescendantbyid)

#### :gear: requestRender

| Method | Type |
| ---------- | ---------- |
| `requestRender` | `() => void` |

#### :gear: add

Adds a child to this text node.

| Method | Type |
| ---------- | ---------- |
| `add` | `(obj: string or StyledText or TextNodeRenderable, index?: number or undefined) => number` |

Parameters:

* `obj`: - The child to add: a string, TextNodeRenderable, or StyledText
* `index`: - Optional position to insert at. If omitted, appends to end.


Returns:

The index where the child was inserted

Examples:

```typescript
const node = new TextNodeRenderable({ fg: "blue" });
node.add("Hello ");
node.add(new TextNodeRenderable({ attributes: BOLD }).add("world"));
```


#### :gear: replace

| Method | Type |
| ---------- | ---------- |
| `replace` | `(obj: string or TextNodeRenderable, index: number) => void` |

#### :gear: insertBefore

| Method | Type |
| ---------- | ---------- |
| `insertBefore` | `(child: string or StyledText or TextNodeRenderable, anchorNode: unknown) => this` |

#### :gear: remove

| Method | Type |
| ---------- | ---------- |
| `remove` | `(id: string) => this` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: mergeStyles

Merges this node's styles with parent styles.

| Method | Type |
| ---------- | ---------- |
| `mergeStyles` | `(parentStyle: { fg?: RGBA or undefined; bg?: RGBA or undefined; attributes: number; }) => { fg?: RGBA or undefined; bg?: RGBA or undefined; attributes: number; }` |

Parameters:

* `parentStyle`: - The parent's effective style


Returns:

The merged style (own properties override parent's)

#### :gear: gatherWithInheritedStyle

Recursively flattens this node tree into styled text chunks.

| Method | Type |
| ---------- | ---------- |
| `gatherWithInheritedStyle` | `(parentStyle?: { fg?: RGBA or undefined; bg?: RGBA or undefined; attributes: number; }) => TextChunk[]` |

Parameters:

* `parentStyle`: - Style inherited from parent


Returns:

Array of styled text chunks ready for rendering

#### :gear: toChunks

Converts this text node tree to an array of styled chunks.

| Method | Type |
| ---------- | ---------- |
| `toChunks` | `(parentStyle?: { fg?: RGBA or undefined; bg?: RGBA or undefined; attributes: number; }) => TextChunk[]` |

Parameters:

* `parentStyle`: - Optional parent style to inherit from


Returns:

Flattened array of styled text chunks

#### :gear: getChildren

| Method | Type |
| ---------- | ---------- |
| `getChildren` | `() => BaseRenderable[]` |

#### :gear: getChildrenCount

| Method | Type |
| ---------- | ---------- |
| `getChildrenCount` | `() => number` |

#### :gear: getRenderable

| Method | Type |
| ---------- | ---------- |
| `getRenderable` | `(id: string) => BaseRenderable or undefined` |

#### :gear: getRenderableIndex

| Method | Type |
| ---------- | ---------- |
| `getRenderableIndex` | `(id: string) => number` |

#### :gear: findDescendantById

| Method | Type |
| ---------- | ---------- |
| `findDescendantById` | `(id: string) => BaseRenderable or undefined` |

### Properties

- [__@BrandedTextNodeRenderable@1862](#gear-__@brandedtextnoderenderable@1862)
- [parent](#gear-parent)

#### :gear: __@BrandedTextNodeRenderable@1862

| Property | Type |
| ---------- | ---------- |
| `__@BrandedTextNodeRenderable@1862` | `boolean` |

#### :gear: parent

Parent node, if this is a child of another TextNodeRenderable.

| Property | Type |
| ---------- | ---------- |
| `parent` | `TextNodeRenderable or null` |

## :factory: RootTextNodeRenderable

Root text node that connects to the rendering system.

### Methods

- [requestRender](#gear-requestrender)

#### :gear: requestRender

Requests a render of the parent Text component.

| Method | Type |
| ---------- | ---------- |
| `requestRender` | `() => void` |

### Properties

- [textParent](#gear-textparent)

#### :gear: textParent

The TextRenderable that owns this root node.

| Property | Type |
| ---------- | ---------- |
| `textParent` | `TextRenderable` |

## :factory: TextRenderable

A renderable component for displaying styled text.
Supports colors, text attributes, and automatic text wrapping.

Examples:

```ts
import { TextRenderable, t, red, bold } from "@opentui/core"

// Simple text
const text1 = new TextRenderable(ctx, {
  content: "Hello, World!",
  width: 40
})

// Styled text with colors
const text2 = new TextRenderable(ctx, {
  content: t`Status: ${green("Online")}`,
  width: "auto"
})

// Text with multiple styles
const text3 = new TextRenderable(ctx, {
  content: t`${bold(red("Error"))}: ${yellow("Connection failed")}`,
  defaultFg: RGBA.white(),
  defaultBg: RGBA.black()
})

// Update content dynamically
text1.content = "Updated text!"
text2.content = t`Status: ${red("Offline")}`
```


### Methods

- [add](#gear-add)
- [remove](#gear-remove)
- [insertBefore](#gear-insertbefore)
- [getTextChildren](#gear-gettextchildren)
- [clear](#gear-clear)
- [onLifecyclePass](#gear-onlifecyclepass)
- [destroy](#gear-destroy)

#### :gear: add

| Method | Type |
| ---------- | ---------- |
| `add` | `(obj: string or StyledText or TextNodeRenderable, index?: number or undefined) => number` |

#### :gear: remove

| Method | Type |
| ---------- | ---------- |
| `remove` | `(id: string) => void` |

#### :gear: insertBefore

| Method | Type |
| ---------- | ---------- |
| `insertBefore` | `(obj: any, anchor?: TextNodeRenderable or undefined) => number` |

#### :gear: getTextChildren

| Method | Type |
| ---------- | ---------- |
| `getTextChildren` | `() => BaseRenderable[]` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: onLifecyclePass

| Method | Type |
| ---------- | ---------- |
| `onLifecyclePass` | `() => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

## :factory: StyledText

Container for styled text content composed of multiple text chunks.
Each chunk can have its own colors and text attributes.

Examples:

```ts
import { t, red, bold, blue, bgWhite } from "@opentui/core"

// Using template literals
const text1 = t`Hello ${red("World")}!`
const text2 = t`${bold("Important")}: ${blue("Information")}`

// Composing styles
const text3 = t`${bold(red("Error"))}: Something went wrong`
const text4 = t`${bgWhite(blue("Highlighted"))} text`

// Using in TextRenderable
const textComponent = new TextRenderable(ctx, {
  content: t`Status: ${green("Online")}`
})
```


### Properties

- [__@BrandedStyledText@1860](#gear-__@brandedstyledtext@1860)
- [chunks](#gear-chunks)

#### :gear: __@BrandedStyledText@1860

| Property | Type |
| ---------- | ---------- |
| `__@BrandedStyledText@1860` | `boolean` |

#### :gear: chunks

Array of text chunks, each with optional styling

| Property | Type |
| ---------- | ---------- |
| `chunks` | `TextChunk[]` |

## :factory: TextBuffer

### Static Methods

- [create](#gear-create)

#### :gear: create

| Method | Type |
| ---------- | ---------- |
| `create` | `(widthMethod: WidthMethod) => TextBuffer` |

### Methods

- [setText](#gear-settext)
- [append](#gear-append)
- [loadFile](#gear-loadfile)
- [setStyledText](#gear-setstyledtext)
- [setDefaultFg](#gear-setdefaultfg)
- [setDefaultBg](#gear-setdefaultbg)
- [setDefaultAttributes](#gear-setdefaultattributes)
- [resetDefaults](#gear-resetdefaults)
- [getLineCount](#gear-getlinecount)
- [getPlainText](#gear-getplaintext)
- [getTextRange](#gear-gettextrange)
- [addHighlightByCharRange](#gear-addhighlightbycharrange)
- [addHighlight](#gear-addhighlight)
- [removeHighlightsByRef](#gear-removehighlightsbyref)
- [clearLineHighlights](#gear-clearlinehighlights)
- [clearAllHighlights](#gear-clearallhighlights)
- [getLineHighlights](#gear-getlinehighlights)
- [getHighlightCount](#gear-gethighlightcount)
- [setSyntaxStyle](#gear-setsyntaxstyle)
- [getSyntaxStyle](#gear-getsyntaxstyle)
- [setTabWidth](#gear-settabwidth)
- [getTabWidth](#gear-gettabwidth)
- [clear](#gear-clear)
- [reset](#gear-reset)
- [destroy](#gear-destroy)

#### :gear: setText

| Method | Type |
| ---------- | ---------- |
| `setText` | `(text: string) => void` |

#### :gear: append

| Method | Type |
| ---------- | ---------- |
| `append` | `(text: string) => void` |

#### :gear: loadFile

| Method | Type |
| ---------- | ---------- |
| `loadFile` | `(path: string) => void` |

#### :gear: setStyledText

| Method | Type |
| ---------- | ---------- |
| `setStyledText` | `(text: StyledText) => void` |

#### :gear: setDefaultFg

| Method | Type |
| ---------- | ---------- |
| `setDefaultFg` | `(fg: RGBA or null) => void` |

#### :gear: setDefaultBg

| Method | Type |
| ---------- | ---------- |
| `setDefaultBg` | `(bg: RGBA or null) => void` |

#### :gear: setDefaultAttributes

| Method | Type |
| ---------- | ---------- |
| `setDefaultAttributes` | `(attributes: number or null) => void` |

#### :gear: resetDefaults

| Method | Type |
| ---------- | ---------- |
| `resetDefaults` | `() => void` |

#### :gear: getLineCount

| Method | Type |
| ---------- | ---------- |
| `getLineCount` | `() => number` |

#### :gear: getPlainText

| Method | Type |
| ---------- | ---------- |
| `getPlainText` | `() => string` |

#### :gear: getTextRange

| Method | Type |
| ---------- | ---------- |
| `getTextRange` | `(startOffset: number, endOffset: number) => string` |

#### :gear: addHighlightByCharRange

Add a highlight using character offsets into the full text.
start/end in highlight represent absolute character positions.

| Method | Type |
| ---------- | ---------- |
| `addHighlightByCharRange` | `(highlight: Highlight) => void` |

#### :gear: addHighlight

Add a highlight to a specific line by column positions.
start/end in highlight represent column offsets.

| Method | Type |
| ---------- | ---------- |
| `addHighlight` | `(lineIdx: number, highlight: Highlight) => void` |

#### :gear: removeHighlightsByRef

| Method | Type |
| ---------- | ---------- |
| `removeHighlightsByRef` | `(hlRef: number) => void` |

#### :gear: clearLineHighlights

| Method | Type |
| ---------- | ---------- |
| `clearLineHighlights` | `(lineIdx: number) => void` |

#### :gear: clearAllHighlights

| Method | Type |
| ---------- | ---------- |
| `clearAllHighlights` | `() => void` |

#### :gear: getLineHighlights

| Method | Type |
| ---------- | ---------- |
| `getLineHighlights` | `(lineIdx: number) => Highlight[]` |

#### :gear: getHighlightCount

| Method | Type |
| ---------- | ---------- |
| `getHighlightCount` | `() => number` |

#### :gear: setSyntaxStyle

| Method | Type |
| ---------- | ---------- |
| `setSyntaxStyle` | `(style: SyntaxStyle or null) => void` |

#### :gear: getSyntaxStyle

| Method | Type |
| ---------- | ---------- |
| `getSyntaxStyle` | `() => SyntaxStyle or null` |

#### :gear: setTabWidth

| Method | Type |
| ---------- | ---------- |
| `setTabWidth` | `(width: number) => void` |

#### :gear: getTabWidth

| Method | Type |
| ---------- | ---------- |
| `getTabWidth` | `() => number` |

#### :gear: clear

| Method | Type |
| ---------- | ---------- |
| `clear` | `() => void` |

#### :gear: reset

| Method | Type |
| ---------- | ---------- |
| `reset` | `() => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

## :factory: OptimizedBuffer

High-performance cell-based drawing buffer for terminal rendering.
This is the primary API for drawing text, colors, and UI elements to the terminal.

Examples:

```ts
// Drawing text
buffer.drawText(
  5, 10,  // x, y position
  "Hello, World!",
  RGBA.white(),  // foreground color
  RGBA.black()   // background color
)

// Drawing a box with border
buffer.drawBox({
  x: 0, y: 0,
  width: 40, height: 10,
  border: ["top", "bottom", "left", "right"],
  borderStyle: "rounded",
  borderColor: RGBA.blue(),
  backgroundColor: RGBA.black(),
  title: "My Box"
})

// Fill a region
buffer.fillRect(10, 5, 20, 3, RGBA.red())
```


### Static Methods

- [create](#gear-create)

#### :gear: create

Creates a new OptimizedBuffer with the specified dimensions.

| Method | Type |
| ---------- | ---------- |
| `create` | `(width: number, height: number, widthMethod: WidthMethod, options?: { respectAlpha?: boolean or undefined; id?: string or undefined; }) => OptimizedBuffer` |

Parameters:

* `width`: - Width of the buffer in cells
* `height`: - Height of the buffer in cells
* `widthMethod`: - Character width calculation method ("unicode" or "terminal")
* `options`: - Optional configuration
* `options.respectAlpha`: - Whether to enable alpha blending (default: false)
* `options.id`: - Optional identifier for debugging


Returns:

A new OptimizedBuffer instance

Examples:

```ts
// Create a standard buffer
const buffer = OptimizedBuffer.create(80, 24, "unicode")

// Create a buffer with alpha blending
const overlay = OptimizedBuffer.create(40, 10, "unicode", {
  respectAlpha: true,
  id: "overlay-buffer"
})
```


### Methods

- [setRespectAlpha](#gear-setrespectalpha)
- [getNativeId](#gear-getnativeid)
- [getRealCharBytes](#gear-getrealcharbytes)
- [clear](#gear-clear)
- [setCell](#gear-setcell)
- [setCellWithAlphaBlending](#gear-setcellwithalphablending)
- [drawText](#gear-drawtext)
- [fillRect](#gear-fillrect)
- [drawFrameBuffer](#gear-drawframebuffer)
- [destroy](#gear-destroy)
- [drawTextBuffer](#gear-drawtextbuffer)
- [drawEditorView](#gear-draweditorview)
- [drawSuperSampleBuffer](#gear-drawsupersamplebuffer)
- [drawPackedBuffer](#gear-drawpackedbuffer)
- [resize](#gear-resize)
- [drawBox](#gear-drawbox)
- [pushScissorRect](#gear-pushscissorrect)
- [popScissorRect](#gear-popscissorrect)
- [clearScissorRects](#gear-clearscissorrects)
- [encodeUnicode](#gear-encodeunicode)
- [freeUnicode](#gear-freeunicode)
- [drawChar](#gear-drawchar)

#### :gear: setRespectAlpha

| Method | Type |
| ---------- | ---------- |
| `setRespectAlpha` | `(respectAlpha: boolean) => void` |

#### :gear: getNativeId

| Method | Type |
| ---------- | ---------- |
| `getNativeId` | `() => string` |

#### :gear: getRealCharBytes

| Method | Type |
| ---------- | ---------- |
| `getRealCharBytes` | `(addLineBreaks?: boolean) => Uint8Array<ArrayBufferLike>` |

#### :gear: clear

Clears the entire buffer, filling it with the specified background color.

| Method | Type |
| ---------- | ---------- |
| `clear` | `(bg?: RGBA) => void` |

Parameters:

* `bg`: - Background color to fill (default: opaque black)


Examples:

```ts
// Clear to black
buffer.clear()

// Clear to blue
buffer.clear(RGBA.blue())
```


#### :gear: setCell

Sets a single cell at the specified position.

| Method | Type |
| ---------- | ---------- |
| `setCell` | `(x: number, y: number, char: string, fg: RGBA, bg: RGBA, attributes?: number) => void` |

Parameters:

* `x`: - X coordinate (column)
* `y`: - Y coordinate (row)
* `char`: - Character to draw (single character or emoji)
* `fg`: - Foreground (text) color
* `bg`: - Background color
* `attributes`: - Text attributes (bold, italic, etc.) - see 


Examples:

```ts
// Draw a red 'X' on white background
buffer.setCell(10, 5, 'X', RGBA.red(), RGBA.white())

// Draw bold text
buffer.setCell(10, 5, 'B', RGBA.white(), RGBA.black(), TextAttributes.BOLD)
```


#### :gear: setCellWithAlphaBlending

Sets a single cell with alpha blending enabled.
Use this when you need transparency effects.

| Method | Type |
| ---------- | ---------- |
| `setCellWithAlphaBlending` | `(x: number, y: number, char: string, fg: RGBA, bg: RGBA, attributes?: number) => void` |

Parameters:

* `x`: - X coordinate (column)
* `y`: - Y coordinate (row)
* `char`: - Character to draw
* `fg`: - Foreground color (with alpha)
* `bg`: - Background color (with alpha)
* `attributes`: - Text attributes


#### :gear: drawText

Draws a string of text at the specified position.
Supports Unicode, emojis, and optional text selection highlighting.

| Method | Type |
| ---------- | ---------- |
| `drawText` | `(text: string, x: number, y: number, fg: RGBA, bg?: RGBA or undefined, attributes?: number, selection?: { start: number; end: number; bgColor?: RGBA or undefined; fgColor?: RGBA or undefined; } or null or undefined) => void` |

Parameters:

* `text`: - Text string to draw
* `x`: - Starting X coordinate (column)
* `y`: - Y coordinate (row)
* `fg`: - Foreground (text) color
* `bg`: - Background color (optional)
* `attributes`: - Text attributes (bold, italic, etc.)
* `selection`: - Optional selection range with highlighting colors


Examples:

```ts
// Draw simple text
buffer.drawText("Hello, World!", 5, 10, RGBA.white(), RGBA.black())

// Draw text with selection (characters 0-5 highlighted)
buffer.drawText("Selected text", 5, 10, RGBA.white(), RGBA.black(), 0, {
  start: 0,
  end: 5,
  bgColor: RGBA.blue(),
  fgColor: RGBA.white()
})
```


#### :gear: fillRect

Fills a rectangular region with a solid background color.

| Method | Type |
| ---------- | ---------- |
| `fillRect` | `(x: number, y: number, width: number, height: number, bg: RGBA) => void` |

Parameters:

* `x`: - Starting X coordinate
* `y`: - Starting Y coordinate
* `width`: - Width of the rectangle
* `height`: - Height of the rectangle
* `bg`: - Background color to fill


Examples:

```ts
// Fill a 20x5 rectangle with red
buffer.fillRect(10, 5, 20, 5, RGBA.red())
```


#### :gear: drawFrameBuffer

Draws another buffer onto this buffer at the specified position.
Useful for compositing offscreen buffers or implementing layers.

| Method | Type |
| ---------- | ---------- |
| `drawFrameBuffer` | `(destX: number, destY: number, frameBuffer: OptimizedBuffer, sourceX?: number or undefined, sourceY?: number or undefined, sourceWidth?: number or undefined, sourceHeight?: number or undefined) => void` |

Parameters:

* `destX`: - Destination X coordinate
* `destY`: - Destination Y coordinate
* `frameBuffer`: - Source buffer to draw
* `sourceX`: - Source X coordinate (optional)
* `sourceY`: - Source Y coordinate (optional)
* `sourceWidth`: - Source width (optional)
* `sourceHeight`: - Source height (optional)


Examples:

```ts
// Draw entire offscreen buffer onto main buffer
mainBuffer.drawFrameBuffer(10, 5, offscreenBuffer)

// Draw partial region from source buffer
mainBuffer.drawFrameBuffer(10, 5, sourceBuffer, 0, 0, 40, 20)
```


#### :gear: destroy

Destroys the buffer and frees its native resources.
The buffer should not be used after calling this method.

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

#### :gear: drawTextBuffer

| Method | Type |
| ---------- | ---------- |
| `drawTextBuffer` | `(textBufferView: TextBufferView, x: number, y: number) => void` |

#### :gear: drawEditorView

| Method | Type |
| ---------- | ---------- |
| `drawEditorView` | `(editorView: EditorView, x: number, y: number) => void` |

#### :gear: drawSuperSampleBuffer

| Method | Type |
| ---------- | ---------- |
| `drawSuperSampleBuffer` | `(x: number, y: number, pixelDataPtr: Pointer, pixelDataLength: number, format: "bgra8unorm" or "rgba8unorm", alignedBytesPerRow: number) => void` |

#### :gear: drawPackedBuffer

| Method | Type |
| ---------- | ---------- |
| `drawPackedBuffer` | `(dataPtr: Pointer, dataLen: number, posX: number, posY: number, terminalWidthCells: number, terminalHeightCells: number) => void` |

#### :gear: resize

| Method | Type |
| ---------- | ---------- |
| `resize` | `(width: number, height: number) => void` |

#### :gear: drawBox

Draws a box with optional borders, fill, and title.
This is a high-level method used by BoxRenderable.

| Method | Type |
| ---------- | ---------- |
| `drawBox` | `(options: { x: number; y: number; width: number; height: number; borderStyle?: BorderStyle or undefined; customBorderChars?: Uint32Array<ArrayBufferLike> or undefined; ... 5 more ...; titleAlignment?: "right" or ... 2 more ... or undefined; }) => void` |

Parameters:

* `options`: - Box drawing configuration
* `options.x`: - X coordinate
* `options.y`: - Y coordinate
* `options.width`: - Width of the box
* `options.height`: - Height of the box
* `options.border`: - Which borders to draw (true for all, or array of sides)
* `options.borderStyle`: - Border style: "single", "double", "rounded", "bold", "ascii"
* `options.borderColor`: - Color of the border
* `options.backgroundColor`: - Background color
* `options.shouldFill`: - Whether to fill the interior (default: false)
* `options.title`: - Optional title text
* `options.titleAlignment`: - Title alignment: "left", "center", "right"


Examples:

```ts
// Draw a rounded box with title
buffer.drawBox({
  x: 5, y: 5,
  width: 40, height: 10,
  border: ["top", "bottom", "left", "right"],
  borderStyle: "rounded",
  borderColor: RGBA.cyan(),
  backgroundColor: RGBA.black(),
  shouldFill: true,
  title: "My Window",
  titleAlignment: "center"
})
```


#### :gear: pushScissorRect

Pushes a scissor rectangle onto the stack, restricting rendering to the specified region.
Useful for implementing scrollable viewports and clipping.

| Method | Type |
| ---------- | ---------- |
| `pushScissorRect` | `(x: number, y: number, width: number, height: number) => void` |

Parameters:

* `x`: - X coordinate of the clip region
* `y`: - Y coordinate of the clip region
* `width`: - Width of the clip region
* `height`: - Height of the clip region


Examples:

```ts
// Only draw within a 40x20 region
buffer.pushScissorRect(10, 5, 40, 20)
buffer.drawText("This text will be clipped", 0, 0, RGBA.white())
buffer.popScissorRect()
```


#### :gear: popScissorRect

Removes the most recently pushed scissor rectangle from the stack.

| Method | Type |
| ---------- | ---------- |
| `popScissorRect` | `() => void` |

#### :gear: clearScissorRects

Clears all scissor rectangles from the stack.

| Method | Type |
| ---------- | ---------- |
| `clearScissorRects` | `() => void` |

#### :gear: encodeUnicode

| Method | Type |
| ---------- | ---------- |
| `encodeUnicode` | `(text: string) => { ptr: Pointer; data: { width: number; char: number; }[]; } or null` |

#### :gear: freeUnicode

| Method | Type |
| ---------- | ---------- |
| `freeUnicode` | `(encoded: { ptr: Pointer; data: { width: number; char: number; }[]; }) => void` |

#### :gear: drawChar

| Method | Type |
| ---------- | ---------- |
| `drawChar` | `(char: number, x: number, y: number, fg: RGBA, bg: RGBA, attributes?: number) => void` |

### Properties

- [id](#gear-id)
- [lib](#gear-lib)
- [respectAlpha](#gear-respectalpha)

#### :gear: id

Unique identifier for this buffer

| Property | Type |
| ---------- | ---------- |
| `id` | `string` |

#### :gear: lib

Reference to the native rendering library

| Property | Type |
| ---------- | ---------- |
| `lib` | `RenderLib` |

#### :gear: respectAlpha

Whether to respect alpha channel for transparency

| Property | Type |
| ---------- | ---------- |
| `respectAlpha` | `boolean` |

## :factory: BaseRenderable

Abstract base class for all renderables in OpenTUI.
Provides the minimal interface for objects that can be part of the render tree.

### Methods

- [add](#gear-add)
- [remove](#gear-remove)
- [insertBefore](#gear-insertbefore)
- [getChildren](#gear-getchildren)
- [getChildrenCount](#gear-getchildrencount)
- [getRenderable](#gear-getrenderable)
- [requestRender](#gear-requestrender)
- [findDescendantById](#gear-finddescendantbyid)
- [destroy](#gear-destroy)
- [destroyRecursively](#gear-destroyrecursively)

#### :gear: add

| Method | Type |
| ---------- | ---------- |
| `add` | `(obj: unknown, index?: number or undefined) => number` |

#### :gear: remove

| Method | Type |
| ---------- | ---------- |
| `remove` | `(id: string) => void` |

#### :gear: insertBefore

| Method | Type |
| ---------- | ---------- |
| `insertBefore` | `(obj: unknown, anchor: unknown) => void` |

#### :gear: getChildren

| Method | Type |
| ---------- | ---------- |
| `getChildren` | `() => BaseRenderable[]` |

#### :gear: getChildrenCount

| Method | Type |
| ---------- | ---------- |
| `getChildrenCount` | `() => number` |

#### :gear: getRenderable

| Method | Type |
| ---------- | ---------- |
| `getRenderable` | `(id: string) => BaseRenderable or undefined` |

#### :gear: requestRender

| Method | Type |
| ---------- | ---------- |
| `requestRender` | `() => void` |

#### :gear: findDescendantById

| Method | Type |
| ---------- | ---------- |
| `findDescendantById` | `(id: string) => BaseRenderable or undefined` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

#### :gear: destroyRecursively

| Method | Type |
| ---------- | ---------- |
| `destroyRecursively` | `() => void` |

### Properties

- [__@BrandedRenderable@432](#gear-__@brandedrenderable@432)
- [num](#gear-num)
- [parent](#gear-parent)

#### :gear: __@BrandedRenderable@432

| Property | Type |
| ---------- | ---------- |
| `__@BrandedRenderable@432` | `boolean` |

#### :gear: num

| Property | Type |
| ---------- | ---------- |
| `num` | `number` |

#### :gear: parent

| Property | Type |
| ---------- | ---------- |
| `parent` | `BaseRenderable or null` |

## :factory: Renderable

Base class for all renderable components in OpenTUI.
Provides layout (via Yoga/Flexbox), rendering, event handling, and focus management.

Examples:

```ts
// Create a custom renderable
class MyComponent extends Renderable {
  constructor(ctx: RenderContext, options: RenderableOptions) {
    super(ctx, options)
  }

  render(buffer: OptimizedBuffer, deltaTime: number): void {
    // Custom rendering logic
    buffer.drawText(this.x, this.y, "Hello!", RGBA.white())
  }
}

// Use built-in renderables
const root = new RootRenderable(ctx)
const box = new BoxRenderable(ctx, {
  width: 40,
  height: 10,
  flexDirection: "column",
  padding: 2
})
root.add(box)
```


### Methods

- [hasSelection](#gear-hasselection)
- [onSelectionChanged](#gear-onselectionchanged)
- [getSelectedText](#gear-getselectedtext)
- [shouldStartSelection](#gear-shouldstartselection)
- [focus](#gear-focus)
- [blur](#gear-blur)
- [handleKeyPress](#gear-handlekeypress)
- [handlePaste](#gear-handlepaste)
- [findDescendantById](#gear-finddescendantbyid)
- [requestRender](#gear-requestrender)
- [getChildrenSortedByPrimaryAxis](#gear-getchildrensortedbyprimaryaxis)
- [setPosition](#gear-setposition)
- [getLayoutNode](#gear-getlayoutnode)
- [updateFromLayout](#gear-updatefromlayout)
- [add](#gear-add)
- [insertBefore](#gear-insertbefore)
- [getRenderable](#gear-getrenderable)
- [remove](#gear-remove)
- [getChildren](#gear-getchildren)
- [getChildrenCount](#gear-getchildrencount)
- [updateLayout](#gear-updatelayout)
- [render](#gear-render)
- [destroy](#gear-destroy)
- [destroyRecursively](#gear-destroyrecursively)
- [processMouseEvent](#gear-processmouseevent)

#### :gear: hasSelection

| Method | Type |
| ---------- | ---------- |
| `hasSelection` | `() => boolean` |

#### :gear: onSelectionChanged

| Method | Type |
| ---------- | ---------- |
| `onSelectionChanged` | `(selection: Selection or null) => boolean` |

#### :gear: getSelectedText

| Method | Type |
| ---------- | ---------- |
| `getSelectedText` | `() => string` |

#### :gear: shouldStartSelection

| Method | Type |
| ---------- | ---------- |
| `shouldStartSelection` | `(x: number, y: number) => boolean` |

#### :gear: focus

| Method | Type |
| ---------- | ---------- |
| `focus` | `() => void` |

#### :gear: blur

| Method | Type |
| ---------- | ---------- |
| `blur` | `() => void` |

#### :gear: handleKeyPress

| Method | Type |
| ---------- | ---------- |
| `handleKeyPress` | `((key: string or KeyEvent) => boolean) or undefined` |

#### :gear: handlePaste

| Method | Type |
| ---------- | ---------- |
| `handlePaste` | `((event: PasteEvent) => void) or undefined` |

#### :gear: findDescendantById

| Method | Type |
| ---------- | ---------- |
| `findDescendantById` | `(id: string) => Renderable or undefined` |

#### :gear: requestRender

| Method | Type |
| ---------- | ---------- |
| `requestRender` | `() => void` |

#### :gear: getChildrenSortedByPrimaryAxis

| Method | Type |
| ---------- | ---------- |
| `getChildrenSortedByPrimaryAxis` | `() => Renderable[]` |

#### :gear: setPosition

| Method | Type |
| ---------- | ---------- |
| `setPosition` | `(position: Position) => void` |

#### :gear: getLayoutNode

| Method | Type |
| ---------- | ---------- |
| `getLayoutNode` | `() => Node` |

#### :gear: updateFromLayout

| Method | Type |
| ---------- | ---------- |
| `updateFromLayout` | `() => void` |

#### :gear: add

| Method | Type |
| ---------- | ---------- |
| `add` | `(obj: unknown, index?: number or undefined) => number` |

#### :gear: insertBefore

| Method | Type |
| ---------- | ---------- |
| `insertBefore` | `(obj: unknown, anchor?: unknown) => number` |

#### :gear: getRenderable

| Method | Type |
| ---------- | ---------- |
| `getRenderable` | `(id: string) => Renderable or undefined` |

#### :gear: remove

| Method | Type |
| ---------- | ---------- |
| `remove` | `(id: string) => void` |

#### :gear: getChildren

| Method | Type |
| ---------- | ---------- |
| `getChildren` | `() => Renderable[]` |

#### :gear: getChildrenCount

| Method | Type |
| ---------- | ---------- |
| `getChildrenCount` | `() => number` |

#### :gear: updateLayout

| Method | Type |
| ---------- | ---------- |
| `updateLayout` | `(deltaTime: number, renderList?: RenderCommand[]) => void` |

#### :gear: render

| Method | Type |
| ---------- | ---------- |
| `render` | `(buffer: OptimizedBuffer, deltaTime: number) => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

#### :gear: destroyRecursively

| Method | Type |
| ---------- | ---------- |
| `destroyRecursively` | `() => void` |

#### :gear: processMouseEvent

| Method | Type |
| ---------- | ---------- |
| `processMouseEvent` | `(event: MouseEvent) => void` |

### Static Properties

- [renderablesByNumber](#gear-renderablesbynumber)

#### :gear: renderablesByNumber

| Property | Type |
| ---------- | ---------- |
| `renderablesByNumber` | `Map<number, Renderable>` |

### Properties

- [selectable](#gear-selectable)
- [parent](#gear-parent)
- [onLifecyclePass](#gear-onlifecyclepass)
- [renderBefore](#gear-renderbefore)
- [renderAfter](#gear-renderafter)

#### :gear: selectable

| Property | Type |
| ---------- | ---------- |
| `selectable` | `boolean` |

#### :gear: parent

| Property | Type |
| ---------- | ---------- |
| `parent` | `Renderable or null` |

#### :gear: onLifecyclePass

| Property | Type |
| ---------- | ---------- |
| `onLifecyclePass` | `(() => void) or null` |

#### :gear: renderBefore

| Property | Type |
| ---------- | ---------- |
| `renderBefore` | `((this: Renderable, buffer: OptimizedBuffer, deltaTime: number) => void) or undefined` |

#### :gear: renderAfter

| Property | Type |
| ---------- | ---------- |
| `renderAfter` | `((this: Renderable, buffer: OptimizedBuffer, deltaTime: number) => void) or undefined` |

## :factory: RootRenderable

Root renderable that serves as the entry point for the render tree.
Manages the top-level layout calculation and rendering process.

Examples:

```ts
const renderer = new CliRenderer({ fps: 60 })
const ctx = renderer.getContext()
const root = new RootRenderable(ctx)

// Add your UI components to the root
const app = new BoxRenderable(ctx, {
  flexDirection: "column",
  width: "100%",
  height: "100%"
})
root.add(app)

renderer.start(root)
```


### Methods

- [render](#gear-render)
- [calculateLayout](#gear-calculatelayout)
- [resize](#gear-resize)

#### :gear: render

| Method | Type |
| ---------- | ---------- |
| `render` | `(buffer: OptimizedBuffer, deltaTime: number) => void` |

#### :gear: calculateLayout

| Method | Type |
| ---------- | ---------- |
| `calculateLayout` | `() => void` |

#### :gear: resize

| Method | Type |
| ---------- | ---------- |
| `resize` | `(width: number, height: number) => void` |

## :factory: DistortionEffect

### Methods

- [apply](#gear-apply)

#### :gear: apply

Applies the animated distortion/glitch effect to the buffer.

| Method | Type |
| ---------- | ---------- |
| `apply` | `(buffer: OptimizedBuffer, deltaTime: number) => void` |

### Properties

- [glitchChancePerSecond](#gear-glitchchancepersecond)
- [maxGlitchLines](#gear-maxglitchlines)
- [minGlitchDuration](#gear-minglitchduration)
- [maxGlitchDuration](#gear-maxglitchduration)
- [maxShiftAmount](#gear-maxshiftamount)
- [shiftFlipRatio](#gear-shiftflipratio)
- [colorGlitchChance](#gear-colorglitchchance)

#### :gear: glitchChancePerSecond

| Property | Type |
| ---------- | ---------- |
| `glitchChancePerSecond` | `number` |

#### :gear: maxGlitchLines

| Property | Type |
| ---------- | ---------- |
| `maxGlitchLines` | `number` |

#### :gear: minGlitchDuration

| Property | Type |
| ---------- | ---------- |
| `minGlitchDuration` | `number` |

#### :gear: maxGlitchDuration

| Property | Type |
| ---------- | ---------- |
| `maxGlitchDuration` | `number` |

#### :gear: maxShiftAmount

| Property | Type |
| ---------- | ---------- |
| `maxShiftAmount` | `number` |

#### :gear: shiftFlipRatio

| Property | Type |
| ---------- | ---------- |
| `shiftFlipRatio` | `number` |

#### :gear: colorGlitchChance

| Property | Type |
| ---------- | ---------- |
| `colorGlitchChance` | `number` |

## :factory: VignetteEffect

Applies a vignette effect by darkening the corners, optimized with precomputation.

### Methods

- [apply](#gear-apply)

#### :gear: apply

Applies the vignette effect using precomputed base attenuation and current strength.

| Method | Type |
| ---------- | ---------- |
| `apply` | `(buffer: OptimizedBuffer) => void` |

## :factory: BrightnessEffect

Adjusts the overall brightness of the buffer.

### Methods

- [apply](#gear-apply)

#### :gear: apply

Applies the brightness adjustment to the buffer.

| Method | Type |
| ---------- | ---------- |
| `apply` | `(buffer: OptimizedBuffer) => void` |

## :factory: BlurEffect

Applies a simple box blur. (Expensive and may look bad with text).

### Methods

- [apply](#gear-apply)

#### :gear: apply

Applies an optimized separable box blur using a moving average (sliding window).

| Method | Type |
| ---------- | ---------- |
| `apply` | `(buffer: OptimizedBuffer) => void` |

## :factory: BloomEffect

Applies a bloom effect based on bright areas (Simplified).

### Methods

- [apply](#gear-apply)

#### :gear: apply

| Method | Type |
| ---------- | ---------- |
| `apply` | `(buffer: OptimizedBuffer) => void` |

## :factory: Timeline

### Methods

- [addStateChangeListener](#gear-addstatechangelistener)
- [removeStateChangeListener](#gear-removestatechangelistener)
- [add](#gear-add)
- [once](#gear-once)
- [call](#gear-call)
- [sync](#gear-sync)
- [play](#gear-play)
- [pause](#gear-pause)
- [resetItems](#gear-resetitems)
- [restart](#gear-restart)
- [update](#gear-update)

#### :gear: addStateChangeListener

| Method | Type |
| ---------- | ---------- |
| `addStateChangeListener` | `(listener: (timeline: Timeline) => void) => void` |

#### :gear: removeStateChangeListener

| Method | Type |
| ---------- | ---------- |
| `removeStateChangeListener` | `(listener: (timeline: Timeline) => void) => void` |

#### :gear: add

Adds an animation to the timeline.

| Method | Type |
| ---------- | ---------- |
| `add` | `(target: any, properties: AnimationOptions, startTime?: string or number) => this` |

Parameters:

* `target`: - Object or array of objects to animate
* `properties`: - Animation configuration and target property values
* `startTime`: - Time offset in milliseconds when animation should start (default: 0)


Returns:

The timeline instance for method chaining

Examples:

```ts
const box = { x: 0, y: 0, opacity: 1 }
const timeline = createTimeline({ duration: 5000 })

// Animate position from current values to x=100, y=50
timeline.add(box, {
  x: 100,
  y: 50,
  duration: 2000,
  ease: "inOutQuad"
})

// Chain another animation starting at 1 second
timeline.add(box, {
  opacity: 0,
  duration: 1000,
  ease: "linear",
  onUpdate: (anim) => {
    console.log("Opacity:", box.opacity)
  }
}, 1000)

// Animate with looping
timeline.add(box, {
  x: 200,
  duration: 500,
  loop: 3,
  alternate: true
}, 3000)
```


#### :gear: once

| Method | Type |
| ---------- | ---------- |
| `once` | `(target: any, properties: AnimationOptions) => this` |

#### :gear: call

Schedules a callback to execute at a specific time in the timeline.

| Method | Type |
| ---------- | ---------- |
| `call` | `(callback: () => void, startTime?: string or number) => this` |

Parameters:

* `callback`: - Function to invoke
* `startTime`: - Time offset in milliseconds when callback should execute (default: 0)


Returns:

The timeline instance for method chaining

Examples:

```ts
const timeline = createTimeline({ duration: 5000 })

timeline.call(() => {
  console.log("Animation starting!")
}, 0)

timeline.add(box, { x: 100, duration: 2000 })

timeline.call(() => {
  console.log("Halfway through!")
}, 2500)

timeline.call(() => {
  console.log("Animation complete!")
}, 5000)
```


#### :gear: sync

Synchronizes a child timeline to start at a specific time in this timeline.

| Method | Type |
| ---------- | ---------- |
| `sync` | `(timeline: Timeline, startTime?: number) => this` |

Parameters:

* `timeline`: - Child timeline to synchronize
* `startTime`: - Time offset in milliseconds when child timeline should start (default: 0)


Returns:

The timeline instance for method chaining

Examples:

```ts
// Create main timeline
const mainTimeline = createTimeline({
  duration: 10000,
  loop: true
})

// Create sub-timeline for box animations
const boxTimeline = createTimeline({
  duration: 3000,
  autoplay: false
})
boxTimeline.add(box, { x: 100, duration: 3000 })

// Create sub-timeline for color animations
const colorTimeline = createTimeline({
  duration: 2000,
  autoplay: false
})
colorTimeline.add(colors, { red: 255, duration: 2000 })

// Sync both to main timeline at different times
mainTimeline.sync(boxTimeline, 0)      // Start immediately
mainTimeline.sync(colorTimeline, 5000) // Start at 5 seconds

mainTimeline.play()
```


#### :gear: play

Starts or resumes timeline playback.

| Method | Type |
| ---------- | ---------- |
| `play` | `() => this` |

Returns:

The timeline instance for method chaining

Examples:

```ts
const timeline = createTimeline({
  duration: 5000,
  autoplay: false
})

timeline.add(box, { x: 100, duration: 2000 })

// Start playback
timeline.play()

// In your render loop
renderer.setFrameCallback(async (deltaTime) => {
  timeline.update(deltaTime)
})
```


#### :gear: pause

Pauses timeline playback at the current position.

| Method | Type |
| ---------- | ---------- |
| `pause` | `() => this` |

Returns:

The timeline instance for method chaining

Examples:

```ts
timeline.play()

// Pause after 2 seconds
setTimeout(() => {
  timeline.pause()
}, 2000)

// Resume later
setTimeout(() => {
  timeline.play()
}, 5000)
```


#### :gear: resetItems

| Method | Type |
| ---------- | ---------- |
| `resetItems` | `() => void` |

#### :gear: restart

| Method | Type |
| ---------- | ---------- |
| `restart` | `() => this` |

#### :gear: update

| Method | Type |
| ---------- | ---------- |
| `update` | `(deltaTime: number) => void` |

### Properties

- [items](#gear-items)
- [subTimelines](#gear-subtimelines)
- [currentTime](#gear-currenttime)
- [isPlaying](#gear-isplaying)
- [isComplete](#gear-iscomplete)
- [duration](#gear-duration)
- [loop](#gear-loop)
- [synced](#gear-synced)

#### :gear: items

| Property | Type |
| ---------- | ---------- |
| `items` | `(TimelineAnimationItem or TimelineCallbackItem)[]` |

#### :gear: subTimelines

| Property | Type |
| ---------- | ---------- |
| `subTimelines` | `TimelineTimelineItem[]` |

#### :gear: currentTime

| Property | Type |
| ---------- | ---------- |
| `currentTime` | `number` |

#### :gear: isPlaying

| Property | Type |
| ---------- | ---------- |
| `isPlaying` | `boolean` |

#### :gear: isComplete

| Property | Type |
| ---------- | ---------- |
| `isComplete` | `boolean` |

#### :gear: duration

| Property | Type |
| ---------- | ---------- |
| `duration` | `number` |

#### :gear: loop

| Property | Type |
| ---------- | ---------- |
| `loop` | `boolean` |

#### :gear: synced

| Property | Type |
| ---------- | ---------- |
| `synced` | `boolean` |

## :factory: Selection

### Methods

- [updateSelectedRenderables](#gear-updateselectedrenderables)
- [updateTouchedRenderables](#gear-updatetouchedrenderables)
- [getSelectedText](#gear-getselectedtext)

#### :gear: updateSelectedRenderables

| Method | Type |
| ---------- | ---------- |
| `updateSelectedRenderables` | `(selectedRenderables: Renderable[]) => void` |

#### :gear: updateTouchedRenderables

| Method | Type |
| ---------- | ---------- |
| `updateTouchedRenderables` | `(touchedRenderables: Renderable[]) => void` |

#### :gear: getSelectedText

| Method | Type |
| ---------- | ---------- |
| `getSelectedText` | `() => string` |

## :factory: ASCIIFontSelectionHelper

### Methods

- [hasSelection](#gear-hasselection)
- [getSelection](#gear-getselection)
- [shouldStartSelection](#gear-shouldstartselection)
- [onLocalSelectionChanged](#gear-onlocalselectionchanged)

#### :gear: hasSelection

| Method | Type |
| ---------- | ---------- |
| `hasSelection` | `() => boolean` |

#### :gear: getSelection

| Method | Type |
| ---------- | ---------- |
| `getSelection` | `() => { start: number; end: number; } or null` |

#### :gear: shouldStartSelection

| Method | Type |
| ---------- | ---------- |
| `shouldStartSelection` | `(localX: number, localY: number, width: number, height: number) => boolean` |

#### :gear: onLocalSelectionChanged

| Method | Type |
| ---------- | ---------- |
| `onLocalSelectionChanged` | `(localSelection: LocalSelectionBounds or null, width: number, height: number) => boolean` |

## :factory: SyntaxStyle

### Static Methods

- [create](#gear-create)
- [fromTheme](#gear-fromtheme)
- [fromStyles](#gear-fromstyles)

#### :gear: create

| Method | Type |
| ---------- | ---------- |
| `create` | `() => SyntaxStyle` |

#### :gear: fromTheme

| Method | Type |
| ---------- | ---------- |
| `fromTheme` | `(theme: ThemeTokenStyle[]) => SyntaxStyle` |

#### :gear: fromStyles

| Method | Type |
| ---------- | ---------- |
| `fromStyles` | `(styles: Record<string, StyleDefinition>) => SyntaxStyle` |

### Methods

- [registerStyle](#gear-registerstyle)
- [resolveStyleId](#gear-resolvestyleid)
- [getStyleId](#gear-getstyleid)
- [getStyleCount](#gear-getstylecount)
- [clearNameCache](#gear-clearnamecache)
- [getStyle](#gear-getstyle)
- [mergeStyles](#gear-mergestyles)
- [clearCache](#gear-clearcache)
- [getCacheSize](#gear-getcachesize)
- [getAllStyles](#gear-getallstyles)
- [getRegisteredNames](#gear-getregisterednames)
- [destroy](#gear-destroy)

#### :gear: registerStyle

| Method | Type |
| ---------- | ---------- |
| `registerStyle` | `(name: string, style: StyleDefinition) => number` |

#### :gear: resolveStyleId

| Method | Type |
| ---------- | ---------- |
| `resolveStyleId` | `(name: string) => number or null` |

#### :gear: getStyleId

| Method | Type |
| ---------- | ---------- |
| `getStyleId` | `(name: string) => number or null` |

#### :gear: getStyleCount

| Method | Type |
| ---------- | ---------- |
| `getStyleCount` | `() => number` |

#### :gear: clearNameCache

| Method | Type |
| ---------- | ---------- |
| `clearNameCache` | `() => void` |

#### :gear: getStyle

| Method | Type |
| ---------- | ---------- |
| `getStyle` | `(name: string) => StyleDefinition or undefined` |

#### :gear: mergeStyles

| Method | Type |
| ---------- | ---------- |
| `mergeStyles` | `(...styleNames: string[]) => MergedStyle` |

#### :gear: clearCache

| Method | Type |
| ---------- | ---------- |
| `clearCache` | `() => void` |

#### :gear: getCacheSize

| Method | Type |
| ---------- | ---------- |
| `getCacheSize` | `() => number` |

#### :gear: getAllStyles

| Method | Type |
| ---------- | ---------- |
| `getAllStyles` | `() => Map<string, StyleDefinition>` |

#### :gear: getRegisteredNames

| Method | Type |
| ---------- | ---------- |
| `getRegisteredNames` | `() => string[]` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

## :factory: CLICanvas

### Methods

- [destroy](#gear-destroy)
- [setSuperSampleAlgorithm](#gear-setsupersamplealgorithm)
- [getSuperSampleAlgorithm](#gear-getsupersamplealgorithm)
- [getContext](#gear-getcontext)
- [setSize](#gear-setsize)
- [addEventListener](#gear-addeventlistener)
- [removeEventListener](#gear-removeeventlistener)
- [dispatchEvent](#gear-dispatchevent)
- [setSuperSample](#gear-setsupersample)
- [saveToFile](#gear-savetofile)

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

#### :gear: setSuperSampleAlgorithm

| Method | Type |
| ---------- | ---------- |
| `setSuperSampleAlgorithm` | `(superSampleAlgorithm: SuperSampleAlgorithm) => void` |

#### :gear: getSuperSampleAlgorithm

| Method | Type |
| ---------- | ---------- |
| `getSuperSampleAlgorithm` | `() => SuperSampleAlgorithm` |

#### :gear: getContext

| Method | Type |
| ---------- | ---------- |
| `getContext` | `(type: string, attrs?: WebGLContextAttributes or undefined) => GPUCanvasContextMock` |

#### :gear: setSize

| Method | Type |
| ---------- | ---------- |
| `setSize` | `(width: number, height: number) => void` |

#### :gear: addEventListener

| Method | Type |
| ---------- | ---------- |
| `addEventListener` | `(event: string, listener: any, options?: any) => void` |

#### :gear: removeEventListener

| Method | Type |
| ---------- | ---------- |
| `removeEventListener` | `(event: string, listener: any, options?: any) => void` |

#### :gear: dispatchEvent

| Method | Type |
| ---------- | ---------- |
| `dispatchEvent` | `(event: Event) => void` |

#### :gear: setSuperSample

| Method | Type |
| ---------- | ---------- |
| `setSuperSample` | `(superSample: SuperSampleType) => void` |

#### :gear: saveToFile

| Method | Type |
| ---------- | ---------- |
| `saveToFile` | `(filePath: string) => Promise<void>` |

### Properties

- [superSampleDrawTimeMs](#gear-supersampledrawtimems)
- [mapAsyncTimeMs](#gear-mapasynctimems)
- [superSample](#gear-supersample)

#### :gear: superSampleDrawTimeMs

| Property | Type |
| ---------- | ---------- |
| `superSampleDrawTimeMs` | `number` |

#### :gear: mapAsyncTimeMs

| Property | Type |
| ---------- | ---------- |
| `mapAsyncTimeMs` | `number` |

#### :gear: superSample

| Property | Type |
| ---------- | ---------- |
| `superSample` | `SuperSampleType` |

## :factory: ThreeCliRenderer

### Methods

- [toggleDebugStats](#gear-toggledebugstats)
- [getSuperSampleAlgorithm](#gear-getsupersamplealgorithm)
- [setSuperSampleAlgorithm](#gear-setsupersamplealgorithm)
- [saveToFile](#gear-savetofile)
- [setActiveCamera](#gear-setactivecamera)
- [getActiveCamera](#gear-getactivecamera)
- [setBackgroundColor](#gear-setbackgroundcolor)
- [setSize](#gear-setsize)
- [drawScene](#gear-drawscene)
- [toggleSuperSampling](#gear-togglesupersampling)
- [renderStats](#gear-renderstats)
- [destroy](#gear-destroy)

#### :gear: toggleDebugStats

| Method | Type |
| ---------- | ---------- |
| `toggleDebugStats` | `() => void` |

#### :gear: getSuperSampleAlgorithm

| Method | Type |
| ---------- | ---------- |
| `getSuperSampleAlgorithm` | `() => SuperSampleAlgorithm` |

#### :gear: setSuperSampleAlgorithm

| Method | Type |
| ---------- | ---------- |
| `setSuperSampleAlgorithm` | `(superSampleAlgorithm: SuperSampleAlgorithm) => void` |

#### :gear: saveToFile

| Method | Type |
| ---------- | ---------- |
| `saveToFile` | `(filePath: string) => Promise<void>` |

#### :gear: setActiveCamera

| Method | Type |
| ---------- | ---------- |
| `setActiveCamera` | `(camera: PerspectiveCamera or OrthographicCamera) => void` |

#### :gear: getActiveCamera

| Method | Type |
| ---------- | ---------- |
| `getActiveCamera` | `() => PerspectiveCamera or OrthographicCamera` |

#### :gear: setBackgroundColor

| Method | Type |
| ---------- | ---------- |
| `setBackgroundColor` | `(color: RGBA) => void` |

#### :gear: setSize

| Method | Type |
| ---------- | ---------- |
| `setSize` | `(width: number, height: number, forceUpdate?: boolean) => void` |

#### :gear: drawScene

| Method | Type |
| ---------- | ---------- |
| `drawScene` | `(root: Scene, buffer: OptimizedBuffer, deltaTime: number) => Promise<void>` |

#### :gear: toggleSuperSampling

| Method | Type |
| ---------- | ---------- |
| `toggleSuperSampling` | `() => void` |

#### :gear: renderStats

| Method | Type |
| ---------- | ---------- |
| `renderStats` | `(buffer: OptimizedBuffer) => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

## :factory: TextureUtils

### Static Methods

- [createCheckerboard](#gear-createcheckerboard)
- [createGradient](#gear-creategradient)
- [createNoise](#gear-createnoise)

#### :gear: createCheckerboard

Creates a THREE.Texture with a checkerboard pattern.

| Method | Type |
| ---------- | ---------- |
| `createCheckerboard` | `(size?: number, color1?: Color, color2?: Color, checkSize?: number) => Texture` |

#### :gear: createGradient

Creates a THREE.Texture with a gradient pattern.

| Method | Type |
| ---------- | ---------- |
| `createGradient` | `(size?: number, startColor?: Color, endColor?: Color, direction?: "vertical" or "horizontal" or "radial") => Texture` |

#### :gear: createNoise

Creates a THREE.Texture with a procedural noise pattern.

| Method | Type |
| ---------- | ---------- |
| `createNoise` | `(size?: number, scale?: number, octaves?: number, color1?: Color, color2?: Color) => Texture` |

## :factory: MeshPool

### Methods

- [acquireMesh](#gear-acquiremesh)
- [releaseMesh](#gear-releasemesh)
- [fill](#gear-fill)
- [clearPool](#gear-clearpool)
- [clearAllPools](#gear-clearallpools)

#### :gear: acquireMesh

| Method | Type |
| ---------- | ---------- |
| `acquireMesh` | `(poolId: string, options: MeshPoolOptions) => InstancedMesh<BufferGeometry<NormalBufferAttributes>, Material or Material[], InstancedMeshEventMap>` |

#### :gear: releaseMesh

| Method | Type |
| ---------- | ---------- |
| `releaseMesh` | `(poolId: string, mesh: InstancedMesh<BufferGeometry<NormalBufferAttributes>, Material or Material[], InstancedMeshEventMap>) => void` |

#### :gear: fill

| Method | Type |
| ---------- | ---------- |
| `fill` | `(poolId: string, options: MeshPoolOptions, count: number) => void` |

#### :gear: clearPool

| Method | Type |
| ---------- | ---------- |
| `clearPool` | `(poolId: string) => void` |

#### :gear: clearAllPools

| Method | Type |
| ---------- | ---------- |
| `clearAllPools` | `() => void` |

## :factory: InstanceManager

### Methods

- [acquireInstanceSlot](#gear-acquireinstanceslot)
- [releaseInstanceSlot](#gear-releaseinstanceslot)
- [getInstanceCount](#gear-getinstancecount)
- [getMaxInstances](#gear-getmaxinstances)
- [dispose](#gear-dispose)

#### :gear: acquireInstanceSlot

| Method | Type |
| ---------- | ---------- |
| `acquireInstanceSlot` | `() => number` |

#### :gear: releaseInstanceSlot

| Method | Type |
| ---------- | ---------- |
| `releaseInstanceSlot` | `(instanceIndex: number) => void` |

#### :gear: getInstanceCount

| Method | Type |
| ---------- | ---------- |
| `getInstanceCount` | `() => number` |

#### :gear: getMaxInstances

| Method | Type |
| ---------- | ---------- |
| `getMaxInstances` | `() => number` |

#### :gear: dispose

| Method | Type |
| ---------- | ---------- |
| `dispose` | `() => void` |

## :factory: SpriteResource

### Methods

- [createInstanceManager](#gear-createinstancemanager)
- [dispose](#gear-dispose)

#### :gear: createInstanceManager

| Method | Type |
| ---------- | ---------- |
| `createInstanceManager` | `(geometry: BufferGeometry<NormalBufferAttributes>, material: Material, options: InstanceManagerOptions) => InstanceManager` |

#### :gear: dispose

| Method | Type |
| ---------- | ---------- |
| `dispose` | `() => void` |

## :factory: SpriteResourceManager

### Methods

- [getOrCreateResource](#gear-getorcreateresource)
- [createResource](#gear-createresource)
- [clearCache](#gear-clearcache)

#### :gear: getOrCreateResource

| Method | Type |
| ---------- | ---------- |
| `getOrCreateResource` | `(texture: DataTexture, sheetProps: SheetProperties) => Promise<SpriteResource>` |

#### :gear: createResource

| Method | Type |
| ---------- | ---------- |
| `createResource` | `(config: ResourceConfig) => Promise<SpriteResource>` |

#### :gear: clearCache

| Method | Type |
| ---------- | ---------- |
| `clearCache` | `() => void` |

## :factory: SpriteParticleGenerator

### Methods

- [getActiveParticleCount](#gear-getactiveparticlecount)
- [spawnParticles](#gear-spawnparticles)
- [setAutoSpawn](#gear-setautospawn)
- [hasAutoSpawn](#gear-hasautospawn)
- [stopAutoSpawn](#gear-stopautospawn)
- [update](#gear-update)
- [dispose](#gear-dispose)

#### :gear: getActiveParticleCount

| Method | Type |
| ---------- | ---------- |
| `getActiveParticleCount` | `() => number` |

#### :gear: spawnParticles

| Method | Type |
| ---------- | ---------- |
| `spawnParticles` | `(count: number, overrides?: Partial<ParticleEffectParameters>) => Promise<void>` |

#### :gear: setAutoSpawn

| Method | Type |
| ---------- | ---------- |
| `setAutoSpawn` | `(ratePerSecond: number, autoSpawnParamOverrides?: Partial<ParticleEffectParameters>) => void` |

#### :gear: hasAutoSpawn

| Method | Type |
| ---------- | ---------- |
| `hasAutoSpawn` | `() => boolean` |

#### :gear: stopAutoSpawn

| Method | Type |
| ---------- | ---------- |
| `stopAutoSpawn` | `() => void` |

#### :gear: update

| Method | Type |
| ---------- | ---------- |
| `update` | `(deltaTimeMs: number) => Promise<void>` |

#### :gear: dispose

| Method | Type |
| ---------- | ---------- |
| `dispose` | `() => void` |

## :factory: TiledSprite

### Methods

- [setPosition](#gear-setposition)
- [setRotation](#gear-setrotation)
- [setScale](#gear-setscale)
- [getScale](#gear-getscale)
- [setTransform](#gear-settransform)
- [play](#gear-play)
- [stop](#gear-stop)
- [goToFrame](#gear-gotoframe)
- [setFrameDuration](#gear-setframeduration)
- [isPlaying](#gear-isplaying)
- [update](#gear-update)
- [destroy](#gear-destroy)
- [getCurrentAnimationName](#gear-getcurrentanimationname)
- [getWorldTransform](#gear-getworldtransform)
- [getWorldPlaneSize](#gear-getworldplanesize)

#### :gear: setPosition

| Method | Type |
| ---------- | ---------- |
| `setPosition` | `(position: Vector3) => void` |

#### :gear: setRotation

| Method | Type |
| ---------- | ---------- |
| `setRotation` | `(rotation: Quaternion) => void` |

#### :gear: setScale

| Method | Type |
| ---------- | ---------- |
| `setScale` | `(scale: Vector3) => void` |

#### :gear: getScale

| Method | Type |
| ---------- | ---------- |
| `getScale` | `() => Vector3` |

#### :gear: setTransform

| Method | Type |
| ---------- | ---------- |
| `setTransform` | `(position: Vector3, rotation: Quaternion, newScale: Vector3) => void` |

#### :gear: play

| Method | Type |
| ---------- | ---------- |
| `play` | `() => void` |

#### :gear: stop

| Method | Type |
| ---------- | ---------- |
| `stop` | `() => void` |

#### :gear: goToFrame

| Method | Type |
| ---------- | ---------- |
| `goToFrame` | `(frame: number) => void` |

#### :gear: setFrameDuration

| Method | Type |
| ---------- | ---------- |
| `setFrameDuration` | `(newFrameDuration: number) => void` |

#### :gear: isPlaying

| Method | Type |
| ---------- | ---------- |
| `isPlaying` | `() => boolean` |

#### :gear: update

| Method | Type |
| ---------- | ---------- |
| `update` | `(deltaTime: number) => void` |

#### :gear: destroy

| Method | Type |
| ---------- | ---------- |
| `destroy` | `() => void` |

#### :gear: getCurrentAnimationName

| Method | Type |
| ---------- | ---------- |
| `getCurrentAnimationName` | `() => string` |

#### :gear: getWorldTransform

| Method | Type |
| ---------- | ---------- |
| `getWorldTransform` | `() => Matrix4` |

#### :gear: getWorldPlaneSize

| Method | Type |
| ---------- | ---------- |
| `getWorldPlaneSize` | `() => Vector2` |

### Properties

- [id](#gear-id)

#### :gear: id

| Property | Type |
| ---------- | ---------- |
| `id` | `string` |

## :factory: SpriteAnimator

### Methods

- [update](#gear-update)
- [removeSprite](#gear-removesprite)
- [removeAllSprites](#gear-removeallsprites)

#### :gear: update

| Method | Type |
| ---------- | ---------- |
| `update` | `(deltaTime: number) => void` |

#### :gear: removeSprite

| Method | Type |
| ---------- | ---------- |
| `removeSprite` | `(id: string) => void` |

#### :gear: removeAllSprites

| Method | Type |
| ---------- | ---------- |
| `removeAllSprites` | `() => void` |

## :factory: PhysicsExplodingSpriteEffect

### Static Methods

- [getSharedMaterial](#gear-getsharedmaterial)

#### :gear: getSharedMaterial

| Method | Type |
| ---------- | ---------- |
| `getSharedMaterial` | `(texture: DataTexture, materialFactory: () => NodeMaterial) => NodeMaterial` |

### Methods

- [update](#gear-update)
- [dispose](#gear-dispose)

#### :gear: update

| Method | Type |
| ---------- | ---------- |
| `update` | `(deltaTimeMs: number) => void` |

#### :gear: dispose

| Method | Type |
| ---------- | ---------- |
| `dispose` | `() => void` |

### Properties

- [isActive](#gear-isactive)

#### :gear: isActive

| Property | Type |
| ---------- | ---------- |
| `isActive` | `boolean` |

## :factory: PhysicsExplosionManager

### Methods

- [fillPool](#gear-fillpool)
- [createExplosionForSprite](#gear-createexplosionforsprite)
- [update](#gear-update)
- [disposeAll](#gear-disposeall)

#### :gear: fillPool

| Method | Type |
| ---------- | ---------- |
| `fillPool` | `(resource: SpriteResource, count: number, params?: Partial<PhysicsExplosionEffectParameters>) => void` |

#### :gear: createExplosionForSprite

| Method | Type |
| ---------- | ---------- |
| `createExplosionForSprite` | `(spriteToExplode: TiledSprite, userParams?: Partial<PhysicsExplosionEffectParameters> or undefined) => Promise<PhysicsExplosionHandle or null>` |

#### :gear: update

| Method | Type |
| ---------- | ---------- |
| `update` | `(deltaTimeMs: number) => void` |

#### :gear: disposeAll

| Method | Type |
| ---------- | ---------- |
| `disposeAll` | `() => void` |

## :factory: ExplodingSpriteEffect

### Static Methods

- [_buildTemplateMaterial](#gear-_buildtemplatematerial)

#### :gear: _buildTemplateMaterial

| Method | Type |
| ---------- | ---------- |
| `_buildTemplateMaterial` | `(texture: DataTexture, params: ExplosionEffectParameters, materialFactory: () => NodeMaterial) => NodeMaterial` |

### Methods

- [update](#gear-update)
- [dispose](#gear-dispose)

#### :gear: update

| Method | Type |
| ---------- | ---------- |
| `update` | `(deltaTimeMs: number) => void` |

#### :gear: dispose

| Method | Type |
| ---------- | ---------- |
| `dispose` | `() => void` |

### Properties

- [isActive](#gear-isactive)

#### :gear: isActive

| Property | Type |
| ---------- | ---------- |
| `isActive` | `boolean` |

## :factory: ExplosionManager

### Methods

- [fillPool](#gear-fillpool)
- [createExplosionForSprite](#gear-createexplosionforsprite)
- [update](#gear-update)
- [disposeAll](#gear-disposeall)

#### :gear: fillPool

| Method | Type |
| ---------- | ---------- |
| `fillPool` | `(resource: SpriteResource, count: number, params?: Partial<ExplosionEffectParameters>) => void` |

#### :gear: createExplosionForSprite

| Method | Type |
| ---------- | ---------- |
| `createExplosionForSprite` | `(spriteToExplode: TiledSprite, userParams?: Partial<ExplosionEffectParameters> or undefined) => ExplosionHandle or null` |

#### :gear: update

| Method | Type |
| ---------- | ---------- |
| `update` | `(deltaTimeMs: number) => void` |

#### :gear: disposeAll

| Method | Type |
| ---------- | ---------- |
| `disposeAll` | `() => void` |

## :factory: SheetSprite

### Methods

- [setIndex](#gear-setindex)

#### :gear: setIndex

| Method | Type |
| ---------- | ---------- |
| `setIndex` | `(index: number) => void` |

## :factory: SpriteUtils

## :factory: RapierRigidBody

### Methods

- [applyImpulse](#gear-applyimpulse)
- [applyTorqueImpulse](#gear-applytorqueimpulse)
- [getTranslation](#gear-gettranslation)
- [getRotation](#gear-getrotation)

#### :gear: applyImpulse

| Method | Type |
| ---------- | ---------- |
| `applyImpulse` | `(force: PhysicsVector2) => void` |

#### :gear: applyTorqueImpulse

| Method | Type |
| ---------- | ---------- |
| `applyTorqueImpulse` | `(torque: number) => void` |

#### :gear: getTranslation

| Method | Type |
| ---------- | ---------- |
| `getTranslation` | `() => PhysicsVector2` |

#### :gear: getRotation

| Method | Type |
| ---------- | ---------- |
| `getRotation` | `() => number` |

## :factory: RapierPhysicsWorld

### Static Methods

- [createFromRapierWorld](#gear-createfromrapierworld)

#### :gear: createFromRapierWorld

| Method | Type |
| ---------- | ---------- |
| `createFromRapierWorld` | `(rapierWorld: World) => RapierPhysicsWorld` |

### Methods

- [createRigidBody](#gear-createrigidbody)
- [createCollider](#gear-createcollider)
- [removeRigidBody](#gear-removerigidbody)

#### :gear: createRigidBody

| Method | Type |
| ---------- | ---------- |
| `createRigidBody` | `(desc: PhysicsRigidBodyDesc) => PhysicsRigidBody` |

#### :gear: createCollider

| Method | Type |
| ---------- | ---------- |
| `createCollider` | `(colliderDesc: PhysicsColliderDesc, rigidBody: PhysicsRigidBody) => void` |

#### :gear: removeRigidBody

| Method | Type |
| ---------- | ---------- |
| `removeRigidBody` | `(rigidBody: PhysicsRigidBody) => void` |

## :factory: PlanckRigidBody

### Methods

- [applyImpulse](#gear-applyimpulse)
- [applyTorqueImpulse](#gear-applytorqueimpulse)
- [getTranslation](#gear-gettranslation)
- [getRotation](#gear-getrotation)

#### :gear: applyImpulse

| Method | Type |
| ---------- | ---------- |
| `applyImpulse` | `(force: PhysicsVector2) => void` |

#### :gear: applyTorqueImpulse

| Method | Type |
| ---------- | ---------- |
| `applyTorqueImpulse` | `(torque: number) => void` |

#### :gear: getTranslation

| Method | Type |
| ---------- | ---------- |
| `getTranslation` | `() => PhysicsVector2` |

#### :gear: getRotation

| Method | Type |
| ---------- | ---------- |
| `getRotation` | `() => number` |

## :factory: PlanckPhysicsWorld

### Static Methods

- [createFromPlanckWorld](#gear-createfromplanckworld)

#### :gear: createFromPlanckWorld

| Method | Type |
| ---------- | ---------- |
| `createFromPlanckWorld` | `(planckWorld: World) => PlanckPhysicsWorld` |

### Methods

- [createRigidBody](#gear-createrigidbody)
- [createCollider](#gear-createcollider)
- [removeRigidBody](#gear-removerigidbody)

#### :gear: createRigidBody

| Method | Type |
| ---------- | ---------- |
| `createRigidBody` | `(desc: PhysicsRigidBodyDesc) => PhysicsRigidBody` |

#### :gear: createCollider

| Method | Type |
| ---------- | ---------- |
| `createCollider` | `(colliderDesc: PhysicsColliderDesc, rigidBody: PhysicsRigidBody) => void` |

#### :gear: removeRigidBody

| Method | Type |
| ---------- | ---------- |
| `removeRigidBody` | `(rigidBody: PhysicsRigidBody) => void` |

## :factory: MockTreeSitterClient

### Methods

- [setMockResult](#gear-setmockresult)
- [resolveHighlightOnce](#gear-resolvehighlightonce)
- [resolveAllHighlightOnce](#gear-resolveallhighlightonce)
- [isHighlighting](#gear-ishighlighting)

#### :gear: setMockResult

| Method | Type |
| ---------- | ---------- |
| `setMockResult` | `(result: { highlights?: SimpleHighlight[] or undefined; warning?: string or undefined; error?: string or undefined; }) => void` |

#### :gear: resolveHighlightOnce

| Method | Type |
| ---------- | ---------- |
| `resolveHighlightOnce` | `(index?: number) => void` |

#### :gear: resolveAllHighlightOnce

| Method | Type |
| ---------- | ---------- |
| `resolveAllHighlightOnce` | `() => void` |

#### :gear: isHighlighting

| Method | Type |
| ---------- | ---------- |
| `isHighlighting` | `() => boolean` |

## :factory: SpanRenderable

Renderable class for the `<span>` element.

Represents an inline text node that can be nested within text elements
to apply custom styling or attributes to portions of text.

Examples:

```tsx
<text>
  Regular text <span fg="red">colored text</span> more text
</text>
```


## :factory: BoldSpanRenderable

Renderable class for `<b>` and `<strong>` elements.

Renders text with bold formatting. Both HTML-style tags are supported
and produce identical results.

Examples:

```tsx
<text>
  This is <b>bold text</b> and <strong>also bold</strong>
</text>
```


## :factory: ItalicSpanRenderable

Renderable class for `<i>` and `<em>` elements.

Renders text with italic formatting. Both HTML-style tags are supported
and produce identical results.

Examples:

```tsx
<text>
  This is <i>italic text</i> and <em>also italic</em>
</text>
```


## :factory: UnderlineSpanRenderable

Renderable class for the `<u>` element.

Renders text with underline formatting.

Examples:

```tsx
<text>
  This is <u>underlined text</u>
</text>
```


## :factory: LineBreakRenderable

Renderable class for the `<br>` element.

Inserts a line break in text content. This is particularly useful for
creating multi-line text within a single text element.

Examples:

```tsx
<text>
  First line<br />
  Second line<br />
  Third line
</text>
```


### Methods

- [add](#gear-add)

#### :gear: add

Adds a child to this text node.

| Method | Type |
| ---------- | ---------- |
| `add` | `() => number` |

## :factory: ErrorBoundary

### Static Methods

- [getDerivedStateFromError](#gear-getderivedstatefromerror)

#### :gear: getDerivedStateFromError

| Method | Type |
| ---------- | ---------- |
| `getDerivedStateFromError` | `(error: Error) => { hasError: boolean; error: Error; }` |

## :nut_and_bolt: Enum

- [InputRenderableEvents](#gear-inputrenderableevents)
- [ConsolePosition](#gear-consoleposition)
- [MouseButton](#gear-mousebutton)
- [CliRenderEvents](#gear-clirenderevents)
- [RendererControlState](#gear-renderercontrolstate)
- [SelectRenderableEvents](#gear-selectrenderableevents)
- [TabSelectRenderableEvents](#gear-tabselectrenderableevents)
- [LayoutEvents](#gear-layoutevents)
- [RenderableEvents](#gear-renderableevents)
- [DebugOverlayCorner](#gear-debugoverlaycorner)
- [LogLevel](#gear-loglevel)
- [SuperSampleAlgorithm](#gear-supersamplealgorithm)
- [SuperSampleType](#gear-supersampletype)

### :gear: InputRenderableEvents

Events emitted by InputRenderable.

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `INPUT` | `"input"` | Fired on every character change |
| `CHANGE` | `"change"` | Fired when the value changes and input loses focus |
| `ENTER` | `"enter"` | Fired when Enter key is pressed |


### :gear: ConsolePosition



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `TOP` | `"top"` |  |
| `BOTTOM` | `"bottom"` |  |
| `LEFT` | `"left"` |  |
| `RIGHT` | `"right"` |  |


### :gear: MouseButton



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `LEFT` | `0` |  |
| `MIDDLE` | `1` |  |
| `RIGHT` | `2` |  |
| `WHEEL_UP` | `4` |  |
| `WHEEL_DOWN` | `5` |  |


### :gear: CliRenderEvents



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `DEBUG_OVERLAY_TOGGLE` | `"debugOverlay:toggle"` |  |
| `DESTROY` | `"destroy"` |  |


### :gear: RendererControlState



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `IDLE` | `"idle"` |  |
| `AUTO_STARTED` | `"auto_started"` |  |
| `EXPLICIT_STARTED` | `"explicit_started"` |  |
| `EXPLICIT_PAUSED` | `"explicit_paused"` |  |
| `EXPLICIT_SUSPENDED` | `"explicit_suspended"` |  |
| `EXPLICIT_STOPPED` | `"explicit_stopped"` |  |


### :gear: SelectRenderableEvents

Events emitted by {@link SelectRenderable}.

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `SELECTION_CHANGED` | `"selectionChanged"` | Fired when selection changes |
| `ITEM_SELECTED` | `"itemSelected"` | Fired when an item is selected (Enter pressed) |


### :gear: TabSelectRenderableEvents

Events emitted by {@link TabSelectRenderable}.

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `SELECTION_CHANGED` | `"selectionChanged"` | Fired when selection changes |
| `ITEM_SELECTED` | `"itemSelected"` | Fired when a tab is selected (Enter pressed) |


### :gear: LayoutEvents

Events emitted by renderables related to layout changes.

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `LAYOUT_CHANGED` | `"layout-changed"` | Fired when the layout has been recalculated |
| `ADDED` | `"added"` | Fired when a child is added to the renderable |
| `REMOVED` | `"removed"` | Fired when a child is removed from the renderable |
| `RESIZED` | `"resized"` | Fired when the renderable's size changes |


### :gear: RenderableEvents

Events emitted by renderables related to focus state changes.

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `FOCUSED` | `"focused"` | Fired when the renderable gains focus |
| `BLURRED` | `"blurred"` | Fired when the renderable loses focus |


### :gear: DebugOverlayCorner



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `topLeft` | `0` |  |
| `topRight` | `1` |  |
| `bottomLeft` | `2` |  |
| `bottomRight` | `3` |  |


### :gear: LogLevel



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `Error` | `0` |  |
| `Warn` | `1` |  |
| `Info` | `2` |  |
| `Debug` | `3` |  |


### :gear: SuperSampleAlgorithm



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `STANDARD` | `0` |  |
| `PRE_SQUEEZED` | `1` |  |


### :gear: SuperSampleType



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `NONE` | `"none"` |  |
| `GPU` | `"gpu"` |  |
| `CPU` | `"cpu"` |  |

