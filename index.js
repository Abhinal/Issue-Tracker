// Import the Express library.
const express = require('express');

// Import the Mongoose database connection from the './config/mongoose' file.
const db = require('./config/mongoose');

// Define the port for the server, using the environment variable or a default value.
const port = process.env.PORT || 8000;

// Create an Express application.
const app = express();

// Import the 'path' module for working with file paths.
const path = require('path');

// Import and configure 'express-ejs-layouts' for layout support.
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

// Configure Express to parse URL-encoded data in requests.
app.use(express.urlencoded());

// Serve static files from the 'assets' directory.
app.use(express.static('assets'));

// Extract style and script references from subpages into the layout.
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set the view engine as EJS and specify the 'views' directory.
app.set('view engine', 'ejs');
app.set('views', './views');

// Use the main Express router for handling routes.
app.use('/', require('./routes'));

// Start the Express server on the specified port.
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
