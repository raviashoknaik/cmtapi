const Emp = require('../models/emp.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
// Validate request

    // Create a Employee
    const emp = new Emp({
        name: req.body.name, 
        age: req.body.age,
        dep:req.body.dep
    });

    // Save Note in the database
    emp.save()
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
    Emp.find()
       .then(emps => {
           res.send(emps);
       }).catch(err => {
           res.status(500).send({
               message: err.message || "Some error occurred while retrieving emps."
           });
       });
   };


