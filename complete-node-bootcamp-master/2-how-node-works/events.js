const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmmiter = new Sales();

myEmmiter.on("newSale", () => {
  console.log("There was a new sale!");
});
myEmmiter.on("newSale", () => {
  console.log("Customer name: Me!!");
});
myEmmiter.on("newSale", (stock) => {
  console.log(`There are now ${stock} ietems left in stock!`);
});

myEmmiter.emit("newSale", 9);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved!");
  res.end("Request recieved!");
});

server.on("request", (req, res) => {
  console.log("Another request recieved!");
});
server.on("close", () => {
  console.log("Server closed!");
});

server.listen(3000, "127.0.0.1", () => console.log("Waiting for requests..."));
