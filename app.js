var express = require('express');
var app= express ();
var bodyParser = require('body-parser');
//modifica i nomi delle api es /add; /del/:id;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var admin=require('./Routes/admin');
var user=require('./Routes/user');
// app.use(cors())
app.use('/user',user);
app.use('/admin',admin);

app.listen(3002);
module.exports=app;
