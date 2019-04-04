var express = require('express');
var router = express.Router();

// we import our user controller
var artist = require('../controllers/artist.controller');

/* GET one user */
router.get('/:artistId', function(req, res, next) {
  res.json('respond with a user');
});

/* DELETE  one user */
router.delete('/:artistId', function(req, res, next) {
  res.json('respond with a user id deleted');
});
/* update  one user */
router.post('/:artistId', function(req, res, next) {
  res.json('respond with a user id updated');
});

/* create  one user */
router.put('/:artistId', function(req, res, next) {
  res.json('respond with a user id created');
});

module.exports = router;
