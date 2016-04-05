var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var app = express()

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  noInfo: false,
  historyApiFallback: true
}).listen(4000, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:4000');
});

// app.get('/aj', function(req, res){
//     res.send({
//         status : 1,
//         data : {}
//     })
// })