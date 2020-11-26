const router = require('express').Router();
let Quiz = require('../models/quiz.model');


router.route('/').get((req, res) => {
  Quiz.find()
    .then(quiz => res.json(quiz))//Return in JSON 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const name = req.body.name;
  const score = Number(req.body.score);

  const newResult = new Quiz({
    name,
    score
  });

  newResult.save()
    .then(() => res.json('Quiz result added!'))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

module.exports = router;
