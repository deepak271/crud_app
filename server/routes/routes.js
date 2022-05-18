const express = require('express');
const route = express.Router();
const services = require('../services/services');
const controller = require('../controller/controller');
const authuser = require('../../login/auth')
route.get('/',services.login)
route.get('/signup',services.signup)

route.get('/home',services.homepage)

route.get('/add-user',services.add_user)

route.get('/update-user',services.update_user)

//API
route.post('/api/auth',authuser.finduser)
route.post('/api/add',authuser.adduser)
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

module.exports=route;