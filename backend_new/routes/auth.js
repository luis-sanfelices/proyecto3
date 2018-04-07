const authController = require('../controllers/auth');

const authRouter = (app) => {

    app.get('/auth', authController.hello);



}

module.exports = authRouter;