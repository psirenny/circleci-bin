// @flow

import rollupPluginBabel from 'rollup-plugin-babel';
import rollupPluginExecutable from 'rollup-plugin-executable';

export default {
  external: [
    'decompress',
    'fs-extra',
    'path',
    'tempy',
  ],
  input: 'src/code/binary/circleci.js',
  output: {
    banner: '#!/usr/bin/env node',
    file: 'dist/circleci',
    format: 'cjs',
  },
  plugins: [
    rollupPluginBabel({ babelHelpers: 'inline' }),
    rollupPluginExecutable(),
  ],
};
