const mongoose = require('mongoose')
const shortid = require('shortid')

const Plant = mongoose.model(
    "plant",
    new mongoose.Schema({
      _id: { type: String, default: shortid.generate },
      name: String,
      price: Number,
      image: String,
      category: String,
    })
  );

module.exports = { Plant } 