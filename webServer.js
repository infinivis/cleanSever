var express = require("express");
 var app = express();
 var path = require('path');  
 
var router = express.Router();
 
 app.use(router);  
app.use(express.static(path.join(__dirname, 'public')));
 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('index.html');
   
 });
 
 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });