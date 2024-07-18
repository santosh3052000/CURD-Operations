const express = require('express')
const operations = require('../controller/controller')
const Router = express.Router()

Router.get('/',operations.display)

Router.post('/',operations.create)

Router.put('/',operations.update)

Router.delete('/',operations.delete)

module.exports = Router