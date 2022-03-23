const router = require('express').Router();
let Admin = require('../models/admin');

router.route('/get_admin').post((req,res)=> {
    Admin.find({'username': req.body.username}, (err, docs) => {
        res.json(docs);
    })
})

router.route('/add_admin').post((req, res) => {
    const admin = new Admin(req.body)
    admin.save()
    .then((result) => {
        res.json('Admin added')
    })
})

module.exports = router;