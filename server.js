var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 8000;

app.use(express.static('src'));

io.on('connection', (socket) => {
console.log('new connection made');

socket.on('event1', (data) => {
  console.log(data.msg);
  socket.broadcast.emit('event1',data);
});
});

server.listen(port, () => {
  console.log("Listening on port " + port);
});
const jsonServer = require('json-server');
const jserver = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const jport =  3000;

jserver.use(middlewares);
jserver.use(router);

jserver.listen(jport);
