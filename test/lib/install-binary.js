// @flow

import test from 'ava';
import { compare as dirCompare } from 'dir-compare';
import os from 'os';
import { join as pathJoin } from 'path';
import { directory as tempyDir } from 'tempy';
import { installBinary } from '../../src';
import stubOsPlatformDarwin from './fixtures/install-binary/stubs/os_platform_darwin';
import stubOsPlatformUnknown from './fixtures/install-binary/stubs/os_platform_unknown';

const version = '0.1.5705';

test('fail when release is not found', async t => {
  t.plan(1);

  const dir = tempyDir();

  try {
    await installBinary({ dir, version: '0.0.0' });
  } catch (err) {
    t.truthy(err);
  }
});

test('fail when asset is not found', async t => {
  t.plan(1);

  const dir = tempyDir();

  try {
    // $FlowFixMe
    os.platform = stubOsPlatformUnknown;
    await installBinary({ dir, version });
  } catch (err) {
    t.truthy(err);
  }
});

test('install binary', async t => {
  const dirFixture = pathJoin(__dirname, 'fixtures/install-binary/output');
  const dir = tempyDir();

  // $FlowFixMe
  os.platform = stubOsPlatformDarwin;
  await installBinary({ dir, version });
  const diff = await dirCompare(dirFixture, dir);

  t.true(diff.same);
});
