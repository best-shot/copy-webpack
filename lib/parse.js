const deepmerge = require('deepmerge');

function toArray(config) {
  return Array.isArray(config) ? config : [config];
}

function stringOrObject(from) {
  return typeof from === 'string' ? { from } : from;
}

function baseConfig(cache) {
  return {
    cacheTransform: cache,
    globOptions: {
      dot: true,
      // TODO: https://github.com/sindresorhus/globby/issues/145
      // gitignore: true,
      ignore: ['.gitkeep'],
    },
  };
}

function parse({ cache = false, options }) {
  return toArray(options).map((from) =>
    deepmerge(baseConfig(cache), stringOrObject(from)),
  );
}

module.exports = { parse };
