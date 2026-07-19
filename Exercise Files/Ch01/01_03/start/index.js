const http = require("http");

const https = require("https");
const fs = require("fs");

// http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("Hello World");
//   res.end();
// }).listen(3000);

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log("Request details", req);
  res.end(
    `<!doctype html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World 2</h1>
    <p>${req.method} request made for ${req.url}</p>
  </body>
</html>`
  );
}).listen(3000);

console.log("Server running at http://localhost:3000/");

// const url = "https://en.wikipedia.org/wiki/Cher";

// const request = https.get(url, (res) => {
//   let download = fs.createWriteStream("cher.html");
//   console.log("Response started!");
//   res.pipe(download);
//   res.on("end", () => {
//     console.log("Response finished");
//   });
// });

// request.end();
