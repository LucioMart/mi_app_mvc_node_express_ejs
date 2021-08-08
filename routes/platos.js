// ************ Require's ************

const express = require('express')
const router = express.Router()

// ************ Controller Require ************

const platosController = require('../controllers/mainController')

/*** CREATE ONE PRODUCT ***/ 

router.get('/detalle/:id/', platosController.detalleMenu )