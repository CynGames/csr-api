const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes');
const config = require('./config/config');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  const status = err.statusCode || 500;
  const message = err.message || err;
  res.status(status).json({ message });
});

app.set('port', config.port);

module.exports = app;
