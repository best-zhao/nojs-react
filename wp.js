var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry:{
    seed : './examples/js/seed.js',
    index : './examples/js/index.js'
  },
  output: {
    path: __dirname + '/examples/dist/',
    publicPath: "/examples/dist/",
    filename: '[name].bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({
        name: "seed",
        filename : 'seed.js'
    })
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