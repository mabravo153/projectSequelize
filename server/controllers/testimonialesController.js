const Testimoniales = require('../models/Testimoniales')

exports.show = async (req,res) => {
        
    const testimoniales = await Testimoniales.findAll()
    
    return res.render('testimoniales', {
        pagina: 'Testimonios',
        testimoniales
    })
}

exports.store = async (req,res) => {

    let { nombre, correo, mensaje } = req.body 
    let errores = []

    //validaciones 
    if(!nombre){
        errores.push({mensaje:'Agrega tu nombre'})
    }
    if(!correo){
        errores.push({mensaje:'Agrega tu correo'})
    }
    if(!mensaje){
        errores.push({mensaje:'Agrega un mensaje'})
    }

    //verificar si tenemos errores
    if(errores.length){
        return res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    }else{

        try{
            await Testimoniales.create({
                nombre_usuario: nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales')

        }catch (err){
            console.error(err)
        }
        
    }
    

}