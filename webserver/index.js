const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");
// const data = { age: 5 }

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "Application/json");
      res.end(JSON.stringify(data));
      break;

    case "/demo":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;

    case "/product":
      res.setHeader("Dummy", "DummyHeader");
      res.end(data);
      break;

    default:
      res.writeHead(404);
      break;
  }
});

server.listen(8080, () => {
  console.log("server started");
});
