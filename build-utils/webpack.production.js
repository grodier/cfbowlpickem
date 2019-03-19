const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      //chunkFilename: "[id].css"
    }),
  ],
};

module.exports = webpackConfig;
