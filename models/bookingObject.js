

var mongoose = require('mongoose');

const bookingShema = new mongoose.Schema({

    title : String,
    type: String,
    country : String,
    regions : String,
    area : String,
    place : String,
  priceType: String,
  childrenRange: [],
  rooms: Array,
  description:Array,
  medDescription:Array


/*  EXAMPLE
  password: String,
  quote: {type: String, default: "You got NO motto. Set it up"},
  pin: {type: String, default: "1111"},
  pinValidation: {type: Boolean, default: false},
  topScore: {type: Number, default: 0},
  totalRows: {type: Number, default: 0},
  spendedTime: {type: Number, default: 0}
*/

/*
 name: String,
 email:String,
 password: String,
 cpassword: Boolean
 */
});

const bookingObject = mongoose.model('bookingObject', bookingShema, 'booking')

module.exports = bookingObject
