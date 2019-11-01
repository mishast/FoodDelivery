const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackCommon = require('./webpack.common');

const config = merge.smart(webpackCommon, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
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
				test: /\.less$/,
				loader: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					{
						loader: 'less-loader',
						options: {
							sourceMap: false
						}
					}
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
		contentBase: './dist',
		hot: false
	}
});

module.exports = config;
