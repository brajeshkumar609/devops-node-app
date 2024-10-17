const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
