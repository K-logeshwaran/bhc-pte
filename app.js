const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');
const port = 8000;

app.use(express.static('public')); // serve static files from public folder
app.set('view engine', 'ejs'); // set EJS as view engine

// Render index.ejs file
app.get('/', function (req, res) {
 
    // Render page using renderFile method
    ejs.renderFile('index.ejs', {},
        {}, function (err, template) {
            if (err) {
                throw err;
            } else {
                res.end(template);
            }
        });
});
 
app.get('/hi', function (req, res) {
 
    // Render page using renderFile method
    res.send("Hello");
});
// Server setup
app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running");
});