const axios = require('axios');

exports.login = (req,res)=>{
  res.render('login',{mess:''})
}

exports.signup = (req,res)=>{
  res.render('signup')
}
exports.homepage = (req,res)=>{
  axios.get('http://localhost:3000/api/users')
  .then(function(resp){
    res.render('index',{users:resp.data});
  })
  .catch(err=>{
      res.send(err)
  })
}
exports.add_user=(req,res)=>{
    res.render('add-user');
}
exports.update_user=(req,res)=>{
  
    res.render('update_user');
}