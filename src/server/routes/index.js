const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');

router.get('/', function (req, res, next) {
  res.redirect('/login');
});

module.exports = router;
