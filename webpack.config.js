var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app.js',
	output: {
		filename: 'bundle.js',
		publicPath: 'http://localhost:8090/assets'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			},
			{
				test: /\.less$/,
				loader: ExtractText.extract('style-loader', 'css-loader!less-loader')
			}
		]
	},
	plugins: [
		new ExtractText('styles.css')
	]
};

