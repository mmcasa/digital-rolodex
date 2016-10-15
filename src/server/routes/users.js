const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/users', function (req, res, next) {
  // redirect to dashboard
  res.redirect('/users/:user');
});

router.get('/users/:user', function (req, res, next) {
  // dashboard
  res.render('dashboard');
});

//This is an authentication route
router.post('/users', function (req, res, next) {
  // add to users table
  res.redirect('/users/:user');
});


module.exports = router;
