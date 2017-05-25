const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './',
    stats: 'errors-only',
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  entry: {
    app: ['./javascripts/index.js'],
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
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:5].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['node_modules'],
    alias: {
      img: path.join(__dirname, 'img'),
      components: path.join(__dirname, 'javascripts/components'),
      clients: path.join(__dirname, 'javascripts/clients'),
      pages: path.join(__dirname, 'javascripts/pages'),
      utils: path.join(__dirname, 'javascripts/utils'),
    },
  },
  plugins: [new ExtractTextPlugin('./stylesheets/[name].css')],
}
