const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ comments: false, compress: { warnings: false, drop_console: true } })
  ]
});
