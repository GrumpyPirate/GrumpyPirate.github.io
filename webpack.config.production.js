const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const FaviconsPlugin = require('favicons-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')

const path = require('path')

// Paths
const paths = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
  imgSrc: path.join(__dirname, 'public/images'),
  iconSrc: path.join(__dirname, 'public/icons'),
  sassSrc: path.join(__dirname, 'src/sass'),
  componentSrc: path.join(__dirname, 'src/components'),
  servicesSrc: path.join(__dirname, 'src/services'),
  configSrc: path.join(__dirname, 'src/config')
} // /const paths

// Plugin Config
const config = {
  plugins: {
    // html-webpack-plugin
    html: {
      template: path.join(paths.src, 'index.html'),
      inject: 'body',
      hash: true
    },
    webpackPwaManifest: {
      name: 'Edward Cobbold :: Portfolio',
      short_name: 'Portfolio',
      description: 'Personal portfolio website of Edward Cobbold, a Frontend Web Developer',
      display: 'standalone',
      background_color: '#2b978a',
      icons: [
        {
          src: path.resolve(paths.imgSrc, 'favicon-master.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'icons'
        }
      ]
    },
    // clean-webpack-plugin
    clean: {
      dry: false,
      watch: false
    }
  } // /plugins
} // /config

// Export
module.exports = {
  entry: [
    `${paths.src}/index.jsx`
  ],
  output: {
    path: paths.build,
    publicPath: '/dist/',
    filename: 'app.js'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json'
    ],
    alias: {
      'components': paths.componentSrc,
      'services': paths.servicesSrc,
      'images': paths.imgSrc,
      'icons': paths.iconSrc,
      'config': paths.configSrc
    }
  },
  devtool: 'source-map',
  module: {
    loaders: [
      // React JSX
      {
        test: /\.jsx?$/,
        include: paths.src,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // SCSS
      {
        test: /\.s(a|c)ss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  paths.sassSrc
                ],
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      // CSS
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                url: false
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      // All images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true
              },
              optipng: {
                optimizationLevel: 3
              }/*,
              gifsicle: {},
              svgo: {} */
            }
          }
        ],
        exclude: [
          paths.iconSrc,
          /node_modules/
        ]
      },
      // SVG Sprites
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [
          paths.iconSrc
        ]
      }
    ]
  },
  plugins: [
    new CleanPlugin([paths.build], config.plugins.clean),
    // new FaviconsPlugin(config.plugins.favicons),
    new ExtractTextPlugin('css/app.css'),
    new HTMLWebpackPlugin(config.plugins.html),
    new WebpackPwaManifestPlugin(config.plugins.webpackPwaManifest)
  ]
}
