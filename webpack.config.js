var path = require('path');
var webpack = require('webpack');

// Export a configuration object
module.exports = {
  // First property references the entry file. Then specify the output file.
  entry: './index', // actual entry point.
  output: {
    path: path.resolve(__dirname),
    publicPath: 'http://127.0.0.1:8080',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  devtool: 'source-map',
  // Tell webpack to take .jsx file and pass them to Bable for transpiling.
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // RegEx that webpack uses to determine if .js/.jsx files should be transpiled.
        loader: 'babel-loader', // Loader to be used. Must be installed.
        exclude: /node_modules/ // exclude node modules.
      },
      {
        test: /\.scss$/,
        loaders:['style', 'css?sourceMap', 'sass?sourceMap'], // utilizing source map options for css debugging in dev tools. Displays source file for given css selector or element.
        resolve: {
          alias: {
            images: path.join(__dirname, 'public/images')
          }
        }
      }
    ]
  }
}
