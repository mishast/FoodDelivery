const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
					loader: "babel-loader"
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
