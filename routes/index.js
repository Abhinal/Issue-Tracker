// Import the Express library.
const express = require('express');

// Create an Express router.
const router = express.Router();

// Import the home controller for handling home-related routes.
const homeController = require('../controllers/home_controller');

// Log a message to indicate that the router has been loaded.
console.log('router loaded');

// Define a route for the home page, invoking the 'home' function from the 'homeController'.
router.get('/', homeController.home);

// Use the '/project' route and delegate handling to the project router.
router.use('/project', require('./project'));

// Export the router for use in other parts of the application.
module.exports = router;
