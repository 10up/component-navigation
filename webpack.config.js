const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
	entry: [
		'./src/index.js',
		'./src/style.css'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'component-name.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'component-name.css'
		}),
		new BrowserSyncPlugin({
			host: '0.0.0.0',
			port: 3000,
			proxy: 'http://0.0.0.0:8080/',
			notify: false
		},{
			reload: false
		})
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	}
};

