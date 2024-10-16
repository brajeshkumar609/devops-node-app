// Import Express
const express = require('express');
const path = require('path'); // Import the path module
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route: Resume Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route: JSON Response
app.get('/status', (req, res) => {
  res.json({ message: 'App is running smoothly!', status: 'OK' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
