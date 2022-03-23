const router = require('express').Router();
let Auction = require('../models/auction.models');

router.route('/:id').get((req,res)=> {
    Auction.findById(req.params.id)
    .then(auction=>res.json(auction))
    .catch(err=>res.status(400).json('Error' + err));
});

router.route('/add_auction').post((req, res) => {
    const auction = new Auction(req.body)
    auction.save()
    .then((result) => {
        res.json('Product added')
    })
})

module.exports = router;