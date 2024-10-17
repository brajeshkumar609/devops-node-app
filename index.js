const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route: Resume Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
