const merge = require("webpack-merge");
const webpack = require('webpack');

const webpackCommon = require("./webpack.common");

module.exports = merge.smart(webpackCommon, {
	mode: 'development',
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				loader: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: './dist',
		hot: true,
	},
});
