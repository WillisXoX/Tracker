const router = require('express').Router();
const User = require('../models/user');

router.route('/')
    .get((req, res) => {
        User.find({}, (err, users) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json(users);
            }
        });
    })
    .post((req, res) => {
        const user = new User({
            username: req.body.username
        });

        user.save((err) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json('User added!');
            }
        });
    });

router.route('/:username')
    .delete((req, res) => {
        console.log(req.params);
        User.findOneAndDelete({username: req.params.username}, (err) => {
            if(err){
                res.status(400).json(err);
            }else{
                res.json('User deleted!');
            }
        });
    });


module.exports = router;