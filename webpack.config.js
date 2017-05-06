var webpack = require('webpack')
var path = require('path')
var envFile = require('node-env-file')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (err) {

}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals : {
    jquery: 'jQuery'
  },
  // makes sure we don't have to include jQuery in every single module
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      // minimize: true,
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    })
  ],  
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    // loaders tell webpack what to do with odd files
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        // apply to every file ending in .jsx
        test: /\.jsx?$/,
        // UNLESS they're in either of these folders
        exclude: /(node_modules|bower_components)/
      },
      // load fonts
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      // load images
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'source-map'
}
