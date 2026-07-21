import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

let messages = [];

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(message);
    messages.push(message.toString());
    if (message.toString() === "exit") {
      ws.close();
    }
    else {
      wss.clients.forEach(client => client.send(message.toString()));
    }
  })
  ws.on("close", () => {
    console.log("user disconnected");
  });
  console.log("new socket connected");
  ws.send("welcome to chat!")
  if (messages.length) {
    ws.send("chat is in session");
    message.array.forEach((message) => {
      ws.send(message.toString());
    });
  }
});

console.log(
  "chat server waiting for connections on ws://localhost:3000"
);
