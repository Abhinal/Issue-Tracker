// Get the search issue form element by its ID.
let searchIssueForm = document.getElementById('search-issue-form');

// Get the JSON data containing details of the project's issues from an HTML attribute.
let searchJson = document.getElementById('issue-data').getAttribute('data');

// Parse the JSON data to create an array of issues for searching.
let searchIssues = JSON.parse(searchJson);

// Get the element where the searched issues will be displayed.
let searchList = document.getElementById('issues-list');

// Add a submit event listener to the search form.
searchIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Create an empty array to store the searched issues.
  let searchedIssues = [];

  // Get the search criteria from the form.
  let titleValue = searchIssueForm.querySelector('input[name="tie"]').value;
  let descriptionValue = searchIssueForm.querySelector('input[name="des"]').value;

  // Search for issues that match the provided title or description.
  searchIssues.map((issue) => {
    if (issue.title == titleValue || issue.description == descriptionValue) {
      if (!searchedIssues.includes(issue)) {
        searchedIssues.push(issue);
      }
    }
  });

  // Clear the existing search results and populate it with the searched issues.
  searchList.innerHTML = '';
  for (let issue of searchedIssues) {
    let div = document.createElement('div');
    div.style = 'none';
    div.innerHTML = `
      <div class="card w-100" >
        <div class="card-body" >
          <h4 class="card-title">Title: ${issue.title}</h4>
          <h5 class="card-title">Author: ${issue.author}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Description: ${issue.description}
          </h6>
        </div>
      </div>
    `;
    searchList.appendChild(div);
  }
});
