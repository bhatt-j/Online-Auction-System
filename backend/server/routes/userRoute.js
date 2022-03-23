const router = require('express').Router();
let User = require('../models/user');

router.route('/all').get((req, res) => {
    User.find()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {console.log(err)})
})

router.route('/add-user').post((req, res) => {
    console.log(req.body);
    const user = new User(req.body)
    user.save()
    .then((result) => {
        res.json('User Added')
    })
})

module.exports = router;