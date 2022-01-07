const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.routes.js');
const postsRouter = require('./routes/posts.routes.js');
const commentsRouter = require('./routes/comments.routes.js');
const rolesRouter = require('./routes/roles.routes.js');
const app = express();
const port = 8080;
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/roles', rolesRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
