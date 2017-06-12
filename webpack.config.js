const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const chunkFile = isProd ? '[name].[chunkhash]' : '[name]'
const hashFile = isProd ? '[name].[hash:5]' : '[name]'

const htmlConfig = {
  title: 'Gavin Anthony',
  favicon: 'src/img/favicon.png',
  template: 'index.ejs',
}

const htmlConfig404 = Object.assign({}, htmlConfig, {
  filename: '404.html',
})

module.exports = {
  devtool: isProd ? 'cheap-module-source-map' : 'eval-source-map',

  devServer: {
    contentBase: './',
    stats: 'errors-only',
    headers: { 'Access-Control-Allow-Origin': '*' },
  },

  entry: {
    app: ['./src/javascripts/index.js'],
    vendor: [
      'axios',
      'lost',
      'prop-types',
      'react-dom',
      'react-ga',
      'react-router-dom',
      'react-svg-inline',
      'react-tilt',
      'react',
    ],
  },

  output: {
    filename: `javascripts/${chunkFile}.js`,
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
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
        test: /\.(jpg|jpeg|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `[path]${hashFile}.[ext]`,
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
              name: `[path]${chunkFile}.[ext]`,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['node_modules'],
    alias: {
      img: path.join(__dirname, 'src/img'),
      components: path.join(__dirname, 'src/javascripts/components'),
      clients: path.join(__dirname, 'src/javascripts/clients'),
      pages: path.join(__dirname, 'src/javascripts/pages'),
      utils: path.join(__dirname, 'src/javascripts/utils'),
    },
  },

  plugins: [
    new ExtractTextPlugin(`stylesheets/${chunkFile}.css`),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new HtmlWebpackPlugin(htmlConfig),
    new HtmlWebpackPlugin(htmlConfig404),
  ],
}
