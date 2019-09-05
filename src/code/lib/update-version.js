// @flow strict

import { outputFile as fsExtraOutputFile } from 'fs-extra';
import { join as pathJoin } from 'path';
import fetchReleases from './fetch-releases';

type Options = {| dir: string |};

export default async (opts: Options) => {
  const releases = await fetchReleases();
  const latestRelease = releases[0];
  const latestReleaseVersion = latestRelease.tag_name.substring(1);
  const versionCode = `// @flow strict\n\nexport default '${latestReleaseVersion}';\n`;
  const versionPath = pathJoin(opts.dir, 'version.js');
  return fsExtraOutputFile(versionPath, versionCode);
};
