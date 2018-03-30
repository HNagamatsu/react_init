const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    entry: [
        './src/App'
    ],
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options:  {
                        presets: [
                            ['@babel/react'],
                            ['@babel/env', {
                                "useBuiltIns": "usage", // 必要な分だけのpolyfillを自動でインポート
                                "modules": false //webpack tree shakingの有効化
                            }]
                        ],
                        // 開発時に変換結果をキャッシュする
                        // 本番用のビルドにはこの設定は不要
                        cacheDirectory: true,
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules' ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            container: path.resolve(__dirname, 'src/container'),
            images: path.resolve(__dirname, 'src/images'),
            constant: path.resolve(__dirname, 'src/constant'),
            reducers: path.resolve(__dirname, 'src/reducers'),
            actions: path.resolve(__dirname, 'src/actions')
        }
    }
};