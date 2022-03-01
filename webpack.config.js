const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


console.log(path.join(__dirname, 'public'));

module.exports = (env) => {
    const isProduction = env === 'production';


    console.log('env', env);
    return {
        entry: './public/src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
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
                    { loader: MiniCssExtractPlugin.loader, },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]

            }]
        },
        plugins: [new MiniCssExtractPlugin()],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: path.join(__dirname, 'public'),
            historyApiFallback: true
        },
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            publicPath: '/dist/',
        },

    };
};




