const express = require('express');
const logger = require('morgan');

const usersRouter = require('./routes/users');

const app = express();
const port = '3000';

app.listen(port);

app.use(logger('dev'));
app.use(express.json());


app.use('/users', usersRouter);
app.use('/posts', usersRouter);

module.exports = app;
