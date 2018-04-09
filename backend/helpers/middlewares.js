const jwt = require('jsonwebtoken');

const middlewares = {
  isCorrectToken() {
    return (req, res, next) => {
      const token = req.headers['x-access-token'];
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      jwt.verify(token, process.env.SECRETJWT, (err, decoded) => {
        if (err) return res.status(401).send({ auth: false, message: 'Invalid token.' });
        req.decoded = decoded;
        next();
      });
    };
  },
  CORS(url) {
    return (req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', url);
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Credentials', true);
      if (req.method === 'OPTIONS') {
        res.sendStatus(200);
      } else {
        next();
      }
    };
  },
};

module.exports = middlewares;
