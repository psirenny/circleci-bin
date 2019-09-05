// @flow strict

import { join as pathJoin } from 'path';

type Options = {|
  dir: string,
  version: string,
|};

export default (opts: Options) => (
  pathJoin(opts.dir, `circleci_v${opts.version}`)
);
