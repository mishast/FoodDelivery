const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const clientConfig = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist/public'),
		publicPath: '/static',
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
		new CopyWebpackPlugin([
			{from: 'src/assets/img', to:'img'}
		]),
		new HtmlWebpackPlugin({
			title: 'FoodDelivery - delicious food within minutes',
			template: './src/index.html'
		})
	]
};

const serverConfig = {
	entry: './src/server.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js'
	},
	node: {
		__dirname: false,
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						"presets": [
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
	plugins: []
};

module.exports = {
	clientConfig,
	serverConfig
};
