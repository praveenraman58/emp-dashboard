const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    designation: String,
    gender: String,
    course: String,
    createDate: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;