const router = require('express').Router();
const Exercise = require('../models/exercise');

router.route('/')
    .get((req, res) => {
        Exercise.find({}, (err, exercises) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json(exercises);
            }
        });
    })
    .post((req, res) => {
        const exercise = new Exercise({
            username: req.body.username,
            description: req.body.description,
            duration: Number(req.body.duration),
            date: Date.parse(req.body.date)
        });

        exercise.save((err) => {
            if(err){
                res.status(400).json(Exercise);
            }else{
                res.json('Exercise added!');
            }
        });
});

/* Specific exercise */
router.route('/:id')
    .get((req, res) => {
        Exercise.findById((req.params.id), (err, exercise) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json(exercise);
            }
        });
    })
    .delete((req, res) => {
        Exercise.findByIdAndDelete((req.params.id), (err) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json('Exercise deleted!');
            }
        });
    })
    .put((req, res) => {
        Exercise.findByIdAndUpdate((req.params.id), (req.body), (err) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json('Exercise updated!');
            }
        });
});

module.exports = router;