# Snapshot report for `test/parse.mjs`

The actual snapshot is saved in `parse.mjs.snap`.

Generated by [AVA](https://avajs.dev).

## single

> Snapshot 1

    [
      {
        from: 'static',
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: [
            '**/.{cache,git,svn,ssh,yarn}/**',
            '**/.{npm,yarn}rc',
            '**/.env.*',
            '**/.env',
            '**/.git{keep,ignore}',
            '**/*.{pem,ppk}',
            '**/id_{d,r}sa',
            '**/ssh*config',
            '**/sshd*config',
          ],
        },
      },
    ]

## multiple

> Snapshot 1

    [
      {
        from: 'static',
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: [
            '**/.{cache,git,svn,ssh,yarn}/**',
            '**/.{npm,yarn}rc',
            '**/.env.*',
            '**/.env',
            '**/.git{keep,ignore}',
            '**/*.{pem,ppk}',
            '**/id_{d,r}sa',
            '**/ssh*config',
            '**/sshd*config',
          ],
        },
      },
      {
        from: 'extra',
        globOptions: {
          dot: false,
          gitignore: true,
          ignore: [
            '**/.{cache,git,svn,ssh,yarn}/**',
            '**/.{npm,yarn}rc',
            '**/.env.*',
            '**/.env',
            '**/.git{keep,ignore}',
            '**/*.{pem,ppk}',
            '**/id_{d,r}sa',
            '**/ssh*config',
            '**/sshd*config',
          ],
        },
        noErrorOnMissing: true,
      },
    ]

## hashabng

> Snapshot 1

    [
      {
        from: 'cli.mjs',
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: [
            '**/.{cache,git,svn,ssh,yarn}/**',
            '**/.{npm,yarn}rc',
            '**/.env.*',
            '**/.env',
            '**/.git{keep,ignore}',
            '**/*.{pem,ppk}',
            '**/id_{d,r}sa',
            '**/ssh*config',
            '**/sshd*config',
          ],
        },
        hashbang: true,
        transform: Function transform {},
      },
    ]
