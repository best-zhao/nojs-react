var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = 4000

new WebpackDevServer(webpack(config), {
  publicPath: 'http://127.0.0.1:'+port+'/docs/dist/',
  hot: true,
  inline: true,
  noInfo: false,
  historyApiFallback: true
})
.listen(port, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:'+port);
});


