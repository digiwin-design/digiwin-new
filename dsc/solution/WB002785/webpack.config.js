const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
    context: path.resolve(__dirname, 'src'),
    entry: {
        all: './js/all.js',
        WB00278501: './js/WB00278501.js',
        WB00278501_law: './js/WB00278501_law.js',
        WB00278501_verify: './js/WB00278501_verify.js',
        WB00278501_research: './js/WB00278501_research.js',
        WB00278501_control: './js/WB00278501_control.js',
        WB00278501_produce: './js/WB00278501_produce.js',
        WB00278501_service: './js/WB00278501_service.js',
        WB00278501_seminar: './js/WB00278501_seminar.js',
        WB00278501_case: './js/WB00278501_case.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/i,
                use: extractCSS.extract([
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]),
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                ],
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        extractCSS,
        new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' },
            { from: 'public', to: 'public' },
            { from: 'images', to: 'images' },
            { from: 'components', to: 'components' },
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501.pug',
            filename: './WB00278501.html',
            chunks: ['vendor', 'WB00278501']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_law.pug',
            filename: './WB00278501_law.html',
            chunks: ['vendor', 'WB00278501_law']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_verify.pug',
            filename: './WB00278501_verify.html',
            chunks: ['vendor', 'WB00278501_verify']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_research.pug',
            filename: './WB00278501_research.html',
            chunks: ['vendor', 'WB00278501_research']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_control.pug',
            filename: './WB00278501_control.html',
            chunks: ['vendor', 'WB00278501_control']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_produce.pug',
            filename: './WB00278501_produce.html',
            chunks: ['vendor', 'WB00278501_produce']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_service.pug',
            filename: './WB00278501_service.html',
            chunks: ['vendor', 'WB00278501_service']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_seminar.pug',
            filename: './WB00278501_seminar.html',
            chunks: ['vendor', 'WB00278501_seminar']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_case.pug',
            filename: './WB00278501_case.html',
            chunks: ['vendor', 'WB00278501_case']
        }),
    ]
};