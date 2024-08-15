const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    // origin: 'http://localhost:3000',
    origin: '*',
    methods: ['GET', 'POST'],
  },
});


io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3001);
app.get('/', (req, res) => {
  res.send('Hello World!');
});