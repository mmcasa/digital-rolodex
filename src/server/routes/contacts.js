const express = require('express');
const router = express.Router({
  mergeParams: true
});
const knex = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/contacts', function (req, res, next) {
  // redirect to dashboard
  res.redirect('/users/:user');
});

router.get('/contacts/:contact', function (req, res, next) {
  // shows a single contact, with a edit and delete button
  res.render('contacts/single');
});

router.get('/contacts/:contact/edit', function (req, res, next) {
  // shows and edit form with data populated
  res.render('contacts/edit');
});

router.get('/contacts/:contact/delete', function (req, res, next) {
  // shows delete confirmation page
  res.render('contacts/delete');
});

router.patch('/contacts/:contact', function (req, res, next) {
  // update contact in contact table and redirect to that contact
  res.redirect('/contacts/:contact');
});

router.patch('/contacts/:contact', function (req, res, next) {
  // deletes contact and goes back to user dashboard
  res.redirect('/users/:user');
});

module.exports = router;
