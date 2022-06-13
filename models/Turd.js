const mongoose = require('mongoose');

const turdSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    userName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    body: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    }
}, { timestamps: true })

module.exports = mongoose.model('Turd', turdSchema, 'turds');