const authController = require('../controllers/auth');
const middlewares = require('../helpers/middlewares');

const authRouter = (app) => {
  app.get('/api/auth', authController.hello);

  app.post('/api/signup', authController.signup);

  app.get('/api/me', middlewares.isCorrectToken(), authController.me);
};

module.exports = authRouter;
