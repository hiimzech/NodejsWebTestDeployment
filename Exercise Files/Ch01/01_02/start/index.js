const https = require("https");
const fs = require("fs");

const url = "https://en.wikipedia.org/wiki/Cher";

// const options = {
//   hostname: "en.wikipedia.org",
//   port: 443,
//   path: "/wiki/Cher",
//   method: "GET"
// };

//const request = https.request(options, (res) => {
const request = https.get(url, (res) => {
  // let responseBody = "";
  // res.setEncoding("UTF-8");
  // res.on("data", (chunk) => {
  //   console.log("---chunk", chunk.length);
  //   responseBody += chunk;
  // });
  // res.on("end", () => {
  //   fs.writeFile("cher.html", responseBody, (err) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log("file downloaded");
  //   });
  // });

  let download = fs.createWriteStream("asdf.html");
  console.log("downloading...");
  res.pipe(download);
  res.on("end", () => {
    console.log("file downloaded");
  });
});

request.end();
