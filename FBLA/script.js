const partners = [
  `<div style="display: flex; align-items: center">
  <img
    src="{img}"
    alt=""
    width="128"
    height="128"
    style="margin-right: 10px"
  />
  <div>
    <h3>{item.companyName}</h3>
    <p>{item.owner}</p>
    <p>Find us at {item.url}</p>
    <p>{item.description}</p>
  </div>
</div>`,
  `Item 2`,
  `Item 3`,
  `Item 4`,
  `Item 5`
];

function addItemsToDynamicList() {
  const dynamicList = document.getElementById('dynamicList');

  partners.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      dynamicList.appendChild(li);
  });
}

// Invoke the function when the page is loaded
document.addEventListener('DOMContentLoaded', addItemsToDynamicList);

function validateForm() {
  // Add your validation logic here if needed
  return true;
}

function generateHTML() {
  // Get form values
  var companyName = document.getElementById("companyName").value;
  var owner = document.getElementById("owner").value;
  var url = document.getElementById("url").value;
  var description = document.getElementById("description").value;
  var img = document.getElementById("imageUpload").value; // Assuming you want to use the image path

  // Validate form data
  if (!validateForm()) {
    return;
  }

  // Create HTML content
  var htmlContent = `
    <div style="display: flex; align-items: center">
      <img
        src="${img}"
        alt=""
        width="128"
        height="128"
        style="margin-right: 10px"
      />
      <div>
        <h3>${companyName}</h3>
        <p>${owner}</p>
        <p>Find us at ${url}</p>
        <p>${description}</p>
      </div>
    </div>`;

  // Append generated HTML to a target div (replace "targetDivId" with your actual target div ID)
  var targetDiv = document.getElementById("targetDivId");
  targetDiv.innerHTML += htmlContent;

  // Optionally, you can reset the form after adding the company
  document.getElementById("htmlForm").reset();
  addItemsToDynamicList();
}
