const { DataTypes } = require('sequelize');
const connectDb =require('../config/database');


const Testimoniales = connectDb.define('testimoniales', {
    nombre_usuario: {
        type: DataTypes.STRING(90),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    mensaje: {
        type: DataTypes.TEXT
    }
}); 


module.exports = Testimoniales