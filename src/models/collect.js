const { Schema, model } = require('mongoose');

const CollectSchema = new Schema({
    donation: {type: Schema.ObjectId, ref: 'Donation', required: true, unique: true},
    collector: {type: Schema.ObjectId, ref: "Employee", required: true},
    createdAt: {type: Date, default: Date.now},
    status: {type: Boolean, required: true, default: false}
});

module.exports = model('Collect', CollectSchema);