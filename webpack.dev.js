const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    publicPath: '/assets/js/',
    port: 3000,
    noInfo: false,
    hot: true,
    inline: true,
    public: 'twitch.local'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
