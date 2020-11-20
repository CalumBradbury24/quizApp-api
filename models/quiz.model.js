const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//define the model schema
const quizSchema = new Schema({
    name: {//SensorID must be a string and is required
        type: String,
        required: true,
    },
    score: {                        //1.0 particulate matter
        type: Number,
        required: true
    },    
});

const quizResults = mongoose.model('Quiz Results', quizSchema);
module.exports = quizResults;//export the model

