const http = require('http');
const express = require('express');
const path = require("path")
const { Server } = require("socket.io");
// server side
// with express not wss
// npm install express@4
// const io = require('socket.io')(server); // socket.io
// const server = require('http').createServer(app);

const app = express();
const server = http.createServer(app);

const io = new Server(server);

//socket io emit-send
io.on('connection', (socket) => {
    // console.log('a user connected', socket.id);
    socket.on('chat message', (message) => {// user message
        //console.log('A new User message: ', msg);
        io.emit('message', message); // send to everyone except sender
    });
});
  

//app.use(express.static("/public"));
//app.use(express.static(path.join(__dirname,'public')));// static files /public ✔
app.use(express.static(path.resolve("./public")))

app.get('/', (req, res) => {
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html'); // serve index.html file
    //res.sendFile(__dirname + '/public/index.html');
    //res.sendFile(path.join(__dirname, 'public', 'index.html')); // serve index.html file
});

const port = process.env.PORT || 9000;

server.listen(port, () => { // middleware
    console.log(`Server running at http://localhost:${port}`);
});