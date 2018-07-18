const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

var config = {
   entry: './src/index.js',
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },
         {
            test: /\.scss$/,
            use: [{
              loader: "style-loader"
            }, {
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }]
        }
      ]
   },

    plugins: [htmlPlugin]

}
module.exports = config;
