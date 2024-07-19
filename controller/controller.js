const users = require('../model/user.model')

operations = {}

operations.display = async(req,res)=>{
    try{
        const user = await users.find()
        res.json(user).status(200)
    }catch(error){
        res.json({message:error.message}).status(500)
    }
}

operations.index = async(req,res)=>{
    try{
        const user = await users.findById(req.params.id)

        if(user == null){
            res.json({Message:"Can't find the user :( "})
        }
        else{
            res.json(user).status(200)
        }
        
    }catch(error){
        res.json({message:error.message}).status(500)
    }
}

operations.create = async (req,res)=>{

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
    
}

operations.update = async(req,res)=>{

    try{
        const updatedUser = await users.findByIdAndUpdate(
            {_id: req.params.id},
            {
                fname: req.body.fname,
                sname: req.body.sname
            },
            {
                new: true
            }
        )
        res.json(updatedUser).status(200)
    }catch(error){
        res.json({message:error.message}).status(400)
    }

}

operations.delete = async(req,res)=>{

    try{
        await users.deleteOne({_id:req.params.id})
        res.json({message:"The user has been removed ! "})
    }catch(error){
        res.json({message:error.message}).status(400)
    }
}

module.exports = operations