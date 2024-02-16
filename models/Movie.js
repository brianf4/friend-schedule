const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  plot: {
    type: String,
  },
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
})

module.exports = mongoose.model("Movie", MovieSchema);