// Import Express
const express = require('express');

// Initialize the app
const app = express();

// Define a port
const port = process.env.PORT || 3000;

// Create a basic route
app.get('/', (req, res) => {
  res.send(`Hello, World!!! ${process.version}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});