/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { EnvironmentPlugin } = require('webpack');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'out'),
    publicPath: '/',
    filename: '[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
      chunks: 'all',
    },
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),

    new FaviconsWebpackPlugin({
      logo: './src/images/favicon-master.png',
      favicons: {
        appName: 'Stephanie Cobbold',
        appDescription: "Stephanie Cobbold's personal website",
        developerName: 'Stephanie Cobbold',
        developerURL: 'https://grumpypirate.github.io/',
        lang: 'en-GB',
        background: '#67309a',
        theme_color: '#302445',
      },
    }),
  ],
};
