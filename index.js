module.exports = {
  extends: [
    './rules/base',
    './rules/imports',
    './rules/react',
  ].map(require.resolve),

  parser: '@babel/eslint-parser'
};
