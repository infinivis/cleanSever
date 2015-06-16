var connection;
function startWS(){
    

    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    connection = new WebSocket('ws://localhost:8100');

    connection.onopen = function () {
        console.log("Browser: Connection open");
         connection.send('{"id":"browser", "type":"text", "content":"Browser ready."}' );
    };

    connection.onerror = function (error) {
        // an error occurred when sending/receiving data
    };

    connection.onmessage = function (message) {
        
        
        console.log("incoming message");
        console.log(message);
        $("h1").text(message.data+" km/h");
        
        // 
//       	  var message = JSON.parse(message.data);
//  	switch(message.type) {
//			case "text":
//				//dispMessage(message.content);
//                                console.log("Un message est arrivé du serveur");
//                                console.log(message.windSpeed);
//                                $("body").append("<h1>"+message.windSpeed+"</h1>");
//				break;
//			case "image":
//				var iname = message.path;
//        dispMessage("Received " + iname);
//        console.log(iname);
//        $("body").add("<h1>" + iname + "</h1>")
//        image.src= iname
//  	    image.onload = function () { context.drawImage(image, 0, 0); }
//				break;	
//	  }
  
        
//        try {
//            var json = JSON.parse(message.data);
//        } catch (e) {
//            console.log('This doesn\'t look like a valid JSON: ', message.data);
//            return;
//        }
        // handle incoming message
    };
    }

//
//
//
////var WebSocket = require("../lib/ws");
//var ws = new WebSocket("ws://localhost:8100");
//
// 
//ws.on('open', function open() {
//    
//    ws.send('{"id":"browser", "type":"text", "content":"Browser ready."}' );
// });
// 
//ws.on('close', function close() {
//  console.log('disconnected');
//});
// 
//ws.on('message', function message(data, flags) {
////  console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
//// 
////  setTimeout(function timeout() {
////    ws.send(Date.now().toString(), {mask: true});
////  }, 500);
//
//console.log(data);
//});
//
//  window.onload=function() {
//    console.log(".. windows.onload function");
//  };
//
//
////	  var message = JSON.parse(event.data);
////  	switch(message.type) {
////			case "text":
////				//dispMessage(message.content);
////                                console.log("Un message est arrivé du serveur");
////                                console.log(message.windSpeed);
////                                $("body").append("<h1>"+message.windSpeed+"</h1>");
////				break;
////			case "image":
////				var iname = message.path;
////        dispMessage("Received " + iname);
////        console.log(iname);
////        $("body").add("<h1>" + iname + "</h1>")
////        image.src= iname
////  	    image.onload = function () { context.drawImage(image, 0, 0); }
////				break;	
////	  }
  
