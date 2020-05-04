const Viajes = require('../models/Viajes')

exports.show = async (req,res) => {

    const viajes = await Viajes.findAll()
 
    return res.render('viajes', {
        pagina: 'Viajes disponibles',
        viajes
    })
}


exports.showByID = async (req, res) => {

    const idViaje = req.params.id
    const viaje = await Viajes.findOne({
        where: {
            id: idViaje
        }
    })

    return res.render('viaje', {
        viaje
    })

}