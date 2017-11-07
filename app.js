/**
 * Mean Starter Kit
 * Created by Luciano Nooijen (github.com/lucianonooijen)
 * Repo: https://github.com/lucianonooijen/MEAN-Starter-Kit
 * 
 * Before editing please run "npm install && bower install"
 * and test the server with "npm run dev".
 * 
 * For documentation please check the README.md file or
 * go to the Github repo mentioned above.
 * 
 * Created under MIT licence
 * Feel free to remove this message.
 */

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Define route files
const api = require('./server/routes/api');


const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'dist')));

// Load routes location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

// Runs the Express server
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
})