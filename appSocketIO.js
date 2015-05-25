var http = require('http');
var fs = require('fs');

 //Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('public/index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(5000);
//var io = require('socket.io').listen(8080);

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    //socket.emit('message', 'Vous êtes bien connecté !');
    
    // Quand le serveur reçoit un signal de type "message" du client    
    socket.on('message', function (message) {
        console.log('Un client me parle ! Il me dit : ' + message);
    });
});



server.listen(8080);