const path = require('path');
const webpack = require('webpack');

const root = path.join.bind(path, __dirname);

module.exports = {
	entry: {
    viewer: root('src/viewer.js'),
    settings: root('src/settings.js')
  },
	output: {
    path: root('assets/js'),
		filename: '[name].min.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
      include: [ root('src') ]
		}, {
      test: /\.scss|\.css$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
    	test: /\.svg$/,
      loader: 'svg-url-loader'
    }]
	},
	resolve: {
		modules: [
			path.resolve('./node_modules'),
			path.resolve('./src')
		],
		alias: {
			react: 'inferno-compat',
			'react-dom': 'inferno-compat'
		}
	},
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
};
