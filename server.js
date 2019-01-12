const http = require('http');
var MongoClient = require('mongodb').MongoClient,
  co = require('co'),
  assert = require('assert')


const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var url = 'mongodb://localhost:27017/test';

co(function*() {
  const db = yield MongoClient.connect(url);
  console.log("Connected successfully to server");

  db.close();
}).catch(err => console.log(err));