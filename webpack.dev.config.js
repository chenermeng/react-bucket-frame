const path = require('path');
const webpack = require('webpack');
module.exports = {
    // 入口
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true,
        host: '0,0,0,0',
        contentBase: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};