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
const ForkCheckerPlugin       = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const DefinePlugin            = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin      = require('webpack/lib/NamedModulesPlugin');


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

        // File name as module name - we want to avoid module.id
        // https://github.com/webpack/webpack/commit/a04ffb928365b19feb75087c63f13cadfc08e1eb
        new NamedModulesPlugin(),

        new HtmlWebpackPlugin({
            template: 'src/frontend/index.ejs',
            chunksSortMode: 'dependency',
            filename: 'index.html'
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
      global: 'window',
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

});
module.exports = config;

console.log(config);