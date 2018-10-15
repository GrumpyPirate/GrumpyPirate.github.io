const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodConfig = require('./webpack.config.prod');

module.exports = merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerHost: '0.0.0.0',
      reportFilename: 'bundle-analyzer-report.html'
    })
  ]
})
