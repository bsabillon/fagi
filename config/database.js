const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://rovgqvigqmmwyf:449130e03b743c8088bce92b830749d89c8ca554007cced52bb33d29320213e6@ec2-174-129-254-216.compute-1.amazonaws.com:5432/d8ca887tatfho7?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',{
    host:'ec2-174-129-254-216.compute-1.amazonaws.com',
    dialect: 'postgres',
    pool: {
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});


sequelize.sync({ force: false })
  .then(() => {
    //console.log(`Database & tables created!`)
  })

  module.exports  = sequelize;