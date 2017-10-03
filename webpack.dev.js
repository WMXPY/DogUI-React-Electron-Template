const path = require('path');
const root = __dirname;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch', // 激活HMR
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.resolve(root, 'src/renderer/renderer.jsx')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(root, 'build/renderer'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DogUI-React-Electron-Template',
            template: path.resolve(root, 'build/template.html')
        }),
        new webpack.HotModuleReplacementPlugin(), // 热替换插件
        new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
    ],
    devServer: {
        hot: true, // 激活服务器的HMR
        contentBase: path.resolve(root, 'build/renderer'),
        publicPath: '/',
        port: 3000,
        inline: true,
        historyApiFallback: true
    }
}