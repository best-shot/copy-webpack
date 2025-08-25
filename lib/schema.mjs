'use strict';

import { validate as validateBase } from 'schema-utils';

const from = {
  type: 'string',
  minLength: 1,
};

const oneOf = [
  from,
  {
    type: 'object',
    required: ['from'],
    properties: {
      from,
      hashbang: {
        type: 'boolean',
      },
    },
  },
];

export const schema = {
  oneOf: [
    ...oneOf,
    {
      items: {
        oneOf,
      },
      type: 'array',
      uniqueItems: true,
      minItems: 1,
    },
  ],
};

export function validate(options) {
  validateBase(schema, options, {
    name: 'CopyWebpack',
  });
}
