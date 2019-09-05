// @flow

import test from 'ava';
import { fetchReleases } from '../../src';

test('fetch releases', async (t) => {
  const releases = await fetchReleases();
  t.is(typeof releases, 'object');
});
