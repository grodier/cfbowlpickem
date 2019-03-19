const webpack = require('webpack');

const webpackConfig = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: '../dist',
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = webpackConfig;
