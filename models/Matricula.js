const Sequelize = require('sequelize');
const database = require('../config/database');


const Matricula = database.define('matricula', {
    IdAlumno : {
        type:Sequelize.INTEGER,
    },
    IdSeccion  : {
        type:Sequelize.INTEGER
    },
    TipoMatricula   : {
        type:Sequelize.INTEGER
    },
    RepiteGrado   : {
        type:Sequelize.BOOLEAN
    },
    EscuelaAnterior   : {
        type:Sequelize.INTEGER
    }
},
{
    freezeTableName: true,
}
)

module.exports = Matricula;