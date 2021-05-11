# esm-cjs-cli-template

Boilerplate template for hybrid ESM/CJS modules with CLI support.

## Programmatic Usage (ESM)

```js
import { something } from "something";
something();
```

## Programmatic Usage (CJS)

```js
const something = require("something").default;
something();
```

## Command Line Usage

Install with:

```bash
npm install -g something
```

Run the script:

```bash
something --help
```
