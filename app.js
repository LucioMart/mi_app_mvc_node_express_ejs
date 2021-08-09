// ************ Require's ************
const express = require('express')
const path = require('path')

// ************ express() - (don't touch) ************
const app = express()

// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const rutaMain = require('./routes/main')
const rutaPlatos = require('./routes/platos')

app.use('/', rutaMain)
app.use('/menuPlatos', rutaPlatos)

// Necesario para los archivos estáticos en el folder /public
app.use(express.static('public'))

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))




module.exports = app









// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'home.html'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })
//  app.listen(3030, () => {
//      console.log('Servidor funcionando.')
//  })