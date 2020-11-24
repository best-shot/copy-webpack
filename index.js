const CopyPlugin = require('copy-webpack-plugin');

const { parse } = require('./lib/parse');
const { validate } = require('./lib/schema');

class CopyWebpack {
  constructor(options = []) {
    validate(options);
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
