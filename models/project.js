// Import the Mongoose library.
const mongoose = require('mongoose');

// Define a Mongoose schema for projects.
const projectSchema = new mongoose.Schema(
  {
    // Name of the project, a required string field.
    name: {
      type: String,
      trim: true,
      required: true,
    },

    // Description of the project, a required string field.
    description: {
      type: String,
      required: true,
    },

    // Author of the project, a required string field.
    author: {
      type: String,
      required: true,
    },

    // Issues associated with the project, an array of references to 'Issue' models.
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
      },
    ],

    // Labels associated with the project, an array of strings.
    labels: [
      {
        type: String,
      },
    ],
  },
  {
    // Automatically add timestamps (createdAt and updatedAt) to the document.
    timestamps: true,
  }
);

// Create a Mongoose model based on the schema, named 'Project'.
const Project = mongoose.model('Project', projectSchema);

// Export the 'Project' model for use in other parts of the application.
module.exports = Project;
