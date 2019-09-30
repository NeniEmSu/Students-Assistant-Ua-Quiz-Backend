const {
    startDb
} = require('./db');
const {
    Question
} = require('./models/questions');
const {
    quizQuestions,
    correctAnswers
} = require('./data');

async function migrateQuestions() {
    for (let i = 0; i < quizQuestions.length; i++) {
        const q = quizQuestions[i];
        const correct = q.possibilities[correctAnswers[i]].answer;

        const data = {
            question_type: q.type,
            question_number: q.number,
            question_text: q.text,
            question_possibilities: q.possibilities,
            correct_answer: correct,
        };

        await Question.create(data);
    }
}

async function migrate() {
    startDb();
    await migrateQuestions();
    process.exit();
}

migrate();