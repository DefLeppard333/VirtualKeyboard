const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractplugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const fileName = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: "./index.js", 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: fileName('js'),
        clean: true,
    },
    devServer: {
        port: 4200
    },
    devtool: isDev ? 'source-map' : 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCSSExtractplugin({
            filename: fileName('css')
        }),

    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCSSExtractplugin.loader, 'css-loader', ],
            },
            {
                test: /\.(s[ac]ss)$/,
                use: [MiniCSSExtractplugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
            }
        ],

    },

};