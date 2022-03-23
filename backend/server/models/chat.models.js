const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const chatSchema = new Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model("chat", chatSchema);