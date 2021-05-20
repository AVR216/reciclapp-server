const { Schema, model } = require('mongoose');

const empleadoSchema = new Schema({
    name: {type: String, maxlength: 100, required: true},
    last_name: {type: String, maxlength: 100, required: true},
    phone: {type: Number, required: true},
    account: {type: Number, required: true},
    cc : {type: Number, required: true},
    email: {type: String, maxlength: 60, required: true, unique: true},
    password: {type: String, maxlength: 15, required: true}
}, {
    timestamps : true
});

module.exports = model('Employee', empleadoSchema);