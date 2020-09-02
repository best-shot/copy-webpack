# copy-webpack

A simple [copy-webpack-plugin].

[![npm][npm-badge]][npm-url]
[![license][license-badge]][github-url]
![node][node-badge]
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbest-shot%2Fcopy-webpack.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbest-shot%2Fcopy-webpack?ref=badge_shield)

## Installation

```bash
npm install copy-webpack --save-dev
```

## Usage

```js
// example: webpack.config.js
const { CopyWebpack } = require('copy-webpack');

module.exports = {
  plugins: [new CopyWebpack('static')]
};
```

## Options

Glob or path from where we copy files.

`string` `object` `[string|object]`

```diff
- new CopyWebpackPlugin({
-   patterns: [
-     {
-       from: 'static',
-       cacheTransform: compiler.options.cache,
-       globOptions: {
-         dot: true,
-         gitignore: true,
-         ignore: ['.gitkeep']
-       }
-     }
-   ]
- });
+ new CopyWebpack('static');
```

```diff
- new CopyWebpackPlugin({
-   patterns: [
-     {
-       from: 'extra',
-       cacheTransform: compiler.options.cache,
-       noErrorOnMissing: true,
-       globOptions: {
-         dot: true,
-         gitignore: true,
-         ignore: ['.gitkeep']
-       }
-     }
-   ]
- });
+ new CopyWebpack([
+   {
+     from: 'extra',
+     noErrorOnMissing: true
+   }
+ ]);
```

[copy-webpack-plugin]: https://github.com/webpack-contrib/copy-webpack-plugin
[npm-url]: https://www.npmjs.com/package/copy-webpack
[npm-badge]: https://img.shields.io/npm/v/copy-webpack.svg?style=flat-square&logo=npm
[github-url]: https://github.com/best-shot/copy-webpack
[node-badge]: https://img.shields.io/node/v/copy-webpack.svg?style=flat-square&colorB=green&logo=node.js
[license-badge]: https://img.shields.io/npm/l/copy-webpack.svg?style=flat-square&colorB=blue&logo=github


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbest-shot%2Fcopy-webpack.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbest-shot%2Fcopy-webpack?ref=badge_large)