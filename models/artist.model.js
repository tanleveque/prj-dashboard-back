const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    Birth: {
      type: Date,
      required: true
    },
    Followers :{
      type: Number,
      required: true
    },
    Albums: {
      type: Object,
      required: true
    },
  },
  
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Artist', artistSchema);
