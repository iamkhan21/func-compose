# func-compose

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

This is my package description.

## Usage

Install package:

```sh
# npm
npm install func-compose

# yarn
yarn add func-compose

# pnpm
pnpm install func-compose
```

Import:

```js
// ESM
import { compose } from "func-compose";

// CommonJS
const { compose } = require("func-compose");

function addOne(x) {
  return x + 1;
}

function multiplyByTwo(x) {
  return x * 2;
}

const result = compose(addOne, multiplyByTwo)(2); // 5
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/func-compose?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/func-compose
[npm-downloads-src]: https://img.shields.io/npm/dm/func-compose?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/func-compose
[codecov-src]: https://img.shields.io/codecov/c/gh/iamkhan21/func-compose/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/iamkhan21/func-compose
[bundle-src]: https://img.shields.io/bundlephobia/minzip/func-compose?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=func-compose
[license-src]: https://img.shields.io/github/license/iamkhan21/func-compose.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/iamkhan21/func-compose/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/func-compose
