const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(400);
  res.end('Error');
});

server.listen(8080, () => console.log('http://localhost:8080'));
