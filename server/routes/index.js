var express = require('express');
var router = express.Router();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var bear = require('./../models/model.js');
var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost/users');
var db=mongoose.connection;

db.once('open',function(){
  console.log("inside connection");
});

//POST
router.post('/',function(req, res, next)
{
  console.log("call");
  console.log(req.body.subject);
  var br = new bear();
        br.lat=req.body.lat;
        br.lan=req.body.lan;
        br.humidity=req.body.humidity;
        br.pressure=req.body.pressure;
        br.sunset=req.body.sunset;
        br.sunrise=req.body.sunrise;
        br.cloud=req.body.cloud;
        br.deg=req.body.deg;
        br.speed=req.body.speed;
br.save(function(err,succ){
  console.log("inside save calback");
  if(err){
    console.log("error");
    res.send(err);
  }
  else{
    console.log("success");
    res.send({"response" :"done" });
  }
});
})
//DELETE
router.delete('/',function(req, res, next)
{
  //var br = new bear();
  bear.remove({_id:req.body.msgId},function(err,emailDeleteById) {
       if (err)
           res.send(err);

   console.log("Mail Deleted");
   });
})
//PUT
router.put('/',function(req, res, next){
Email.findById({_id:req.body.msgId},function(err,updateEmailById){
if(err){
console.log({response:err});
}
else{
var emailAddress = req.body.Address;
var emailSubject = req.body.Subject;
updateEmailById.msgFromAddress=emailAddress;
updateEmailById.messageSubject=emailSubject;
updateEmailById.save(function(err){
if(err){
res.send({response:err});
}
else{
console.log("updated successfully");
}

});
}
});
});


module.exports=router;
