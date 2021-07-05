module.exports = {
  extends: [
    './rules/base',
    './rules/imports',
    './rules/node',
  ].map(require.resolve),

  env: {
    node: true,
    jest: true,
    mocha: true,
  },

  settings: {
    polyfills: [
      'fetch',
      'promises'
    ]
  },

  rules: {},
};
