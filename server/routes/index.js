const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController')

const routesProject = () => {

    router.get('/', homeController.show)

    router.get('/nosotros',nosotrosController.nosotrosView)

    router.get('/viajes', viajesController.show)

    router.get('/viajes/:id',viajesController.showByID)

    router.get('/testimoniales', testimonialesController.show)

    router.post('/testimoniales', testimonialesController.store)
    
    return router 
}


module.exports = routesProject