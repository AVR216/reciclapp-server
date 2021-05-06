const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String,
    last_name: String,
    birthDate : Date,
    cc: Number,
    address: {
        address: String,
        neightboorhood: String,
        description: String
    },
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = model('User', userSchema);