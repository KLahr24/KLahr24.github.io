// server.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true})); // for parsing application

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html'); //send html fole on GET request
});

// Route for handling form submissions
app.post('/submit-form', (req, res) => {
    const username = req.body.username: //access form data
    // check if username is empty
    if (!username) {
        return.res.status(400).send('Username cannot be empty');
    }
    res.send('Username is $klahr');
});
    
    app.listen(port, () => {
        console.log('Server running on http://localhost:${port}');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
