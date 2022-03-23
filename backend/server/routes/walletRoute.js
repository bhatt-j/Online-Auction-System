const router = require('express').Router();
let Admin = require('../models/wallet');

router.route('/get_wallet').post((req,res)=> {
    Admin.find({'username': req.body.username}, (err, docs) => {
        res.json(docs);
    })
})

router.route('/add_amount').post((req, res) => {
    const admin = new Admin(req.body)
    admin.save()
    .then((result) => {
        res.json('Money added to user wallet')
    })
})

module.exports = router;