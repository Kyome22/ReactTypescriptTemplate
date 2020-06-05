const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src", "Index", "index.tsx"),
    articles: path.resolve(__dirname, "src", "Articles", "articles.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: path.resolve(__dirname, "static", "index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "articles.html",
      chunks: ["articles"],
      template: path.resolve(__dirname, "static", "articles.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "static", "images"),
          to: path.resolve(__dirname, "dist", "images"),
        },
      ],
    }),
    new WriteFilePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
