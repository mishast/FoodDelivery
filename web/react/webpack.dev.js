const merge = require("webpack-merge");
const webpack = require('webpack');

const webpackCommon = require("./webpack.common");

module.exports = merge.smart(webpackCommon, {
	mode: 'development',
	devtool: 'eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: './dist',
		hot: true,
	},
});
