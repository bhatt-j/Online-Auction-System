const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const transactionSchema = new Schema({
    bidderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    bidId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model("transaction", transactionSchema);