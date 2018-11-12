const mongoose = require('mongoose');

const WorkOrderSchema = mongoose.Schema({
    title: String,
    content: String
    }, 
{
    timestamps: true
});

module.exports = mongoose.model('workorder', WorkOrderSchema);