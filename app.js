var express = require('express');
var app = express();



var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect ('mongodb://localhost:27017/loginAppDb')
.then ((err)=>{console.log ('Mongoose UP')})

app.listen(3000, ()=>console.log('listen on 3000'));
