const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  res.redirect('/login');
});

module.exports = router;
