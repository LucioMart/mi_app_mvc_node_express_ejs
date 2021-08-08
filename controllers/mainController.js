const { render } = require('ejs')
// const express = require('express')
// const router = express.Router()
const path = require('path')
const fs = require('fs')

const platosFilePath = path.join(__dirname, '../data/platosDataBase.json')
const platos = JSON.parse(fs.readFileSync(platosFilePath, 'utf-8'))


const controlador = {
    home : (req, res) => {
        return res.render('index', {
            platos
        })
    },
    detalleMenu : (req, res) => {
        return res.render('detalleMenu', {
            platos
        })
    }
}


module.exports = controlador