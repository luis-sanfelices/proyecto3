const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');

const app = express();

require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  mongoose.connect(process.env.DATABASE);
} else {
  mongoose.connect(process.env.DATABASE);
}
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
authRoutes(app);
quizRoutes(app);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((error, req, res) => {
  // set locals, only providing error in development
  // console.log(error);
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // send error
  res.status(error.status || 500);
  res.json({ error: error.statusMessage });
});

module.exports = app;
