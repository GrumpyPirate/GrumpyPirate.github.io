module.exports = {
  plugins: ['jest', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    jest: true,
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
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
  rules: {
    'dot-notation': 'off',
    'implicit-arrow-linebreak': 0,
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
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unescaped-entities': ['off', "'"],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
  },
};
