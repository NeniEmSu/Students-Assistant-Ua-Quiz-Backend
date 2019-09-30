const express = require('express');
const router = express.Router();

const {
    getCorrectAnswers,
    getQuizQuestions
} = require('../models/questions');


// ourapi.com/api/
router.get('/', (req, res) => {
    res.send('Api router');
});

router.get('/questions', questionHandler);
router.get('/answers', answerHandler);

module.exports = router;

function questionHandler(req, res) {
    getQuizQuestions()
        .then(data => {
            res.json(data);
        });
}

function answerHandler(req, res) {
    getCorrectAnswers()
        .then(data => {
            res.json(data);
        });
}