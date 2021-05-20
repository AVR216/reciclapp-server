const {Schema, model} = require('mongoose');

const donationSchema = new Schema({
    materials: [],
    donor: {type: Schema.ObjectId, ref: "User", required: true},
    weight : {type: Number, required: true},
    state: {type: Boolean, required: true, default: false}
},{
    timestamps: true
});

module.exports = model('Donation', donationSchema);