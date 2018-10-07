const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'client/src/index.jsx')],
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
              url: false,
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
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/src/index.html'
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
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'client/src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.index.js', '.index.jsx']
  }
}
