const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].chunk.js',
    path: 'dist'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader']},
      {test: /\.html$/, loaders: ['html-loader']},
      {test: /\.css$/, loaders: ['style','css','sass']},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
      head: 'app-shell.css'
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendors', 'main', 'inline'],
    //   minChunks: Infinity
    // })
  ],
  devtool: 'hidden-source-map'
}
