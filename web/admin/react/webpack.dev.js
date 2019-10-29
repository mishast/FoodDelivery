const merge = require('webpack-merge');
const webpack = require('webpack');

const webpackCommon = require('./webpack.common');

const config = merge.smart(webpackCommon, {
	mode: 'development',
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				loader: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.less$/,
				loader: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					{
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: './dist',
		hot: true,
		historyApiFallback: true
	}
});

module.exports = config;
