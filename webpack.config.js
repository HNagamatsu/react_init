const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    /*
    * モード（webpack 4から追加された項目）の設定
    * development or production or none
    * productionにすればoptimization.minimizerという設定が有効になり、圧縮されたファイルが出力される
    */
    mode: 'development',
    entry: "./src/App.js",
    // app: [
    //     // "webpack-dev-server/client?http://localhost:3000",
    //     // "webpack/hot/dev-server",
    //     "./src/App.js"
    // ],
    output: {
        // 出力するファイル名
        filename: 'bundle.js',
        // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
        path: path.join(__dirname, '/dist/js/'),
        // publicPath: path.join(__dirname, '/dist/') // この行を追加
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        port: 3000,
        open: true
        // hot: true,
        // hotOnly: true,
        // watchContentBase: true,
        // inline: true
    },
    // plugins: [
    //     new CleanWebpackPlugin(['dist/']),
    //     new HtmlWebpackPlugin({
    //       title: 'Hot Module Replacement'
    //     }),
    //     new webpack.NamedModulesPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    //   ],
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'babel-loader',
                      options:  {
                        // react用表記と、es2015表記を有効化
                        presets: [
                            ['@babel/react'],
                            ['@babel/env',
                                {
                                    "targets": {
                                        "ie": 11
                                    },
                                    // 必要な分だけのpolyfillを自動でインポート
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ],
                        // 開発時に変換結果をキャッシュする
                        // 本番用のビルドにはこの設定は不要
                        cacheDirectory: true,
                        plugins: [
                            'transform-object-rest-spread', // {...rest} 表記を可能にする
                        ]
                      }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader'
                        // options: {
                        // limit: 8192
                        // }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};