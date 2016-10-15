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


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

//this is the monster route it will need all the fancy forms and stuff so I made it its own route

router.get('/contacts/new', function (req, res, next) {
  // add contact form
  // will need to have a upload photo section that inserts to database then sends photo to google vision and retrieves data which then has to be returned to the form on the page correctly
  knex('users').then(function (data) {
    console.log(data);
    res.send(data);
    // res.render('contacts/new');
  })

});

router.post('/contacts', function (req, res, next) {
  // adds contact to contact table
  // takes info from company and adds it to the company table


  res.redirect('/users/:user/contacts/:contact');
});

router.post('/contacts/img', upload.single('image'), function (req, res, next) {
  knex('images').insert({image: req.file.buffer}).then(function () {
    res.send('added');
  });
  // route to handle image upload and parsing
  next();
});


module.exports = router;
