//const passport = require('passport');
const router = require('express').Router();
const usersController = require("../../controllers/usersController");


router.route("/")
  .get(usersController.signUpGet);

module.exports = router;


/* 



router.get('/', function(req, res) {
  console.log("Home Page");
});


router.get('/register', function(req, res) {
  console.log("Register")
});

router.post('/register', function(req, res, next) {
  console.log('registering user');
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function(err) {
      if (err) {
        console.log('error while user register!', err);
        return next(err);
      }

      console.log('user registered!');

      res.redirect('/');
    }
  );
});

router.get('/login', function(req, res) {
  res.render('login', { user: req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
}); */

module.exports = router;
