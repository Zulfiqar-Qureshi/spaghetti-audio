const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SpaghettiAudio',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
}