module.exports = (sequelize, Sequelize) => {

    const Pokedex = sequelize.define("pokedex", {
    
    order: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
	  
    },
	sampleImage: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    habilidad : {
      type: Sequelize.STRING,
    }
    
    });
    
    
    return Pokedex;
    
    };