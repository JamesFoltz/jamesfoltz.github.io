// Initialize theme toggle
const themeToggleBtn = document.querySelector('[data-theme-toggle]');
themeToggleBtn.addEventListener('click', toggleTheme);

// Initialize form toggle
const formContainer = document.getElementById('formContainer');
const openFormBtn = document.querySelector('.open-form-btn');
openFormBtn.addEventListener('click', toggleForm);

// Initialize form submission
const htmlForm = document.getElementById('htmlForm');
htmlForm.addEventListener('submit', function (event) {
  event.preventDefault();
  generateHTML();
});

// Initialize search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', filterList);

// Array to store items
const itemsArray = [];

// Function to toggle theme
function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', newTheme);
}

// Function to toggle form
function toggleForm() {
  formContainer.classList.toggle('hidden');
}

// Function to generate HTML and add items to the array and ul
function generateHTML() {
  const companyName = document.getElementById('companyName').value;
  const owner = document.getElementById('owner').value;
  const url = document.getElementById('url').value;
  const description = document.getElementById('description').value;
  const img = document.getElementById('imageUpload').value; // Add logic to get the image source

  const item = {
    companyName,
    owner,
    url,
    description,
    img,
  };

  itemsArray.push(item);

  const dynamicList = document.getElementById('dynamicList');
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <div style="display: flex; align-items: center">
      <img src=${img} alt="" width="128" height="128" style="margin-right: 10px" />
      <div>
        <h3>${companyName}</h3>
        <p>${owner}</p>
        <p>Find us at ${url}</p>
        <p>${description}</p>
      </div>
    </div>
  `;
  dynamicList.appendChild(listItem);

  // Clear form fields after submission
  htmlForm.reset();
}

// Function to filter the list based on search input
function filterList() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredItems = itemsArray.filter(item =>
    item.companyName.toLowerCase().includes(searchTerm) ||
    item.owner.toLowerCase().includes(searchTerm) ||
    item.url.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );

  // Update the displayed list
  const dynamicList = document.getElementById('dynamicList');
  dynamicList.innerHTML = '';
  filteredItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div style="display: flex; align-items: center">
        <img src=${item.img} alt="" width="128" height="128" style="margin-right: 10px" />
        <div>
          <h3>${item.companyName}</h3>
          <p>${item.owner}</p>
          <p>Find us at ${item.url}</p>
          <p>${item.description}</p>
        </div>
      </div>
    `;
    dynamicList.appendChild(listItem);
  });
}
