const Entry = require("../models/entry.model.js");


// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  
};

// Find a single Entry with a id
exports.findOne = (req, res) => {
    Entry.findByWord(req.params.word, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Entry with word ${req.params.word}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Word with id " + req.params.word
          });
        }
      } else res.send(data);
    });
  };

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};