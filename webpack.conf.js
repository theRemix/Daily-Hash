const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
    path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
    publicPath: '/'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
		new webpack.HotModuleReplacementPlugin()
  ]
};
