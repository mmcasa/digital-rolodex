const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/about', function (req, res, next) {
  // render about page, should send logged in user info
  res.render('about');
});

module.exports = router;
