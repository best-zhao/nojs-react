var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var rs = __dirname + '/docs'
var js = rs+'/script'
var config = require('./webpack.json')

var entrys = config.entry
for( var i in entrys ){
  entrys[i] = js+entrys[i]  
}


var resolve = config.resolve
resolve.alias.nj = __dirname+'/dist/lib'
resolve.alias.js = js
resolve.alias.css = rs+'/css'

module.exports = {
  entry:entrys,
  output: {
    path: rs+'/dist/',
    publicPath: '/docs/dist/',  
    filename: '[name].bundle.js',
    chunkFilename: "c/[name].bundle.js?t=[chunkhash]"
  },
  resolve: resolve,
  plugins: [
    new CommonsChunkPlugin({
        name: "seed",
        filename : 'seed.js'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
    
  ],  
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
      loader: 'file-loader?name=../img/lib/[hash:8].[name].[ext]'
    }]
  }
};