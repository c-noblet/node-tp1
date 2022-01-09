const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(500);
  res.end('Error');
});

server.listen(8080, () => console.log('http://localhost:8080'));
