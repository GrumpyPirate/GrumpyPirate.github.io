const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: path.resolve(__dirname, './tsconfig.json'),
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['jest', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'dot-notation': 'off',
    'import/no-extraneous-dependencies': 0,
    'max-len': [
      'error',
      {
        code: 100,
        ignorePattern: '^import [^,]+ from',
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': 'error',
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
  },
  settings: {
    'import/resolver': {
      node: {
        'config-index': 1,
      },
      webpack: {
        config: './webpack.config.common.js',
        'config-index': 2,
      },
    },
  },
};
