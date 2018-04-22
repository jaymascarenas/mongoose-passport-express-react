const passport = require('passport');
const User = require("../models/user");

// Defining methods for the booksController
module.exports = {

  signUp: function(req, res, next) {
    console.log('registering user');
    User.register(
      new User({ 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
       }),
      req.body.password,
      function(err) {
        if (err) {
          console.log('error while user register!', err);
          return next(err);
        }
  
        console.log('user registered!');
  
        res.redirect('/login');
      }
    );
  },
  login: function(req, res, next) {

  }
};
