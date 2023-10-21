// Import the Mongoose library.
const mongoose = require('mongoose');

// Define the MongoDB connection URL.
const url = 'mongodb+srv://abhinavstcet:Abhinav123@issuetrackercluster.a7fg8kr.mongodb.net/?retryWrites=true&w=majority';

// Connect to the MongoDB database using the defined URL.
mongoose.connect(url);

// Get a reference to the database connection.
const db = mongoose.connection;

// Handle errors that occur during the database connection.
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// Once the connection is open, log a message indicating a successful connection.
db.once('open', () => {
    console.log("Connected to Database :: MongoDB");
});

// Export the Mongoose connection for use in other parts of the application.
module.exports = db;
