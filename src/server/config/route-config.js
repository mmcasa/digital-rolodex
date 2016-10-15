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
    const companies = require('../routes/companies');
    const newcontact = require('../routes/newcontact');
    const contacts = require('../routes/contacts');
    // default tags
    const dtags = require('../routes/dtags');
    // user-created tags
    const utags = require('../routes/utags');

    // *** register routes *** //
    app.use('/', routes);
    app.use(about);
    app.use(index);
    app.use(login);
    app.use(signup);
    app.use(users);
    app.use('/users/:user', companies);
    app.use('/users/:user', newcontact);
    // default tags
    app.use('/users/:user', dtags);
    // user-created tags
    app.use('/users/:user', utags);
    app.use('/users/:user/companies/:company', contacts);

  };

})(module.exports);
