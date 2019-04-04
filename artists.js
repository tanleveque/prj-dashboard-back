var express = require('express');
var router = express.Router();
var artist = require('../controllers/artist.controller');

/* GET artists listing. */
router.get('/', function(req, res, next) {
  res.send('??????? ');
});

module.exports = router;
