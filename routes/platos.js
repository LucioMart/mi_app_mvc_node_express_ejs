// ************ Require's ************

const express = require('express')
const router = express.Router()

// ************ Controller Require ************

const platosController = require('../controllers/platosController')

/*** CREATE ONE PRODUCT ***/ 

router.get('/detalle/:id/', platosController.detalle )

module.exports = router