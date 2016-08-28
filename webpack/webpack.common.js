'use strict';

var path      = require('path');
var webpack   = require('webpack');
var helpers   = require('./helpers');
var loaders   = require('./webpack-loaders');

// Webpack Plugins
var CopyWebpackPlugin   = require('copy-webpack-plugin');
var ForkCheckerPlugin   = require('awesome-typescript-loader').ForkCheckerPlugin;

// Constants
var METADATA = {
  title: 'Angular2'
};

module.exports = {
  metadata  : METADATA,
  cache     : true,
  entry     : {
    'polyfills': './src/frontend/app/polyfills.ts',
    'vendor': './src/frontend/app/vendors.ts',
    'app': './src/frontend/app/bootstrap.ts'
  },

  resolve: {
    modules: [
      helpers.root('src/frontend/app'),
      'node_modules'
    ],
    extensions        : ['', '.ts', '.js'],
    enforceExtension  : false,
    alias             : {
        'common'  : 'shared',
        'shared'  : 'shared',
        'root'    : 'root'
    }
  },

  module: {
    exprContextRequest: helpers.root('src/frontend/app'),
    exprContextRegExp: /.*\.ts/,
    exprContextCritical: false,

    /*
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          helpers.root('node_modules/rxjs')
        ]
      },
       { test: /\.d\.ts$/, loader: 'ignore-loader' },
    ],
    */
    loaders: [
        loaders.TypescriptLoader(),
        loaders.ImageLoader(),
        loaders.JsonLoader(),
        loaders.CssLoader(),
        loaders.FontLoader(),
        loaders.HtmlLoader(),
        loaders.SassLoader(),
        loaders.SvgLoader()
    ]
  },


  plugins: [

    //  Do type checking in a separate process, so webpack don't need to wait.
    new ForkCheckerPlugin(),

    // Shares common code between the pages.
    new webpack.optimize.CommonsChunkPlugin({
      name: helpers.reverse(['polyfills', 'vendor'])
    }),

    new CopyWebpackPlugin([
        { from: 'src/frontend/assets', to: 'assets' },
        { from: 'src/frontend/*.txt', flatten: true },
        { from: 'src/frontend/manifest.json', flatten: true}
    ])

  ],

  node: {
    global  : 'window',
    crypto  : 'empty',
    module  : false,
    clearImmediate  : false,
    setImmediate    : false
  }

};