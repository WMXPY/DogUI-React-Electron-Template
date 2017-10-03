const path = require('path')
const root = __dirname

module.exports = {
    entry: path.resolve(__dirname, 'src/renderer/test.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/renderer')
    },
    // loaders
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }]
    }
}