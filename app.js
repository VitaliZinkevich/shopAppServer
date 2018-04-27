var express = require('express');
var app = express();



var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect ('mongodb://localhost:27017/bookingObject')
.then ((err)=>{
  //if (err) throw err

  console.log ('Mongoose UP')})

app.listen(3000, ()=>console.log('listen on 3000'));

app.get ('/test', function (req, res) {

res.json ('HI we done')

})
