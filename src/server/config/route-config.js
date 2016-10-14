(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const about = require('../routes/about');
    const index = require('../routes/index');
    const login = require('../routes/login');
    const signup = require('../routes/signup');
    const users = require('../routes/users');

    // *** register routes *** //
    app.use('/', routes);
    app.use(about);
    app.use(index);
    app.use(login);
    app.use(signup);

  };

})(module.exports);
