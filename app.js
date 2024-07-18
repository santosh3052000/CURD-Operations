const express = require('express')
const Router = require('./routes/routes')
const ConnectDB = require('./lib/db')
const app = express()

const PORT = 2000
ConnectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',Router)

app.listen(2000,()=>{console.log(`The server has started at http://127.0.0.1:${PORT}`)})