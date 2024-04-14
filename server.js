// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, images)
app.use(express.static('public'));

// Route for handling form submissions
app.post('/submit-form', (req, res) => {
    // Extract form data from the request
    const formData = req.body;
    
    // Process the form data (e.g., save to database)
    console.log('Received form data:', formData);
    
    // Respond to the client
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
