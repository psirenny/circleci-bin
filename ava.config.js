// @flow

export default {
  babel: {
    compileAsTests: ['test/helpers/**/*'],
  },
  files: [
    'test/**/*',
    '!test/**/fixtures/**/*',
    '!test/helpers/**/*',
  ],
  require: [
    '@babel/polyfill',
    '@babel/register',
  ],
};
