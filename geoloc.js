// Require the packages we will use:
var express = require('express');  
var app = express();  
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
app.get('/sach', function(req, res) {  
    res.sendFile(__dirname + '/geoloc.html');  
}); 

io.on('connection', function (socket) {
console.log("server connected");

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


function findNearByPlaces(pos){
        
    
    ////////////////////////////////////
    /*get place info using place_id
    googleMapsClient.place({
        placeid: place_id
    }, function(err, response){
        if(!err){
            console.log("place info: ", response.json.results);
        }
    }
});*/
    /////////////////////////////////

}