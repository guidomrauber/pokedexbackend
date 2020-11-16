module.exports = app => {
    const pokedexs = require("../controllers/pokedex.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Pokedex
    router.post("/", pokedexs.create);
  
    // Retrieve all Pokedexs
    router.get("/", pokedexs.findAll);
  
    // Retrieve all published Pokedexs
    router.get("/published", pokedexs.findAllPublished);
  
    // Retrieve a single Pokedex with id
    router.get("/:id", pokedexs.findOne);
  
    // Update a Pokedex with id
    router.put("/:id", pokedexs.update);
  
    // Delete a Pokedex with id
    router.delete("/:id", pokedexs.delete);
  
    // delete all Pokedex
    router.delete("/", pokedexs.deleteAll);
  
    app.use('/api/pokedexs', router);
  };
  