// import { WebSocketServer } from "ws";

// const wss = new WebSocketServer({ port: 3000 });

// let messages = [];

// wss.on("connection", (ws) => {
//   ws.on("message", (message) => {
//     console.log(message.toString());
//     messages.push(message.toString());
//     if (message.toString() === "exit") {
//       ws.close();
//     } else {
//       wss.clients.forEach((client) =>
//         client.send(message.toString())
//       );
//     }
//   });
//   ws.on("close", () => {
//     console.log("user disconnected");
//   });
//   console.log("new socket connected");
//   ws.send("Welcome to Live Chat!");
//   if (messages.length) {
//     ws.send("Chat currently in session");
//     messages.forEach((message) =>
//       ws.send(message.toString())
//     );
//   }
// });

// console.log(
//   "chat server waiting for connections on ws://localhost:3000"
// );

//socket.io

import { createServer } from "http"
import { Server } from "socket.io"

const server = createServer().listen(3000);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`${io.engine.clientsCount} connections`);
  socket.on("chat", (message) => {
    console.log(`${socket.id}: ${message}`);
    io.sockets.emit("message", message, socket.id);
  });
  socket.on("disconnect", () => {
    console.log("disconnect", socket.id);
  });
});

console.log("socket server");
