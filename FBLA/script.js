function checkURL(abc) {
  var string = abc.value;
  if (!~string.indexOf("http")) {
    string = "http://" + string;
  }
  abc.value = string;
  return abc;
}

function validateForm() {
  var companyName = document.getElementById("companyName").value;
  var urlInput = document.getElementById("url");

  // Use the checkURL function to ensure the URL is properly formatted
  checkURL(urlInput);
  var url = urlInput.value;

  // Check if required fields are filled out
  if (!companyName || !url) {
    alert("Please fill out all required fields.");
    return false; // Prevent form submission
  }

  return true; // Allow form submission
}

function toggleForm() {
  var formContainer = document.getElementById("formContainer");
  var isOpen =
    formContainer.style.display === "none" ||
    formContainer.style.display === "";

  formContainer.style.display = isOpen ? "block" : "none";
  formContainer.style.opacity = isOpen ? "1" : "0";

  // Store the current state in local storage
  localStorage.setItem("formOpen", isOpen.toString());
}

function displayList(query) {
  const dynamicList = document.getElementById("dynamicList");
  dynamicList.innerHTML = "";

  const filteredList = dataList.filter(
    (item) =>
      item.companyName.toLowerCase().includes(query.toLowerCase()) ||
      item.owner.toLowerCase().includes(query.toLowerCase()) ||
      item.url.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  filteredList.forEach((item) => {
    const li = document.createElement("li");
    //const logo = document.createElement("img");

    li.innerHTML = `
<div style="display: flex; align-items: center">
  <img
    src="https://via.placeholder.com/128x128"
    alt=""
    width="128"
    height="128"
    style="margin-right: 10px"
  />
  <div>
    <h3>${item.company}</h3>
    <p>${item.owner}</p>
    <p>Find us at ${item.url}</p>
    <p>${item.description}</p>
  </div>
</div>
`;

    dynamicList.appendChild(li);
  });
}

function saveToLocalStorage() {
  try {
    localStorage.setItem("dataList", JSON.stringify(dataList));
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
}

function loadFromLocalStorage() {
  try {
    const storedDataList = localStorage.getItem("dataList");
    dataList = storedDataList ? JSON.parse(storedDataList) : [];
  } catch (error) {
    console.error("Error loading data from localStorage:", error);
  }
}


function handleInput() {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value;
  displayList(query);
}

document.getElementById("searchInput").addEventListener("input", handleInput);

loadFromLocalStorage();
displayList("");

function getTheme({ storedTheme, systemDarkSetting }) {
  // Set the default theme to dark mode
  if (storedTheme !== null) return storedTheme;

  return "light";
}

function updateHtmlTheme({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

// Use window.matchMedia to check for dark mode support
const systemDarkSetting = window.matchMedia("(prefers-color-scheme: dark)");

// Set the default theme to dark mode
let currentTheme = getTheme({ storedTheme: "dark", systemDarkSetting });

updateHtmlTheme({ theme: currentTheme });

const themeToggleBtn = document.querySelector("[data-theme-toggle]");

themeToggleBtn.addEventListener("click", () => {
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateHtmlTheme({ theme: newTheme });

  currentTheme = newTheme;
});

function generateHTML() {
  var companyName = document.getElementById("companyName").value;
  var owner = document.getElementById("owner").value;
  var urlInput = document.getElementById("url");
  //var logo = document.getElementById("logoUpload");

  checkURL(urlInput);
  var url = urlInput.value;

  var description = document.getElementById("description").value;

  description = description.replace(/\n/g, "<br/>");

  var companyObject = {
    companyName: companyName,
    owner: owner,
    url: url,
    description: description,
  };

  dataList.push(companyObject);

  displayList("");
  saveToLocalStorage();
}
