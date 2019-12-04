const Sequelize = require('sequelize');
const database = require('../config/database');


const Padre = database.define('padre', {
    Nombre  : {
        type:Sequelize.STRING
    },
    Identidad   : {
        type:Sequelize.STRING
    },
    Tipo    : {
        type:Sequelize.STRING
    },
    FechaNacimiento    : {
        type:Sequelize.STRING
    },
    GradoAcademico    : {
        type:Sequelize.STRING
    },
    LugarTrabajo     : {
        type:Sequelize.STRING
    },
    Telefono      : {
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,
}
)

module.exports = Padre;