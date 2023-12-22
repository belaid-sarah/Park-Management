const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();


const publicDirectory = path.join(__dirname,)
console.log(__dirname);

const app = express();
const port = process.env.PORT || 50000;



// routers
const routes = require('./server/routes/user');
app.use('/', routes);


app.listen(port , ()=> console.log('listening on port ${port}'));