const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const authRoutes = require('./routes/auth')

const app = express();

require('dotenv').config();

if (process.env.NODE_ENV === 'development') {
  mongoose.connect(process.env.DATABASE);
} else {
  mongoose.connect(process.env.DATABASE);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
authRoutes(app);

module.exports = app;

