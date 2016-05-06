var ExtractText = require('extract-text-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');

var webpackOptions = {
    entry: './main.js',
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

new WebpackDevServer(webpackOptions, {
    proxy: {
        '/api/*': 'http://localhost:8091/'
    }
}).listen(8090, 'localhost', function(err) {

});
