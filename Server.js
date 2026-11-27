const http = require("http");
const fs = require("fs");
const _ = require("lodash")

const server = http.createServer((req, res) => {
  // console.log("request Received");
  console.log(req.url);
  let path = "./docs/";
  // console.log(req.method);

  // res.setHeader("content-Type", "text/plain");
  // res.write("Hello to Node.js");
  // res.write("Study the Node.js");

  res.setHeader("content-Type", "text/html");

  // res.write("<h1>Hello to Node.js</h1>");
  // res.write("<p>Study the Node.js</p>");

  if (req.url === "/") {
    path += "index.html";
    res.statusCode = 200;
  } else if (req.url == "/home") {
    res.statusCode = 301;
    res.setHeader("Location", "/");
    res.end();
  } else if (req.url == "/about") {
    path += "about.html";
    res.statusCode = 200;
  } else if (req.url == "/features") {
    path += "feature.html";
    res.statusCode = 200;
  } else if (req.url == "/projects") {
    path += "projects.html";
    res.statusCode = 200;
  } else {
    path += "NotFound.html";
    res.statusCode = 404;
  }

  if (fs.existsSync(path)) {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err.message);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
  // res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Server is Running on Port 3000");
  console.log(_.random(15,25));
});
