// @flow

import rollupPluginBabel from 'rollup-plugin-babel';
import rollupPluginHashbang from 'rollup-plugin-hashbang';

export default {
  output: {
    format: ['cjs'],
  },
  plugins: [
    rollupPluginHashbang(),
    rollupPluginBabel(),
  ],
};
