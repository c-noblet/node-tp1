const express = require('express');
const bodyParser = require('body-parser');
const {
  helloWorld,
  message,
  infosHeader,
  user,
  rickRoll,
  customHeader,
  getParams
} = require('./utils.js');
const {
  getUsers,
  getUser,
  createUser,
  deleteUser
} = require('./handlers/users.js');
const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get('/hello-world', helloWorld);

app.get('/message', message);

app.post('/infos/headers', infosHeader);

app.post('/user', user);

app.get('/rick-roll', rickRoll);

app.delete('/custom-header', customHeader);

app.get('/params/:id/:key/:slug', getParams);

app.get('/users', getUsers);

app.get('/users/:id', getUser);

app.post('/users', createUser);

app.delete('/users/:id', deleteUser);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
