const path = require('path');
module.exports = {
    /*
    * モード（webpack 4から追加された項目）の設定
    * development or production or none
    * productionにすればoptimization.minimizerという設定が有効になり、圧縮されたファイルが出力される
    */
    mode: 'development',
    // watch: true,
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, "dist/js"), // string
        filename: "bundle.js", // string
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        open: true,
        publicPath: "/js/"
    },
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
                                    // "modules": false, //webpack tree shakingの有効化
                                }
                            ]
                        ],
                        // 開発時に変換結果をキャッシュする
                        // 本番用のビルドにはこの設定は不要
                        cacheDirectory: true
                        // plugins: [
                        //     // 'transform-object-rest-spread', // {...rest} 表記を可能にする
                        //     'react-hot-loader/babel'
                        // ]
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
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components')
        }
    }
};