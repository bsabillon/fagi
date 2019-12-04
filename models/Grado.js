const Sequelize = require('sequelize');
const database = require('../config/database');


const Grado = database.define('grado', {
    Nombre : {
        type:Sequelize.STRING,
    },
    Descripcion  : {
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,
}
)

module.exports = Grado;