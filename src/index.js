const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/status', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('join', (room) => {
        console.log('user joined');
        socket.join(room);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', (msg) => {
        console.log('message: ' + msg);

        socket.to('demo-room').emit('status', msg); // change room name if needed
      });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
