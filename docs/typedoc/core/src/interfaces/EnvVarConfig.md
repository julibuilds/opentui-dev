[**opentui-dev**](../../../README.md)

***

[opentui-dev](../../../README.md) / [core/src](../README.md) / EnvVarConfig

# Interface: EnvVarConfig

Environment variable registry

Usage:
```ts
import { registerEnvVar, env } from "./lib/env.ts";

// Register environment variables
registerEnvVar({
  name: "DEBUG",
  description: "Enable debug logging",
  type: "boolean",
  default: false
});

registerEnvVar({
  name: "PORT",
  description: "Server port number",
  type: "number",
  default: 3000
});

// Access environment variables
if (env.DEBUG) {
  console.log("Debug mode enabled");
}

const port = env.PORT; // number
```

## Properties

### default?

> `optional` **default**: `string` \| `number` \| `boolean`

***

### description

> **description**: `string`

***

### name

> **name**: `string`

***

### type?

> `optional` **type**: `"string"` \| `"number"` \| `"boolean"`
