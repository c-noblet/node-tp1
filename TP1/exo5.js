const http = require('http');

const server = http.createServer((req, res) => {

  const urlObject = new URL(req.url, `http://${req.headers.host}`)
  if (urlObject.pathname == '/welcome') {
    res.writeHead(200);
    res.end('hello world');
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8080, () => console.log('http://localhost:8080'));
