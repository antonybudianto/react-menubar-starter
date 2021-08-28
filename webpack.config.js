module.exports = {
  stats: "minimal",
  entry: {
    web: __dirname + "/src/index.js",
  },
  output: {
    path: __dirname + "/lib",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
};
