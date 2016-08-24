var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: path.join('js', 'bundle.js')
  },
  resolveLoader: { root: path.join(__dirname, "node_modules") },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-export-extensions'],
      },
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, 'src', 'styles'),
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({ _: 'lodash'})
  ]
}