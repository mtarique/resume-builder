// Import Express
const express = require('express');
const mongoose = require('mongoose'); 

// Initialize the app
const app = express();

require('dotenv').config(); 

// Connect to mongodb database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}); 
mongoose.connection.on("error", err => console.log("MongoDB could not establish a connection: ", err)); 


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