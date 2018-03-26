const path = require('path');

module.exports = {
    /*
    * モード（webpack 4から追加された項目）の設定
    * development or production or none
    * productionにすればoptimization.minimizerという設定が有効になり、圧縮されたファイルが出力される
    */
    mode: 'development',
    entry: "./src/App.js",
    output: {
        // 出力するファイル名
        filename: 'bundle.js',
        // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
        path: path.join(__dirname, 'dist/js')
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'babel-loader',
                      options:  {
                        // react用表記と、es2015表記を有効化
                        presets: ['react','preset-env'],
          
                        // 開発時に変換結果をキャッシュする
                        // 本番用のビルドにはこの設定は不要
                        cacheDirectory: true
                      }
                    }
                ]
            }
        ]
    }
};