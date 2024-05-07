import test from 'ava';

import { parse } from '../lib/parse.cjs';

test('types', (t) => {
  t.deepEqual(parse('extra'), parse({ from: 'extra' }));
  t.deepEqual(parse('assets/js'), parse(['assets/js']));
  t.deepEqual(parse('assets/css'), parse([{ from: 'assets/css' }]));
  t.deepEqual(parse(['css', { from: 'js' }]), parse([{ from: 'css' }, 'js']));
});

test('single', (t) => {
  t.snapshot(parse('static'));
});

test('multiple', (t) => {
  t.snapshot(
    parse([
      'static',
      {
        from: 'extra',
        noErrorOnMissing: true,
        globOptions: {
          dot: false,
        },
      },
    ]),
  );
});

test('hashabng', (t) => {
  t.snapshot(
    parse({
      from: 'cli.mjs',
      hashbang: true,
    }),
  );
});
