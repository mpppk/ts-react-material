const webpack = require('webpack');

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "./src/index.tsx"
    ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/,
        loader: [
          "react-hot-loader/webpack",
          "awesome-typescript-loader"
        ]
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    ],


  // target: "web",
};
