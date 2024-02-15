const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({})

module.exports = mongoose.model("Movie", MovieSchema);