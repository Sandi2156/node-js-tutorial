const express = require("express");

// app is a handler
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello");
});

app.get("/about", (req, res) => {
  return res.send("Hello from about page");
});

// const server = http.createServer(app);
// server.listen(8000, () => console.log("listening"));

app.listen(8000, () => console.log("Listening on port 8000"));
