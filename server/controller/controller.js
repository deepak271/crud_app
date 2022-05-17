const userdb = require('../model/model')

//create and save new user
exports.create = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({message:'content cannot be empty'});
        return;
    }
    const user = new userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    
    user
       .save(user)
       .then(data=>{
          res.redirect('/add-user')
       }
        )
        .catch(err=>{
            res.status(500).send({message:err.message||'some error occured'})
        })
    }

    //update
    exports.update =(req,res)=>{
    
    }

//read operation for single and multiple

exports.find = (req,res)=>{
userdb.find()
      .then(user=>{
          res.send(user)
      })
      .catch(err=>{
        res.status(500).send({message:err.message||'some error occured'})
    })
}
//delete
exports.delete = (reqres)=>{

}