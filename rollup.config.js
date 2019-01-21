// @flow

import rollupPluginBabel from 'rollup-plugin-babel';
import rollupPluginExecutable from 'rollup-plugin-executable';

export default {
  external: [
    'decompress',
    'fs-extra',
    'node-fetch',
    'node-uname',
    'path',
    'tempy',
  ],
  input: 'src/code/scripts/install-binary.js',
  output: {
    banner: '#!/usr/bin/env node',
    file: 'dist/install-binary',
    format: 'cjs',
  },
  plugins: [
    rollupPluginBabel({ babelHelpers: 'inline' }),
    rollupPluginExecutable(),
  ],
};
