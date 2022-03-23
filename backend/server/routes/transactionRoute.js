const router = require('express').Router();
let Transaction = require('../models/transaction');

router.route('/get_transaction').post((req,res)=> {
    Transaction.find({'_id': req.body.id}, (err, docs) => {
        res.json(docs);
    })
})

router.route('/add_transaction').post((req, res) => {
    const transaction = new Transaction(req.body)
    transaction.save()
    .then((result) => {
        res.json('Transaction added')
    })
})

module.exports = router;