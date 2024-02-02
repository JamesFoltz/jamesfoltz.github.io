function updateList(data) {
  // Clear existing list
  let list = document.getElementById("dynamicList");
  list.innerHTML = '';

  // Add items to the list
  for (let i = 0; i < data.length; ++i) {
    let li = document.createElement('li');
    li.innerText = data[i];
    list.appendChild(li);
  }
}


function storeInput() {
  // Initialize an empty array
  const inputArray = [];
  let list = document.getElementById("dynamicList");

  // Get the input elements
  const companyName = document.getElementById("companyName").value;
  const owner = document.getElementById("owner").value;
  const url = document.getElementById("url").value;
  const description = document.getElementById("description").value;

  // Add the values to the array
  inputArray.push(`
<div style="display: flex; align-items: center">
  <img
    src=${img}
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
</div>
`);
  list.appendChild(inputArray[inputArray.length-1]);
  // Print the array to the console
  console.log(inputArray);
}