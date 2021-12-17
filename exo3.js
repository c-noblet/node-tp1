const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  const data = {
    firstname: 'Votre prénom',
    lastname: 'Votre nom',
    birthdate: 'Votre date de naissance',
    color: 'Votre couleur préférée'
  }
  res.end(JSON.stringify(data));
});

server.listen(8080, () => console.log('http://localhost:8080'));
