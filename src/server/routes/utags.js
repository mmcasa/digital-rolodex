const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/tags', function (req, res, next) {
  // redirect to dashboard
  res.redirect('/users/:user');
});


module.exports = router;
