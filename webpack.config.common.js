const path = require('path');
const { EnvironmentPlugin } = require('webpack');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName:
                  process.env.NODE_ENV === 'production'
                    ? '[hash:base64:5]'
                    : '[name]__[local]--[hash:base64:5]',
              },
              importLoaders: 2,
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
              sassOptions: {
                includePaths: ['src/sass'],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [path.resolve('src/images/icons')],
        use: ['file-loader', 'image-webpack-loader'],
      },
      {
        test: /\.svg$/,
        include: [/node_modules/, path.resolve('src/images/icons')],
        use: ['svg-sprite-loader', 'svgo-loader'],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.index.js',
      '.index.jsx',
      '.ts',
      '.tsx',
      '.index.ts',
      '.index.d.ts',
      '.index.tsx',
    ],
    modules: [path.resolve('src'), 'node_modules'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: '_redirects',
        to: '_redirects',
        toType: 'file',
      },
    ]),
    new ForkTsCheckerWebpackPlugin({
      // async: false,
      eslint: true,
    }),
    new WebappWebpackPlugin({
      logo: path.resolve('src/images/favicon-master.png'),
      cache: true,
      inject: true,
      favicons: {
        appName: 'Edward Cobbold',
        appDescription: "Edward Cobbold's personal website",
        developerName: 'Edward Cobbold',
        developerURL: 'https://edwardcobbold.co.uk/',
        lang: 'en-GB',
        background: '#67309a',
        theme_color: '#302445',
      },
    }),
    new SWPrecacheWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
    }),
  ],
};
