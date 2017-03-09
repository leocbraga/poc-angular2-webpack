var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 


module.exports = {
    entry: './src/main.ts',
    output: {
        path: '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders:[
            {
                test: /\.ts$/,
                loader:[
                    'awesome-typescript-loader', 
                    'angular2-template-loader', 
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

};

