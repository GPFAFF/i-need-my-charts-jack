const path = require('path');

module.exports = {
  context: __dirname + '/app',

  entry: {
    javascript: './js/app.jsx',
    html: './index.html',
  },

  output: {
    filename: 'js/app.js',
    path: __dirname + '/dist',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './app/js'),
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
  },
}
