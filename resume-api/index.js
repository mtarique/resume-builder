// Import Express
const express = require('express');
const mongoose = require('mongoose'); 
const path = require('path'); 

// Initialize the app
const app = express();

require('dotenv').config(); 

// Connect to mongodb database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}); 
mongoose.connection.on("error", err => console.log("MongoDB could not establish a connection: ", err)); 

app.use(express.json({limit: '50mb'})); 
app.use(express.urlencoded({limit: '50mb', extended: true})); 
app.use(express.static(path.join(__dirname, '/public'))); 

// Create a basic route
app.get('/', (req, res) => {
  res.send(`Hello, World!!! ${process.version}`);
});

app.use('/api/v1/customers', require('./routes/customerRoutes')); 

// Define a port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});