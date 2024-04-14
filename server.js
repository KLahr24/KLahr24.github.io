const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.post('/submit-form', 
  // Data Validation
  [
    body('name').trim().isLength({ min: 1 }).withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address')
  ],
  // Request Handler
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Process valid form data
    console.log(req.body); // Log form submission data
    // Save data to database, send email, etc.

    // Respond with success message
    res.send('Form submitted successfully!');
  }
);

// Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
