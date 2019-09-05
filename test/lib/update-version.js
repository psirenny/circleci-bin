// @flow

import test from 'ava';
import { compare as dirCompare } from 'dir-compare';
import { join as pathJoin } from 'path';
import { directory as tempyDir } from 'tempy';
import { updateVersion } from '../../src';
import stubFetchReleases from './fixtures/update-version/stubs/fetch-releases';

const fetchReleases = require('../../src/code/lib/fetch-releases');

test('scripts: update version', async t => {
  const dirFixture = pathJoin(__dirname, 'fixtures/update-version/output');
  const dir = tempyDir();

  // $FlowFixMe
  fetchReleases.default = stubFetchReleases;
  await updateVersion({ dir });
  const diff = await dirCompare(dirFixture, dir, { compareContent: true });

  t.true(diff.same);
});
