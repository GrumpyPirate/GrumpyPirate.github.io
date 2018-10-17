const merge = require('webpack-merge');

const OptimiseCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.config.common');

const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimiseCSSAssetsPlugin({
        cssProcessorPluginOptions: { preset: 'advanced' },
      }),
    ],
    usedExports: true,
    sideEffects: true,
  },
};

module.exports = merge.smart(commonConfig, prodConfig);
