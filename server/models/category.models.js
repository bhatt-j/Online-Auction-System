const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const categorySchema = new Schema({
    category_Name: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model("category", categorySchema);