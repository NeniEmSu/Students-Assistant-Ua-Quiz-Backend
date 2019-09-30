const {
    getCorrectAnswers,
    getQuizQuestions
} = require('../models/questions');


exports.getAllQuestions = (req, res, next) => {
    Quiz.find().then((quiz) => {
        res.status(200).json(quiz);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};