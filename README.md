# README #
* Tavis Reed
* Kaitlin A Clark

### Proj Description ###

* https://docs.google.com/document/d/1ZyKcfB9HKLqOZ1_Q3L6BZ64rhRbHUMNfQkUX6_ugNIU/edit?usp=sharing 
## Need To ##
* install Socket.IO: npm install socket.io
* install Google Maps Interface: npm install @google/maps
* save geoloc.html and geoloc.js in same directory
* generate privatekey and certificate (save in encrypt/) using following Linux commands:
	- openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem 
	- openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out server.crt

## Dependencies to Install ##
* Serve Angular proj: ng serve --open
* run nodejs script: node main.js
* open app in browser at http://localhost:4200
	- server should say 'user connected'
* Install the following modules Express, SocketiO, Rxjs, ng-socket-io Module
	- npm i express socket.io rxjs ng-socket-io @agm/core --save

