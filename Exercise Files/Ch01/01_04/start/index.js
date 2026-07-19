const http = require("http");
const fs = require("fs");

const sendFile = (res, status, filePath, contentType) => {
    res.writeHead(status, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
};

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            return sendFile(res, 200, "./home-page.html", "text/html");
            break;
        case "/img/desert-mountains.jpg":
            return sendFile(res, 200, "./desert-mountains.jpg", "image/jpeg");
            break;
        case "/styles.css":
            return sendFile(res, 200, "./styles.css", "text/css");
            break;
        default:
            return sendFile(res, 404, "./404.html", "text/html");
    }
}).listen(3000);

console.log("Server running at http://localhost:3000/");