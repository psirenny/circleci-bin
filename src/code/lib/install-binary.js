// @flow strict

import decompress from 'decompress';
import { move as fsExtraMove, outputFile as fsExtraOutputFile, remove as fsExtraRemove } from 'fs-extra';
import fetch from 'node-fetch';
import { join as pathJoin } from 'path';
import { directory as tempyDir } from 'tempy';
import { platform as osPlatform } from 'os';
import getBinaryPath from './get-binary-path';

type Options = {|
  dir: string,
  version: string,
|};

export default (opts: Options) => {
  const { dir, version } = opts;
  const binPath = getBinaryPath({ dir, version });
  const downloadName = `circleci-cli_${version}_${osPlatform()}_amd64.tar.gz`;
  const downloadUrl = `https://github.com/CircleCI-Public/circleci-cli/releases/download/v${version}/${downloadName}`;
  const tmpDir = tempyDir();
  const zipPath = pathJoin(tmpDir, downloadName);
  const unzipDir = pathJoin(tmpDir, 'circleci');
  const unzipPath = pathJoin(unzipDir, 'circleci');

  return fetch(downloadUrl)
    .then(res => res.buffer())
    .then(buf => fsExtraOutputFile(zipPath, buf))
    .then(() => decompress(zipPath, unzipDir, { strip: 1 }))
    .then(() => fsExtraMove(unzipPath, binPath, { overwrite: true }))
    .then(() => fsExtraRemove(tmpDir));
};
