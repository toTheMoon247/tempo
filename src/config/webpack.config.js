const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../tempo-web/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../tempo-web/dist"),
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, "../tempo-web/dist"),
    hot: true,
    historyApiFallback: true
  },
};