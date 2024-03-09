const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    leaveType: String,
    startDate: Date,
    endDate: Date,
    reason: String,
    status: { type: String, default: 'pending' } // pending, approved, denied
});

const Leave = mongoose.model('leaves', leaveSchema);

module.exports = Leave;
