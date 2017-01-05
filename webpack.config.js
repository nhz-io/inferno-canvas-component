const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = 9000

module.exports = {
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
    },
    entry: [
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'dev/main.js'),
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'inferno-app',
                    ],
                    plugins: [
                        'transform-inline-imports-commonjs',
                        'transform-class-properties',
                        'transform-object-rest-spread',
                    ],
                    env: 'development',
                },
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/,
                loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
        }),
    ],
    devServer: {
        colors: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: 'localhost',
        port,
    },
}
