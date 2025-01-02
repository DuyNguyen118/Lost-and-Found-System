const express = require('express');
const path = require('path');
const cors = require('cors');  // Add this line to import CORS
const app = express();
const port = 5000;

// Use CORS middleware to allow cross-origin requests
app.use(cors());  // Add this line to enable CORS

// Serve static files from the main directory
app.use(express.static(path.join(__dirname, 'lad/src/main')));

// Handle routes for different sections
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'lad/src/main/AdminPage/Admin_UI.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'lad/src/main/Loginwindow/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'lad/src/main/Register/register.html'));
});

// Default route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'lad/src/main/Loginwindow/login.html'));
});

app.listen(port, () => {
    console.log(`Frontend server running on http://localhost:${port}`);
});
