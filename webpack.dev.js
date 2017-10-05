const path = require('path');
const root = __dirname;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.resolve(root, 'src/renderer/renderer.jsx')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(root, 'build/renderer'),
        publicPath: '/'
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(root, 'build/renderer'),
        publicPath: '/',
        port: 3000,
        inline: true,
        historyApiFallback: true
    }
}