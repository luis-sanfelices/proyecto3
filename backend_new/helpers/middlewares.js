const jwt = require('jsonwebtoken');

const middlewares = {
  isCorrectToken() {
    return (req, res, next) => {
      const token = req.headers['x-access-token'];
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      jwt.verify(token, process.env.SECRETJWT, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        req.decoded = decoded;
        next();
      });
    };
  },
};

module.exports = middlewares;
