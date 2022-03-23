const router = require('express').Router();
let Product = require('../models/product');

router.route('/all').get((req, res) => {
    Product.find()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.json(err)
    })
})

router.route('/add-product').post((req, res) => {
    const product = new Product(req.body)
    product.save()
    .then((result) => {
        res.json("Product Added")
    })
})

module.exports = router