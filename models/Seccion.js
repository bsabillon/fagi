const Sequelize = require('sequelize');
const database = require('../config/database');


const Seccion = database.define('seccion', {
    Descripcion  : {
        type:Sequelize.INTEGER,
    },
    IdGrado   : {
        type:Sequelize.INTEGER
    },
    Horario    : {
        type:Sequelize.INTEGER
    } 
},
{
    freezeTableName: true,
}
)

module.exports = Seccion;