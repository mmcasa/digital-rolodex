(function(appConfig) {

  'use strict';

  // *** main dependencies *** //
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const session = require('express-session');
  const flash = require('connect-flash');
  const morgan = require('morgan');
  const ejs = require('ejs');
  const methodOverride = require('method-override');


  // *** load environment variables *** //
  require('dotenv').config();

  appConfig.init = function(app, express) {

    // *** view engine *** //
    app.set('view engine', 'ejs');
    app.set('views', (path.join(__dirname, '..', 'views')));

    // *** app middleware *** //
    if (process.env.NODE_ENV !== 'test') {
      app.use(morgan('dev'));
    }
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    // uncomment if using express-session
    app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true
    }));
    app.use(flash());
    app.use(express.static(path.join(__dirname, '..', '..', 'client')));

  };

})(module.exports);
