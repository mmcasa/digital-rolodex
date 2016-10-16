const express = require('express');
const router = express.Router({
  mergeParams: true
});
const knex = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/companies', function (req, res, next) {
  // shows all the companies
  res.render('companies/index');
});

router.get('/companies/:company', function (req, res, next) {
  // shows single company and all contacts that work there
  res.render('companies/single');
});


module.exports = router;
