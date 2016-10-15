const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/signup', function (req, res, next) {
  // sign up form
  res.render('signup');
});

router.post('/users', function (req, res, next) {
  // add to users table
  res.redirect('/users/:user');
});

module.exports = router;
