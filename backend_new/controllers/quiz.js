const Quiz = require('../models/quiz');

const quizController = {
  createQuiz(req, res, next) {
    Quiz.create({
      name: req.body.name,
      category: req.body.category,
      questions: [],
      user: req.decoded.id,
    })
      .then((quiz) => {
        res.status(200).send(quiz);
      })
      .catch((err) => {
        next(err);
      });
  },
  //createQuestion
};

module.exports = quizController;
