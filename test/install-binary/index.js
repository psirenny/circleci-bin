// @flow

import test from 'ava';
import { compare as dirCompare } from 'dir-compare';
import { join as pathJoin } from 'path';
import { directory as tempyDirectory } from 'tempy';
import uname from 'node-uname';
import { version, installBinary } from '../../src';
import stubUnameDarwin from './fixtures/stubs/uname_darwin';
import stubUnameUnknown from './fixtures/stubs/uname_unknown';

test('scripts: install binary', async t => {
  const dirFixture = pathJoin(__dirname, 'fixtures/output');
  const dir = tempyDirectory();

  uname.uname = stubUnameDarwin;
  await installBinary({ dir, version });
  const diff = await dirCompare(dirFixture, dir);

  t.true(diff.same);
});

test('scripts: install binary release not found', async t => {
  t.plan(1);

  const dir = tempyDirectory();

  try {
    await installBinary({ dir, version: '0.0.0' });
  } catch (err) {
    t.truthy(err);
  }
});

test('scripts: install binary asset not found', async t => {
  t.plan(1);

  const dir = tempyDirectory();

  try {
    uname.uname = stubUnameUnknown;
    await installBinary({ dir, version });
  } catch (err) {
    t.truthy(err);
  }
});
