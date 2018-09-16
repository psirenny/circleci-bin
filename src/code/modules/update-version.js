// @flow

import { outputFile as fsExtraOutputFile } from 'fs-extra';
import { join as pathJoin } from 'path';
import fetchReleases from './fetch-releases';

type Options = { dir: string };

export default (opts: Options) => fetchReleases()
  .then((releases) => {
    const release = releases[0];
    const releaseVersion = release.tag_name.substring(1);
    const code = `// @flow\n\nexport default '${releaseVersion}';\n`;
    const codePath = pathJoin(opts.dir, 'circleci-version.js');
    return fsExtraOutputFile(codePath, code);
  });
