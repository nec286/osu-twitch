const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      mangle: false,
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ]
});

// /home/nec286/code/osu-twitch/node_modules/core-js/modules/es6.promise.js
