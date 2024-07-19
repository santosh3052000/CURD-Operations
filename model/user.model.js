const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        unique:true
    },
    sname:String
})

const users = mongoose.model("users",userSchema)

module.exports = users