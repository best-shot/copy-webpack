'use strict';

import CopyPlugin from 'copy-webpack-plugin';
import { parse } from './lib/parse.cjs';
import { validate } from './lib/schema.cjs';

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
