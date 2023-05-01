const { merge } = require('webpack-merge')
const path = require('path')

const commonConfig = require('./webpack.common')
const { PORT } = require('./constants')

const publicPath = 'auto'

const devConfig = {
  mode: 'development',
  devServer: {
    port: PORT,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: [path.resolve(__dirname, './src')],
    open: false,
    hot: true,
    liveReload: true,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  },
  output: {
    publicPath,
  },
  devtool: 'source-map',
}

module.exports = merge(commonConfig, devConfig)
