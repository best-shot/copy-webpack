import test from 'ava';

import { parse } from '../lib/parse.cjs';

test('types', (t) => {
  t.deepEqual(parse('extra'), parse({ from: 'extra' }));
  t.deepEqual(parse('assets/js'), parse(['assets/js']));
  t.deepEqual(parse('assets/css'), parse([{ from: 'assets/css' }]));
  t.deepEqual(parse(['css', { from: 'js' }]), parse([{ from: 'css' }, 'js']));
});

test('single', (t) => {
  t.deepEqual(parse('static'), [
    {
      from: 'static',
      globOptions: {
        dot: true,
        gitignore: true,
        ignore: ['.gitkeep', '.{cache,git,svn}/**'],
      },
    },
  ]);
});

test('multiple', (t) => {
  t.deepEqual(
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
    [
      {
        from: 'static',
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: ['.gitkeep', '.{cache,git,svn}/**'],
        },
      },
      {
        from: 'extra',
        noErrorOnMissing: true,
        globOptions: {
          dot: false,
          gitignore: true,
          ignore: ['.gitkeep', '.{cache,git,svn}/**'],
        },
      },
    ],
  );
});
