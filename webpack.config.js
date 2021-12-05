const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "worker.js",
    path: path.join(__dirname, "dist"),
  },
  devtool: "cheap-module-source-map",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: { path: require.resolve("path-browserify") },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          // transpileOnly is useful to skip typescript checks occasionally:
          // transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BUILD_DATE": JSON.stringify(process.env.BUILD_DATE),
      "process.env.GITHUB_TOKEN": JSON.stringify(process.env.GITHUB_TOKEN),
    }),
  ],
};
