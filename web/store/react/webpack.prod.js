const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackCommon = require('./webpack.common');

const clientConfig = merge.smart(webpackCommon.clientConfig, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: false
						}
					}
				]
			},
			{
				test: /\.css$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
		usedExports: true,
		sideEffects: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	devServer: {
		contentBase: './dist/public',
		hot: false
	}
});

const serverConfig = merge.smart(webpackCommon.serverConfig, {
	mode: 'production',
	devtool: 'source-map',
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
	},
	optimization: {
		minimize: false
	},
	plugins: []
});

module.exports = [clientConfig, serverConfig];
