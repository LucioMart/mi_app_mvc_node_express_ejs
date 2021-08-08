const { render } = require('ejs')
const express = require('express')
const router = express.Router()
const path = require('path')


const controlador = {
    home : (req, res) => {
        return res.render('index')
    },
    detalleMenu : (req, res) => {
        return res.render('detalleMenu')
    }
}


module.exports = controlador