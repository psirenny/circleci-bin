// @flow strict

import { pathExists as fsExtraPathExists } from 'fs-extra';
import getBinaryPath from './get-binary-path';
import installBinary from './install-binary';

type Options = {|
  dir: string,
  version: string,
|};

export default async (opts: Options) => {
  const { dir, version } = opts;
  const binPath = getBinaryPath({ dir, version });
  const binaryExists = await fsExtraPathExists(binPath);
  if (!binaryExists) await installBinary({ dir, version });
};
