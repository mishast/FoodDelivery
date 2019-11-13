const merge = require('webpack-merge');
const webpack = require('webpack');

const webpackCommon = require('./webpack.common');

const clientConfig = merge.smart(webpackCommon.clientConfig, {
	mode: 'development',
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
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
				test: /\.css$/,
				loader: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: './dist/public',
		hot: true
	}
});

const serverConfig = merge.smart(webpackCommon.serverConfig, {
	mode: 'development',
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				loader: ['null-loader']
			},
			{
				test: /\.css$/,
				loader: ['null-loader']
			}
		]
	}
});

module.exports = [clientConfig, serverConfig];
