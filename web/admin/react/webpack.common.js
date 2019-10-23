const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist/'),
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
						"presets": [
							["@babel/preset-env", {
								"targets": {
									"browsers": [
										">0.25%",
										"not ie 11",
										"not op_mini all"
									]
								}
							}],
							"@babel/preset-react"
						]
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
		})
	]
};

module.exports = config;