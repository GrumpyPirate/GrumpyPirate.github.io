module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            corejs: 3,
          },
        ],
      ],
      plugins: [
        'transform-es2015-modules-commonjs',
        // This is to fix styled-components v5 and jest-styled-components v7 breaking
        // toHaveStyleRule assertions.
        ['babel-plugin-styled-components', { ssr: false, displayName: false }],
      ],
    },
  },
};
