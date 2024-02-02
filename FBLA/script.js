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

const dynamicList = document.getElementById("dynamicList");

partners.forEach(item => {
    const listItem = document.createElement("li");

    listItem.textContent = item;

    dynamicList.appendChild(listItem);
});