const db = require("../models"); // models path depend on your structure
const Pokedex = db.tutorials;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Pokedex
  const pokedex = {
    order: req.body.order,
    name: req.body.name,
	sampleImage: req.body.sampleImage,
    type: req.body.type,
    habilidad: req.body.habilidad
  };

  // Save Pokemon in the database
  Pokedex.create(pokedex)
    .then(data => {
      res.send({
        message: "Pokedex was created  successfully." 
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pokedex."
      });
    });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Pokedex.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving pokedexs."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Pokedex.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Pokedex with id=" + id
        });
      });
  };
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Pokedex.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pokedex was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Pokedex with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Pokedex with id=" + id
        });
      });
  };
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Pokedex.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pokedex was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Pokedex with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Pokedex with id=" + id
        });
      });
  };
  exports.deleteAll = (req, res) => {
    Pokedex.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Pokedexs were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all pokedexs."
        });
      });
  };
  exports.findAllPublished = (req, res) => {

    Pokedex.findAll({ where: { published: true } })
    
    .then(data => {
    
    res.send(data);
    
    })
    
    .catch(err => {
    
    res.status(500).send({
    
    message:
    
    err.message || "Some error occurred while retrieving pokedexs."
    
    });
    
    });
    
    };
    