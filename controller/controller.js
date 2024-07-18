const users = require('../model/user.model')

operations = {}

operations.display = ((req,res)=>{
    //res.send("This is display router ")
})

operations.create = async (req,res)=>{
    //res.send("This is create router ")
    const newuser = new users({
        sname:req.body.sname,
        fname:req.body.fname
    })   
    try{
        const User = await newuser.save()
        res.json(User).status(201)
    }catch(error){
        res.json({message:error.message}).status(400)
    }
    
    //console.log(req.body)
}

operations.update = ((req,res)=>{
    res.send("This is updaTe router ")
})

operations.delete = ((req,res)=>{
    res.send("This is DELETE router ")
})

module.exports = operations