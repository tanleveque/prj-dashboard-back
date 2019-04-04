const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema(
  {
    Title :{
      type: String,
      required: true
    },
    Duration: {
      type: Number,
      required: true
    },
    Listenings: {
      type: Number,
      required: true
    },
    Likes: {
      type: Number,
      required: true
    },
    Featuring: {
      type: Object,
      required: true
    },
  },
  
  {
    timestamps: true
  }
);

module.exports = mongoose.model('track', trackSchema);
