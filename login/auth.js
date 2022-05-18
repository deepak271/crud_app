const db = require('../server/model/signup')
const axios = require('axios')

exports.adduser = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "please enter data" })
    }
    else {
        const newuser = new db({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password
        })
        newuser.save()
            .then((data) => {
                //res.send(data);
                res.redirect('/')
            })
            .catch((err) => {
                res.status(500).send({ message: 'some error occured while saving data' })
            })
    }
}

exports.finduser = (req,res) => {
  const mail = req.body.email;
  const pass = req.body.password;
 db.findOne({email:mail})
 .then((data)=>{
     if(pass == data.password)
      res.redirect('/home')
      else
      res.send({message:"Username or password is wrong"})
 }).catch(err=>{
     res.status(500).send({message:"Username or password is wrong"})
 })
}
