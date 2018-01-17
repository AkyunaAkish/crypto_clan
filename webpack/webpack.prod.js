require('dotenv').config();

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('../helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    entry: {
        bundle: [
            'babel-polyfill',
            './client/index.js'
        ]
    },
    output: {
        path: helpers.root('dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    plugins: [
        new ProgressBarPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: helpers.root(),
            verbose: true,
            watch: true
        }),
        new HtmlWebpackPlugin({
            template: './client/index.prod.html'
        }),
        new CopyWebpackPlugin([{
            from: helpers.root('./client/images'),
            to: helpers.root('dist/images')
        }]),
        new CopyWebpackPlugin([{
            from: helpers.root('./client/humans.txt'),
            to: helpers.root('dist')
        }]),
        new CopyWebpackPlugin([{
            from: helpers.root('./client/robots.txt'),
            to: helpers.root('dist')
        }]),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production',
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '95-100'
            }
        }),
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.optimize.AggressiveMergingPlugin()
    ]
});