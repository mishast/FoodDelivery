const webpack = require("webpack");
const merge = require("webpack-merge");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackCommon = require("./webpack.common");

module.exports = merge.smart(webpackCommon, {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					mangle: {
						keep_fnames: true
					}
				}
			})
		],
		runtimeChunk: true,
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor_app",
					chunks: "all",
					minChunks: 2
				}
			}
		}
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new OptimizeCssAssetsPlugin()
	],
	devServer: {
		contentBase: './dist',
	},
});
