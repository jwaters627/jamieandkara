var path =require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/entry.js',
	output: {path: __dirname, filename: './dist/bundle.js'},
  plugins: [
    new webpack.DefinePlugin({
      // A common mistake is not stringifying the "production" string.
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
	module: {
		loaders: [
		{
			test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0&plugins[]=transform-decorators-legacy&plugins[]=transform-runtime'
		},
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
      {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
          loaders: [
            'file-loader?name=dist/img/[name].[ext]'
          ]}]
	}
	}