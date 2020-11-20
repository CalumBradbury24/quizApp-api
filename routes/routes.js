//Probably dont need the post requests since this is handled in python?
const router = require('express').Router();
let Quiz = require('../models/quiz.model');


//:id is a variable that is used to get an object by a given id
router.route('/').get((req, res) => {
  Quiz.find()
    .then(quiz => res.json(quiz))//Return reading in JSON 
    .catch(err => res.status(400).json('Error: ' + err));
});

//Endpoint for incoming POST requests on '/CurrentAirQuality' URL path for users
router.route('/').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);//Cast to a number

  const newResult = new Quiz({//Create new instance of reading using given sensorID
    name,
    score
  });

  newResult.save()//Save new reading to database
    .then(() => res.json('Quiz result added!'))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

module.exports = router;//export router