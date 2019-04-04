const mongoose = require('mongoose');

const AblumSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true
    },
    Release: {
      type: Date,
      required: true
    },
     Genre:{
      type: String,
      required: true
    },
    Cover_url: {
      type: String,
      required: true
    },
    Tracks: {
      type: Object,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Album', AlbumSchema);
