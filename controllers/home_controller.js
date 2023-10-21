// Import the Project model from the specified path.
const Project = require('../models/project');

// Define an asynchronous controller function to handle the home page request.
module.exports.home = async function (req, res) {
  try {
    // Use the 'Project' model to find all projects and sort them by creation date in descending order.
    let projects = await Project.find({}).sort('-createdAt');
    
    // Render the 'home' view and pass the title and the retrieved projects to it.
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects,
    });
  } catch (err) {
    // If an error occurs, log the error and return.
    console.log('Error', err);
    return;
  }
};
