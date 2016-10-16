const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/signup', function (req, res, next) {

  // sign up form
  res.render('signup');
});

module.exports = router;
