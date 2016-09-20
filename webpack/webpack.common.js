'use strict';

var path      = require('path');
var webpack   = require('webpack');
var helpers   = require('./helpers');
var loaders   = require('./webpack-loaders');

// Webpack Plugins
const CopyWebpackPlugin   = require('copy-webpack-plugin');
const ForkCheckerPlugin   = require('awesome-typescript-loader').ForkCheckerPlugin;


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
      extensions: ['', '.ts', '.js', '.json'],
      root: helpers.root('src/frontend'),
      modulesDirectories: ['node_modules'],
      alias             : {
        'common'  : 'shared',
        'shared'  : 'shared',
        'root'    : 'root'
    }
  },

  module: {
    //exprContextRequest: helpers.root('src/frontend/app'),
    //exprContextRegExp: /.*\.ts/,
    exprContextCritical: false,

     preLoaders: [
        {
          test: /\.ts$/,
          loader: 'string-replace-loader',
          query: {
            search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
            replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)',
            flags: 'g'
          },
          include: [helpers.root('src')]
        },

      ],

    loaders: [
        loaders.TypescriptLoader(),
        loaders.JsonLoader(),
        loaders.CssLoader(),
        loaders.FontLoader(),
        loaders.HtmlLoader(),
        loaders.SassLoader(),
        loaders.SvgLoader()
    ]
  },


  plugins: [

     new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname),

    //  Do type checking in a separate process, so webpack don't need to wait.
    new ForkCheckerPlugin(),

    // Shares common code between the pages.
    new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
    }),

    new CopyWebpackPlugin([
        { from: 'src/frontend/assets', to: 'assets' },
        { from: 'src/frontend/*.txt', flatten: true },
        { from: 'src/frontend/manifest.json', flatten: true}
    ])

  ],

   node: {
      global: 'window',
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

};