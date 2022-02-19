const path = require('path');
console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './public/src/app.js',
    output: {

        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',

    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            options: { presets: ['@babel/env', '@babel/preset-react'] },
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
                ,]
        }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
};


