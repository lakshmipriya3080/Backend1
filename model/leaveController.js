const Leave = require('../model/leavemodel');

exports.submitLeaveRequest = async (req, res) => {
    try {
        const leave = new Leave(req.body);
        await leave.save();
        res.status(201).json({ message: 'Leave request submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getLeaveRequests = async (req, res) => {
    try {
        const leaveRequests = await Leave.find();
        res.status(200).json(leaveRequests);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateLeaveRequest = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const leaveRequest = await Leave.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json(leaveRequest);
        
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
