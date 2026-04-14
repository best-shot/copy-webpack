import type { Schema } from 'copy-webpack-plugin';
import { validate as validateBase } from 'schema-utils';
import type { Configs } from './parse.mts';

const from = {
  type: 'string' as const,
  minLength: 1,
};

const oneOf = [
  from,
  {
    type: 'object' as const,
    required: ['from'],
    properties: {
      from,
      hashbang: {
        type: 'boolean' as const,
      },
    },
  },
];

export const schema: Schema = {
  oneOf: [
    ...oneOf,
    {
      items: {
        oneOf,
      },
      type: 'array' as const,
      uniqueItems: true,
      minItems: 1,
    },
  ],
};

export function validate(options: Configs) {
  validateBase(schema, options as object, {
    name: 'CopyWebpack',
  });
}
