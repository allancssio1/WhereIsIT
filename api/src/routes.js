const express = require('express')
const routes = express.Router()
const codeControllers = require('./controllers/codeControllers')

routes.post('/create', codeControllers.create)
routes.post('/findCode', codeControllers.findCode)

module.exports = routes