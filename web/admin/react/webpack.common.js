const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							["@babel/preset-env", {
								"targets": {
									"browsers": [
										">0.25%",
										"not ie 11",
										"not op_mini all"
									]
								},
								"useBuiltIns": "usage",
								"corejs": 3
							}],
							"@babel/preset-react"
						],
						plugins: [
							[
								"@babel/plugin-proposal-class-properties"
							]
						],
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.css', '.scss']
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Hello Webpack bundled JavaScript Project',
			template: './src/index.html'
		}),
		new CopyWebpackPlugin([
			{from:'src/assets',to:''}
		]),
	]
};

module.exports = config;
