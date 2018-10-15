const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMaps: true
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['client/src/sass'],
              sourceMaps: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [path.resolve('client/src/images/icons')],
        use: [
          'file-loader',
          'image-webpack-loader',
        ]
      },
      {
        test: /\.svg$/,
        include: [/node_modules/, path.resolve('client/src/images/icons')],
        use: [
          'svg-sprite-loader',
          'svgo-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.index.js', '.index.jsx'],
    modules: [path.resolve('client/src'), 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: 'client/src/index.html'
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
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve('client/src/images/favicon-master.png'),
      background: '#2b978a',
      icons: {
        android: false,
        opengraph: true,
        twitter: true
      }
    }),
    new SWPrecacheWebpackPlugin()
  ]
}
