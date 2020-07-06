const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
  	path: path.resolve(__dirname, 'dist'),
  	filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 5000
  },
  module: {
    rules: [
    {
      test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ], 
      },
    ],
  },
  plugins: [
  	new htmlWebpackPlugin({
  	  template: './src/index.html'	
  	})
  ]			
}