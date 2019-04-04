var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('laaaaaa ça marche ');
});

module.exports = router;
