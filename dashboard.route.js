// dashboard.route.js

const express = require('express');
const artistRoute = express.Router();

// Require Artist model in our routes module
let Artist = require('./artist.model');

// Defined store route
artistRoute.route('/add').post(function (req, res) {
  let artist = new Artist(req.body);
  artist.save()
    .then(artist => {
      res.status(200).json({'artist': 'artist in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
artistRoute.route('/').get(function (req, res) {
  Artist.find(function(err, artists){
    if(err){
      console.log(err);
    }
    else {
      res.json(artists);
    }
  });
});

// Defined edit route
artistRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Artist.findById(id, function (err, artist){
      res.json(artist);
  });
});

//  Defined update route
artistRoute.route('/update/:id').post(function (req, res) {
  Artist.findById(req.params.id, function(err, artist) {
    if (!artist)
      res.status(404).send("data is not found");
    else {
      artist.Name = req.body.Name;
      artist.Birth= req.body.Birth;
      artist.Followers = req.body.Followers;
      artist.Albums = req.body.Albums;

      artist.save().then(artist => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
artistRoute.route('/delete/:id').get(function (req, res) {
    Artist.findByIdAndRemove({_id: req.params.id}, function(err, artist){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = artistRoute;
