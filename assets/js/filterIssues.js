// Get the filter issue form element by its ID.
let filterIssueForm = document.getElementById('filter-issue-form');

// Get the JSON data containing details of the project's issues from an HTML attribute.
let issuesJson = document.getElementById('issue-data').getAttribute('data');

// Parse the JSON data to create an array of issues.
let issues = JSON.parse(issuesJson);

// Get the element where the filtered issues will be displayed.
let issueList = document.getElementById('issues-list');

// Add a submit event listener to the form.
filterIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Create an empty array to store the filtered issues.
  let filteredIssues = [];

  // Get the selected labels from the form.
  let labelsList = filterIssueForm.querySelectorAll('input[type=checkbox]');
  let labelsElements = [...labelsList].filter((element) => element.checked);

  // Get the selected author value from the form.
  let authorVal = filterIssueForm.querySelector(
    'input[type=radio][name=author]:checked'
  ).value;

  // Create an array of selected label values.
  let labelsArr = labelsElements.map((element) => element.value);

  // Filter and add issues to the filteredIssues array based on author and selected labels.
  issues.map((issue) => {
    if (issue.author === authorVal && !filteredIssues.includes(issue)) {
      filteredIssues.push(issue);
    }

    labelsArr.forEach((label) => {
      if (issue.labels.includes(label) && !filteredIssues.includes(issue)) {
        filteredIssues.push(issue);
      }
    });
  });

  // Clear the existing issue list and populate it with the filtered issues.
  issueList.innerHTML = '';
  for (let issue of filteredIssues) {
    let div = document.createElement('div');
    div.style = 'none';
    div.innerHTML = `
      <div class="card w-100">
        <div class="card-body">
          <h4 class="card-title">Title: ${issue.title}</h4>
          <h5 class="card-title">Author: ${issue.author}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Description: ${issue.description}
          </h6>
        </div>
      </div>
    `;
    issueList.appendChild(div);
  }
});
