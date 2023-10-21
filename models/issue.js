// Import the Mongoose library.
const mongoose = require('mongoose');

// Define a Mongoose schema for issues.
const issueSchema = new mongoose.Schema(
  {
    // Title of the issue, a required string field.
    title: {
      type: String,
      trim: true,
      required: true,
    },

    // Description of the issue, a required string field.
    description: {
      type: String,
      trim: true,
      required: true,
    },

    // Author of the issue, a required string field.
    author: {
      type: String,
      trim: true,
      required: true,
    },

    // Labels associated with the issue, an array of required string fields.
    labels: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },
  {
    // Automatically add timestamps (createdAt and updatedAt) to the document.
    timestamps: true,
  }
);

// Create a Mongoose model based on the schema, named 'Issue'.
const Issue = mongoose.model('Issue', issueSchema);

// Export the 'Issue' model for use in other parts of the application.
module.exports = Issue;
