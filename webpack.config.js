"use strict";
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "./client/index.js",
    output: {
        path: path.join(__dirname, 'client'),
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: [/\.jsx?$/],
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/env', '@babel/react']
            }
          },
        }
      ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
};