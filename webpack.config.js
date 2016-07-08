module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist/',
        publicPath: './dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\html$/, loader: 'html' }
        ]
    }
}