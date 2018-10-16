const path = require('path');
const merge = require('webpack-merge');

const OptimiseCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
              modules: true,
              localIdentName: '[hash:base64:5]',
              importLoaders: 2,
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['client/src/sass'],
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimiseCSSAssetsPlugin({
        cssProcessorPluginOptions: { preset: 'advanced' }
      })
    ],
    usedExports: true,
    sideEffects: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    })
  ]
};

module.exports = merge.smart(commonConfig, prodConfig);
