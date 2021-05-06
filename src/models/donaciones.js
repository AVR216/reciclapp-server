const {Schema, model} = require('mongoose');

const donationSchema = new Schema({
    materials: [],
    donor: {type: Schema.ObjectId, ref: "user"},
    collector: {type: Schema.ObjectId, ref: "employee"},
    state: Boolean,
    weight : Number,
},{
    timestamps: true
});

module.exports = model('Donation', donationSchema);