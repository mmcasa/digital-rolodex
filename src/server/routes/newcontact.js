var vision = require('@google-cloud/vision')({
  projectId: 'business-card-reader-146419',
  keyFilename: '../../../business-card-reader-04f33d15ecb2.json'
});
const express = require('express');
const router = express.Router({
  mergeParams: true
});

const multer  = require('multer');
const upload = multer();
const knex = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

//this is the monster route it will need all the fancy forms and stuff so I made it its own route

router.get('/contacts/new', function (req, res, next) {
  let loggedInUser = req.session.user.id;
  // add contact form
  // will need to have a upload photo section that inserts to database then sends photo to google vision and retrieves data which then has to be returned to the form on the page correctly
  res.render('contacts/new', {user:loggedInUser});

});

router.post('/contacts', function (req, res, next) {
  // adds contact to contact table
  // takes info from company and adds it to the company table
  knex('contacts').insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_num: req.body.phone_num,
    linkedin_url: req.body.linkedin_url,
    twitter_url: req.body.twitter_url,
    job_title: req.body.job_title,
    user_id: req.body.user_id,
  }).then(function () {
    res.send('new contact made')
    // res.redirect('/users/:user/contacts/:contact');
  });
});

router.post('/contacts/img', upload.single('image'), function (req, res, next) {
  knex('images').insert({image: req.file.buffer}).then(function () {
    res.send('added');
  });
  // route to handle image upload and parsing
  next();
});


module.exports = router;
