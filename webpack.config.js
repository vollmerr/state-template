const path = require('path');

// Used by styleguidist server
module.exports = {
  entry: './src/lib/index.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'state-template': path.join(path.join(__dirname, 'src/lib/')),
    },
  },
};
