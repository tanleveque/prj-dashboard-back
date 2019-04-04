const Artist = require('../models/artist.model.js');

// Create and Save a new Artist
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Name) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'Name can not be empty'
    });
  }

  // Create a new Artist
  const artist = new Artist({
    Name: req.body.Name,
    Birth: req.body.Birth || '', 
    Followers : req.body.Followers, 

  });

  // Save Artist in the database
  artist
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly Artist integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new Artist in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Artist.'
      });
    });
};

// Retrieve and return all Artists from the database.
exports.findAll = (req, res) => {
  Artist.find()
    .then(artists => {
      res.send(artists);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Artists.'
      });
    });
};

// Find a single Artist with a ArtistId
exports.findOne = (req, res) => {
  Artist.findById(req.params.artistId)
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.artistId
        });
      }
      res.send(artist);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.artistId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving Artist with id ' + req.params.artistId
      });
    });
};

// Update a Artist identified by the ArtistId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.Name) {
    return res.status(400).send({
      message: 'name can not be empty'
    });
  }

  // Find Artist and update it with the request body
  Artist.findByIdAndUpdate(
    req.params.artistId,
    {
      title: req.body.Name,
      Birth: req.body.Birth || ''
    },
    { new: true }
  )
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.artistId
        });
      }
      res.send(artist);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.artistId
        });
      }
      return res.status(500).send({
        message: 'Error updating Artist with id ' + req.params.artistId
      });
    });
};

// Delete a Artist with the specified ArtistId in the request
exports.delete = (req, res) => {
  Artist.findByIdAndRemove(req.params.artistId)
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.artistId
        });
      }
      res.send({ message: 'Artist deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Artist not found with id ' + req.params.artistId
        });
      }
      return res.status(500).send({
        message: 'Could not delete Artist with id ' + req.params.artistId
      });
    });
};
