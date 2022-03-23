const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const auctionSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    auctionStatus: {
        type : String,
        required:true
    },
    highestBid: {
        type: Number,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model("auction", auctionSchema);