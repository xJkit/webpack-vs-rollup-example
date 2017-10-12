const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.webpack.js',
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
  ],
};
