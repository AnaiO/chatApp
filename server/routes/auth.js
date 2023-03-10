const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);


router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/'
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/'
}));


module.exports = router;