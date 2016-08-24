var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var entrys = {
  'seed' : './examples/js/seed.js',
  'index' : './examples/js/index.js',
  'admin' : './examples/js/Admin/index.js'
}
for( var i in entrys ){
  entrys[i] = [
    'webpack-dev-server/client?http://127.0.0.1:4000','webpack/hot/only-dev-server', entrys[i]
  ]  
}
module.exports = {
  entry:entrys,
  output: {
    path: __dirname + '/examples/dist/',
    publicPath: "/examples/dist/",
    filename: '[name].bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({
        name: "seed",
        filename : 'seed.js'
    }),
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