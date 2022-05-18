const mongo = require('mongoose')

const schema = new mongo.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String
})

const users = mongo.model('users',schema);
module.exports=users;