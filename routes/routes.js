const express = require('express')
const operations = require('../controller/controller')
const Router = express.Router()

Router.get('/',operations.display)
Router.get('/:id',operations.index)

Router.post('/',operations.create)

Router.put('/:id',operations.update)

Router.delete('/:id',operations.delete)

module.exports = Router