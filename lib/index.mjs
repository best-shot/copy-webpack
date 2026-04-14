// eslint-disable-next-line import-x/default
import CopyPlugin from 'copy-webpack-plugin';
import { parse } from './parse.mjs';
import { validate } from './schema.mjs';

export class CopyWebpack {
  constructor(options = []) {
    validate(options);
    this.options = options;
  }

  apply(compiler) {
    const plugin = new CopyPlugin({
      patterns: parse(this.options),
    });
    plugin.apply(compiler);
  }
}
