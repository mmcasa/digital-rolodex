const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/users', function(req, res, next) {
    // redirect to dashboard
    res.redirect('/users/:user');
});

router.get('/users/:user', function(req, res, next) {
    // dashboard
    res.render('users/dashboard');
});

router.get('/users/:user/account', function(req, res, next) {
    // user profile information
    res.render('users/account');
});

router.get('/users/:user/edit', function(req, res, next) {
    // edit user profile information
    // make sure to pass to the view the info from contact so the forms are full
    res.render('users/edit');
});

router.get('/users/:user/delete', function(req, res, next) {
    // show delete confirmation page
    res.render('users/delete');
});

router.post('/users', function(req, res) {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10).then((hashpw) => {
        console.log(hashpw);
        knex('users').insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hashpw
        }).then(() => {
            knex('users').where('email', req.body.email).first().then((user) => {
                console.log(user);
                req.session.user = user;
                res.redirect(`users/${user.id}`)

            })
        })

    })
})



router.patch('/users/:user', function(req, res, next) {
    // add to users table
    res.redirect('/users/:user');
});

router.delete('/users/:user', function(req, res, next) {
    // add to users table
    res.redirect('/users/:user');
});


module.exports = router;
