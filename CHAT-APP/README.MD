<!-- [CHAT-APP](../readme.md) -->

[![Node-JS SOCKET-IO](https://img.youtube.com/vi/UUddpbgPEJM/0.jpg)](https://youtu.be/UUddpbgPEJM?si=FPFQjbsMwQwzYErx)

`HTTPS - Req-Req close, Req-Req close, Req-Req close cycle gose again`
```
👤🔄[🖧]🔄👤
```
*multiple cycles will take the reciever to check if there is any meaasge available and response from the sender(client)*

`UpgradeHeader`

👤🔄[![HTTP Icon 16](./icons8-http-64.png)](https://www.npmjs.com/package/ws)🔄👤



# ***WebSocket Working***
## Data Exchange:
Messages are sent as WebSocket frames. These frames are small chunks of data that are efficiently transmitted over the open connection.
## No Polling Required:
The WebSocket connection is always open as long as both parties are connected. There is no need for the client to repeatedly check for new data; instead, the server can push messages to the client whenever necessary.

`WebSocket eliminates the need for polling by providing a persistent, real-time communication channel where both the client and server can send and receive messages instantaneously.`

`UpgradeHeader` *refers to the HTTP headers involved in upgrading a connection from HTTP to WebSocket.

## WebSocket Upgrade Request
*When a client wants to establish a WebSocket connection, it sends an HTTP request with an Upgrade header to the server. This header indicates that the client wants to switch from the HTTP protocol to the WebSocket protocol.*

- [**socket.io**](https://www.npmjs.com/package/socket.io)
https://socket.io/get-started/chat