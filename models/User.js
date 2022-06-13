const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 60,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema, 'users');