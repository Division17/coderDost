// the order of the middleware and the API aka routes order matter a lot in control movement if not placed in the correct order may result in skipping or sometimes not even reaching API

const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");

const express = require("express");
const morgan = require("morgan");  // third party middleware provided by the express itself (it's a logger)
const port = 8080;
const server = express();

server.use(express.json()); // bodyparser(earlier) now a middleware that is provided by express itself, helpfull in reading json coming from body

//server.use(express.urlencoded()); //  is a built-in middleware function in Express.js. It is used to parse incoming request objects as strings or arrays12. This function is particularly useful when dealing with POST and PUT requests, where you are sending data to the server1.

server.use(morgan('default'))  // different types of params are available in  morgan check

server.use(express.static('public'));  // static hosting no interference of the server, directly allowed to download the file given in defined folder



// server.use((req, res, next) => {
//   // application-level middleware
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });

const auth = (req, res, next) => {
  // if (req.query.password == "123") {    for quering directly using params or the url itself
  //   next();
  // }

  if (req.body.password == "123") {
    // for reading json coming from body (postman)
    next();
  } else {
    res.sendStatus(401);
  }
};

//server.use(auth)  // application-level middleware

//   API or Endpoint or Routes

server.get("/xyz/:id", (req, res) => {   // here xyz is the route and id is dynamic variable used to access the information
  // Router-level middleware
  res.json({ type: "GET" });
});

server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/demo", (req, res) => {
  res.status(201).send("<h1>Hello world!</h1>");
  //  res.sendStatus(404)
  //  res.json(data)
  // res.sendFile("/Users/saura/OneDrive/Desktop/0/work/practice/webpractice/backend/Utube/coder/express/index.html")
  //  res.send("<h1>Hello</h1>")
});

server.listen(port, () => {
  console.log("server started");
});
