// @flow strict

import { outputFile as fsExtraOutputFile } from 'fs-extra';
import { getBinaryPath } from '../../../../../src';

type Options = {|
  dir: string,
  version: string,
|};

export default async (opts: Options) => {
  const { dir, version } = opts;
  const binPath = getBinaryPath({ dir, version });
  await fsExtraOutputFile(binPath, '', 'utf8');
};
