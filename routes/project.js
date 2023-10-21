// Import the Express library.
const express = require('express');

// Create an Express router.
const router = express.Router();

// Import the project controller for handling project-related routes.
const projectController = require('../controllers/project_controller');

// Define a route for creating a new project by posting to '/project/create'.
router.post('/create', projectController.create);

// Define a route for viewing a specific project by its ID.
// The ':id' parameter captures the project's ID from the URL.
router.get('/:id', projectController.project);

// Define a route for creating a new issue for a specific project by posting to '/project/:id'.
// The ':id' parameter captures the project's ID from the URL.
router.post('/:id', projectController.createIssue);

// Export the router for use in other parts of the application.
module.exports = router;
