// Import Express
const express = require('express');
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Route: Hello World
app.get('/', (req, res) => {
  res.send('Hello, World! RISHITA');
});

// Route: JSON Response
app.get('/status', (req, res) => {
  res.json({ message: 'App is running smoothly!', status: 'OK' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
