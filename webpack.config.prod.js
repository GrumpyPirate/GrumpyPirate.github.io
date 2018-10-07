const path = require('path');
const merge = require('webpack-merge');

const OptimiseCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.config.common');

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['client/src/sass']
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimiseCSSAssetsPlugin({
        cssProcessorPluginOptions: { preset: 'advanced' }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Edward Cobbold\'s Portfolio',
      short_name: 'EC Portfolio',
      description: 'Edward Cobbold\'s personal portfolio/website',
      background_color: '#2b978a',
      icons: [{
        src: path.resolve('client/src/images/favicon-master.png'),
        sizes: [96, 128, 192, 256, 384, 512]
      }]
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
