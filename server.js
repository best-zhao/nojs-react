var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var app = new WebpackDevServer(webpack(config), {
  publicPath: 'http://127.0.0.1:4000/docs/dist/',
  hot: true,
  inline: true,
  noInfo: false,
  historyApiFallback: true
})
// console.log(app)
// app.app.use(app.app._router);
// app.app.get('/ajax', function(req, res){
//     res.send("respond with a resource");
// })
app.listen(4000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:4000');
});


