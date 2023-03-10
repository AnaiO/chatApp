const LocalStrategy = require('passport-local');
// const bcrypt = require('bcrypt');
const User = require('../models/user');
// const passport = require('passport');

module.exports = function(passport) {
  passport.use('local-login', new LocalStrategy(function verify(username, password, done) {
    User.findOne({ username: username}, (err, user) => {
      if (err) {
        return done(err);
      }
  
      if (!user) {
        return done(null, false, { message: 'User not found.' });
      }
      
      if (!user.validPassword) {
        return done(null, false, { message: 'Incorrect credentials.'});
      }
  
      return done(null, user);
      // bcrypt.compare(password, user.password, (err, result) => {
      //   if (err) {
      //     return done(err);
      //   }
  
      //   if (result == false) {
      //     return done(null, false, { message: 'Incorrect password' });
      //   }
  
      //   return done(null, user);
      // });
      
    })
  }));
  
  passport.use('local-signup', new LocalStrategy(function verify(username, password, done) {
    User.findOne({ username: username}, (err, user) => {
      if (err) {
        return done(err);
      }
  
      if (user) {
        return done(null, false, { message: 'User already exists.' });
      }
  
      let newUser = new User();
      newUser.username = username;
      newUser.password = newUser.generateHash(password);
  
      newUser.save(function(err) {
        if (err) throw err;
        return done(null, newUser);
      })
  // 
      // user.generatePassword(password)
      
      // bcrypt.compare(password, user.password, (err, result) => {
      //   if (err) {
      //     return done(err);
      //   }
  
      //   if (result == false) {
      //     return done(null, false, { message: 'Incorrect password' });
      //   }
  
      //   return done(null, user);
      // });
      
    })
  }));
}
