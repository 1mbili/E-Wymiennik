var path = require("path");

module.exports = {
  mode: "development",
  entry: "./app.js",
  devtool: "source-map",
  cache: true,
  output: {
    path: __dirname,
    filename: "../resources/static/built/bundle.js",
  },

  module: {
    rules: [
      {
        test: path.join(__dirname, "."),
        include: [path.resolve(__dirname, ".")],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
