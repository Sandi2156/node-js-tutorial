const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  fs.appendFile(
    "04_logs.txt",
    `${Date.now()}: New Request on ${req.url}\n`,
    (err) => {
      const myUrl = url.parse(req.url, true);

      switch (myUrl.pathname) {
        case "/":
          res.end("HomePage");
          break;
        case "/about":
          res.end("I am Sandipan");
          break;
        default:
          res.end("404 Not Found");
          break;
      }
    }
  );
});

server.listen(8000, () => {
  console.log("listening on 8000");
});
