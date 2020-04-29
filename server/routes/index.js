const express = require('express');
const router = express.Router();


const routesProject = () => {

    router.get('/', (req,res) => res.render('index'))

    router.get('/nosotros', (req,res) => res.render('nosotros') )

    
    return router 
}


module.exports = routesProject