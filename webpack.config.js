var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/entry.jsx'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less?$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  }
}