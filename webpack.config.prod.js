const merge = require('webpack-merge');

const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.config.common');

const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
    usedExports: true,
    sideEffects: true,
  },
};

module.exports = merge.smart(commonConfig, prodConfig);
