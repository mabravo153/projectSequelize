const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sequelize', 'mabravo153', 'Barranquilla1.', {
    host: 'pruebasproyecto.cnvwfa5zqlmr.us-east-2.rds.amazonaws.com',
    dialect: 'mariadb'
})


module.exports = sequelize;