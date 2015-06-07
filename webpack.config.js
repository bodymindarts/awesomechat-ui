var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: {
    app: ['webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './app/index.js']
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
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'app')
    }]
  }
}
