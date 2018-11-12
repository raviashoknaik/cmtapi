const Orders = require('../models/workorder.model.js');
exports.create = (req, res) => {
    // Create a Employee
    const orders = new Orders({
        title: req.body.title, 
        content: req.body.content,
    });

    // Save Note in the database
    orders.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Emp."
        });
    });
};

// Retrieve and return all emp from the database.
exports.findAll = (req, res) => {
    Orders.find()
       .then(order => {
           res.send(order);
       }).catch(err => {
           res.status(500).send({
               message: err.message || "Some error occurred while retrieving emps."
           });
       });
   };


 



