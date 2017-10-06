const path = require('path');
const root = __dirname;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(root, 'src/renderer/buildRenderer.jsx'),
    target: 'electron-renderer',
    output: {
        filename: 'bundle.js',
        path: path.resolve(root, 'build/renderer')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DogUI-React-Electron-Template',
            template: path.resolve(root, 'build/template.html')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
}