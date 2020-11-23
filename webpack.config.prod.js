/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.config.common');

const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
    usedExports: true,
    sideEffects: true,
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = merge.smart(commonConfig, prodConfig);
