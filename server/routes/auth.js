const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/user');

passport.use(new LocalStrategy(function verify(username, password, done) {
  User.findOne({ username: username}, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, { message: 'User not found.' });
    }
    
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return done(err);
      }

      if (result == false) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    });
    
  })
}))


router.post('/login', passport.authenticate('local'));

module.exports = router;