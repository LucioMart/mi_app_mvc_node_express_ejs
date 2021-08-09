const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const platosController = require('../controllers/platosController')

router.get('/', mainController.home)

router.get('/detalleMenu', platosController.detalle)

module.exports = router;