// Import the required models.
const Project = require('../models/project');
const Issue = require('../models/issue');

// Create a new project for the user.
module.exports.create = async function (req, res) {
  try {
    // Create a new project using data from the request body.
    Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });

    // Redirect back to the previous page.
    return res.redirect('back');
  } catch (err) {
    // If an error occurs, log the error and redirect back.
    console.log(err);
    return res.redirect('back');
  }
};

// Find a project by its ID and display it in the project page.
module.exports.project = async function (req, res) {
  try {
    // Find the project by its ID and populate its 'issues' field.
    let project = await Project.findById(req.params.id).populate({
      path: 'issues',
    });
    
    if (project) {
      // If the project is found, render the 'project_page' view and pass the project data.
      return res.render('project_page', {
        title: 'Project Page',
        project,
      });
    }
    
    // If the project is not found, redirect back to the previous page.
    return res.redirect('back');
  } catch (err) {
    // If an error occurs, log the error and redirect back.
    console.log(err);
    return res.redirect('back');
  }
};

// Create a new issue for the project.
module.exports.createIssue = async function (req, res) {
  try {
    // Find the project by its ID.
    let project = await Project.findById(req.params.id);

    if (project) {
      // Create a new issue using data from the request body.
      let issue = await Issue.create({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
        author: req.body.author,
      });

      // Add the newly created issue to the project's 'issues' array.
      project.issues.push(issue);

      // Check if 'labels' is an array or a string, and update the project's 'labels' accordingly.
      if (Array.isArray(req.body.labels)) {
        for (let label of req.body.labels) {
          let isPresent = project.labels.find((obj) => obj == label);
          if (!isPresent) {
            project.labels.push(label);
          }
        }
      } else {
        let isPresent = project.labels.find((obj) => obj == req.body.labels);
        if (!isPresent) {
          project.labels.push(req.body.labels);
        }
      }
      
      // Save the updated project.
      await project.save();

      // Redirect back to the previous page.
      return res.redirect(`back`);
    } else {
      // If the project is not found, redirect back to the previous page.
      return res.redirect('back');
    }
  } catch (err) {
    // If an error occurs, redirect back to the previous page.
    return res.redirect('back');
  }
};
