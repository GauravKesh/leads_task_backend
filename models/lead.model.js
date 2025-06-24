const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/ ,unique:true},
    phone: { type: String, required: true, unique: true },
    address: { type: String },
    source: { type: String },
    qualification: { type: String },
    linkedin: { type: String, unique: true }, 
    interest: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
