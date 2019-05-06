var app = require('express')();  
var https = require('https');  
var fs = require('fs'); 
const googleMaps = require('@google/maps');
const googleMapsClient = googleMaps.createClient({
    key: 'AIzaSyC1soN6m6TUODWQ71R4EBWzQCWPrdUlIkE'
});
// Add https certificate and create secure server on port 3456
var options = {  
    key: fs.readFileSync('./encrypt/key.pem', 'utf8'),  
    cert: fs.readFileSync('./encrypt/server.crt', 'utf8')  
};
 
var secureServer = https.createServer(options, app);
const httpsPort = 3456; 
secureServer.listen(httpsPort, () => {  
    console.log(">> CentraliZr listening at port " + httpsPort);  
});  

// create io connection on secure server
var io = require('socket.io')(secureServer);
app.get('/', function(req, res) {  
    //res.sendFile(__dirname + '/geoloc.html');  
}); 


io.on('connection', (socket) => {
  
    // Log whenever a user connects
    console.log('user connected');

    // Log whenever a client disconnects from our websocket server
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    // When we receive a 'message' event from our client, print out
    // the contents of that message and then echo it back to our client
    // using `io.emit()`
    socket.on('message', (message) => {
        console.log("Message Received: " + message);
        io.emit('new-message', {type:'new-message', text: message});    
    });
    
    socket.on('gotCurrentPosition', function (position) {
        console.log("server received position; ", position);
        //make request for nearby places given user's location
        googleMapsClient.placesNearby({
            location: position,
            radius: 1600
        }, function(err, response) {
            if (!err) {//if request was successful
                console.log("places nearby: ", response.json.results);
            }
            else{//else display error
                console.log("error received ", err);
            }
        });
      });
});