var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var FaviconsPlugin = require('favicons-webpack-plugin')
var CleanPlugin = require('clean-webpack-plugin')

// Paths
const paths = {
  src: `${__dirname}/src`,
  build: `${__dirname}/dist`,
  imgSrc: `${__dirname}/public/images`,
  sassSrc: `${__dirname}/src/sass`,
  componentSrc: `${__dirname}/src/components`
} // /const paths

// Plugin Config
const config = {
  plugins: {
    // html-webpack-plugin
    html: {
      template: `${paths.src}/index.html`,
      filename: 'index.html',
      inject: 'body'
    },
    // favicons-webpack-plugin
    favicons: {
      // Your source logo
      logo: `${paths.imgSrc}/favicon-master.png`,
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: true,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
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
    },
    // clean-webpack-plugin
    clean: {
      dry: true,
      watch: true
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
    filename: 'bundle.js'
  },
  // Resolve SCSS image (url('...')s)
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json'
    ],
    alias: {
      'components': paths.componentSrc,
      'images': paths.imgSrc
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
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [paths.sassSrc],
                sourceMap: true
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
          paths.componentSrc,
          /node_modules/
        ]
      },
      // SVG Sprites
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [
          paths.componentSrc,
          /node_modules/
        ],
        exclude: paths.imgSrc
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    // hot: true,
    port: 3000,
    overlay: true,
    open: true
  },
  plugins: [
    new CleanPlugin(['./dist'], config.plugins.clean),
    new FaviconsPlugin(config.plugins.favicons),
    new ExtractTextPlugin('css/app.css'),
    new HTMLWebpackPlugin(config.plugins.html)
  ]
}
