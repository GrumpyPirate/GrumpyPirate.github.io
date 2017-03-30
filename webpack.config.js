var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var SVGStorePlugin = require('webpack-svgstore-plugin')

var HTMLWebpackPluginConfig = {
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
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
                                importLoaders: 1
                            }
                        },
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    __dirname + '/src/sass'
                                ]
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
        new ExtractTextPlugin('css/app.css'),
        new HTMLWebpackPlugin(HTMLWebpackPluginConfig),
        new SVGStorePlugin.Options({
            // Options for svgo
            svgoOptions: {
                plugins: [
                    { removeTitle: true }
                ] // /plugins
            } // /svgoOptions
        })
    ]
}
