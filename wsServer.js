// WS Server
// (c) 2014 Xul.fr



var WebSocketServer = require("ws").Server;
var fs = require("fs");
var jquery = require("jquery");
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

//////////////////////websocket section /////////////////

var ws = new WebSocketServer( { port: 8100 } );

console.log("Server started... on port 8100");

  


ws.on('connection', function (client) {
    
//    ws.broadcast = function broadcast(data) {
//        ws.clients.forEach(function each(client) {
//            client.send(data);
//        });
//    };
    
  
  console.log("Connection open");
  
  client.on('message', function incoming(data) {
  //ws.send('something');
//  var data = data;
//   console.log("Message");
//   console.log(data);
//  
      console.log(data);
      var object = JSON.parse(data);
      console.log(object);
      if(object.id==="browser"){
          console.log("Browser envoit qqch ---------");
          console.log(object.content);
            
      }else{          
          console.log("Android envoit qqch ---------");
         //console.log(object.windSpeed);  
                 ws.clients.forEach(function each(clientCurrent) {
            if(clientCurrent!=client){
                clientCurrent.send(object.windSpeed);
            }else{
                
            }
            
        });
            //ws.send(object.windspeed);
      }
     
   // test broadcast
//        ws.clients.forEach(function each(clientCurrent) {
//            if(clientCurrent!=client){
//                clientCurrent.send(data);
//            }else{
//                
//            }
//            
//        });

     
//      var object = JSON.parse(data);
//     if(object.id==="browser"){
//         console.log("Dans le if");
//         ws.send(data);
//         
//     }else{
//         console.log("Transfert d'un message au browser");
//         ws.send(data);
//     }

 
 //////save score model in db

     var Score = mongoose.model('Score');
     
           var newScore = new Score();
             newScore.pts = data;
             var callback = function(err, scoreSaved){
                 //console.log(err);
                if(err) return next(err);
                 console.log(scoreSaved.id);//return res.status(200).json(scoreSaved.id);
             }
             //newScore.save(callback);
             
    
    
  
    });
    
       client.on('close', function() {
        console.log("Browser gone.")
    });
  
});

   

 
  
 


//////// connection to mongoDB /////////////////////////////////////
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
    console.log("forEach model function on connection to db");
  require(model);
});