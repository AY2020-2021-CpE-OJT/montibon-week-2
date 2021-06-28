const mongoose = require('mongoose');

const StocksSchema = mongoose.Schema({
    item_name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Stocks', StocksSchema);