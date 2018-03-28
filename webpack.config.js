var webpack = require('webpack');
const path = require('path');
module.exports = {
    /*
    * モード（webpack 4から追加された項目）の設定
    * development or production or none
    * productionにすればoptimization.minimizerという設定が有効になり、圧縮されたファイルが出力される
    */
    mode: 'development',
    entry: {
        bundle: [
            './src/App',
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            'react-hot-loader/patch'
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        publicPath: "/js/",
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
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
                                    "useBuiltIns": "usage", // 必要な分だけのpolyfillを自動でインポート
                                    "modules": false //webpack tree shakingの有効化
                                }
                            ]
                        ],
                        // 開発時に変換結果をキャッシュする
                        // 本番用のビルドにはこの設定は不要
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel']
                      }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader'
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
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            images: path.resolve(__dirname, 'src/images'),
            constant: path.resolve(__dirname, 'src/constant')
        }
    }
};