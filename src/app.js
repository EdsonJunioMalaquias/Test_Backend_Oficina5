const express = require('express');
const logger = require('morgan');

const usersRouter = require('./routes/users');

const postsRouter = require('./routes/posts');

const app = express();
const port = '3000';

require('./database');

app.listen(port);

app.use(logger('dev'));
app.use(express.json());


app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
