var express = require('express')
var dotenv = require('dotenv')
var bodyparser = require('body-parser')
var path=require('path')
var app = express();
var connectionDB = require('./server/database/connection')
dotenv.config({path:'config.env'})
var PORT = process.env.PORT||8080;
//parse requestb to body-parser
app.use(bodyparser.urlencoded({ extended: false }));
//connect to db
connectionDB();
//set view engine
app.set('view engine','ejs')
app.use('/css',express.static(path.join(__dirname,'assets/css')))
app.use('/img',express.static(path.join(__dirname,'assets/img')))
app.use('/js',express.static(path.join(__dirname,'assets/js')))

app.use('/',require('./server/routes/routes'))

app.listen(PORT,function(){
    console.log(`server is running on https://localhost:${PORT}`);
})