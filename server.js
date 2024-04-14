const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// Route for serving the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route for handling form submissions
app.post('/submit-form', (req, res) => {
    const username = req.body.username; // Access form data

    // Check if username is empty
    if (!username) {
        return res.status(400).send('Username cannot be empty');
    }

    // Send response with the username
    res.send(`Username is ${username}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
