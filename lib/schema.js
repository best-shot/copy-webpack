const validateOptions = require('schema-utils');

const from = {
  type: 'string',
  minLength: 1,
};

const oneOf = [
  from,
  {
    type: 'object',
    required: ['from'],
    properties: { from },
  },
];

const schema = {
  oneOf: [
    ...oneOf,
    {
      items: { oneOf },
      type: 'array',
      uniqueItems: true,
      minItems: 1,
    },
  ],
};

function validator(options) {
  validateOptions(schema, options, {
    name: 'CopyWebpack',
  });
}

module.exports = { schema, validator };
