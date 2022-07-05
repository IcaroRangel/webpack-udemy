const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH = {
  dist: path.resolve(__dirname, 'dist'),
};

module.exports = {
  entry: {
    index: { import: './src/index.js', dependOn: 'shared' },
    calc: { import: './src/calc.js', dependOn: 'shared' },
    shared: 'lodash',
  },
  output: {
    filename: '[name].[contenthash].js?',
    path: PATH.dist,
    // publicPath: '/',
  },
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8000,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js?$/,
        // use: 'ts-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      // {
      //   test: /\.html$/,
      //   use: ['html-loader'],
      // },
      {
        test: /\.txt$/,
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('1.0.2'),
      PORT: 8080,
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new DotenvPlugin(),
  ],
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js'],
  // },
};
