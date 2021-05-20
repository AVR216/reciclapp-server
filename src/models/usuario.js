const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {type: String, maxlength: 100, required: true},
    last_name: {type: String, maxlength: 100, required: true},
    birthDate : {type: Date, required: true},
    phone: {type: Number, unique: true, required: true},
    cc: {type: Number, required: true, unique: true},
    address: {
        address: {type: String, maxlength: 100, required: true, unique:true},
        neightboorhood: {type: String, maxlength: 100, required: true},
        description: {type: String, maxlength: 200}
    },
    email: {type: String, maxlength: 50, required: true, unique: true},
    password: {type: String, required: true, maxlength: 15}
}, {
    timestamps: true
});

module.exports = model('User', userSchema);