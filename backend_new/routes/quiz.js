const quizController = require('../controllers/quiz');
const middlewares = require('../helpers/middlewares');

const quizRouter = (app) => {
  app.post('/api/quiz', middlewares.isCorrectToken(), quizController.createQuiz);
};

module.exports = quizRouter;
