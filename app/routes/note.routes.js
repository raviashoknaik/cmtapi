module.exports = (app) => {
    // const notes = require('../controllers/note.controller.js');
    const emps = require('../controllers/emp.controller.js');
    //const emps = require('../controllers/workorder.controller.js');

    //Note
    // Create a new Note
    // app.post('/notes', notes.create);

    // Retrieve all Notes
    // app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);

    //Employee Routes
    //Create a new Emp
    app.post('/emps', emps.create);

      // Retrieve all emps
    app.get('/emps', emps.findAll);
}