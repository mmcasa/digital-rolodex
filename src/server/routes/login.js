const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/login', function (req, res, next) {
  // route code here
  res.render('login');
});

module.exports = router;
