
const { render } = require('ejs')
const fs = require('fs')
const path = require('path')

const platosFilePath = path.join(__dirname, '../data/platosDataBase.json')
const platos = JSON.parse(fs.readFileSync(platosFilePath, 'utf-8'))

