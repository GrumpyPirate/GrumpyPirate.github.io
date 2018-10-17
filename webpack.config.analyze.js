require('dotenv').config('./.env.prod');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const prodConfig = require('./webpack.config.prod');

module.exports = merge.smart(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerHost: '0.0.0.0',
      reportFilename: 'bundle-analyzer-report.html',
    }),
  ],
});
