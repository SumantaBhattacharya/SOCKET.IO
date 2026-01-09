<style>
   .heading {
      border-bottom: 2px solid white; 
      color: #30D8FB; 
      font-size: 2rem; 
      font-weight: bold; 
      display: inline-block;
   }
   .head {
      /* text-decoration: underline;  */
      border-bottom: 2px solid white;
      /* color: #86774D;  */
      font-size: 2rem; 
      font-weight: bold;
      display: inline-block; 
   }

   .para {
      color: #86774D; 
      font-size: 1rem;  
   }

</style>

<h4 class="heading">Sockets</h4>

A Socket is one end of a connection

<h4 class="heading">Protocols</h4>

*Communication rules*

*`TCP`(Transmission Control Protocol)*
- *Reliable*
- *slow*
- *Connection oriented*
- *Bidirectional (Both sides can send and receive data simultaneously)*
- *e.g., `HTTP`*

*`UDP`(User Datagram Protocol)*
- *Less reliable*
- *fast*
- *Connectionless oriented (Both sides can send and receive data simultaneously)*
- *Bidirectional*
- *e.g., `WebRTC`*

<h4 style="border-bottom: 2px solid white; color: #fff;font-size: 2rem; font-weight: bold; display: inline-block;">
   <span style="color: #30D8FB;">
      WebRTC
   </span> 
   for Video Communication
</h4> 

<h4 class="para">Web Real Time Communication</h4>

<!-- It basically helps to have a direct communication between two users without intervention of server once the connection is established by the seerver -->

> *WebRTC enables direct browser-to-browser communication for real-time media, using servers only for initial connection setup*

#### ***WebRTC connection stages:***
- i. ***Signaling***.
  - i.i. *signaling server*
  - i.ii. *used by the* `SDP (Session Description Protocol)`
  - i.iii. `SDP` *contents*
    - i.iii.i. **Session Metadata** *such as* origin, timing 
    - i.iii.ii. Media Descriptions *such as* audio/video formats
    - i.iii.iii. Connection Data *such as* IP addresses, ports
- ii. ***Connecting***.
  - ii.i. *`ICE (Interactive Connectivity Establishment)` establishes the most reliable and suited Network/connection path between peers (users/devices) for communication*
- iii. ***Securing***. 
  - iii.i. *encryption*
  - iii.ii. *`DTLS (Datagram Transport Layer Security)`*
      - iii.ii.i. *Secures Ongoing Control Messages*
      - iii.ii.ii. *Secures Data channel (Media Data like chat, file transfer)*
      - iii.ii.iii. *Generate secret keys for `SRTP`*
      - iii.ii.iv. *Provides `i. Authentication` - only the intended information goes to the intended reciever only, `ii.Verification` - data goes to the intended reciever of the transferred data only, `iii.Integrity` - data is not modified in transit and `iv.confidentiality` - only the reciever of the data whom the sender is intent to send the data can decrypt it*
   - iii.iii. *`SRTP (Secure Real-time Transport Protocol)`*
      - iii.iii.i. *Encrypt Media Streams (Audio/Video)*
   - iii.iv. *`DTLS` and `SRTP` work together to create a double-layered security system for `WebRTC`.*
- iv. ***Communicating***.

<!-- ICE basically identifies all the possible network paths and choose the best one of them for communication. -->

<h4 class="heading">WebRTC</h4>

1. MediaStream
2. RTCPeerConnection
3. RTCDataChannel

<!-- https://strapi.videosdk.live/uploads/Chat_GPT_Image_Apr_8_2025_03_28_09_PM_min_a50f18164c.png -->

<h4 style="border-bottom: 2px solid white; color: #fff;font-size: 2rem; font-weight: bold; display: inline-block;">
   <span style="color: #30D8FB;">
      WebRTC
   </span> 
   Architecture
</h4>

<h4> <i class="para">P2P</i> <i>(Peer to Peer) </i></h4>

![Peer-to-Peer-(P2P)-Architecture](https://media.geeksforgeeks.org/wp-content/uploads/20240515175702/Peer-to-Peer-(P2P)-Architecture.webp)

<h4> <i class="para">SFU</i> <i>(Selective Forwarding Unit)</i></h4>

![sfu](sfu.png)

Each participant send its media stream to the server, and recieves all the other's media from it.

<h4> <i class="para">MCU</i> <i>(Multipoint Control Unit)</i></h4>

![https://docs.mirotalk.com/images/mcu.png](https://docs.mirotalk.com/images/mcu.png)

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
  * ***eg- Trading apps***
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

