const mongo = require('mongoose')

const schema = new mongo.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   gender:String,
   status:String
})

const userdb = mongo.model('userdb',schema);
module.exports=userdb;