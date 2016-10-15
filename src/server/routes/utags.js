const express = require('express');
const router = express.Router({
  mergeParams: true
});


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/tags/:tags', function (req, res, next) {
  // adds user tag to created tag table
  res.redirect('/');
});

router.get('/tags/:tags/new', function (req, res, next) {
  // adds user tag to created tag table
  res.render('tags/new');
});

router.get('/tags/:tags/edit', function (req, res, next) {
  // updates user tag from created tag table
  res.render('tags/edit');
});

router.get('/tags/:tags/delete', function (req, res, next) {
  // displays delete confirmation page
  res.render('tags/delete');
});

router.post('/utags/create', function (req, res, next) {
  // adds user tag to created tag table
  res.redirect('/users/:user');
});

router.patch('/utags/create', function (req, res, next) {
  // edits user tag from created tag table
  res.redirect('/users/:user');
});

router.delete('/utags/create', function (req, res, next) {
  // deltes user tag from created tag table
  res.redirect('/users/:user');
});

router.post('/utags/assign', function (req, res, next) {
  // adds relation ship in the creates tags and contacts table
  res.redirect('/users/:user');
});

router.patch('/utags/assign', function (req, res, next) {
  // deletes relationship then fills in the new one
  res.redirect('/users/:user');
});

router.delete('/utags/assign', function (req, res, next) {
  // deletes relationship
  res.redirect('/users/:user');
});


module.exports = router;
