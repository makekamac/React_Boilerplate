module.exports ={
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  module:{
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader"
        }
      }
    ]
  }
}