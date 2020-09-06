const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|gif|bmp|jpeg)$/, use: [{ loader: 'url-loader', options: { esModule: false } }] },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modeles/ }
        ]
    },
    resolve: {
        alias: {
            "vue$": 'vue/dist/vue.js'
        }
    },
}