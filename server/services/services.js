const axios = require('axios');

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