const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.webpack.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
  ],
};
