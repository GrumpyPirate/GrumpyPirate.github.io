module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      modules: false,
    }],
  ],
  env: {
    test: {
      presets: [
        '@babel/preset-react',
        ['@babel/preset-env', {
          useBuiltIns: 'entry',
        }],
      ],
      plugins: [
        'transform-es2015-modules-commonjs',
      ],
    },
  },
};
