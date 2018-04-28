'use strict'

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());



var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect ('mongodb://localhost:27017/bookingObject')
.then ((err)=>{
  //if (err) throw err

  console.log ('Mongoose UP')})

var BookingObject = require('./models/bookingObject.js');



app.listen(3000, ()=>console.log('listen on 3000'));


app.post ('/test',async function (req, res) {
let data = req.body.formData
//console.log (data)



const title = data.main.title;
const type = data.main.type;
const country = data.adress.country;
const region = data.adress.region;
const area = data.adress.area;
const place = data.adress.place;
const priceType = data.priceType;

const childrenRange=data.childrenRange
const rooms=data.rooms
const description=data.description
const medDescription =data.medDescription








const  obj = new BookingObject({title, type, country, region,area, place, priceType,childrenRange,rooms,description,medDescription})

console.log (obj)

const addingObject = await (obj.save())

if (addingObject) {

res.send ({status: true, message: 'insert'})

} else {

res.send ({status: false, message: 'cant insert'})

}


})
