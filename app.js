'use strict'

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect ('mongodb://localhost:27017/bookingObject')
.then ((err)=>{
  //if (err) throw err

  console.log ('Mongoose UP')})

var BookingObject = require('./models/bookingObject.js');



app.listen(3000, ()=>console.log('listen on 3000'));

// add new booking Obj

app.post ('/test',async function (req, res) {
let data = req.body.formData




const title = data.main.title;
const type = data.main.type;
const country = data.adress.country;
const regions = data.adress.region;
const area = data.adress.area;
const place = data.adress.place;
const priceType = data.priceType;

const childrenRange=data.childrenRange
const rooms=data.rooms
const description=data.description
const medDescription =data.medDescription


const  obj = new BookingObject({title, type, country, regions,area, place, priceType,childrenRange,rooms,description,medDescription})

console.log (obj)

const addingObject = await (obj.save())

if (addingObject) {

res.send ({status: true, message: 'insert', data: addingObject})

} else {

res.send ({status: false, message: 'cant insert', data: addingObject})

}


})

// search

app.get ('/forsearchprimarydata', function (req, res) {




  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'myproject';

  // Use connect method to connect to the server
  MongoClient.connect(url, /*{ useNewUrlParser: true },*/function(err, client) {
    assert.equal(null, err);
    //console.log("Connected successfully to server");

    const db = client.db('sanatoriiby');


    db.collection('prod_sanatorium').find({}, {projection:{ _id: 0 , name: 1, region: 1, stars: 1}} ).toArray(function (err, result){

      res.send (result)
    })






    client.close();
  });


})



// search

app.post ('/search', async function (req, res){

console.log (req.body.serchData)
console.log (req.body.selectedObjs)

// search in data base after req

MongoClient.connect('mongodb://localhost:27017'/*, { useNewUrlParser: true }*/,function(err, client) {
  assert.equal(null, err);
  //console.log("Connected successfully to server");

  const db = client.db('sanatoriiby');

// запросить санатории с выбранными именами иначе запросить все

// учесть дополнительные фильтры по объекту типа ТИП ПИТАНИЕ , МГНОВННОЕ ПОДТВ
// ЗВЕЗДНОСТЬ   -- !!! ОТДАТЬ НА ФРОНТ ДЛЯ ФИЛЬТРА


  db.collection('prod_sanatorium').find({}, {projection:{ _id: 0}}).toArray(function (err, result){
console.log (result)
    res.send (result)
  })






  client.close();
});



// old version
/*
let accomadation =  (children) ? adult+'+'+children: adult

const forDisplay = await BookingObject.find ({$or : [{regions: region}, {title: title}]})



if (forDisplay) {

forDisplay.map ((x, index)=>{

for (var i = 0 ; i<x.rooms.length; ) {

if (x.rooms[i].accommodation.indexOf (accomadation) != -1) {
i++
} else {
x.rooms.splice (i,1)
i = 0;
  }
}

if (x.rooms.length == 0) {
forDisplay.splice (index,1)
}

})

res.send ({status: true, message: 'find some to display', data:forDisplay })
} else {
res.send ({status: false, message: 'got no to display by this search cond', data: {} })
}*/
})
