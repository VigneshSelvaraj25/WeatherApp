var mongoose = require('mongoose');

var weatherSchema = mongoose.Schema({

  lat:String,
  lon:String,
  humidity:String,
  pressure:String,
  sunset:String,
  sunrise:String,
  cloud:String,
  deg:String,
  speed:String

})
module.exports = mongoose.model("weatherSchema", weatherSchema);
