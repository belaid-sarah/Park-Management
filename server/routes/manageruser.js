const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

// Login route
router.post('/login', userController.user);

router.get('/profile', middleware.authenticateUser, (req, res) => {
    // Access the user information from req.user
    res.json({ user: req.user });
});

router.post('/register',userController.register)



module.exports = manageruser;
