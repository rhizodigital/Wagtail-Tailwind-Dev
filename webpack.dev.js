const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EsLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const stats = {
    assets: false,
    children: true,
    chunks: false,
    colors: true,
    performance: true,
    reasons: false,
    version: false,
    modules: false,
};


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    stats,
    plugins: [
        new EsLintPlugin({
            extensions: ['js'],
            exclude: ['node_modules'],
            emitWarning: true,
            files: Path.resolve(__dirname, 'static_src/scripts'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: Path.resolve(__dirname, 'static_src/scripts'),
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    devServer: {
        compress: true,
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            context: () => true,
            target: 'http://127.0.0.1:8000',
        },
        client: {
            overlay: true,
            logging: 'error',
        },
        static: {
            directory: Path.resolve(__dirname, 'static_src'),
        },
        devMiddleware: {
            writeToDisk: true,
            stats,
            index: false,
            publicPath: '/static/',
        },
    },
});
