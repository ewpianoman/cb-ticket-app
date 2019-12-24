var express = require('express');
var router = express.Router();

/* GET sign up page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'CB Ticket - Sign Up' });
});

module.exports = router;
