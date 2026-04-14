import CopyPlugin from 'copy-webpack-plugin';
import { parse } from './parse.mts';
import { validate } from './schema.mts';

import type { Compiler } from 'webpack';
import type { Configs } from './parse.mts';

export class CopyWebpack {
  options: Configs;

  constructor(options: Configs = []) {
    validate(options);
    this.options = options;
  }

  apply(compiler: Compiler) {
    const plugin = new CopyPlugin({
      patterns: parse(this.options),
    });
    plugin.apply(compiler);
  }
}
