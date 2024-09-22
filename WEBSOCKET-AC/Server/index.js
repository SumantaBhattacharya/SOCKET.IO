// APNA COLLEGE

import express from "express";
import http from "http";
import WebSocket, { WebSocketServer } from 'ws';

const app = express();
// const server = http.createServer(app);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    // http://localhost:8080
    // ws://localhost:8080/
    // in previous versions the data were in printed in the form aof a string

});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on("message", (data) => {
        // Convert the Buffer to a string
        // const message = data.toString();
        // console.log('Data from client:', message);
        console.log("Data from client: %s:", data);
        ws.send("Thanks buddy!");
    });//Hi server, I am client.
});

/*
it shouldn’t cause any problems. MongoDB's location on your C drive and the file you create on your D drive are separate concerns. As long as you correctly specify the MongoDB connection URI in your Express.js application, it should be able to connect to the MongoDB server regardless of where your application files are located.

Just ensure that:

MongoDB is running and accessible.
The connection URI in your Express app is correct and matches your MongoDB server configuration.
If you encounter any issues, double-check the connection string and any firewall or network configurations that might affect the connection.
 */
/*
To use WebSocket in Postman:

Open Postman: Start by opening the Postman application.

Create a New Request: Click on the “New” button and select “WebSocket Request.”

Enter the WebSocket URL: In the request tab, enter the WebSocket URL (e.g., ws://localhost:3000).

Connect: Click on the “Connect” button to establish a WebSocket connection.

Send and Receive Messages: Once connected, you can send messages by typing into the input field and clicking “Send.” You’ll see received messages in the response area.
 */
/*
PS C:\Users\SUDIP BHATTACHARYA\Desktop\Socket.io\WEBSOCKET-AC> cd Server
PS C:\Users\SUDIP BHATTACHARYA\Desktop\Socket.io\WEBSOCKET-AC\Server> npm init -y
Wrote to C:\Users\SUDIP BHATTACHARYA\Desktop\Socket.io\WEBSOCKET-AC\Server\package.json:

{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}



PS C:\Users\SUDIP BHATTACHARYA\Desktop\Socket.io\WEBSOCKET-AC\Server> npm i express

added 64 packages, and audited 65 packages in 4s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\SUDIP BHATTACHARYA\Desktop\Socket.io\WEBSOCKET-AC\Server> npm install ws

added 1 package, and audited 66 packages in 2s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
 */