const mongoose = require('mongoose')

const bookSchmea = new mongoose.Schema({
    title: String,
    author: {
        type: String,
        required: true,
        lowercase: true
    },
    price: Number,
    published_date: Date
})

//using the schmea we make a model
module.exports = mongoose.model("book", bookSchmea)