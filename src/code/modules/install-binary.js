// @flow

import decompress from 'decompress';
import { move as fsExtraMove, outputFile as fsExtraOutputFile, remove as fsExtraRemove } from 'fs-extra';
import fetch from 'node-fetch';
import { join as pathJoin } from 'path';
import { directory as tempyDirectory } from 'tempy';
import { uname } from 'node-uname';
import fetchReleases from './fetch-releases';

type Options = { dir: string, version: string };

export default (opts: Options) => {
  const { dir, version } = opts;
  const sysname = uname().sysname.toLowerCase();

  return fetchReleases()
    .then((releases) => {
      const targetRelease = releases.find(release => release.tag_name === `v${version}`);
      if (!targetRelease) throw new Error(`circleci bin v${version} not found`);

      const targetAsset = targetRelease.assets.find(asset => asset.name.includes(sysname));
      if (!targetAsset) throw new Error(`circleci bin for ${sysname} not found`);

      const tmpDir = tempyDirectory();
      const zipPath = pathJoin(tmpDir, targetAsset.name);
      const srcDir = pathJoin(tmpDir, 'circleci');
      const srcPath = pathJoin(srcDir, 'circleci');
      const distPath = pathJoin(dir, '.bin/circleci');

      return fetch(targetAsset.browser_download_url)
        .then(res => res.buffer())
        .then(buf => fsExtraOutputFile(zipPath, buf))
        .then(() => decompress(zipPath, srcDir, { strip: 1 }))
        .then(() => fsExtraMove(srcPath, distPath, { overwrite: true }))
        .then(() => fsExtraRemove(tmpDir));
    });
};
