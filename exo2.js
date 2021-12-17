const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  const data = {
    message: 'Hello world !',
    status: 200,
  }
  res.end(JSON.stringify(data));
});

server.listen(8080, () => console.log('http://localhost:8080'));
