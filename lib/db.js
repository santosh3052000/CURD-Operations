const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const ConnectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected !")
    }catch(error){
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = ConnectDB