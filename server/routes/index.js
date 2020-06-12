const express = require('express');
const router = express.Router();

// Controladores
const nosotrosController = require('../controller/nosotrosController');
const homeController = require('../controller/homeController');
const viajesController = require('../controller/viajesController');
const testimonialesController = require('../controller/testimonialesController');

module.exports = function() {
    router.get('/', homeController.consultasHomePage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    //cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimoniales);

    return router;
}