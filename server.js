const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

io.on('connection', (socket) => {
    console.log('socked connected', socket.id);
});

server.listen(8080, (err) => {
    if (err) {
        throw Error(err)
    }
    console.log('The server has been started')
});