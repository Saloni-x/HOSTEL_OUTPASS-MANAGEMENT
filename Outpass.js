const mongoose = require('mongoose');

const outpassSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    reason: String,
    date: String,
    time: String,
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Outpass', outpassSchema);