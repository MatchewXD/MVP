const path = require("path");
const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/public");
const HtmlWebPackPlugin = require("html-webpack-plugin");



module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: `${DIST_DIR}/index.html`
  //   })
  // ],
  mode: 'development'
};