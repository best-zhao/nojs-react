var webpack = require('webpack');
module.exports = {
  entry:{
    index:[
      'webpack-dev-server/client?http://127.0.0.1:4000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './examples/js/index.js'
    ]
  },
  output: {
    path: __dirname + '/examples/dist/',
    publicPath: "/examples/dist/",
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      nj: __dirname+'/lib'
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      //react-hot!jsx-loader?harmony
      loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.(css)$/,
      loader: 'style-loader?insertAt=top!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
};