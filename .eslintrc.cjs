module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  ignorePatterns: ['docs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // devDependenciesのimportを許可
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // 'no-restricted-syntax': [
    //   'error',
    //   {
    //     selector: 'ForInStatement',
    //     message:
    //       'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    //   },
    // {
    //   selector: 'ForOfStatement',
    //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    // },
    //   {
    //     selector: 'LabeledStatement',
    //     message:
    //       'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    //   },
    //   {
    //     selector: 'WithStatement',
    //     message:
    //       '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    //   },
    // ],
    // 'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['src/js/module', 'node_modules'],
      },
    },
  },
};
