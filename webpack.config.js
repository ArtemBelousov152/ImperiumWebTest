'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,
  devtool: "source-map",
};