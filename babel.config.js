const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'public/app')
  //build: path.join(__dirname, 'build')
};

module.exports = {
  entry: [
    './public/app/index.js'
  ],
  output: {
    path: __dirname + '/public/dist/js',
    // publicPath: '/public/dist/js/',
    filename: 'bundle.js'

    // filename: process.env.NODE_ENV !== 'development' ? '[name].js' : '[name]-[hash].js',
    // chunkFilename: process.env.NODE_ENV !== 'development' ? '[name].js' : '[name]-[chunkhash].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint'],
        // define an include so we check just the files we need
        include: [PATHS.app]
      }
    ],
    loaders: [
      {
        debug: true,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss-loader!sass'),
        debug: true
      }]
  },
  postcss: function () {
    return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  stats: {
    assets: true,
    colors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: true,
    chunkModules: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: __dirname + '/public/app/index.html'
    }),
    new ExtractTextPlugin('../css/style.css', {
      allChunks: true
    }),
    new LiveReloadPlugin({
      appendScriptTag: process.env.NODE_ENV === 'development'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
