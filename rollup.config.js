// @flow

import rollupPluginBabel from 'rollup-plugin-babel';
import rollupPluginHashbang from 'rollup-plugin-hashbang';

export default {
  external: [
    'decompress',
    'fs-extra',
    'node-fetch',
    'node-uname',
    'path',
    'tempy',
  ],
  output: {
    format: 'cjs',
  },
  plugins: [
    rollupPluginHashbang(),
    rollupPluginBabel(),
  ],
};
