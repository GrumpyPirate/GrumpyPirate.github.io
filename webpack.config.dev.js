const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const devConfig = {
  mode: 'development',
  devServer: {
    publicPath: '/',
    contentBase: './build',
    port: 3000,
    stats: 'minimal'
  }
};

module.exports = merge(commonConfig, devConfig);
