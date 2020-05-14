const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  language: {
    type: String,
  },
});

module.exports = mongoose.model("book", bookSchema);
