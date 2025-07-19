const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// API route
app.get('/api/buildings', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'buildings.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Unable to load data' });
    res.json(JSON.parse(data));
  });
});

// Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
