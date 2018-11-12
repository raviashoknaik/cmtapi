module.exports=(app)=>{
    const workorder = require('../controllers/workorder.controller.js');

     // Create workorders
    app.post('/workorder', workorder.create);

    // Retrieve workorderss
    app.get('/workorder', workorder.findAll);

     // Retrieve a single Note with noteId
     //app.get('/workorder/:workorderId', workorder.findOne);

     // Update a Note with noteId
     //app.put('/workorder/:workorderId', workorder.update); 
    
}