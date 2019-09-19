// @flow

import rollupPluginBabel from 'rollup-plugin-babel';
import rollupPluginExecutable from 'rollup-plugin-executable';

export default {
  external: [
    'child_process',
    'decompress',
    'fs-extra',
    'node-fetch',
    'os',
    'path',
    'tempy',
  ],
  input: 'src/code/bin/circleci.js',
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
