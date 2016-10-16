const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');

const oops = new Error('Unauthorized');
oops.status = 401;


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/login', function(req, res, next) {
    req.session = null;
    // login form
    res.render('login');
});

router.post('/token', (req, res, next) => {
    console.log("I'm posting");
    knex('users').where('email', req.body.email).first().then((user) => {
            if (!user) {
                //If there's no user
                res.render('error', {
                  message: oops.message,
                  error: oops
                })
            }
            //check password
            return bcrypt.compare(req.body.password, user.password);

        })
        .then(() => {
            knex('users').where('email', req.body.email).first().then((user) => {

                req.session.user = user;
                console.log(req.session);
                res.redirect(`users/${user.id}`)
            })
        })
        //if bad password
        .catch(bcrypt.MISMATCH_ERROR, () => {
          res.render('error', {
            message: oops.message,
            error: oops
          })
        })
});

router.delete('/token', (req, res) => {
    console.log("i'm deleting");
    req.session = null;
    res.redirect('/login.html');
});


module.exports = router;
