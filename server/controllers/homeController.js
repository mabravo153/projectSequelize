const Viajes = require('../models/Viajes')

exports.show = async (req,res) => {

    const resultViajes = await Viajes.findAll({
        limit:3
    })

    //const resulTestimonio = await Tes

    res.render('index', {
        pagina: 'Inicio',
        clase: 'home',
        viajes: resultViajes
    })
}