import { execSync } from 'node:child_process';

import { escapePath } from 'tinyglobby';

export function readGitignorePatterns(cwd: string): string[] {
  return execSync(
    'git ls-files --others --ignored --exclude-standard --directory',
    { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
  )
    .split('\n')
    .filter(Boolean)
    .map((p) => escapePath(p));
}
