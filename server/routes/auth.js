const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);

router.get('/', function(req, res) {
  res.send('coucou')
});
router.post('/signup', passport.authenticate('local-signup'))
router.post('/login', passport.authenticate('local-login'));

module.exports = router;