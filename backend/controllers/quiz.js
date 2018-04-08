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
  createQuestion(req, res, next) {
    newQuestion = {
      question: req.body.question,
      correct_answer: req.body.correct_answer,
      incorrect_answers: req.body.incorrect_answers,
    }
    Quiz.findOneAndUpdate({ _id: req.params.quizId }, { $push: { questions: newQuestion } } )
      .then((quiz)=>{
        res.status(200).send(quiz);
      })
      .catch((err)=>{
        next(err);
      })
  }
};

module.exports = quizController;

