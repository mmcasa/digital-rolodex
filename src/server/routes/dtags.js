const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.post('/dtags/assign', function (req, res, next) {
  // adds relation ship in the default tags and contacts table
  res.redirect('/users/:user');
});

router.patch('/dtags/assign', function (req, res, next) {
  // deletes relationship then fills in the new one
  res.redirect('/users/:user');
});

router.delete('/dtags/assign', function (req, res, next) {
  // deletes relationship
  res.redirect('/users/:user');
});


module.exports = router;
