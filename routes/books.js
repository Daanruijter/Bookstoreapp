const express = require("express");
const router = express.Router();
const bookModel = require("../model/bookModel");

router.get("/", (req, res) => {
  bookModel
    .find()
    .then((files) => {
      return res.send(files);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
