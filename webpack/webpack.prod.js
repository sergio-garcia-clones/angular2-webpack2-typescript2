const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const loaders = require('./webpack-loaders');

// Plugins
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OfflinePlugin = require('offline-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const METADATA = webpackMerge(commonConfig.metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: false
});


module.exports = env => {


  let config = webpackMerge(commonConfig, {

    entry: {
      'app': (env && env.aot) ? './src/app/bootstrap.aot.ts' : './src/app/bootstrap.ts'
    },

    metadata: METADATA,
    debug: false,
    //devtool: 'source-map',
    output: {
      path: helpers.root('dist/public'),
      filename: 'assets/app/[name].[chunkhash].bundle.js',
      //sourceMapFilename: 'assets/app/[name].[chunkhash].bundle.map',
      chunkFilename: 'assets/app/[id].[chunkhash].chunk.js'
    },

    module: {


      loaders: [
        loaders.TypescriptLoader({ aot: env && env.aot ? true : false }),
        loaders.JsonLoader(),
        loaders.CssLoader(),
        loaders.FontLoader(),
        loaders.HtmlLoader(),
        loaders.SassLoader(),
        loaders.SvgLoader()
      ]

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
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),



      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
        chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'app']),
        filename: 'index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyCSS: true
        }
      }),



      new CompressionPlugin({
        regExp: /\.css$|\.html$|\.js$|\.woff$|\.map$/,
        threshold: 2 * 1024
      }),

      new OfflinePlugin({
  
        caches: {
          main: [
            'index.html', 
            'assets/app/*.js', 'assets/app/*.woff',
            'assets/img/*.png', 'assets/img/*.jpg'
            ]
        },

        publicPath: '/',
        safeToUseOptionalCaches: true,
        updateStrategy: 'all',
        relativePaths: false,
        version: 'material-[hash]' + new Date().getTime(),
        excludes: [
          '**/*.gz',
          '**/*.map'
        ],
        ServiceWorker: {
          output: 'serviceworker.js',
          events: true,
          entry: helpers.root('src/sw.js')
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