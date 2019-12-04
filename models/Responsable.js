const Sequelize = require('sequelize');
const database = require('../config/database');


const Responsable = database.define('responsable', {
    Nombre  : {
        type:Sequelize.INTEGER,
    },
    Tipo   : {
        type:Sequelize.INTEGER
    },
    Telefono    : {
        type:Sequelize.INTEGER
    },
    Direccion    : {
        type:Sequelize.BOOLEAN
    },
    IdAlumno    : {
        type:Sequelize.INTEGER
    }
  
},
{
    freezeTableName: true,
}
)

module.exports = Responsable;