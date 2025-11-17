const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World. Luluk");
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
