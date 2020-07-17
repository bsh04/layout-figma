const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        card: './card.js',
        index: './index.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            chunk: ['index'],
            filename: "./index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./card.html",
            chunk: ['card'],
            filename: "./card.html"
        }),
        new HtmlWebpackPlugin({
            template: "./catalog.html",
            chunk: ['catalog'],
            filename: "./catalog.html"
        }),
        new CleanWebpackPlugin()
    ]
}