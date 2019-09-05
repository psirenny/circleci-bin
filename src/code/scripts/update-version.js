// @flow strict

import { join as pathJoin } from 'path';
import updateVersion from '../lib/update-version';

updateVersion({
  dir: pathJoin(__dirname, '../bin'),
});
