const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/about', function (req, res, next) {
  // route code here
  res.render('about');
});

module.exports = router;
