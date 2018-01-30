const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成加载资源文件的 html
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template:  path.resolve(__dirname, './public/index.html')
		})
	]
};