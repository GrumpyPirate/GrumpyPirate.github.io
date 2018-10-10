const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    publicPath: '/',
    port: 3000,
    stats: 'minimal'
  }
};

module.exports = merge(commonConfig, devConfig);