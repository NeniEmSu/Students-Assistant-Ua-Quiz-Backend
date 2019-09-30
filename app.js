const express = require('express');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/questions');


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api', quizRoutes);

app.use((req, res, next) => {
    res.status(404)
        .send('Unknown Request');
});


module.exports = app;