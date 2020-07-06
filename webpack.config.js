const path = require('path')
const webpack = require('webpack')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = () => {
  const config = {
    entry: 'index.ts',
    resolveLoader: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    context: path.resolve(__dirname, './src'),
    devtool: 'eval',
    devServer: { disableHostCheck: true, host: '0.0.0.0', historyApiFallback: true },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.ts?$/,
          exclude: [/(\.d\.ts)/, /node_modules/],
          use: {
            loader: 'ts-loader'
          },
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [new TSConfigPathsPlugin()]
    },
    output: {
      filename: 'index.min.js',
      path: path.resolve(__dirname, 'dist'),
    }
  }
  return config
}
