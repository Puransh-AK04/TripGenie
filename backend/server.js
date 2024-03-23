const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('./db');
const bodyParser = require('body-parser');
const { signup, login } = require('./user');

const User = require('./user');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Define a route to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '..', 'PreHome')));
app.use(express.static(path.join(__dirname, '..', 'Flight')));
app.use(express.static(path.join(__dirname, '..', 'Destination')));
app.use(express.static(path.join(__dirname, '..', 'blog')));
app.use(express.static(path.join(__dirname, '..', 'Frontend')));
app.use(express.static(path.join(__dirname, '..', 'signup_page')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'PreHome', 'prehome.html'));
  });

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'home.html'));
});

// app.get('/signup', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'signup_page', 'signup.html'));
// });


// Combined sign-up and login route

app.get('/auth', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'signup_page', 'signup.html'));
    // const { action } = req.body;
  
    // // Check if action field is provided
    // if (!action) {
    //   return res.status(400).json({ error: 'Action field is required' });
    // }
  
    // // Route to appropriate function based on action
    // if (action == 'signup') {
    //   signup(req, res);
    // } else if (action == 'login') {
    //   login(req, res);
    // } else {
    //   res.status(400).json({ error: 'Invalid action' });
    // }
  });
  


// app.get('/auth', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'signup_page', 'signup.html'));
//     // const { action } = req.body;
//     // if (action === `signup`) {
//     //   signup(req, res);
//     // } else if (action === `login`) {
//     //   login(req, res);
//     // } else {
//     //   res.status(400).json({ error: 'Invalid action' });
//     // }
//   });

// Middleware to verify JWT token
// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (!token) return res.status(401).json({ error: 'Unauthorized' });
//     jwt.verify(token, 'secret', (err, user) => {
//         if (err) return res.status(403).json({ error: 'Forbidden' });
//         req.user = user;
//         next();
//     });
// }

// // Protected route example
// app.get('/protected', authenticateToken, (req, res) => {
//     res.status(200).json({ message: 'Protected route accessed' });
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});