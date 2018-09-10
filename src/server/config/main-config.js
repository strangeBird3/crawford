(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
  
  // Other deps
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('../../../webpack.config.js');
  const history = require('connect-history-api-fallback');


  // *** load environment variables *** //
  appConfig.init = function(app, express) {

    
    app.set('view engine', 'html');

    // *** app middleware *** //
   /* if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    } */
    app.use(history());
    app.use(webpackDevMiddleware(webpack(webpackConfig)));
    app.use(express.static(path.join(__dirname, '..', '..', 'client', 'public')));

  };

})(module.exports);
