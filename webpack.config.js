var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var SVGStorePlugin = require('webpack-svgstore-plugin')
var FaviconsPlugin = require('favicons-webpack-plugin')
var CleanPlugin = require('clean-webpack-plugin')

// Plugin Config
const config = {
    plugins: {
        // html-webpack-plugin
        html: {
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        },
        // webpack-svgstore-plugin
        svgstore: {
            // Options for svgo
            svgoOptions: {
                plugins: [
                    { removeTitle: true }
                ] // /plugins
            } // /svgoOptions
        },
        // favicons-webpack-plugin
        favicons: {
            // Your source logo
            logo: __dirname + '/src/images/favicon-master.png',
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
            title: 'Edward Cobbold - Portfolio',

            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
              android:      true,
              appleIcon:    true,
              appleStartup: true,
              coast:        true,
              favicons:     true,
              firefox:      true,
              opengraph:    true,
              twitter:      true,
              yandex:       true,
              windows:      true
            }
        },
        // clean-webpack-plugin
        clean: {
            dry: 'true',
            watch: true
        }
    }
}

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: __dirname + '/dist',
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
            'images': __dirname + '/public/images'
        }
    },
    module: {
        loaders: [
            // React JSX
            {
                test: /\.jsx?$/,
                include: __dirname + '/src',
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
                                 sourceMap: true
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
                                includePaths: [__dirname + '/src/sass'],
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            // Images
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
                            },
                            gifsicle: {},
                            svgo: {}
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        overlay: true,
        // open: true,
        historyApiFallback: true
    },
    plugins: [
        new CleanPlugin(['./dist'], config.plugins.clean),
        new SVGStorePlugin.Options(config.plugins.svgstore),
        new FaviconsPlugin(config.plugins.favicons),
        new ExtractTextPlugin('css/app.css'),
        new HTMLWebpackPlugin(config.plugins.html)
    ]
}
