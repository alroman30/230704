const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers')

router.post('/checkEmail',(req,res)=> {
    courseController.checkEmailExists(req.body)
    .then(resultFromController => res.send(resultFromController));
});

router.post('/register', (req, res) => {
    courseController.registerCourse(req.body)
    .then(resultFromController => res.send(resultFromController))
})

router.post('/details', (req,res) => {
    //provide user ID for the getProfile controller method
    courseController.getProfile({ courseId : req.body.id })
    .then(resultFromController => res.send(resultFromController))
})

module.exports = router;