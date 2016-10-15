const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/login', function (req, res, next) {
  // login form
  res.render('login');
});

router.post('/token', function (req, res, next) {
  // start session
  res.render('/users/:user');
});

module.exports = router;
