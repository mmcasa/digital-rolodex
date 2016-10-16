const express = require('express');
const router = express.Router();


// create a controller if you need functions in here
// const [page]Controller = require('../controllers/[page]');

router.get('/login', function (req, res, next) {
  // login form
  res.render('login');
});

router.post('/token', (req, res, next) => {
    console.log("I'm posting");
    knex('users').where('email', req.body.email).first().then((user) => {
            if (!user) {
                //If there's no user
                res.sendStatus(401);
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
            res.sendStatus(401);
        })
});

router.delete('/token', (req, res) => {
    console.log("i'm deleting");
    req.session = null;
    res.redirect('/login.html');
});


module.exports = router;
