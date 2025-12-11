[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / TerminalPalette

# Class: TerminalPalette

## Implements

- [`TerminalPaletteDetector`](../interfaces/TerminalPaletteDetector.md)

## Constructors

### Constructor

> **new TerminalPalette**(`stdin`, `stdout`, `writeFn?`, `isLegacyTmux?`): `TerminalPalette`

#### Parameters

##### stdin

`ReadStream`

##### stdout

`WriteStream`

##### writeFn?

[`WriteFunction`](../type-aliases/WriteFunction.md)

##### isLegacyTmux?

`boolean`

#### Returns

`TerminalPalette`

## Methods

### cleanup()

> **cleanup**(): `void`

#### Returns

`void`

#### Implementation of

[`TerminalPaletteDetector`](../interfaces/TerminalPaletteDetector.md).[`cleanup`](../interfaces/TerminalPaletteDetector.md#cleanup)

***

### detect()

> **detect**(`options?`): `Promise`\<[`TerminalColors`](../interfaces/TerminalColors.md)\>

#### Parameters

##### options?

[`GetPaletteOptions`](../interfaces/GetPaletteOptions.md)

#### Returns

`Promise`\<[`TerminalColors`](../interfaces/TerminalColors.md)\>

#### Implementation of

[`TerminalPaletteDetector`](../interfaces/TerminalPaletteDetector.md).[`detect`](../interfaces/TerminalPaletteDetector.md#detect)

***

### detectOSCSupport()

> **detectOSCSupport**(`timeoutMs`): `Promise`\<`boolean`\>

#### Parameters

##### timeoutMs

`number` = `300`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`TerminalPaletteDetector`](../interfaces/TerminalPaletteDetector.md).[`detectOSCSupport`](../interfaces/TerminalPaletteDetector.md#detectoscsupport)
