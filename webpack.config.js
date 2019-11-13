const path = require("path")
const HtmlWebpack = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpack({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html")
    })
  ]
}
