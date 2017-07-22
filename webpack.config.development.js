const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

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
      theme_color: '#2b978a',
      icons: [
        {
          src: path.resolve(paths.imgSrc, 'favicon-master.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'icons'
        }
      ]
    }, // /webpackPwaManifest
    favicons: {
      // Your source logo
      logo: path.join(paths.imgSrc, 'favicon-master.png'),
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons/',
      // Emit all stats of the generated icons
      emitStats: false,
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#2b978a',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'Edward Cobbold - Frontend Developer',

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    } // /favicons
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
  devServer: {
    host: '0.0.0.0',
    contentBase: 'public/',
    historyApiFallback: {
      index: '/dist/'
    },
    port: 3000,
    overlay: true,
    open: true
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new HTMLWebpackPlugin(config.plugins.html),
    new FaviconsWebpackPlugin(config.plugins.favicons),
    new WebpackPwaManifestPlugin(config.plugins.webpackPwaManifest)
  ]
}
