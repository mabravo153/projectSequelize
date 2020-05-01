const express = require('express');
const router = express.Router();
const Viajes = require('../models/Viajes')
const Testimoniales = require('../models/Testimoniales')


const routesProject = () => {

    router.get('/', (req,res) => res.render('index', {
        pagina: 'Inicio'
    }))

    router.get('/nosotros', (req,res) => res.render('nosotros', {
        pagina: 'Sobre nosotros'
    }))

    router.get('/viajes', async (req,res) => {

        const result = await Viajes.findAll()
     
        return res.render('viajes', {
            pagina: 'Viajes disponibles',
            result
        })
    })

    router.get('/viajes/:id', async (req, res) => {

        const idViaje = req.params.id
        const viaje = await Viajes.findOne({
            where: {
                id: idViaje
            }
        })

        return res.render('viaje', {
            viaje
        })

    })

    router.get('/testimoniales', async (req,res) => {
        
        const testimoniales = await Testimoniales.findAll()
        
        return res.render('testimoniales', {
            pagina: 'Testimonios',
            testimoniales
        })
    })

    router.post('/testimoniales', async (req,res) => {

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
        

    })
    
    return router 
}


module.exports = routesProject