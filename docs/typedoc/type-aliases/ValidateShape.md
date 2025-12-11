[**@opentui/core**](../README.md)

***

[@opentui/core](../README.md) / ValidateShape

# Type Alias: ValidateShape\<Given, AllowedKeys\>

> **ValidateShape**\<`Given`, `AllowedKeys`\> = `{ [K in keyof Given]: K extends keyof AllowedKeys ? NonNullable<Given[K]> : never }`

## Type Parameters

### Given

`Given`

### AllowedKeys

`AllowedKeys`
