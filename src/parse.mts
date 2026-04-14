import type { ObjectPattern, Pattern } from 'copy-webpack-plugin';

import deepmerge from 'deepmerge';
import { readGitignorePatterns } from './ignore.mts';

export type Configs = Pattern | Pattern[];

function toArray(config: Configs): Pattern[] {
  return Array.isArray(config) ? config : [config];
}

function stringOrObject(from: Pattern): ObjectPattern {
  return typeof from === 'string' ? { from } : from;
}

const ignore = [
  '**/.{cache,git,svn,ssh,yarn}/**',
  '**/.{npm,yarn}rc',
  '**/.env.*',
  '**/.env',
  '**/.git{keep,ignore}',
  '**/*.{pem,ppk}',
  '**/id_{d,r}sa',
  '**/ssh*config',
  '**/sshd*config',
];

export function parse(options: Configs, cwd = process.cwd()): Pattern[] {
  const globOptions: ObjectPattern['globOptions'] = {
    dot: true,
    ignore: [...ignore, ...readGitignorePatterns(cwd)],
  };
  return toArray(options).map((from) =>
    deepmerge({ globOptions } as ObjectPattern, stringOrObject(from)),
  );
}
