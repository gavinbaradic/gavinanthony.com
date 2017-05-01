const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './public'),
    stats: 'errors-only',
  },
  entry: {
    app: ['./webpack/javascripts/index.js'],
  },
  output: {
    filename: './javascripts/[name].js',
    path: path.join(__dirname, '/public/assets'),
    publicPath: 'https://localhost:8080/assets/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true }
            },
            'postcss-loader',
            'sass-loader',
          ]
        })
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['node_modules'],
  },
}
