const mongoose = require('mongoose');

const EmpSchema = mongoose.Schema({
    name: String,
    age : String,
    dep : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Emp', EmpSchema);