const mongoose = require('mongoose');

const sessionsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
}, {timestamps: true})

module.exports = mongoose.model('Sessions', sessionsSchema, 'sessions');