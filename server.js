//This is the Data Base

var mongodb = require('mongodb');
var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/RiderDB') //creates a database called RiderDB
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to DB');  
});
var riderSchema = mongoose.Schema({
    name: String,
    uoid: Number,
    phone: Number,
    partySize: Number,
    time: String,
    currentLocation: String,
    dropLocation: String,
    additionalInfo: String,
}); 
var Rider= mongoose.model('Rider', riderSchema);




//This is the Server


var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("saferide.html");
  console.log('client connected');
});
app.get('/style.css',function(req,res){
  res.sendfile("style.css");
  //console.log('Style Sheet Sent to Client');
});
app.get('/saferide_banner.png',function(req,res){
    res.sendfile("saferide_banner.png");
    //console.log("Banner pic Sent to Client");
});
app.get('/bkg.png',function(req,res){
    res.sendfile("bkg.png");
    //console.log("Banner pic Sent to Client");
});


app.post('/submitInfoFromClient',function(req,res){
  var nameFromClient=req.body.name; 
  var uoidFromClient=req.body.uoid;
  var phoneFromClient=req.body.phone;
  var partySizeFromClient=req.body.party;
  var timeFromClient=req.body.time;
  var currentLocationFromClient=req.body.currentLocation;
  var dropLocationFromClient=req.body.dropLocation;
  var additionalInfoFromClient=req.body.additionalInfo;
  //console.log(user_name);
  //console.log(user_password);
  var newRider= new Rider({ 
    name: nameFromClient,
    uoid: uoidFromClient,
    phone: phoneFromClient,
    partySize: partySizeFromClient,
    currentLocation: currentLocationFromClient,
    time: timeFromClient,
    dropLocation: dropLocationFromClient,
    additionalInfo: additionalInfoFromClient})

  console.log("created RIDER " + newRider.name);

  newRider.save(function(err,data)
  {
      if(err)console.log('error on save');
      else console.log('Saved Data: ', data);
  });

  res.send('sucess');
});

app.post('/dispatchQuery',function(req,toClient){
  Rider.find(function(err,res){
    if (err)return console.error(err);
    console.log(res);
    toClient.send(res);
    // toClient.send("Information you wanted");
  });
});

app.post('/clear',function(req,toClient){
  Rider.find(function(err,res){
     if (err)return console.error(err);
     for(x=0;x<res.length;x++){
       res[x].remove();
     }
     
   });
 
   console.log("Cleared Rider");
   // console.log(Rider.getCollectionInfos());
  });
 

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})





// var JaneDoe= new Rider({ name: 'jane'});

// JaneDoe.save(function(err,data){
//     if(err)console.log('error on save');
//     else console.log('Saved Data: ', data);
//   });

function test(){

  console.log('REQUEST START_________');
  Rider.find(function(err,res){
    if (err)return console.error(err);
    console.log(res);
  });
};



 // setTimeout(test,1000);


