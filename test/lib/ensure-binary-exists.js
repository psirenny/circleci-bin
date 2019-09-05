// @flow

import test from 'ava';
import { pathExists as fsExtraPathExists } from 'fs-extra';
import { directory as tempyDir } from 'tempy';
import { ensureBinaryExists, getBinaryPath } from '../../src';
import stubInstallBinary from './fixtures/ensure-binary-exists/stubs/install-binary';

const installBinary = require('../../src/code/lib/install-binary');

test('install once', async t => {
  const dir = tempyDir();
  const version = '1.0.0';
  const binPath = getBinaryPath({ dir, version });

  // $FlowFixMe
  installBinary.default = stubInstallBinary;

  t.is(await fsExtraPathExists(binPath), false);
  await ensureBinaryExists({ dir, version });
  t.is(await fsExtraPathExists(binPath), true);
  await ensureBinaryExists({ dir, version });
  t.is(await fsExtraPathExists(binPath), true);
});
