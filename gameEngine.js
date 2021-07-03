// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname + '../')));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '../index.html');
});

server.listen(4200);