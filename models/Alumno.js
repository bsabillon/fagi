const Sequelize = require('sequelize');
const database = require('../config/database');


const Alumno = database.define('alumno', {
    Nombre : {
        type:Sequelize.STRING,
    },
    LugarNacimiento : {
        type:Sequelize.STRING
    },
    FechaNacimiento : {
        type:Sequelize.STRING
    },
    NoIdentidad : {
        type:Sequelize.STRING
    },
    TipoSangre : {
        type:Sequelize.STRING
    },
    Alergias : {
        type:Sequelize.STRING
    },
    Vacunas : {
        type:Sequelize.STRING
    },
    Operado : {
        type:Sequelize.STRING
    },
    DificultadConducta  : {
        type:Sequelize.STRING
    },
    IdPadre : {
        type:Sequelize.STRING
    },
    IdMadre : {
        type:Sequelize.STRING
    },
    IdResponsable : {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = Alumno;