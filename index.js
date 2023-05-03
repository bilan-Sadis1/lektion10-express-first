// Import database
const dbDriver = require('better-sqlite3')
// Connect to db
const db = dbDriver('bands.sqlite3');

// Import express
const express = require('express');
// Create express ap
const app = express();

// Express setup
// Serve a static frontend
app.use(express.static('frontend'));
// Tell express to use json
app.use(express.json());

// Rest API routes
app.get('/bands', (req, res) => {
    // req = request 
    // res = response

// Prepare and excute in one line
    const bands = db.prepare(`SELECT * FROM bands`).all();

    // Send back json
    res.json(bands);
});
 
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000.');
});