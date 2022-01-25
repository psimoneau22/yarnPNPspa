const path = require('path')

module.exports = env => ({
	mode: 'development',
	entry: {
		admin: './src/pages/admin/index.js',
		config: './src/pages/config/index.js',
		issue: './src/pages/issue/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name]'
				}
			},
			{
				test: /\.(html)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'name'
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
			commons: {
				name: 'vendor',
				chunks: 'initial',
				minChunks: 2,
			},
			},
		},
	},
});
