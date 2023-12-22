const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
app.get('/', userController.view);
app.post('/', userController.find);
app.get('/adduser', userController.form);
app.post('/adduser', userController.create);
app.get('/edituser/:id', userController.edit);
app.post('/updateUser/:id', userController.update);
app.get('/viewuser/:id', userController.viewall);
app.get('/:id',userController.delete);
  
module.exports = router;