// @flow strict

import fetch from 'node-fetch';
import type { GitHubRelease } from '../../types/flow/GitHubRelease';

export default (): Promise<GitHubRelease[]> => (
  fetch('https://api.github.com/repos/CircleCI-Public/circleci-cli/releases')
    .then(res => res.json())
);
