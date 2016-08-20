/********************************************
 * Webpack development configuration
 * ****************************************** */

'use strict';
var path                    = require('path');
var webpackMerge            = require('webpack-merge');
var helpers                 = require('./helpers');
var loaders                 = require('./webpack-loaders');
var commonConfig            = require('./webpack.common.js')



// Webpack plugins
var ForkCheckerPlugin       = require('awesome-typescript-loader').ForkCheckerPlugin;
var HtmlWebpackPlugin       = require('html-webpack-plugin');

var DefinePlugin            = require('webpack/lib/DefinePlugin');


// Constants
var ENV = process.env.ENV = process.env.NODE_ENV = 'development';
var HMR = helpers.hasProcessFlag('hot');
var METADATA = webpackMerge(commonConfig.metadata, {
  host: '0.0.0.0',
  port: 8080,
  ENV: ENV,
  HMR: HMR
});


var config = webpackMerge(commonConfig, {
    metadata: METADATA,
    debug: true,
    devtool: 'cheap-module-source-map',

    output: {
       path: helpers.root('dist/frontend'),
       filename: '[name].bundle.js',
       sourceMapFilename: '[name].map',
       chunkFilename: '[id].chunk.js'
    },


     plugins: [

        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'DEBUG': true,
            'HMR': METADATA.HMR,
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR,
            }
        }),


         new HtmlWebpackPlugin({
            template        : 'src/frontend/index.ejs',
            chunksSortMode  : helpers.packageSort(['polyfills', 'vendor', 'app']),
            filename        : 'index.html'
        })

    ],



    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },

         proxy: {
            '/api/*': {
                target: 'http://backend:5000',
                secure: false
            }
        },

        outputPath: helpers.root('dist/frontend')
    },

     node: {
      global: true,
      process: true,
      Buffer: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false,
      clearTimeout: true,
      setTimeout: true
    }

});
module.exports = config;