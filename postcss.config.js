module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
        }),
        require('postcss-clean')()
    ]
}
