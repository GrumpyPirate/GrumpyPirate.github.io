/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const devConfig = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: true,
    },
    port: 3000,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/',
    },
  },
};

module.exports = merge(commonConfig, devConfig);
