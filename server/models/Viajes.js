const { DataTypes } = require('sequelize')
const connectDb = require('../config/database')


const Viajes = connectDb.define('viajes', {
   titulo: {
       type: DataTypes.STRING(80),
       allowNull: false
   },
   precio:{
       type: DataTypes.STRING(12),
       allowNull: false
   },
   fecha_salida:{
    type: DataTypes.DATE
   },
   fecha_retorno:{
    type: DataTypes.DATE
   },
   imagen:{
    type: DataTypes.TEXT
   },
   descripcion:{
    type: DataTypes.TEXT
   },
   disponibles:{
    type: DataTypes.STRING(3),
    allowNull: false
   }
})


module.exports = Viajes