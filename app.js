
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const authmiddleware = require('./middleware/authmiddleware');
const managermiddleware = require('./middleware/managermiddleware');
const managerteam = require('./server/routes/managerteam');
const managerschedule = require('./server/routes/managerschedule');
const user = require('./server/routes/manageruser');
const {pool} = require('..\models\db');
const usercontroller = require('../controller/user');

const managerteamController = require('../controller/managerTeam');
const managerscheduleController = require('../controller/managerSchedule');





//const bodyParser = require('body-parser'); // No longer Required
//const mysql = require('mysql'); // Not required -> moved to userController

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
 // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New



 //You don't need the connection here as we have it in userController
 
// routes
app.use(managerschedule);
app.use(managerteam);
app.use(manageruser);
app.get('/', (req, res) => {
  res.send("this is home page");
});


app.listen(port, () => console.log(`Listening on port ${port}`));










