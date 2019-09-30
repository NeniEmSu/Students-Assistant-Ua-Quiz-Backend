const mongoose = require('mongoose');

function startDb() {
    mongoose.connect('mongodb+srv://neni:88fAHEm9gteF69Lw@productsdevcluster-u3co4.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('connected to mongodb atlas');
        })
        .catch((error) => {
            console.log('unable to connect to mongodb atlas');
            console.error(error);
        });

    return mongoose.connection
        .on('error', console.error)
        .on('disconnected', startDb);
}

module.exports = {
    startDb,
};