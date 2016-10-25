var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var webpack = require('webpack');

// Plugins
var ProvidePlugin       = require('webpack/lib/ProvidePlugin');
var DefinePlugin        = require('webpack/lib/DefinePlugin');
var DedupePlugin        = require('webpack/lib/optimize/DedupePlugin');
var UglifyJsPlugin      = require('webpack/lib/optimize/UglifyJsPlugin');
var CompressionPlugin   = require('compression-webpack-plugin');
var WebpackMd5Hash      = require('webpack-md5-hash');
var OfflinePlugin       = require('offline-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');
const NamedModulesPlugin= require('webpack/lib/NamedModulesPlugin');




var ENV = process.env.NODE_ENV = process.env.ENV = 'production';
var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || 8080;

var METADATA = webpackMerge(commonConfig.metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: false
});


module.exports = env => {


    let config =  webpackMerge(commonConfig, {

      entry     : {
        'app': (env && env.aot) ? './src/frontend/app/bootstrap.aot.ts' : './src/frontend/app/bootstrap.ts'
      },

      metadata: METADATA,
      debug: false,
      //devtool: 'source-map',
      output: {
        path: helpers.root('dist/frontend'),
        filename: 'assets/app/[name].[chunkhash].bundle.js',
        //sourceMapFilename: 'assets/app/[name].[chunkhash].bundle.map',
        chunkFilename: 'assets/app/[id].[chunkhash].chunk.js'
      },

      plugins: [

        new DefinePlugin({
          'ENV': JSON.stringify(METADATA.ENV),
          'HMR': METADATA.HMR,
          'DEBUG': false,
          'process.env': {
            'ENV': JSON.stringify(METADATA.ENV),
            'NODE_ENV': JSON.stringify(METADATA.ENV),
            'HMR': METADATA.HMR,
          }
        }),

        new NamedModulesPlugin(),


        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),


        new WebpackMd5Hash(),

        // Prevent inclusion of duplicate code in the bundle
        // There is a bug in Webpack which breaks the build.. commented out for now
        // new DedupePlugin(),



        new UglifyJsPlugin({
        exclude: [
            'serviceworker.js',
            'manifest.appcache'
          ],
          beautify: false,
          mangle: {
            screw_ie8 : true,
            keep_fnames: true
          },
          compress: {
            screw_ie8: true
          },
          comments: false
        }),
       


        new HtmlWebpackPlugin({
          template        : 'src/frontend/index.ejs',
          chunksSortMode  : helpers.packageSort(['polyfills', 'vendor', 'app']),
          filename        : 'index.html',
          minify: {
            collapseWhitespace            : true,
            removeComments                : true,
            removeRedundantAttributes     : true,
            removeScriptTypeAttributes    : true,
            removeStyleLinkTypeAttributes : true,
            minifyCSS                     : true
          }
        }),



        new CompressionPlugin({
          regExp: /\.css$|\.html$|\.js$|\.woff$|\.map$/,
          threshold: 2 * 1024
        }),


        new OfflinePlugin({
          caches: 'all',
          publicPath: '/',
          updateStrategy: 'changed',
          version: 'material-' + new Date(),
          excludes: [
            '**/*.gz',
            '**/*.map'
          ],
          ServiceWorker: {
            output: 'serviceworker.js'
          },

          AppCache: {
            directory: '/'
          }
      })

      ],
    /*

      tslint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: 'src/frontend'
      },
      */

      /**
       * Html loader advanced options
       *
       * See: https://github.com/webpack/html-loader#advanced-options
       */
      // TODO: Need to workaround Angular 2's html syntax => #id [bind] (event) *ngFor


      node: {
        global: 'window',
        crypto: 'empty',
        process: false,
        module: false,
        clearImmediate: false,
        setImmediate: false
      }

    });
    console.log(config);
    return config;
};