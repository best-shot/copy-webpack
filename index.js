const CopyPlugin = require('copy-webpack-plugin');

const { parse } = require('./lib/parse');
const { validator } = require('./lib/schema');

class CopyWebpack {
  constructor(options = []) {
    validator(options);
    this.options = options;
  }

  apply(compiler) {
    const plugin = new CopyPlugin({
      patterns: parse({
        cache: compiler.options.cache || false,
        options: this.options,
      }),
    });

    plugin.apply(compiler);
  }
}

module.exports = { CopyWebpack };
