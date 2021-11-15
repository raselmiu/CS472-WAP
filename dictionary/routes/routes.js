module.exports = app => {
    const entries = require("../controllers/entries.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", entries.create);
  
    // Retrieve all entries
    router.get("/", entries.findAll);
  
    // Retrieve all published entries
    router.get("/published", entries.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:word", entries.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", entries.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", entries.delete);
  
    // Delete all entries
    router.delete("/", entries.deleteAll);
  
    app.use('/api/entries', router);
  };