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
  res.render('users/dashboard');
});

router.get('/users/:user/account', function (req, res, next) {
  // user profile information
  res.render('users/account');
});

router.get('/users/:user/edit', function (req, res, next) {
  // edit user profile information
  res.render('users/edit');
});

router.get('/users/:user/delete', function (req, res, next) {
  // show delete confirmation page
  res.render('users/delete');
});

router.post('/users', function (req, res, next) {
  // add to users table from signup
  res.redirect('/users/:user');
});

router.patch('/users/:user', function (req, res, next) {
  // add to users table
  res.redirect('/users/:user');
});

router.delete('/users/:user', function (req, res, next) {
  // add to users table
  res.redirect('/users/:user');
});


module.exports = router;
