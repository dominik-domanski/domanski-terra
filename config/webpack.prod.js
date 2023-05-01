const { merge } = require('webpack-merge')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const commonConfig = require('./webpack.common')
const { PORT } = require('./constants')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: PORT,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

module.exports = merge(commonConfig, prodConfig)
