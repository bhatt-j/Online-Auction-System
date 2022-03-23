const router = require('express').Router();
let Category = require('../models/category.models');

router.route('/:id').get((req,res)=> {
    Category.findById(req.params.id)
    .then(chat=>res.json(chat))
    .catch(err=>res.status(400).json('Error' + err));
});

router.route('/add_category').post((req, res) => {
    const category = new Category(req.body)
    category.save()
    .then((result) => {
        res.json('Category added')
    })
})

module.exports = router;