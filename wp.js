var webpack = require('webpack');
module.exports = {
  entry:{
    index:[      
      './examples/js/index.js'
    ]
  },
  output: {
    path: __dirname + '/examples/dist/',
    publicPath: "/examples/dist/",
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      nj: __dirname+'/lib'
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=react,presets[]=es2015'
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