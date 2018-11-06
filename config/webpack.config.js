const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    /**
     * ! link https://juejin.im/entry/5b50518bf265da0f6436c34a
     * ! link https://www.thinktxt.com/react/2017/02/26/react-router-browserHistory-refresh-404-solution.html
     */
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /public/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'zero to one',
      template: path.resolve(__dirname, '..', 'public/template.html'),
      filename: path.resolve(__dirname, '..', 'dist/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
