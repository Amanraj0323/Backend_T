const express = require('express');
const app = express();
const db = require('./db'); // Assuming db.js is in the same directory

app.get('/', function(req, res) {
    res.send('Welcome to my hotel, how can I help you?');
});

// Change the port if needed
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
