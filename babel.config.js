module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: 3,
      modules: false,
    }],
  ],
  env: {
    test: {
      presets: [
        '@babel/preset-react',
        ['@babel/preset-env', {
          useBuiltIns: 'entry',
          corejs: 3,
        }],
      ],
      plugins: [
        'transform-es2015-modules-commonjs',
      ],
    },
  },
};
