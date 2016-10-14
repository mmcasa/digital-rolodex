const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/', function (req, res, next) {
  res.redirect('/login');
});

module.exports = router;
