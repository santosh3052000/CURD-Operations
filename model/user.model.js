const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname:String,
    sname:String
})

const users = mongoose.model("users",userSchema)

module.exports = users