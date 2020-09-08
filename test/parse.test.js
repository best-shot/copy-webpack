const test = require('ava');

const { parse } = require('../lib/parse');

test('types', (t) => {
  t.deepEqual(
    parse({ options: 'extra' }),
    parse({ options: { from: 'extra' } }),
  );
  t.deepEqual(
    parse({ options: 'assets/js' }),
    parse({ options: ['assets/js'] }),
  );
  t.deepEqual(
    parse({ options: 'assets/css' }),
    parse({ options: [{ from: 'assets/css' }] }),
  );
  t.deepEqual(
    parse({ options: ['css', { from: 'js' }] }),
    parse({ options: [{ from: 'css' }, 'js'] }),
  );
});

test('single', (t) => {
  t.deepEqual(parse({ options: 'static', cache: true }), [
    {
      cacheTransform: true,
      from: 'static',
      globOptions: {
        dot: true,
        ignore: ['.gitkeep'],
      },
    },
  ]);
});

test('multiple', (t) => {
  t.deepEqual(
    parse({
      options: [
        'static',
        {
          from: 'extra',
          noErrorOnMissing: true,
          globOptions: {
            dot: false,
          },
        },
      ],
    }),
    [
      {
        cacheTransform: false,
        from: 'static',
        globOptions: {
          dot: true,
          ignore: ['.gitkeep'],
        },
      },
      {
        cacheTransform: false,
        from: 'extra',
        noErrorOnMissing: true,
        globOptions: {
          dot: false,
          ignore: ['.gitkeep'],
        },
      },
    ],
  );
});
