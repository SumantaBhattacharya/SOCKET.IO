# ***Web Socket***
[![What is WebSocket? Why is it used & how is it different from HTTP?](https://img.youtube.com/vi/favi7avxIag/hqdefault.jpg)](https://youtu.be/favi7avxIag?si=IdTwQnLBQpNod7ys)

### Topics Learned:
- WebSocket allows peer-to-peer connection for real-time data transfer.
- WebSockets allow for real-time bidirectional communication, supporting efficient data exchange.
- WebSocket allows for full-duplex communication with the server.
- WebSocket is a persistent, bi-directional full-duplex connection.
- WebSocket is different from HTTP and allows for bidirectional communication.
- Using Node.js, we can leverage NPM packages to quickly implement a WebSocket server and client.
- WebSocket allows real-time data communication and two-way interaction between client and server.
- WebSocket allows for a persistent connection and exchange of data between client and server.

## ***Web Socket***
```
        🔄
🖥️client ➡ 🖧server 
```
`Bi-directional & Full Duplex`

* ***Web Socket is a persistent connection between the client and the server which doesnt build using http***
* ***Its is a Bi-directional & Full Duplex Where the client and server can send the data at any time***
* ***The server does'nt have to wait for the client requests to push back any data and the client does'nt have to create a new conection to send any data to the server***

- ***We generally use Web Scokets for building real time systems where the client has to very frequently send the data to the server or vice versa(where the client has to very frequently send the data to the server)***
  * ***eg- Tranding apps***
    * [Tranding apps](https://www.wsj.com/market-data/stocks)

```
HTTP
    req           ⬅    res
🖥️client          ➡    🖧server 
  www.google.com   
  client will send a request to the server 
  once it send the request,
  it will establish PCB (Protocol Control Block) connection.

 server then based upon the request will send the response to the client(browser) and when the response is get to the client then the PCB (Protocol Control Block) connection will get closed.
means it will complete one time the response cycle

HTTP is a Uni-directional & stateless protocall
where we send the mutiple requests in the form of headers

### Real-Time Communication Challenges with HTTP

In real-time systems like chatting, where real-time data is crucial, HTTP faces challenges due to its stateless nature. Clients have to repeatedly request data from the server, leading to inefficiencies.
```
<!-- The problems come in http when we deal with real time systems eg- chatting where we require real time data
where we have request multiple time to fetch the info from the server -->

#### Polling Solutions

1. **Short Polling:**
   - Requests and responses happen at fixed time intervals.
   - **Problem:** Multiple requests are sent even if no new data is available. If the server has no response, it returns an empty response, leading to wasted resources.

2. **Long Polling:**
   - The client sends a request and waits for a longer duration for the server to respond.
   - **Problem:** After a timeout, the client sends another request, which can still be resource-intensive but reduces the frequency of empty responses.

#### A Better Solution: Server-Sent Events (SSE)
```
                  res
🖥️client    ⬅    🖧server 
```
- **Server-Sent Events (SSE):**
  - A uni-directional connection where the server can continuously send data to the client without the client having to request it repeatedly.
  - **Benefit:** This reduces the need for constant polling and efficiently pushes real-time updates to the client, making it more resource-efficient compared to polling.
  - **Problem:** SSE is not suitable for applications like chat,trading, where bidirectional communication is required, as it only allows the server to send data to the client, but the client cannot send data back to the server.
  - It is very suitable for thoses cases where server is required to send the data to the server very frequently
  like notification,broadcasting
  In chatgpt, it uses SSE

<!-- where each request from the client to the server is independent, meaning no persistent connection is maintained between requests in http. -->

<!--  ChatGPT uses Server-Sent Events (SSE) to deliver responses to the client. SSE is well-suited for this use case because it allows the server to push updates (i.e., the AI's responses) to the client as they become available. Since ChatGPT primarily involves the server sending data (responses) to the client 

However, since ChatGPT also requires user input (which involves sending data from the client to the server), the interaction is not purely one-way like in traditional SSE setups. The initial request from the client (your input) is sent via a standard HTTP request, and then SSE is used for delivering the response.-->

## ***Web Socket***
```
        🔄
🖥️client ➡ 🖧server 
```
`Bi-directional & Full Duplex`
`To solve this problem`
* ***Web Socket is a way to create a persistent bi-direction full duplex connection***

### Establishing a WebSocket Connection
1. **Client Sends HTTP Handshake Request:**
   - The client initiates the WebSocket connection by sending an HTTP handshake request to the server.
   - This request includes an `Upgrade` header, indicating that the client wishes to switch the protocol from HTTP to WebSocket.

   `101 Switching  Protocol Responses`
2. **Server Responds:**
   - If the server supports WebSocket, it responds with an HTTP 101 status code (Switching Protocols).
   - This response also includes headers to confirm the protocol switch, establishing the WebSocket connection.

3. **Connection Established:**
   - Once the handshake is successful, the connection is established.
   - From this point, the client and server can communicate over the WebSocket connection, allowing for real-time, full-duplex communication.

### HTTP vs WebSocket

**HTTP:**
- **Example Use Case:** Sending an email
- **Connection Type:** Stateless
- **Data Flow:** Unidirectional (client to server or server to client)
- **Communication:** Half-duplex (client and server cannot send data simultaneously)

**WebSocket:**
- **Example Use Case:** Chatting, trading
- **Connection Type:** Stateful
- **Data Flow:** Bidirectional (both client and server can send data to each other)
- **Communication:** Full-duplex (client and server can send data simultaneously)

[**WS** ***(WebSocket)***](https://www.npmjs.com/package/ws)

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

# ***Socket io***
[![Best way to learn Socket IO | complex chat app](https://img.youtube.com/vi/mYCpclKeCrs/hqdefault.jpg)](https://youtu.be/mYCpclKeCrs?si=yqkrTqFiUubUoMXV)
- [***Free Api***](https://freeapi.app/)
- [***Free Api-github***](https://github.com/hiteshchoudhary/apihub)

`apihub-main`
```bash
npm i
---
npm run start
```

