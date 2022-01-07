const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  const urlObject = new URL(req.url, `http://${req.headers.host}`)
  if (urlObject.search == '') {
    res.end('nothing');
  } else {
    res.end(`Your message: ${urlObject.searchParams.get('message')}`);
  }
});

server.listen(8080, () => console.log('http://localhost:8080'));
