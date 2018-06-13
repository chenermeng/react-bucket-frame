const path = require('path');
module.exports = {
    // 入口
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};