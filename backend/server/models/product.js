const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const productSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    productName: {
        type: String,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productBasePrice: {
        type: Number,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },
    auctionId: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("product", productSchema);