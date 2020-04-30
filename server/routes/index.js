const express = require('express');
const router = express.Router();


const routesProject = () => {

    router.get('/', (req,res) => res.render('index', {
        pagina: 'Inicio'
    }))

    router.get('/nosotros', (req,res) => res.render('nosotros', {
        pagina: 'Sobre nosotros'
    }))

    
    return router 
}


module.exports = routesProject