var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: {
    app: ['webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/index.js']
  },
  output: {
    path: path.join(__dirname + '/public/'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass?outputStyle=expanded']
      }
    ]
  }
}
