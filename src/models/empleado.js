const { Schema, model } = require('mongoose');

const empleadoSchema = new Schema({
    name: String,
    last_name: String,
    phone: Number,
    account: Number,
    cc : Number,
    email: String,
    password: String
}, {
    timestamps : true
});

module.exports = model('Employee', empleadoSchema);