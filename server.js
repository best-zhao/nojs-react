var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  noInfo: false,
  historyApiFallback: true
})
// console.log(app.app)
app.app.get('/ajax', function(req, res){
    res.send({
        status : 1,
        data : {}
    })
})
app.listen(4000, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:4000');
});

