import deepmerge from 'deepmerge';

function toArray(config) {
  return Array.isArray(config) ? config : [config];
}

function stringOrObject(from) {
  return typeof from === 'string'
    ? {
        from,
      }
    : from;
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

const globOptions = {
  dot: true,
  gitignore: true,
  ignore,
};

export function parse(options) {
  return toArray(options).map((from) =>
    deepmerge(
      {
        globOptions,
      },
      stringOrObject(from),
    ),
  );
}
