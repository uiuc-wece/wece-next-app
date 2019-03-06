'use strict';

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
const path = require('path');
const copy = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'source');

const config = {
    mode: 'development',

    entry: {
        app: [APP_DIR + '/index.js']
    },

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    target: 'web',

    devtool: '#source-map',
    
    externals: [nodeExternals()], // Need this to avoid error when working with Express

    context: path.join(__dirname, 'source'),

    module: {
        rules: [
            {
              test: /\.jsx?/,
              exclude: [/node_modules/],
              include: APP_DIR,
              use: {
                loader: 'babel-loader'
              },
            },
            {
              test: /\.css$/,
              // the order of the following loaders is important
              loaders: ['style-loader', 'css-loader?-url', 'postcss-loader', 'sass-loader'],
            },
            {
              test: /\.scss$/,
              // the order of the following loaders is important
              loaders: ['style-loader', 'css-loader?-url', 'postcss-loader', 'sass-loader'],
            },
            {
              test: /\.html$/,
              loaders: ['raw-loader'],
            },
          ],
    },

    plugins: [
        new copy([
            {from: APP_DIR + '/html/', to: BUILD_DIR},
            {from: APP_DIR + '/imgs/', to: BUILD_DIR + '/imgs/'},
            {from: APP_DIR + '/css/', to: BUILD_DIR},
            {from: APP_DIR + '/js/', to: BUILD_DIR},
            {from: APP_DIR + '/CNAME', to: BUILD_DIR},
            {from: APP_DIR + '/favicon.ico', to: BUILD_DIR},
        ], {
            copyUnmodified: false,
            debug: 'debug'
        })
    ]
};

module.exports = config;
