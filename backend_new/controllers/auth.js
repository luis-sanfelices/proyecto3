const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

require('dotenv').config();

const authController = {
  hello(req, res) {
    res.send('hello world auth');
  },
  signup(req, res, next) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })
      .then((user) => {
        const token = jwt.sign({ id: user.id }, process.env.SECRETJWT, {
          expiresIn: 86400, // expires in 24 hours
        });
        res.status(200).send({ auth: true, token });
      })
      .catch((err) => {
        next(err);
      });
  },
  login(req, res, next) {
    next();
  },
  me(req, res) {
    console.log(req.decoded);
    return res.status(200).send('hola');
  },
};

module.exports = authController;
