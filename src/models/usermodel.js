const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    Password: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
}, { timestamps: true });


module.exports = mongoose.model('user', userSchema)