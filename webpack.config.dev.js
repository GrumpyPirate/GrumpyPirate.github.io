const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    overlay: true,
    publicPath: '/',
    port: 3000,
    host: '0.0.0.0',
    stats: 'minimal',
  },
};

module.exports = merge.smart(commonConfig, devConfig);
