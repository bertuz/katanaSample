var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var webpack_config = {
    devtool: 'eval',
    context: path.join(__dirname, '../'),
    entry: [
        './index'
    ],
    output: {
        path: path.join(__dirname, '../lib'),
        filename: 'katana.js',
    },
    resolve: {
        alias: {
            'styles': path.join(__dirname, '../')
        },
        extensions: ['', '.js', '.jsx','.css']
    },
    module: {
        resolve: {
            extensions: ['', '.js', '.styl']
        },
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, '../'),
                query : {
                    presets: ['es2015', 'react'],
                    plugins: ["transform-es2015-classes"]
                }
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!postcss-loader!stylus-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, '../')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: path.join(__dirname, '../')
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    }
};

module.exports = webpack_config;
